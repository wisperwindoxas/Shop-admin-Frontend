"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle, SlidersHorizontal, Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  theme: "dark" | "light";
}

export default function BeforeAfterSlider({ theme }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-3">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Taqqoslab Ko‘ring
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          POSsiz Ishlash vs. Shop-Admin Bilan Ishlash
        </h2>
        <p className={`mt-3 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Slayderni o‘ngga yoki chapga surib, tizim biznesingizga qanday tartib va daromad olib kelishini ko‘ring.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        className={`relative rounded-3xl border overflow-hidden select-none shadow-2xl min-h-[420px] ${
          theme === "dark" ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"
        }`}
      >
        {/* RIGHT: POS BILAN (Full width underlayer) */}
        <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-emerald-950/30 via-slate-950 to-slate-900 text-white">
          <div className="flex items-center justify-end">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SHOP-ADMIN BILAN (ZAMONAVIY)
            </span>
          </div>

          <div className="max-w-md ml-auto text-right space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-emerald-400">
              100% Avtomatlashtirilgan Biznes
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-semibold">
              <div className="flex items-center justify-end gap-2.5">
                <span>0.1 soniyada skaner orqali avtomatik hisob</span>
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <span>Real-time ombor qoldig‘i va tannarx nazorati</span>
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <span>Bir tiyingacha to‘g‘ri kassa, chek va P&L hisoboti</span>
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <span>Telefonda jonli tushum, xodimlar va foyda monitoringi</span>
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <span className="text-[11px] text-emerald-300/80 font-bold">
              ✓ Kamomad 0% ga tushadi, savdo hajmi 35% ga oshadi
            </span>
          </div>
        </div>

        {/* LEFT: POSSIZ (Clipped Layer) */}
        <div
          className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 text-white overflow-hidden transition-all"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <div className="flex items-center justify-start">
            <span className="px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5" />
              POSSIZ (ESKICHA USUL)
            </span>
          </div>

          <div className="max-w-md space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-rose-400">
              Qog‘oz, Daftarlar va Chalkashlik
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Qo‘lda kalkulyatorda hisoblash va adashishlar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Omborda qaysi tovar qolgani noma’lum, muddati o‘tishi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Kechqurun soatlab kassa sanash va kamomad chiqishi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Xodimlarni nazorat qilib bo‘lmaslik, firibgarlik xavfi</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <span className="text-[11px] text-rose-300/80 font-bold">
              ✕ Har oy 15-20% gacha yashirin zarar va mijozlar kutish navbati
            </span>
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center font-black text-xs shadow-2xl border-2 border-brand-500">
            ⇄
          </div>
        </div>

        {/* Invisible Range Input for Smooth Dragging */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          aria-label="Before after comparison slider"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 font-bold mt-3 px-2">
        <span>← Eskicha usul (Qo‘lda)</span>
        <span>Slayderni suring</span>
        <span>Shop-Admin POS (Avtomat) →</span>
      </div>
    </div>
  );
}
