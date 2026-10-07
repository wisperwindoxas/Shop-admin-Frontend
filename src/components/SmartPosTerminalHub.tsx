"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiZap,
  FiCheckCircle,
  FiWifiOff,
  FiPrinter,
  FiCreditCard,
  FiTrendingUp,
  FiClock,
  FiShield,
  FiActivity,
  FiSmartphone,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaBarcode } from "react-icons/fa";

interface SmartPosTerminalHubProps {
  mode: "retail" | "cafe" | "bakery";
  theme: "dark" | "light";
  onOpenDemo?: () => void;
}

export default function SmartPosTerminalHub({
  mode,
  theme,
  onOpenDemo,
}: SmartPosTerminalHubProps) {
  // Live dynamic counter for interactive feeling
  const [liveSales, setLiveSales] = useState(4850000);
  const [checkCount, setCheckCount] = useState(142);
  const [lastScannedItem, setLastScannedItem] = useState("Olma Qizil 1.25 kg");
  const [lastPrice, setLastPrice] = useState("22 500 so'm");
  const [scannerPulse, setScannerPulse] = useState(false);

  // Direction specific data
  const modeData = {
    retail: {
      badge: "Do'kon & Supermarket POS",
      accentColor: "#10b981",
      accentBg: "bg-emerald-500",
      accentBorder: "border-emerald-500/30",
      accentText: "text-emerald-500",
      tagEmoji: "🛒",
      scaleLabel: "Shtrih-Print Jonli Tarozi",
      scaleValue: "1.250 kg",
      recentName: "Olma Qizil (Qizil Shirin)",
      recentPrice: "22 500 s",
      highlightTitle: "Oflayn Kassa Faol",
      highlightSubtitle: "Internet uzilsa ham to'liq ishlaydi",
    },
    cafe: {
      badge: "Kafe & Restoran KDS",
      accentColor: "#f97316",
      accentBg: "bg-orange-500",
      accentBorder: "border-orange-500/30",
      accentText: "text-orange-500",
      tagEmoji: "☕",
      scaleLabel: "Stol #4 • Ofitsiant Ali",
      scaleValue: "+10% Xizmat",
      recentName: "2x Cappuccino + Lavash",
      recentPrice: "82 000 s",
      highlightTitle: "Oshxona KDS Bog'langan",
      highlightSubtitle: "Buyurtmalar oshpazga sekundda yetadi",
    },
    bakery: {
      badge: "Shirinlik & Qandolat POS",
      accentColor: "#f43f5e",
      accentBg: "bg-rose-500",
      accentBorder: "border-rose-500/30",
      accentText: "text-rose-500",
      tagEmoji: "🍰",
      scaleLabel: "Tort Zakaz #108 • Avans",
      scaleValue: "50 000 s",
      recentName: "Qulupnayli Biskvit Tort",
      recentPrice: "165 000 s",
      highlightTitle: "Sexga Zakaz Yuborildi",
      highlightSubtitle: "Vaqti va tabrik yozuvi bilan",
    },
  };

  const current = modeData[mode];

  // Periodic subtle scanner pulse simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setScannerPulse(true);
      setTimeout(() => setScannerPulse(false), 900);
      setLiveSales((prev) => prev + Math.floor(Math.random() * 15000 + 5000));
      setCheckCount((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div
      className={`relative w-full rounded-3xl p-5 sm:p-7 border backdrop-blur-2xl transition-all duration-300 shadow-2xl overflow-hidden group ${
        theme === "dark"
          ? "bg-slate-900/80 border-white/10 shadow-black/40"
          : "bg-white/95 border-slate-200/90 shadow-slate-300/40"
      }`}
    >
      {/* Background Ambient Glow tailored to business mode */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-25 pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: current.accentColor }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "#06b6d4" }}
      />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b transition-colors duration-300 mb-5 relative z-10"
        style={{ borderColor: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(226,232,240,0.9)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <span
              className="w-3 h-3 rounded-full animate-ping absolute opacity-75"
              style={{ backgroundColor: current.accentColor }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full relative"
              style={{ backgroundColor: current.accentColor }}
            />
          </div>
          <div>
            <span className={`text-xs font-black tracking-wide uppercase ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              SMART CLOUD POS TERMINAL
            </span>
            <div className={`text-[10px] font-semibold ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
              {current.badge}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
            theme === "dark"
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
              : "bg-emerald-50 text-emerald-700 border-emerald-200"
          }`}>
            <FiWifiOff className="text-xs" />
            <span>Oflayn Rejim Tayyor</span>
          </div>
        </div>
      </div>

      {/* Main Center Display: Hero Mockup with Transparent 3D Logo */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center relative z-10">
        {/* Left Visual: 3D POS Device & Logo Showcase */}
        <div className="sm:col-span-5 flex flex-col items-center justify-center text-center p-3 relative">
          {/* Circular Glowing Halo */}
          <div
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105"
            style={{
              background: theme === "dark"
                ? `radial-gradient(circle, ${current.accentColor}25 0%, transparent 70%)`
                : `radial-gradient(circle, ${current.accentColor}18 0%, transparent 70%)`,
            }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              <Image
                src="/logo.png"
                alt="Shop-Admin.uz POS Terminal Logo"
                fill
                priority
                className="object-contain drop-shadow-2xl transition-transform duration-300"
              />
            </div>

            {/* Pulsing Scanner Beam simulation */}
            {scannerPulse && (
              <div
                className="absolute inset-x-2 top-1/2 h-0.5 animate-pulse shadow-lg pointer-events-none"
                style={{
                  backgroundColor: current.accentColor,
                  boxShadow: `0 0 15px ${current.accentColor}`,
                }}
              />
            )}
          </div>

          {/* Quick Status Tag */}
          <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-xl text-[11px] font-black border ${
            theme === "dark"
              ? "bg-slate-800/90 text-slate-200 border-slate-700 shadow-md"
              : "bg-slate-50 text-slate-800 border-slate-200 shadow-sm"
          }`}>
            <span className="text-sm">{current.tagEmoji}</span>
            <span>{current.scaleLabel}</span>
          </div>
        </div>

        {/* Right Info: Live Cashier Stream & Metrics */}
        <div className="sm:col-span-7 space-y-3">
          {/* Revenue & Checks Card */}
          <div
            className={`p-3.5 rounded-2xl border transition-all ${
              theme === "dark"
                ? "bg-slate-800/50 border-white/5 hover:border-white/10"
                : "bg-slate-50/90 border-slate-200/80 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                Bugungi Kassa Tushumi
              </span>
              <span className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-500">
                <FiTrendingUp /> +18.4%
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                {liveSales.toLocaleString()} <span className="text-xs font-bold text-slate-400">so‘m</span>
              </div>
              <div className={`text-xs font-bold ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                {checkCount} ta chek
              </div>
            </div>
          </div>

          {/* Live Scanned Product Feed */}
          <div
            className={`p-3.5 rounded-2xl border transition-all ${
              theme === "dark"
                ? "bg-slate-800/50 border-white/5"
                : "bg-slate-50/90 border-slate-200/80"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}>
                <FaBarcode className={current.accentText} />
                Oxirgi Savdo / Skaner
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                0.1 soniya
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-xs sm:text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  {current.recentName}
                </div>
                <div className={`text-[10px] ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                  Miqdor: {current.scaleValue}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm font-black text-emerald-500">
                  {current.recentPrice}
                </div>
                <div className="text-[9px] font-bold text-cyan-400 uppercase">
                  To‘landi ✓
                </div>
              </div>
            </div>
          </div>

          {/* Connected Hardware Icons */}
          <div className="grid grid-cols-4 gap-2 pt-1">
            {[
              { label: "Tarozi", icon: "⚖️", status: "UDP Jonli", color: "text-emerald-500" },
              { label: "Skaner", icon: "⚡", status: "USB HID", color: "text-cyan-500" },
              { label: "Chek", icon: "🖨️", status: "80mm ESC", color: "text-amber-500" },
              { label: "To'lov", icon: "💳", status: "Humo/Click", color: "text-purple-500" },
            ].map((hw, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl border text-center transition-all ${
                  theme === "dark"
                    ? "bg-slate-800/40 border-white/5"
                    : "bg-white border-slate-200/70 shadow-2xs"
                }`}
              >
                <div className="text-base mb-0.5">{hw.icon}</div>
                <div className={`text-[10px] font-bold leading-tight ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                  {hw.label}
                </div>
                <div className={`text-[8px] font-semibold truncate ${hw.color}`}>
                  {hw.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Interactive Bar */}
      <div
        className={`mt-5 pt-3.5 border-t flex flex-wrap items-center justify-between gap-3 text-xs relative z-10 ${
          theme === "dark" ? "border-white/10" : "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <FiShield className="text-emerald-500 text-sm shrink-0" />
          <span className={`text-[11px] font-semibold ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            PIN-kodli xavfsizlik himoyasi va kassa smena nazorati
          </span>
        </div>

        <a
          href="#pos-demo"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-[11px] text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
        >
          <span>Interaktiv Kassani Sinash</span>
          <FiArrowUpRight className="text-xs" />
        </a>
      </div>
    </div>
  );
}
