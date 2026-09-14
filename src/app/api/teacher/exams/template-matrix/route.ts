import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get("format") || "doc"; // "doc" | "csv" | "txt"
    const grade = Number(searchParams.get("grade")) || 10;

    const fileName =
      format === "csv"
        ? `Mau_Ma_Tran_De_Kiem_Tra_Toan_${grade}_CV7991.csv`
        : format === "txt"
        ? `Mau_Ma_Tran_De_Kiem_Tra_Toan_${grade}_CV7991.txt`
        : `Mau_Ma_Tran_De_Kiem_Tra_Toan_${grade}_CV7991.doc`;

    if (format === "csv") {
      const csvContent =
        `\uFEFFSTT,Chủ đề / Đơn vị kiến thức,Yêu cầu cần đạt,Phần I_NB,Phần I_TH,Phần I_VD,Phần I_VDC,Phần II_NB,Phần II_TH,Phần II_VD,Phần II_VDC,Phần III_NB,Phần III_TH,Phần III_VD,Phần III_VDC\n` +
        `1,Chương I: Mệnh đề và tập hợp,"Nhận biết mệnh đề logic; hiểu các phép toán tập hợp; vận dụng biểu đồ Venn",3,2,0,0,0,1,1,0,0,1,1,0\n` +
        `2,Chương II: Bất phương trình bậc nhất hai ẩn,"Biểu diễn miền nghiệm; giải bài toán tối ưu thực tế",2,2,0,0,0,1,0,0,0,1,1,0\n` +
        `3,Chương III: Hệ thức lượng trong tam giác,"Định lý cosin sin; tính độ dài trung tuyến diện tích tam giác",2,1,0,0,0,1,0,1,0,0,1,1\n` +
        `4,Chương IV: Vectơ và các phép toán,"Khái niệm vectơ; quy tắc ba điểm hình bình hành; tích vô hướng",3,2,0,0,0,1,1,0,0,1,1,1\n`;

      return new NextResponse(csvContent, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        },
      });
    }

    if (format === "txt") {
      const txtContent =
        `MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN TOÁN LỚP ${grade} (CHUẨN CÔNG VĂN 7991/BGDĐT-GDTrH)\n` +
        `Thời gian làm bài: 90 phút\n\n` +
        `Chủ đề 1: Chương I: Mệnh đề và tập hợp\n` +
        `- Phần I (TN 4 lựa chọn): 3 NB, 2 TH\n` +
        `- Phần II (Đúng - Sai): 1 TH, 1 VD\n` +
        `- Phần III (Trả lời ngắn): 1 TH, 1 VD\n\n` +
        `Chủ đề 2: Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn\n` +
        `- Phần I (TN 4 lựa chọn): 2 NB, 2 TH\n` +
        `- Phần II (Đúng - Sai): 1 TH\n` +
        `- Phần III (Trả lời ngắn): 1 TH, 1 VD\n\n` +
        `Chủ đề 3: Chương III: Hệ thức lượng trong tam giác\n` +
        `- Phần I (TN 4 lựa chọn): 2 NB, 1 TH\n` +
        `- Phần II (Đúng - Sai): 1 TH, 1 VDC\n` +
        `- Phần III (Trả lời ngắn): 1 VD, 1 VDC\n\n` +
        `Chủ đề 4: Chương IV: Vectơ và các phép toán vectơ\n` +
        `- Phần I (TN 4 lựa chọn): 3 NB, 2 TH\n` +
        `- Phần II (Đúng - Sai): 1 TH, 1 VD\n` +
        `- Phần III (Trả lời ngắn): 1 TH, 1 VD, 1 VDC\n`;

      return new NextResponse(txtContent, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        },
      });
    }

    // Default HTML-based DOC format (Compatible with Microsoft Word, LibreOffice, Google Docs)
    const docHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Ma Trận Đề Kiểm Tra Định Kì - CV 7991</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.3; }
          h2, h3 { text-align: center; margin: 5px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid black; padding: 6px; text-align: center; font-size: 11pt; }
          th { background-color: #f2f2f2; font-weight: bold; }
          .left { text-align: left; }
          .note { font-style: italic; font-size: 10.5pt; margin-top: 8px; }
        </style>
      </head>
      <body>
        <table style="border: none; margin-bottom: 20px;">
          <tr style="border: none;">
            <td style="border: none; width: 45%; text-align: center;">
              <strong>SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br/>
              <strong>TRƯỜNG THPT / THCS: ....................</strong>
            </td>
            <td style="border: none; width: 55%; text-align: center;">
              <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br/>
              <strong>Độc lập - Tự do - Hạnh phúc</strong>
            </td>
          </tr>
        </table>

        <h2>KHUNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN TOÁN LỚP ${grade}</h2>
        <h3>(Theo hướng dẫn tại Phụ lục Công văn số 7991/BGDĐT-GDTrH ngày 17/12/2024 của Bộ GDĐT)</h3>
        <p style="text-align: center; margin-top: 0;"><em>Môn: Toán - Thời gian làm bài: 90 phút</em></p>

        <table>
          <thead>
            <tr>
              <th rowspan="3" style="width: 5%;">TT</th>
              <th rowspan="3" style="width: 25%;">Chủ đề / Chương</th>
              <th rowspan="3" style="width: 25%;">Nội dung / Đơn vị kiến thức</th>
              <th colspan="12">Mức độ đánh giá</th>
              <th rowspan="3" style="width: 8%;">Tổng số câu</th>
              <th rowspan="3" style="width: 8%;">Tỉ lệ % điểm</th>
            </tr>
            <tr>
              <th colspan="4">Phần I: TN Nhiều lựa chọn<br/>(0,25đ/câu - 3,0đ)</th>
              <th colspan="4">Phần II: TN Đúng - Sai<br/>(1,0đ/câu - 2,0đ)</th>
              <th colspan="4">Phần III: TN Trả lời ngắn<br/>(0,5đ/câu - 2,0đ - 3,0đ)</th>
            </tr>
            <tr>
              <th>Biết</th><th>Hiểu</th><th>VD</th><th>VDC</th>
              <th>Biết</th><th>Hiểu</th><th>VD</th><th>VDC</th>
              <th>Biết</th><th>Hiểu</th><th>VD</th><th>VDC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="left">Chương I: Mệnh đề và tập hợp</td>
              <td class="left">Mệnh đề toán học, các phép toán tập hợp</td>
              <td>3</td><td>2</td><td>0</td><td>0</td>
              <td>0</td><td>1</td><td>1</td><td>0</td>
              <td>0</td><td>1</td><td>1</td><td>0</td>
              <td>9</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>2</td>
              <td class="left">Chương II: Bất phương trình</td>
              <td class="left">BPT và hệ BPT bậc nhất hai ẩn</td>
              <td>2</td><td>2</td><td>0</td><td>0</td>
              <td>0</td><td>1</td><td>0</td><td>0</td>
              <td>0</td><td>1</td><td>1</td><td>0</td>
              <td>7</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>3</td>
              <td class="left">Chương III: Hệ thức lượng tam giác</td>
              <td class="left">Định lý sin, cosin, công thức diện tích tam giác</td>
              <td>2</td><td>1</td><td>0</td><td>0</td>
              <td>0</td><td>1</td><td>0</td><td>1</td>
              <td>0</td><td>0</td><td>1</td><td>1</td>
              <td>7</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>4</td>
              <td class="left">Chương IV: Vectơ</td>
              <td class="left">Tổng hiệu vectơ, tích với một số, tích vô hướng</td>
              <td>3</td><td>2</td><td>0</td><td>0</td>
              <td>0</td><td>1</td><td>1</td><td>0</td>
              <td>0</td><td>1</td><td>1</td><td>1</td>
              <td>10</td>
              <td>30%</td>
            </tr>
            <tr style="font-weight: bold; background-color: #fafafa;">
              <td colspan="3">TỔNG SỐ CÂU</td>
              <td colspan="4">12 câu (3,0 điểm)</td>
              <td colspan="4">4 câu (2,0 điểm)</td>
              <td colspan="4">6 câu (3,0 điểm)</td>
              <td>22 câu</td>
              <td>100%</td>
            </tr>
            <tr style="font-weight: bold; background-color: #f2f2f2;">
              <td colspan="3">TỈ LỆ % ĐIỂM THEO MỨC ĐỘ</td>
              <td colspan="4">Biết: ~35% (3,5đ)</td>
              <td colspan="4">Hiểu: ~35% (3,5đ)</td>
              <td colspan="4">Vận dụng: ~30% (3,0đ)</td>
              <td colspan="2">10,0 điểm</td>
            </tr>
          </tbody>
        </table>

        <div class="note">
          <p><strong>* Ghi chú theo Công văn số 7991/BGDĐT-GDTrH:</strong></p>
          <p>1. Mỗi câu hỏi Phần II gồm 4 ý nhỏ (a, b, c, d), học sinh chọn Đúng hoặc Sai cho từng ý.</p>
          <p>2. Điểm số các phần được phân bổ tương ứng: Phần I khoảng 30%, Phần II khoảng 20%, Phần III khoảng 20% đến 30% và tự luận/vận dụng khoảng 20% đến 30%.</p>
          <p>3. Thầy/Cô có thể chỉnh sửa các dòng chủ đề và số câu trong bảng này, sau đó tải tệp lên website VinaMathLab để hệ thống tự động bốc câu hỏi từ ngân hàng dự án hoặc AI.</p>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(docHtml, {
      headers: {
        "Content-Type": "application/msword; charset=utf-8",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Lỗi tải file mẫu ma trận" },
      { status: 500 }
    );
  }
}