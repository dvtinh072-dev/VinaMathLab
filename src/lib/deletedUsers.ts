import fs from "fs";
import path from "path";

const deletedUsersFilePath = path.join(process.cwd(), "src/data/deletedUsers.json");

export function getDeletedIdentifiers(): Set<string> {
  try {
    if (!fs.existsSync(deletedUsersFilePath)) {
      return new Set();
    }
    const data = fs.readFileSync(deletedUsersFilePath, "utf-8");
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return new Set(parsed.map((item: string) => String(item).trim().toLowerCase()));
    }
    return new Set();
  } catch (error) {
    console.error("Error reading deletedUsers.json:", error);
    return new Set();
  }
}

export function isUserDeleted(identifier: string | null | undefined): boolean {
  if (!identifier) return false;
  const set = getDeletedIdentifiers();
  return set.has(String(identifier).trim().toLowerCase());
}

export function addDeletedIdentifiers(identifiers: (string | null | undefined)[]) {
  try {
    const existing = getDeletedIdentifiers();
    let changed = false;

    identifiers.forEach((id) => {
      if (id) {
        const clean = String(id).trim().toLowerCase();
        if (clean && !existing.has(clean)) {
          existing.add(clean);
          changed = true;
        }
      }
    });

    const dir = path.dirname(deletedUsersFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(
      deletedUsersFilePath,
      JSON.stringify(Array.from(existing), null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error writing deletedUsers.json:", error);
  }
}
