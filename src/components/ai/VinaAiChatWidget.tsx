"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  BookOpen,
  ExternalLink,
  Maximize2,
  Minimize2,
  RotateCcw,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  MessageSquareText,
} from "lucide-react";
import { MathFormattedText } from "@/components/math/MathFormattedText";
import { useAuth } from "@/context/AuthContext";
import {
  askVinaAi,
  getLocalChatHistory,
  saveLocalChatHistory,
  ChatMessage,
} from "@/lib/vinaAiChatClient";

const SUGGESTED_QUESTIONS = [
  "Định lý cosin trong tam giác?",
  "Định lý sin và bán kính ngoại tiếp?",
  "7 hằng đẳng thức đáng nhớ là gì?",
  "Công thức nghiệm phương trình bậc hai và Viète?",
  "Quy tắc tính đạo hàm và phương trình tiếp tuyến?",
  "Công thức xác suất có điều kiện và Bayes?",
];

export function VinaAiChatWidget() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cached = getLocalChatHistory();
    if (cached.length > 0) {
      setMessages(cached);
    } else {
      setMessages([
        {
          id: "welcome",
          sender: "vina",
          text:
            "Xin chào em! Thầy/Cô là **Trợ lý AI Vina** của VinaMath. Em có thắc mắc gì về công thức, định lý hay phương pháp giải Toán từ Lớp 6 đến Lớp 12 không?\n\n" +
            "💡 *Em hãy nhập tên bài học, định lý hoặc câu hỏi toán học cần giải đáp nhé!*",
          sources: [
            {
              title: "Bộ Giáo Dục và Đào Tạo - Chương trình GDPT 2018",
              citation: "SGK Toán 6-12 Kết Nối Tri Thức & Hệ thống học liệu VinaMath",
              url: "https://moet.gov.vn",
            },
          ],
          isAnsweredFromKnowledge: true,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const q = (textToSend || inputText).trim();
    if (!q || isLoading) return;

    const userMsg: ChatMessage = {
      id: "u_" + Date.now(),
      sender: "user",
      text: q,
      timestamp: new Date().toISOString(),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    saveLocalChatHistory(nextMessages);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await askVinaAi(q, {
        userId: user?.id,
        studentCode: user?.studentCode,
        username: user?.username,
        fullName: user?.fullName,
        schoolClass: user?.schoolClass,
      });

      if (res.success && res.reply) {
        const botMsg: ChatMessage = {
          id: "v_" + Date.now(),
          sender: "vina",
          text: res.reply,
          sources: res.sources,
          isAnsweredFromKnowledge: res.isAnsweredFromKnowledge,
          aiProvider: (res as any).aiProvider,
          timestamp: new Date().toISOString(),
        };
        const updated = [...nextMessages, botMsg];
        setMessages(updated);
        saveLocalChatHistory(updated);
      } else {
        const errorMsg: ChatMessage = {
          id: "err_" + Date.now(),
          sender: "vina",
          text:
            "Hệ thống đang bận hoặc có sự cố kết nối. Em vui lòng thử lại sau ít giây nhé!",
          timestamp: new Date().toISOString(),
        };
        const updated = [...nextMessages, errorMsg];
        setMessages(updated);
        saveLocalChatHistory(updated);
      }
    } catch {
      // Error fallback
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    if (!window.confirm("Em có chắc muốn xóa lịch sử trò chuyện này không?")) return;
    const initialMsg: ChatMessage = {
      id: "welcome_" + Date.now(),
      sender: "vina",
      text:
        "Lịch sử trò chuyện đã được làm mới! Em hãy đặt câu hỏi toán học cần trợ giúp nhé.",
      timestamp: new Date().toISOString(),
    };
    setMessages([initialMsg]);
    saveLocalChatHistory([initialMsg]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mb-3 rounded-3xl bg-[#0e1526] border-2 border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col transition-all duration-200 animate-in zoom-in-95 ${
            isExpanded
              ? "w-[94vw] sm:w-[580px] h-[82vh] max-h-[720px]"
              : "w-[92vw] sm:w-[410px] h-[520px] max-h-[75vh]"
          }`}
        >
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0e1526]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-white">AI Vina</h3>
                  <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[9px] font-black">
                    Học Liệu Uy Tín
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Chuẩn SGK & Bộ GD&ĐT</span>
                </p>
              </div>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                title="Làm mới đoạn chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800/80 transition-colors hidden sm:block cursor-pointer"
                title={isExpanded ? "Thu nhỏ" : "Phóng to"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                title="Đóng chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => {
              const isVina = m.sender === "vina";
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2 ${isVina ? "justify-start" : "justify-end"}`}
                >
                  {isVina && (
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[86%] rounded-2xl p-3 leading-relaxed shadow-sm ${
                      isVina
                        ? "bg-slate-900/90 border border-slate-800 text-slate-100"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium"
                    }`}
                  >
                    {isVina ? (
                      <div className="space-y-2">
                        {m.aiProvider && (
                          <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800/80">
                            <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span className="text-[9px] font-black uppercase tracking-wider text-cyan-300">
                              {m.aiProvider}
                            </span>
                          </div>
                        )}
                        <div className="prose-sm dark:prose-invert leading-relaxed break-words font-sans text-xs">
                          <MathFormattedText text={m.text} />
                        </div>

                        {/* Trích dẫn nguồn tài liệu */}
                        {m.sources && m.sources.length > 0 && (
                          <div className="pt-2 mt-2 border-t border-slate-800 space-y-1">
                            <div className="text-[10px] font-black text-amber-400 flex items-center gap-1 uppercase tracking-wider">
                              <BookOpen className="w-3 h-3" />
                              <span>Nguồn tư liệu trích xuất:</span>
                            </div>
                            {m.sources.map((s, sIdx) => (
                              <div
                                key={sIdx}
                                className="p-2 rounded-xl bg-slate-950/70 border border-amber-500/20 text-[10px] space-y-0.5"
                              >
                                <div className="font-bold text-cyan-300">{s.title}</div>
                                <div className="text-slate-400 leading-snug">{s.citation}</div>
                                {s.url && (
                                  <a
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-[10px] text-amber-300 hover:underline pt-0.5"
                                  >
                                    <ExternalLink className="w-2.5 h-2.5" />
                                    <span>Cổng học liệu chính thống</span>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span>{m.text}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-cyan-400 animate-pulse">
                <Bot className="w-4 h-4 animate-spin" />
                <span>Vina đang tra cứu trong tư liệu giáo dục chính thống...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-3 py-1.5 border-t border-slate-800/80 bg-slate-950/40">
              <div className="text-[10px] font-bold text-slate-400 mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Gợi ý câu hỏi nhanh:
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] text-cyan-300 hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 sm:p-3 border-t border-slate-800 bg-[#0b1120] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Hỏi Vina về công thức, định lý, bài học..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white transition-all shadow-md shadow-cyan-500/30 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              title="Gửi câu hỏi"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer border border-white/20"
        title="Hỏi trợ lý AI Vina"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-white animate-bounce" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
        </div>
        <span className="hidden sm:inline">Hỏi Trợ Lý AI Vina</span>
        <span className="sm:hidden">AI Vina</span>
      </button>
    </div>
  );
}