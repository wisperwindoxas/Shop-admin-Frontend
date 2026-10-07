"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  BarChart3,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface CtaSectionProps {
  theme: "dark" | "light";
  onOpenLeadModal: (plan?: string) => void;
  onOpenDemo: () => void;
}

export default function CtaSection({
  theme,
  onOpenLeadModal,
  onOpenDemo,
}: CtaSectionProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto relative overflow-hidden rounded-3xl sm:rounded-[40px] p-8 sm:p-16 lg:p-20 transition-all duration-300 ${
        theme === "dark"
          ? "border border-brand-500/30 shadow-2xl bg-gradient-to-br from-brand-950/60 via-slate-950 to-slate-900 text-white"
          : "border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/80 text-slate-900"
      }`}
    >
      {/* Ambient background glows */}
      <div
        className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === "dark" ? "bg-brand-500/20" : "bg-emerald-500/15"
        }`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          theme === "dark" ? "bg-emerald-500/20" : "bg-teal-500/15"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & Action Buttons */}
        <div className="lg:col-span-7 space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
              theme === "dark"
                ? "bg-brand-500/20 text-brand-300 border border-brand-500/40"
                : "bg-emerald-500/15 text-emerald-700 border border-emerald-500/30"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            14 Kunlik Bepul Sinov Muddati
          </div>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-950"
            }`}
          >
            Savdoni Bugundan Boshqaring.
          </h2>

          <p
            className={`text-base sm:text-lg max-w-xl leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Shop-Admin POS tizimimiz bilan biznesingizni tezroq, aniqroq va samaraliroq boshqaring.
            Hech qanday murakkablik yo‘q — o‘rnatish atigi 5 daqiqa.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenLeadModal("standart")}
              className="px-8 py-4 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-95 shadow-xl shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
            >
              Demo Boshlash <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemo}
              className={`px-8 py-4 rounded-2xl font-black text-sm transition-all cursor-pointer border ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-white/15 text-white border-white/20 backdrop-blur-md"
                  : "bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
              }`}
            >
              Tizim Haqida
            </button>
          </div>

          {/* Guarantee bullet points */}
          <div
            className={`pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold ${
              theme === "dark"
                ? "border-white/10 text-slate-300"
                : "border-slate-200 text-slate-700"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Oflayn va Onlayn</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Tarozi & Skaner tayyor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Bepul o‘rnatib berish</span>
            </div>
          </div>
        </div>

        {/* Right: 3D POS Terminal with Orbiting Floating Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px]">
          {/* Central 3D Terminal Image */}
          <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)] animate-float">
            <Image
              src="/logo.png"
              alt="Shop-Admin 3D POS Terminal"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Orbiting Pill 1: Sales */}
          <div
            className={`absolute top-2 left-0 sm:-left-4 z-20 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-black animate-float ${
              theme === "dark"
                ? "bg-slate-900/90 border border-emerald-500/40 text-emerald-400"
                : "bg-white/95 border border-emerald-500/30 text-emerald-600 shadow-emerald-500/10"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span>Savdo: +18.4%</span>
          </div>

          {/* Orbiting Pill 2: Inventory */}
          <div
            className={`absolute bottom-4 left-4 z-20 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-black animate-float ${
              theme === "dark"
                ? "bg-slate-900/90 border border-brand-500/40 text-brand-300"
                : "bg-white/95 border border-indigo-500/30 text-indigo-600 shadow-indigo-500/10"
            }`}
            style={{ animationDelay: "1.5s" }}
          >
            <Layers className="w-4 h-4 text-indigo-500" />
            <span>Ombor: 1 284 tovar</span>
          </div>

          {/* Orbiting Pill 3: Reports */}
          <div
            className={`absolute top-8 right-0 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-black animate-float ${
              theme === "dark"
                ? "bg-slate-900/90 border border-cyan-500/40 text-cyan-300"
                : "bg-white/95 border border-cyan-500/30 text-cyan-600 shadow-cyan-500/10"
            }`}
            style={{ animationDelay: "2s" }}
          >
            <BarChart3 className="w-4 h-4 text-cyan-500" />
            <span>P&L Foyda: Aniq ✓</span>
          </div>

          {/* Orbiting Pill 4: Customers */}
          <div
            className={`absolute bottom-6 right-2 sm:-right-2 z-20 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-2 text-xs font-black animate-float ${
              theme === "dark"
                ? "bg-slate-900/90 border border-amber-500/40 text-amber-300"
                : "bg-white/95 border border-amber-500/30 text-amber-700 shadow-amber-500/10"
            }`}
            style={{ animationDelay: "2.5s" }}
          >
            <Users className="w-4 h-4 text-amber-500" />
            <span>Mijozlar: Nasiya SMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
