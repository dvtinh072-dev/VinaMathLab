import { NextResponse } from "next/server";
import { getAiConfiguration, saveAiConfiguration } from "@/lib/geminiChatService";

export async function GET() {
  try {
    const config = await getAiConfiguration();
    // Che bớt API key khi trả về client để bảo mật
    const maskedGemini = config.geminiApiKey
      ? config.geminiApiKey.substring(0, 6) + "..." + config.geminiApiKey.substring(config.geminiApiKey.length - 4)
      : "";
    const maskedOpenAi = config.openaiApiKey
      ? config.openaiApiKey.substring(0, 6) + "..." + config.openaiApiKey.substring(config.openaiApiKey.length - 4)
      : "";

    return NextResponse.json({
      success: true,
      config: {
        hasGeminiKey: !!config.geminiApiKey,
        hasOpenAiKey: !!config.openaiApiKey,
        maskedGemini,
        maskedOpenAi,
        provider: config.provider,
        temperature: config.temperature,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { geminiApiKey, openaiApiKey, provider } = body;

    const updates: any = {};
    if (typeof geminiApiKey === "string" && geminiApiKey.trim()) {
      updates.geminiApiKey = geminiApiKey.trim();
    }
    if (typeof openaiApiKey === "string" && openaiApiKey.trim()) {
      updates.openaiApiKey = openaiApiKey.trim();
    }
    if (provider && ["gemini", "openai", "internal"].includes(provider)) {
      updates.provider = provider;
    }

    const ok = await saveAiConfiguration(updates);
    if (!ok) {
      return NextResponse.json({ success: false, error: "Không thể lưu cấu hình lên máy chủ." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Đã cập nhật cấu hình AI thành công!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
