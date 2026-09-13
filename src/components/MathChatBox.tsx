"use client";

import React, { useState, useRef, useEffect } from "react";
import "katex/dist/katex.min.css";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  GraduationCap,
  Send,
  X,
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCcw,
  BookOpen,
  Settings,
  Key,
  Check,
  ExternalLink,
} from "lucide-react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  provider?: string;
  timestamp: string;
}

const INITIAL_GREETING: ChatMessage = {
  role: "assistant",
  content: `Chào em! Thầy là **Trợ Lý Vina** - Trợ lý AI Sư phạm Toán học VinaMath.

Thầy có thể hỗ trợ em:
- 🔍 **Tra cứu nhanh** phương pháp giải, định lý và công thức toán học từ **Lớp 6 đến Lớp 12**.
- 💡 **Hỗ trợ giải bài tập khi cần**, phân tích hướng tư duy, trình bày lời giải chi tiết và đáp số chuẩn xác.

Em hãy gửi bài toán hoặc công thức cần tra cứu nhé!`,
  timestamp: new Date().toISOString(),
};

const SUGGESTIONS = [
  "Công thức Định lý Côsin tam giác (Lớp 10)",
  "Các quy tắc tính đạo hàm hàm số (Lớp 11)",
  "Phương trình mặt phẳng Oxyz (Lớp 12)",
  "Cách tìm ƯCLN và BCNN (Toán 6)",
];

export default function MathChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [isSavedKey, setIsSavedKey] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Khởi tạo đọc API Key từ localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vina_gemini_api_key") || "";
      setGeminiKey(saved);
      setKeyInput(saved);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleSaveKey = async () => {
    const trimmed = keyInput.trim();
    setGeminiKey(trimmed);
    if (typeof window !== "undefined") {
      localStorage.setItem("vina_gemini_api_key", trimmed);
    }
    // Gửi lưu đồng bộ lên Supabase nếu là admin
    try {
      await fetch("/api/ai/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          geminiApiKey: trimmed,
          provider: trimmed ? "gemini" : "internal",
        }),
      });
    } catch {}

    setIsSavedKey(true);
    setTimeout(() => {
      setIsSavedKey(false);
      setShowConfig(false);
    }, 1200);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-gemini-key": geminiKey,
        },
        body: JSON.stringify({
          apiKey: geminiKey,
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const replyContent =
        data.reply ||
        "Trợ Lý Vina chưa thể phản hồi lúc này. Em vui lòng thử lại nhé!";

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: replyContent,
        provider: data.provider,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Lỗi gửi tin nhắn:", error);
      const errorMsg: ChatMessage = {
        role: "assistant",
        content:
          "Hệ thống đang gặp sự cố kết nối. Em vui lòng kiểm tra kết nối mạng và thử lại nhé!",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    if (window.confirm("Em có muốn làm mới cuộc trò chuyện với Trợ Lý Vina không?")) {
      setMessages([
        {
          ...INITIAL_GREETING,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* KHUNG CHAT (CHAT WINDOW) */}
      {isOpen && (
        <div
          className={`mb-3 rounded-3xl bg-slate-950/95 dark:bg-slate-900/95 backdrop-blur-md border-2 border-indigo-500/40 shadow-2xl overflow-hidden flex flex-col transition-all duration-200 animate-in zoom-in-95 ${
            isExpanded
              ? "w-[94vw] sm:w-[620px] h-[86vh] max-h-[760px]"
              : "w-[92vw] sm:w-[430px] h-[550px] max-h-[78vh]"
          }`}
        >
          {/* HEADER */}
          <div className="p-3 sm:p-4 bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 border-b border-indigo-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-white tracking-wide">
                    Trợ Lý Vina
                  </h3>
                  <span className="px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[9px] font-black uppercase">
                    {geminiKey ? "✨ Trí Tuệ AI" : "📚 SGK VinaMath"}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Tra Cứu Công Thức & Hỗ Trợ Giải Toán 6 - 12</span>
                </p>
              </div>
            </div>

            {/* Các nút hành động header */}
            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={() => setShowConfig(!showConfig)}
                title="Cài đặt API Key Gemini"
                className={`p-1.5 rounded-xl transition ${
                  showConfig || geminiKey
                    ? "text-cyan-400 bg-cyan-950/50 border border-cyan-500/40"
                    : "hover:text-white hover:bg-slate-800"
                }`}
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                title="Làm mới trò chuyện"
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-xl transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Thu nhỏ" : "Phóng to"}
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-xl transition hidden sm:block"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Đóng"
                className="p-1.5 hover:text-white hover:bg-slate-800 rounded-xl transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* HỘP THOẠI CÀI ĐẶT API KEY (SETTINGS DRAWER) */}
          {showConfig && (
            <div className="p-3 bg-slate-900 border-b border-indigo-500/30 text-xs space-y-2 animate-in slide-in-from-top-2">
              <div className="flex items-center justify-between text-indigo-300 font-bold">
                <div className="flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cấu hình Google Gemini API Key</span>
                </div>
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-cyan-400 hover:underline flex items-center gap-0.5"
                >
                  <span>Lấy key miễn phí</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Dán AI Studio API Key (AIzaSy...)"
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-2.5 py-1.5 text-slate-100 text-xs outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleSaveKey}
                  className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1 transition shrink-0"
                >
                  {isSavedKey ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : null}
                  <span>{isSavedKey ? "Đã Lưu!" : "Lưu Key"}</span>
                </button>
              </div>
              <p className="text-[10px] text-slate-400">
                Key được lưu an toàn trên trình duyệt và tự động kích hoạt trí tuệ nhân tạo AI nâng cao.
              </p>
            </div>
          )}

          {/* DANH SÁCH TIN NHẮN */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm bg-slate-950/50">
            {messages.map((m, idx) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-3 sm:p-3.5 leading-relaxed shadow-sm ${
                      isUser
                        ? "bg-indigo-600 text-white rounded-tr-sm font-medium"
                        : "bg-slate-900 border border-slate-700/80 text-slate-100 rounded-tl-sm"
                    }`}
                  >
                    {!isUser ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none break-words text-slate-100 [&_p]:text-slate-100 [&_strong]:text-cyan-300 [&_li]:text-slate-200 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-amber-300 text-xs sm:text-[13px] leading-relaxed">
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap break-words text-xs sm:text-[13px] text-white">
                        {m.content}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* HIỆU ỨNG ĐANG SUY NGHĨ (LOADING) */}
            {isLoading && (
              <div className="flex items-start gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="bg-slate-900 border border-slate-700/80 rounded-2xl rounded-tl-sm px-4 py-2.5 text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                    <span className="text-[11px] text-slate-400 ml-1 font-medium">
                      Trợ Lý Vina đang tra cứu và giải đáp...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* GỢI Ý CÂU HỎI NHANH */}
          {messages.length <= 2 && (
            <div className="px-3.5 pb-2 bg-slate-950/80">
              <div className="text-[10px] font-black text-slate-400 flex items-center gap-1 mb-1.5 uppercase">
                <BookOpen className="w-3 h-3 text-indigo-400" />
                <span>Gợi ý chủ đề nhanh:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((sug, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSend(sug)}
                    disabled={isLoading}
                    className="px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-indigo-600/40 border border-slate-800 hover:border-indigo-500/50 text-[11px] text-slate-300 hover:text-indigo-200 transition text-left"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* KHUNG NHẬP LIỆU (INPUT BOX) */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <div className="relative flex items-end gap-2 bg-slate-900 border border-slate-700/80 rounded-2xl p-1.5 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500/50 transition">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Hỏi Trợ Lý Vina về phương pháp, công thức hoặc bài toán... (Enter để gửi)"
                rows={1}
                disabled={isLoading}
                className="w-full bg-transparent border-0 focus:ring-0 text-xs sm:text-sm text-slate-100 placeholder-slate-500 resize-none max-h-24 px-2 py-1.5 outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`p-2 rounded-xl transition shrink-0 ${
                  input.trim() && !isLoading
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30 hover:scale-105 active:scale-95"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 px-1 pt-1.5">
              <span>Hỗ trợ công thức LaTeX: $x^2 + y^2 = r^2$</span>
              <span>Shift + Enter để xuống dòng</span>
            </div>
          </div>
        </div>
      )}

      {/* NÚT BẬT/TẮT KHUNG CHAT (FLOATING BUTTON) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-indigo-400/40"
        >
          <div className="relative">
            <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs sm:text-sm font-black tracking-wide">
            Trợ Lý Vina
          </span>
        </button>
      )}
    </div>
  );
}
