"use client";

import React from "react";
import { Store, Coffee, Cake, Check, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface BusinessModesShowcaseProps {
  theme: "dark" | "light";
  currentMode?: "retail" | "cafe" | "bakery";
  onSelectMode: (mode: "retail" | "cafe" | "bakery") => void;
}

export default function BusinessModesShowcase({
  theme,
  currentMode = "retail",
  onSelectMode,
}: BusinessModesShowcaseProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-wider mb-3">
          <Store className="w-3.5 h-3.5" />
          Moslashuvchan Ekotizim
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
          Qaysi Biznes Turi Uchun Mo‘ljallangan?
        </h2>
        <p className={`mt-4 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Istalgan yo‘nalishni tanlang — tizim bir zumda shu sohaga mos kassa, tarozi va boshqaruv funksiyalariga o‘tadi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1. DO'KON / SUPERMARKET */}
        <div
          onClick={() => onSelectMode("retail")}
          className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group cursor-pointer relative ${
            currentMode === "retail"
              ? "border-emerald-500 ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/15 bg-gradient-to-b from-emerald-500/10 to-transparent"
              : theme === "dark"
              ? "bg-slate-900/60 border-slate-800 hover:border-emerald-500/40"
              : "bg-white border-slate-200 hover:border-emerald-500/40 shadow-xs"
          }`}
        >
          {currentMode === "retail" && (
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[11px] shadow-md flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Faol Rejim
            </div>
          )}

          <div>
            {/* Visual Stage */}
            <div className={`relative h-44 rounded-2xl border p-4 mb-6 overflow-hidden flex items-center justify-between shadow-inner transition-colors ${
              theme === "dark"
                ? "bg-gradient-to-br from-emerald-500/15 via-emerald-950/30 to-slate-950 border-emerald-500/20"
                : "bg-gradient-to-br from-emerald-50 via-teal-50/70 to-slate-50 border-emerald-200"
            }`}>
              <div className="flex items-center gap-3 z-10">
                <div className="animate-float flex flex-col items-center">
                  <span className="text-4xl drop-shadow-md">🍎</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">
                    1.45 kg
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "1s" }}>
                  <span className="text-3xl drop-shadow-md">🍌</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                    23k s
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "2s" }}>
                  <span className="text-3xl drop-shadow-md">🥖</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-500/30">
                    Non
                  </span>
                </div>
              </div>

              {/* Live Scale HUD badge */}
              <div className={`z-10 backdrop-blur-md p-2.5 rounded-xl border text-right shadow-xl transition-colors ${
                theme === "dark"
                  ? "bg-slate-950/85 border-emerald-500/40 text-white"
                  : "bg-white/95 border-emerald-400 text-slate-900 shadow-slate-200/60"
              }`}>
                <div className="flex items-center justify-end gap-1.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ШТРИХ-ПРИНТ</span>
                </div>
                <div className={`text-sm font-black font-mono mt-0.5 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  1.450 kg
                </div>
                <div className="text-[9px] text-emerald-600 dark:text-emerald-300 font-mono font-bold">STABLE ✓</div>
              </div>
            </div>

            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Chakana & Ulgurji
            </span>
            <h3 className={`text-2xl font-black mt-3 mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              🛒 Do‘konlar & Supermarket
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              Oziq-ovqat, kiyim, xo‘jalik mollari va supermarketlar uchun eng tezkor kassa, elektron tarozi va ombor hisobi.
            </p>

            <div className={`space-y-3 text-xs font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Shtrih-Print tarozilari: LAN orqali yuklash va jonli vazn</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Shtrix-kod skaner: 0.1 soniyada avtomatik tovar qo‘shish</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Nasiya (Qarz) daftari + avtomatik SMS eslatma</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Partiyalar, tannarx va kam qolgan tovarlar signali</span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMode("retail");
            }}
            className={`mt-8 w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
              currentMode === "retail"
                ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/25"
                : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white"
            }`}
          >
            {currentMode === "retail" ? "Tanlangan (Kassani Ko‘rish)" : "Do‘kon Rejimini Sinash"}{" "}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2. KAFE / RESTORAN */}
        <div
          onClick={() => onSelectMode("cafe")}
          className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group cursor-pointer relative ${
            currentMode === "cafe"
              ? "border-orange-500 ring-2 ring-orange-500/50 shadow-2xl shadow-orange-500/15 bg-gradient-to-b from-orange-500/10 to-transparent"
              : theme === "dark"
              ? "bg-slate-900/60 border-slate-800 hover:border-orange-500/40"
              : "bg-white border-slate-200 hover:border-orange-500/40 shadow-xs"
          }`}
        >
          {currentMode === "cafe" && (
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-orange-500 text-white font-black text-[11px] shadow-md flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Faol Rejim
            </div>
          )}

          <div>
            {/* 3D Steaming Coffee & Fast-Food Stage */}
            <div className={`relative h-44 rounded-2xl border p-4 mb-6 overflow-hidden flex items-center justify-between shadow-inner transition-colors ${
              theme === "dark"
                ? "bg-gradient-to-br from-orange-500/15 via-amber-950/30 to-slate-950 border-orange-500/20"
                : "bg-gradient-to-br from-orange-50 via-amber-50/70 to-slate-50 border-orange-200"
            }`}>
              <div className="flex items-center gap-3 z-10">
                <div className="relative animate-float flex flex-col items-center">
                  <span className="text-4xl drop-shadow-md">☕</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-orange-500/20 text-orange-600 dark:text-orange-300 border border-orange-500/30">
                    Cappuccino
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "1s" }}>
                  <span className="text-3xl drop-shadow-md">🍔</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                    Burger
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "2s" }}>
                  <span className="text-3xl drop-shadow-md">🍟</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30">
                    Fri
                  </span>
                </div>
              </div>

              {/* Table status HUD */}
              <div className={`z-10 backdrop-blur-md p-2.5 rounded-xl border text-right shadow-xl transition-colors ${
                theme === "dark"
                  ? "bg-slate-950/85 border-orange-500/40 text-white"
                  : "bg-white/95 border-orange-400 text-slate-900 shadow-slate-200/60"
              }`}>
                <div className="flex items-center justify-end gap-1.5 text-[9px] font-black text-orange-600 dark:text-orange-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span>STOL #4 BAND</span>
                </div>
                <div className={`text-sm font-black mt-0.5 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  142 000 so‘m
                </div>
                <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">+10% Servis ✓</div>
              </div>
            </div>

            <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              Restoran & Fast-Food
            </span>
            <h3 className={`text-2xl font-black mt-3 mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              ☕ Kafe & Fast Food & Burger
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              Stollar xaritasi, ofitsiantlar, oshxona KDS ekrani va xizmat haqi % foizini avtomatik hisoblash.
            </p>

            <div className={`space-y-3 text-xs font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Interaktiv stollar xaritasi va zallar bandligi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Oshxona & Bar KDS ekrani: buyurtmalar darhol oshpazga</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>10%, 15% xizmat haqi foizi avtomatik hisoblanadi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Split check: chekni bo‘lib to‘lash va stolni ko‘chirish</span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMode("cafe");
            }}
            className={`mt-8 w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
              currentMode === "cafe"
                ? "bg-orange-500 text-white font-black shadow-lg shadow-orange-500/25"
                : "bg-orange-500/15 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {currentMode === "cafe" ? "Tanlangan (Kassani Ko‘rish)" : "Kafe Rejimini Sinash"}{" "}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3. SHIRINLIKLAR & QANDOLAT */}
        <div
          onClick={() => onSelectMode("bakery")}
          className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group cursor-pointer relative ${
            currentMode === "bakery"
              ? "border-rose-500 ring-2 ring-rose-500/50 shadow-2xl shadow-rose-500/15 bg-gradient-to-b from-rose-500/10 to-transparent"
              : theme === "dark"
              ? "bg-slate-900/60 border-slate-800 hover:border-rose-500/40"
              : "bg-white border-slate-200 hover:border-rose-500/40 shadow-xs"
          }`}
        >
          {currentMode === "bakery" && (
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-rose-500 text-white font-black text-[11px] shadow-md flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Faol Rejim
            </div>
          )}

          <div>
            {/* 3D Cake & Pastries Stage */}
            <div className={`relative h-44 rounded-2xl border p-4 mb-6 overflow-hidden flex items-center justify-between shadow-inner transition-colors ${
              theme === "dark"
                ? "bg-gradient-to-br from-rose-500/15 via-pink-950/30 to-slate-950 border-rose-500/20"
                : "bg-gradient-to-br from-rose-50 via-pink-50/70 to-slate-50 border-rose-200"
            }`}>
              <div className="flex items-center gap-3 z-10">
                <div className="animate-float flex flex-col items-center">
                  <span className="text-4xl drop-shadow-md">🎂</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30">
                    Biskvit
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "1s" }}>
                  <span className="text-3xl drop-shadow-md">🧁</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-pink-500/20 text-pink-600 dark:text-pink-300 border border-pink-500/30">
                    Cupcake
                  </span>
                </div>
                <div className="animate-float flex flex-col items-center" style={{ animationDelay: "2s" }}>
                  <span className="text-3xl drop-shadow-md">🍓</span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 mt-1 rounded bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30">
                    Qulupnay
                  </span>
                </div>
              </div>

              {/* Prepayment HUD */}
              <div className={`z-10 backdrop-blur-md p-2.5 rounded-xl border text-right shadow-xl transition-colors ${
                theme === "dark"
                  ? "bg-slate-950/85 border-rose-500/40 text-white"
                  : "bg-white/95 border-rose-400 text-slate-900 shadow-slate-200/60"
              }`}>
                <div className="flex items-center justify-end gap-1.5 text-[9px] font-black text-rose-600 dark:text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>ZAKAZ & AVANS</span>
                </div>
                <div className={`text-[11px] font-black mt-0.5 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  Avans: 50 000 s
                </div>
                <div className="text-[9px] text-pink-600 dark:text-pink-300 font-bold">&quot;Tabrik yozuvi&quot; ✓</div>
              </div>
            </div>

            <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
              Konditerskaya & Tortlar
            </span>
            <h3 className={`text-2xl font-black mt-3 mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              🍰 Shirinliklar & Qandolat
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              Tort buyurtmalari, tabrik yozuvlari, vaznli savdo, oldindan avans to‘lovi va qandolatchi sexiga buyurtma uzatish.
            </p>

            <div className={`space-y-3 text-xs font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Tort buyurtmalari va maxsus tabrik yozuvlari</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Oldindan zakaz va kiritilgan avans to‘lovi nazorati</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Grammlab yoki bo‘laklab sotish va tarozi hisobi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Sexga buyurtma kvitansiyasi avtomatik chiqariladi</span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMode("bakery");
            }}
            className={`mt-8 w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
              currentMode === "bakery"
                ? "bg-rose-500 text-white font-black shadow-lg shadow-rose-500/25"
                : "bg-rose-500/15 text-rose-400 hover:bg-rose-500 hover:text-white"
            }`}
          >
            {currentMode === "bakery" ? "Tanlangan (Kassani Ko‘rish)" : "Shirinlik Rejimini Sinash"}{" "}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
