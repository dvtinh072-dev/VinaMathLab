import { NextResponse } from "next/server";
import { getAllCustomExams, saveCustomExam, deleteCustomExam } from "@/lib/customExamsStore";
import { CustomExam } from "@/types/customExam";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const targetClass = searchParams.get("targetClass");
    const grade = searchParams.get("grade");
    const folderId = searchParams.get("folderId");

    let exams = getAllCustomExams();

    if (targetClass && targetClass !== "all") {
      exams = exams.filter(
        (e) => e.targetClass === targetClass || e.targetClass === "Tất cả các lớp" || !e.targetClass
      );
    }

    if (grade && grade !== "all") {
      exams = exams.filter((e) => e.grade === grade);
    }

    if (folderId && folderId !== "all" && folderId !== "folder-all") {
      exams = exams.filter((e) => e.folderId === folderId);
    }

    return NextResponse.json({
      success: true,
      exams,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tải danh sách đề thi" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      subtitle,
      grade,
      gradeNumber,
      targetClass,
      folderId,
      folderName,
      durationMinutes,
      questions,
      authorTeacherId,
      authorName,
      allowReviewAnswers,
      antiCheatEnabled,
    } = body;

    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json(
        { success: false, error: "Dữ liệu đề thi không hợp lệ hoặc thiếu câu hỏi" },
        { status: 400 }
      );
    }

    const id = body.id || `exam-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

    const newExam: CustomExam = {
      id,
      title: title.trim(),
      subtitle: subtitle?.trim() || "",
      grade: grade || (gradeNumber ? `lop-${gradeNumber}` : "lop-10"),
      gradeNumber: Number(gradeNumber) || 10,
      targetClass: targetClass?.trim() || "Tất cả các lớp",
      folderId: folderId || "folder-all",
      folderName: folderName || "Tất cả đề thi",
      durationMinutes: Number(durationMinutes) || 45,
      totalQuestions: questions.length,
      questions,
      authorTeacherId: authorTeacherId || "",
      authorName: authorName || "Giáo viên",
      createdAt: new Date().toISOString(),
      allowReviewAnswers: allowReviewAnswers ?? true,
      antiCheatEnabled: antiCheatEnabled ?? true,
    };

    const saved = saveCustomExam(newExam);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: "Không thể lưu đề thi vào hệ thống" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      exam: newExam,
      examUrl: `/kiem-tra/${newExam.id}`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi xử lý tạo đề thi" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { examId, folderId, folderName } = body;

    if (!examId || !folderId) {
      return NextResponse.json(
        { success: false, error: "Thiếu examId hoặc folderId" },
        { status: 400 }
      );
    }

    const { moveExamToFolder } = await import("@/lib/customExamsStore");
    const ok = moveExamToFolder(examId, folderId, folderName);

    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Không tìm thấy đề thi để chuyển thư mục" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đã chuyển đề thi vào thư mục thành công",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi cập nhật thư mục" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Thiếu id đề thi" }, { status: 400 });
    }

    deleteCustomExam(id);
    return NextResponse.json({ success: true, message: "Đã xóa đề thi thành công" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi khi xóa đề thi" },
      { status: 500 }
    );
  }
}
