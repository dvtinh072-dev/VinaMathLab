import { NextResponse } from "next/server";
import { getAllExamFolders, saveExamFolder, deleteExamFolder } from "@/lib/customExamsStore";
import { ExamFolder } from "@/types/customExam";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const folders = getAllExamFolders();
    return NextResponse.json({ success: true, folders });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tải thư mục đề thi" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, color, icon } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Tên thư mục không được để trống" },
        { status: 400 }
      );
    }

    const id = body.id || `folder-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    const newFolder: ExamFolder = {
      id,
      name: name.trim(),
      color: color || "indigo",
      icon: icon || "folder",
      createdAt: new Date().toISOString(),
    };

    saveExamFolder(newFolder);
    return NextResponse.json({ success: true, folder: newFolder });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tạo thư mục đề thi" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Thiếu id thư mục cần xóa" },
        { status: 400 }
      );
    }

    if (id === "folder-all") {
      return NextResponse.json(
        { success: false, error: "Không thể xóa thư mục mặc định" },
        { status: 400 }
      );
    }

    const ok = deleteExamFolder(id);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Không thể xóa thư mục này" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã xóa thư mục và di chuyển các đề thi về thư mục chung",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi khi xóa thư mục" },
      { status: 500 }
    );
  }
}