import React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-6 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>© 2026 VinaMath Platform • Bản quyền thuộc về tác giả & nhóm phát triển</div>
        <div className="flex items-center gap-1">
          Thiết kế phục vụ cộng đồng học Toán Việt Nam <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
        </div>
      </div>
    </footer>
  );
}
