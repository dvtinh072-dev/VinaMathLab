"use client";

import React, { useState, useRef, useCallback } from "react";
import { EssayAttachment } from "@/types/customExam";
import {
  UploadCloud,
  Camera,
  FileText,
  RotateCw,
  Trash2,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Loader2,
  FileCheck,
} from "lucide-react";

interface EssaySubmissionUploaderProps {
  files: EssayAttachment[];
  onChange?: (files: EssayAttachment[]) => void;
  readOnly?: boolean;
  maxFiles?: number;
  title?: string;
  description?: string;
}

// Hàm nén ảnh phía Client qua HTML5 Canvas
async function compressImageFile(
  file: File,
  maxDimension = 1920,
  quality = 0.82
): Promise<{ dataUrl: string; size: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Không thể khởi tạo Canvas"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        const approxSize = Math.round((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75);
        resolve({ dataUrl, size: approxSize });
      };
      img.onerror = () => reject(new Error("Lỗi khi đọc hình ảnh"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Lỗi khi đọc file"));
    reader.readAsDataURL(file);
  });
}

// Đọc file PDF
async function readPdfFile(file: File): Promise<{ dataUrl: string; size: number }> {
  return new Promise((resolve, reject) => {
    if (file.size > 15 * 1024 * 1024) {
      reject(new Error("File PDF vượt quá dung lượng tối đa 15MB"));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      resolve({ dataUrl: reader.result as string, size: file.size });
    };
    reader.onerror = () => reject(new Error("Lỗi khi đọc file PDF"));
    reader.readAsDataURL(file);
  });
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

export default function EssaySubmissionUploader({
  files = [],
  onChange,
  readOnly = false,
  maxFiles = 10,
  title = "Bài làm tự luận (Tải lên ảnh hoặc file PDF)",
  description = "Thí sinh làm bài tự luận ra giấy thi, ghi rõ họ tên và số báo danh, sau đó chụp ảnh các trang bài làm (hoặc scan file PDF) và tải lên tại đây.",
}: EssaySubmissionUploaderProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Xử lý danh sách file được chọn
  const handleProcessFiles = async (fileList: FileList | File[]) => {
    if (readOnly || !onChange) return;
    setErrorMessage(null);
    setIsProcessing(true);

    try {
      const remainingSlots = maxFiles - files.length;
      if (remainingSlots <= 0) {
        setErrorMessage(`Bạn đã tải tối đa ${maxFiles} trang bài làm.`);
        setIsProcessing(false);
        return;
      }

      const filesToProcess = Array.from(fileList).slice(0, remainingSlots);
      const newAttachments: EssayAttachment[] = [];

      for (let i = 0; i < filesToProcess.length; i++) {
        const file = filesToProcess[i];
        const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
        const isImage = file.type.startsWith("image/");

        if (!isPdf && !isImage) {
          setErrorMessage(`Tệp "${file.name}" không hợp lệ. Vui lòng chọn ảnh (JPG, PNG, HEIC) hoặc PDF.`);
          continue;
        }

        if (isImage) {
          const { dataUrl, size } = await compressImageFile(file);
          newAttachments.push({
            id: `essay_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            type: "image",
            dataUrl,
            size,
            rotation: 0,
          });
        } else if (isPdf) {
          const { dataUrl, size } = await readPdfFile(file);
          newAttachments.push({
            id: `essay_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            name: file.name,
            type: "pdf",
            dataUrl,
            size,
            rotation: 0,
          });
        }
      }

      if (newAttachments.length > 0) {
        onChange([...files, ...newAttachments]);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Đã xảy ra lỗi khi xử lý tệp");
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (cameraInputRef.current) cameraInputRef.current.value = "";
    }
  };

  // Kéo thả file
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleProcessFiles(e.dataTransfer.files);
      }
    },
    [files, maxFiles, readOnly, onChange]
  );

  // Xoay ảnh 90 độ
  const handleRotate = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (readOnly || !onChange) return;
    const target = files[index];
    if (target.type !== "image") return;

    const currentRotation = target.rotation || 0;
    const nextRotation = (currentRotation + 90) % 360;

    const updated = [...files];
    updated[index] = { ...target, rotation: nextRotation };
    onChange(updated);
  };

  // Xóa file
  const handleDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (readOnly || !onChange) return;
    const updated = files.filter((_, i) => i !== index);
    onChange(updated);
    if (previewIndex === index) {
      setPreviewIndex(null);
    } else if (previewIndex !== null && previewIndex > index) {
      setPreviewIndex(previewIndex - 1);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base sm:text-lg flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              files.length > 0
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            Đã nộp: {files.length}/{maxFiles} trang
          </span>
        </div>
      </div>

      {/* Thông báo lỗi nếu có */}
      {errorMessage && (
        <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs sm:text-sm text-rose-700 dark:text-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{errorMessage}</span>
          <button
            onClick={() => setErrorMessage(null)}
            className="ml-auto text-rose-500 hover:text-rose-700 text-xs font-bold"
          >
            Đóng
          </button>
        </div>
      )}

      {/* Dropzone & Nút bấm Upload (Chỉ hiện khi chưa ở chế độ readOnly) */}
      {!readOnly && (
        <div>
          {/* Inputs ẩn */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => e.target.files && handleProcessFiles(e.target.files)}
            accept="image/png,image/jpeg,image/jpg,image/webp,application/pdf"
            multiple
            className="hidden"
          />
          <input
            type="file"
            ref={cameraInputRef}
            onChange={(e) => e.target.files && handleProcessFiles(e.target.files)}
            accept="image/*"
            capture="environment"
            className="hidden"
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-4 sm:p-6 text-center transition-all ${
              dragOver
                ? "border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/20"
                : "border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/70"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {isProcessing ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <UploadCloud className="w-6 h-6" />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {isProcessing
                    ? "Đang tối ưu & nén tệp bài làm..."
                    : "Kéo thả ảnh hoặc chọn tệp bài làm từ thiết bị"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Hỗ trợ ảnh chụp JPG, PNG, WEBP (tự động nén siêu nét) hoặc tệp PDF (tối đa 15MB)
                </p>
              </div>

              {/* Nhóm nút bấm: Chụp ảnh & Chọn file */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={isProcessing || files.length >= maxFiles}
                  onClick={() => cameraInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-medium shadow-sm transition-all"
                >
                  <Camera className="w-4 h-4" />
                  <span>Chụp ảnh bài làm</span>
                </button>

                <button
                  type="button"
                  disabled={isProcessing || files.length >= maxFiles}
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-xl text-xs sm:text-sm font-medium shadow-sm transition-all"
                >
                  <UploadCloud className="w-4 h-4 text-slate-500" />
                  <span>Chọn ảnh / PDF từ máy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Danh sách trang bài làm đã tải lên */}
      {files.length > 0 ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium px-1">
            <span>Danh sách các trang bài làm ({files.length} trang)</span>
            <span>Bấm vào ảnh để xem phóng to hoặc xoay chiều</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {files.map((file, idx) => (
              <div
                key={file.id || idx}
                onClick={() => setPreviewIndex(idx)}
                className="group relative bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden cursor-pointer shadow-sm hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex flex-col"
              >
                {/* Header nhãn trang */}
                <div className="bg-slate-100/90 dark:bg-slate-800/90 px-2.5 py-1.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Trang {idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {formatFileSize(file.size)}
                  </span>
                </div>

                {/* Khu vực xem trước thumbnail */}
                <div className="h-36 sm:h-40 w-full relative bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-center overflow-hidden">
                  {file.type === "image" ? (
                    <img
                      src={file.dataUrl}
                      alt={`Trang ${idx + 1}`}
                      style={{
                        transform: `rotate(${file.rotation || 0}deg)`,
                      }}
                      className="max-h-full max-w-full object-contain transition-transform duration-200"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 p-2">
                      <FileText className="w-10 h-10 text-rose-500 mb-1" />
                      <span className="text-[11px] font-semibold text-center line-clamp-1 max-w-[120px]">
                        {file.name}
                      </span>
                      <span className="text-[10px] text-slate-400">Tài liệu PDF</span>
                    </div>
                  )}

                  {/* Lớp phủ khi hover với các nút hành động */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      title="Xem phóng to"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewIndex(idx);
                      }}
                      className="p-1.5 bg-white/90 text-slate-800 hover:bg-white rounded-lg shadow transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>

                    {file.type === "image" && !readOnly && (
                      <button
                        type="button"
                        title="Xoay 90 độ"
                        onClick={(e) => handleRotate(idx, e)}
                        className="p-1.5 bg-white/90 text-slate-800 hover:bg-white rounded-lg shadow transition-colors"
                      >
                        <RotateCw className="w-4 h-4" />
                      </button>
                    )}

                    {!readOnly && (
                      <button
                        type="button"
                        title="Xóa trang này"
                        onClick={(e) => handleDelete(idx, e)}
                        className="p-1.5 bg-rose-600/90 text-white hover:bg-rose-600 rounded-lg shadow transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Footer chân trang */}
                <div className="p-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800">
                  <span className="truncate max-w-[100px]">{file.name}</span>
                  {!readOnly && (
                    <div className="flex items-center gap-1">
                      {file.type === "image" && (
                        <button
                          type="button"
                          onClick={(e) => handleRotate(idx, e)}
                          title="Xoay 90°"
                          className="p-1 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={(e) => handleDelete(idx, e)}
                        title="Xóa"
                        className="p-1 text-slate-500 hover:text-rose-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-6 text-center text-slate-400 dark:text-slate-500 text-xs sm:text-sm">
          Chưa có trang bài làm tự luận nào được tải lên.
        </div>
      )}

      {/* Lightbox / Modal xem ảnh phóng to */}
      {previewIndex !== null && files[previewIndex] && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-indigo-600 text-white font-bold rounded-lg text-xs">
                Trang {previewIndex + 1} / {files.length}
              </span>
              <span className="text-sm font-medium text-slate-200 hidden sm:inline truncate max-w-sm">
                {files[previewIndex].name} ({formatFileSize(files[previewIndex].size)})
              </span>
            </div>

            <div className="flex items-center gap-2">
              {files[previewIndex].type === "image" && !readOnly && (
                <button
                  type="button"
                  onClick={(e) => handleRotate(previewIndex, e)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Xoay 90°</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setPreviewIndex(null)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Viewer */}
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden relative">
            {/* Nút lùi trang */}
            {previewIndex > 0 && (
              <button
                type="button"
                onClick={() => setPreviewIndex(previewIndex - 1)}
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Hiển thị ảnh hoặc PDF */}
            <div className="max-w-full max-h-[75vh] flex items-center justify-center">
              {files[previewIndex].type === "image" ? (
                <img
                  src={files[previewIndex].dataUrl}
                  alt={`Trang ${previewIndex + 1}`}
                  style={{
                    transform: `rotate(${files[previewIndex].rotation || 0}deg)`,
                  }}
                  className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-200"
                />
              ) : (
                <div className="w-[85vw] max-w-4xl h-[75vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col">
                  <iframe
                    src={files[previewIndex].dataUrl}
                    className="w-full flex-1 border-0"
                    title={`PDF Trang ${previewIndex + 1}`}
                  />
                </div>
              )}
            </div>

            {/* Nút tiến trang */}
            {previewIndex < files.length - 1 && (
              <button
                type="button"
                onClick={() => setPreviewIndex(previewIndex + 1)}
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Thumbnails preview carousel */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto py-1">
            {files.map((file, idx) => (
              <button
                key={file.id || idx}
                onClick={() => setPreviewIndex(idx)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  idx === previewIndex
                    ? "border-indigo-400 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {file.type === "image" ? (
                  <img
                    src={file.dataUrl}
                    alt={`Thumb ${idx + 1}`}
                    style={{ transform: `rotate(${file.rotation || 0}deg)` }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-rose-400">
                    <FileText className="w-5 h-5" />
                  </div>
                )}
                <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-white text-center font-bold">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
