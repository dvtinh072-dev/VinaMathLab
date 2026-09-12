import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabaseClient";

const deletedUsersFilePath = path.join(process.cwd(), "src/data/deletedUsers.json");
const memoryDeletedSet = new Set<string>();

export function getDeletedIdentifiers(): Set<string> {
  const result = new Set<string>(memoryDeletedSet);
  try {
    if (fs.existsSync(deletedUsersFilePath)) {
      const data = fs.readFileSync(deletedUsersFilePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        parsed.forEach((item: string) => {
          const c = String(item).trim().toLowerCase();
          if (c) result.add(c);
        });
      }
    }
  } catch (error) {
    console.error("Error reading deletedUsers.json:", error);
  }
  return result;
}

export async function fetchDeletedIdentifiersFromCloud(): Promise<Set<string>> {
  const set = getDeletedIdentifiers();
  try {
    const { data } = await supabase
      .from("users")
      .select("id, username, student_code")
      .eq("role", "deleted");
    if (data && Array.isArray(data)) {
      data.forEach((u: any) => {
        if (u.id) {
          const idLower = u.id.toLowerCase();
          set.add(idLower);
          memoryDeletedSet.add(idLower);
        }
        if (u.username) {
          const uLower = u.username.toLowerCase();
          set.add(uLower);
          memoryDeletedSet.add(uLower);
          if (uLower.startsWith("del_")) {
            const orig = uLower.slice(4);
            set.add(orig);
            memoryDeletedSet.add(orig);
          }
        }
        if (u.student_code) {
          const codeLower = u.student_code.toLowerCase();
          set.add(codeLower);
          memoryDeletedSet.add(codeLower);
        }
      });
    }
  } catch (err) {
    console.warn("fetchDeletedIdentifiersFromCloud warning:", err);
  }
  return set;
}

export function isUserDeleted(identifier: string | null | undefined): boolean {
  if (!identifier) return false;
  const clean = String(identifier).trim().toLowerCase();
  const set = getDeletedIdentifiers();
  return set.has(clean) || memoryDeletedSet.has(clean);
}

export async function addDeletedIdentifiers(identifiers: (string | null | undefined)[]) {
  try {
    const existing = getDeletedIdentifiers();
    const toAdd: string[] = [];

    identifiers.forEach((id) => {
      if (id) {
        const clean = String(id).trim().toLowerCase();
        if (clean && !existing.has(clean)) {
          existing.add(clean);
          memoryDeletedSet.add(clean);
          toAdd.push(clean);
        }
      }
    });

    // 1. Lưu vào file deletedUsers.json cục bộ
    try {
      const dir = path.dirname(deletedUsersFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(
        deletedUsersFilePath,
        JSON.stringify(Array.from(existing), null, 2),
        "utf-8"
      );
    } catch (fsErr) {
      console.warn("Writing deletedUsers.json warning:", fsErr);
    }

    // 2. Lưu vĩnh viễn vào Supabase Cloud (tạo tombstone để serverless Vercel không bao giờ bị quên)
    if (toAdd.length > 0) {
      for (const val of toAdd) {
        try {
          // Xóa các bản ghi active cũ
          await supabase.from("users").delete().or(`id.eq.${val},username.eq.${val},student_code.ilike.${val}`);
          await supabase.from("student_progress").delete().or(`id.eq.${val},user_id.eq.${val},username.eq.${val}`);

          // Đánh dấu tombstone
          await supabase.from("users").upsert({
            id: val.startsWith("u-") ? val : `del-${val}`,
            username: `del_${val}`,
            role: "deleted",
            full_name: "[DELETED]",
            password_hash: "DELETED",
            school_name: "DELETED",
            school_class: "DELETED",
            grade: "DELETED",
          });
        } catch (suErr) {
          console.warn("Lỗi lưu tombstone lên Supabase:", suErr);
        }
      }
    }
  } catch (error) {
    console.error("Error in addDeletedIdentifiers:", error);
  }
}
