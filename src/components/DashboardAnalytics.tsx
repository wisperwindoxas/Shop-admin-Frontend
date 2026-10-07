"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  CreditCard,
  Package,
  ShoppingBag,
  DollarSign,
  PieChart,
  BarChart3,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface DashboardAnalyticsProps {
  theme: "dark" | "light";
}

// Silliq raqamlar hisoblagichi (Animated Counter)
function AnimatedCounter({
  target,
  duration = 900,
  formatter = (v: number) => v.toLocaleString("uz-UZ"),
}: {
  target: number;
  duration?: number;
  formatter?: (val: number) => string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animFrame: number;

    const startVal = count;
    const diff = target - startVal;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startVal + diff * ease));

      if (progress < 1) {
        animFrame = requestAnimationFrame(step);
      }
    };

    animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [target, duration]);

  return <span>{formatter(count)}</span>;
}

export default function DashboardAnalytics({ theme }: DashboardAnalyticsProps) {
  const [activePeriod, setActivePeriod] = useState<"today" | "week" | "month">("today");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Period ma'lumotlari
  const periodData = {
    today: {
      revenue: 12450000,
      revenueGrow: "+18.4%",
      orders: 148,
      avgCheck: 84100,
      activeProducts: 1284,
      profit: 3850000,
      profitGrow: "+31.2%",
      cashShare: 58,
      cashAmount: 7220000,
      cardShare: 32,
      cardAmount: 3980000,
      onlineShare: 10,
      onlineAmount: 1250000,
      chartPoints: [
        { label: "09:00", val: 30, amount: 850000, orders: 12 },
        { label: "11:00", val: 55, amount: 1400000, orders: 19 },
        { label: "13:00", val: 85, amount: 2800000, orders: 34 },
        { label: "15:00", val: 65, amount: 1950000, orders: 23 },
        { label: "17:00", val: 95, amount: 3200000, orders: 38 },
        { label: "19:00", val: 100, amount: 3500000, orders: 42 },
        { label: "21:00", val: 70, amount: 2100000, orders: 25 },
        { label: "23:00", val: 40, amount: 1100000, orders: 15 },
      ],
    },
    week: {
      revenue: 84200000,
      revenueGrow: "+24.8%",
      orders: 986,
      avgCheck: 85400,
      activeProducts: 1310,
      profit: 26400000,
      profitGrow: "+35.5%",
      cashShare: 52,
      cashAmount: 43780000,
      cardShare: 36,
      cardAmount: 30310000,
      onlineShare: 12,
      onlineAmount: 10110000,
      chartPoints: [
        { label: "Dush", val: 60, amount: 10500000, orders: 125 },
        { label: "Sesh", val: 72, amount: 11800000, orders: 138 },
        { label: "Chor", val: 68, amount: 11200000, orders: 131 },
        { label: "Pay", val: 80, amount: 12900000, orders: 149 },
        { label: "Juma", val: 95, amount: 15200000, orders: 178 },
        { label: "Shan", val: 100, amount: 16800000, orders: 192 },
        { label: "Yak", val: 88, amount: 14300000, orders: 165 },
      ],
    },
    month: {
      revenue: 348900000,
      revenueGrow: "+38.6%",
      orders: 4120,
      avgCheck: 84680,
      activeProducts: 1350,
      profit: 108500000,
      profitGrow: "+42.1%",
      cashShare: 48,
      cashAmount: 167470000,
      cardShare: 38,
      cardAmount: 132580000,
      onlineShare: 14,
      onlineAmount: 48850000,
      chartPoints: [
        { label: "1-hafta", val: 75, amount: 78500000, orders: 940 },
        { label: "2-hafta", val: 85, amount: 86400000, orders: 1020 },
        { label: "3-hafta", val: 92, amount: 93200000, orders: 1110 },
        { label: "4-hafta", val: 100, amount: 98800000, orders: 1180 },
      ],
    },
  };

  const current = periodData[activePeriod];
  const chartPoints = current.chartPoints;

  // SVG curved path hisoblash
  const svgWidth = 600;
  const svgHeight = 160;
  const paddingX = 30;
  const paddingY = 20;

  const getCoordinates = () => {
    return chartPoints.map((pt, idx) => {
      const x =
        paddingX +
        (idx / (chartPoints.length - 1)) * (svgWidth - paddingX * 2);
      const y =
        svgHeight -
        paddingY -
        (pt.val / 100) * (svgHeight - paddingY * 2);
      return { x, y, pt };
    });
  };

  const coords = getCoordinates();

  // Smooth Bezier Curve Path
  const buildSmoothPath = () => {
    if (coords.length === 0) return "";
    let d = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const p0 = coords[i];
      const p1 = coords[i + 1];
      const cx = (p0.x + p1.x) / 2;
      d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const linePath = buildSmoothPath();
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${svgHeight} L ${coords[0].x} ${svgHeight} Z`;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-wider mb-3">
          <BarChart3 className="w-3.5 h-3.5" />
          Katta POS Dashboard & Tahlil
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
          Barcha Muhim Ko‘rsatkichlar Bitta Displeyda
        </h2>
        <p className={`mt-3 text-sm sm:text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Kassa tushumi, sof foyda, ombor balansi va soatlik savdo dinamikasi har bir soniyada jonli hisoblanadi.
        </p>
      </div>

      {/* Browser Mockup Window */}
      <div
        className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
          theme === "dark"
            ? "bg-slate-950/90 border-slate-800 shadow-emerald-950/20"
            : "bg-white border-slate-200 shadow-xl shadow-slate-200/60"
        }`}
      >
        {/* Browser Top Chrome Header */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between text-xs transition-colors ${
            theme === "dark" ? "border-slate-800 bg-slate-900/70" : "border-slate-200 bg-slate-100/80"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className={`font-mono ml-4 hidden sm:inline text-[11px] font-bold ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              https://app.shop-admin.uz/analytics-dashboard
            </span>
          </div>

          {/* Period Tabs with dynamic animated state */}
          <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border transition-colors ${
            theme === "dark" ? "bg-slate-800/60 border-white/5" : "bg-white border-slate-200 shadow-xs"
          }`}>
            {(["today", "week", "month"] as const).map((period) => (
              <button
                key={period}
                onClick={() => {
                  setActivePeriod(period);
                  setHoveredIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activePeriod === period
                    ? "bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/25 scale-102"
                    : theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {period === "today" ? "Bugun" : period === "week" ? "Haftalik" : "Oylik"}
              </button>
            ))}
          </div>
        </div>

        {/* 4 KPI Cards Grid with Animated Counters */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* 1. Jami Savdo (Revenue) */}
            <div className={`p-5 rounded-2xl border transition-all hover:scale-101 ${
              theme === "dark"
                ? "bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30"
                : "bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white border-emerald-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold uppercase text-[10px] tracking-wider ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>Jami Savdo</span>
                <span className="text-emerald-500 dark:text-emerald-400 font-black text-xs flex items-center gap-0.5">
                  {current.revenueGrow} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className={`text-2xl sm:text-3xl font-black font-mono mt-2.5 tracking-tight ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                <AnimatedCounter target={current.revenue} />{" "}
                <span className={`text-xs font-sans font-medium ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}>so‘m</span>
              </div>
              <div className={`text-[10px] mt-1 flex items-center gap-1 ${
                theme === "dark" ? "text-slate-400" : "text-slate-600 font-medium"
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Avvalgi davrga nisbatan o‘sish
              </div>
            </div>

            {/* 2. Buyurtmalar (Orders) */}
            <div className={`p-5 rounded-2xl border transition-all hover:scale-101 ${
              theme === "dark"
                ? "bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/30"
                : "bg-gradient-to-br from-cyan-50 via-sky-50/50 to-white border-cyan-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold uppercase text-[10px] tracking-wider ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>Buyurtmalar</span>
                <ShoppingBag className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              </div>
              <div className={`text-2xl sm:text-3xl font-black font-mono mt-2.5 tracking-tight ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                <AnimatedCounter target={current.orders} />{" "}
                <span className={`text-xs font-sans font-medium ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}>ta chek</span>
              </div>
              <div className={`text-[10px] mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                O‘rtacha chek: <span className={`font-bold font-mono ${
                  theme === "dark" ? "text-slate-300" : "text-slate-900"
                }`}><AnimatedCounter target={current.avgCheck} /> s</span>
              </div>
            </div>

            {/* 3. Ombor Mahsulotlari */}
            <div className={`p-5 rounded-2xl border transition-all hover:scale-101 ${
              theme === "dark"
                ? "bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30"
                : "bg-gradient-to-br from-purple-50 via-indigo-50/50 to-white border-purple-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold uppercase text-[10px] tracking-wider ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>Ombordagi Tovar</span>
                <Package className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              </div>
              <div className={`text-2xl sm:text-3xl font-black font-mono mt-2.5 tracking-tight ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                <AnimatedCounter target={current.activeProducts} />{" "}
                <span className={`text-xs font-sans font-medium ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}>xil</span>
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                Barcha qoldiqlar nazoratda ✓
              </div>
            </div>

            {/* 4. Sof Foyda (Profit) */}
            <div className={`p-5 rounded-2xl border transition-all hover:scale-101 ${
              theme === "dark"
                ? "bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30"
                : "bg-gradient-to-br from-amber-50 via-yellow-50/50 to-white border-amber-200 shadow-sm"
            }`}>
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold uppercase text-[10px] tracking-wider ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>Sof Foyda</span>
                <span className="text-amber-600 dark:text-amber-400 font-black text-xs flex items-center gap-0.5">
                  {current.profitGrow} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-amber-600 dark:text-amber-400 mt-2.5 tracking-tight">
                <AnimatedCounter target={current.profit} />{" "}
                <span className={`text-xs font-sans font-medium ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>so‘m</span>
              </div>
              <div className={`text-[10px] mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Tannarx va xarajat chegirilgach
              </div>
            </div>
          </div>

          {/* Interactive Real Dynamic Chart & Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Dynamic Interactive SVG Line Chart (7 Cols) */}
            <div className={`lg:col-span-7 p-6 rounded-2xl border flex flex-col justify-between relative overflow-hidden transition-colors ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-800/80"
                : "bg-slate-50/90 border-slate-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className={`text-sm sm:text-base font-black flex items-center gap-2 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}>
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      Savdo O‘sish Dinamikasi (Dinamik Grafik)
                    </h4>
                    <p className={`text-[11px] ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      {activePeriod === "today"
                        ? "Kun davomidagi soatlik savdo oqimi"
                        : activePeriod === "week"
                        ? "Hafta kunlari kesimidagi savdo"
                        : "Oyning haftalari kesimidagi natija"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Jonli Tahlil</span>
                  </div>
                </div>

                {/* SVG Curve Chart */}
                <div className="relative w-full h-44 sm:h-52 my-2">
                  <svg
                    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d={areaPath}
                      fill="url(#chartGradient)"
                      className="transition-all duration-700 ease-out"
                    />

                    {/* Smooth Line */}
                    <path
                      d={linePath}
                      fill="none"
                      stroke="url(#strokeGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />

                    {/* Interactive Points */}
                    {coords.map((c, i) => (
                      <g key={i}>
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={hoveredIndex === i ? 6.5 : 4}
                          className="fill-emerald-400 stroke-white dark:stroke-slate-950 stroke-2 cursor-pointer transition-all duration-200"
                          onMouseEnter={() => setHoveredIndex(i)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Tooltip on hover */}
                  {hoveredIndex !== null && chartPoints[hoveredIndex] && (
                    <div
                      className={`absolute -top-3 z-20 pointer-events-none transform -translate-x-1/2 p-2.5 rounded-xl shadow-2xl backdrop-blur-md text-center transition-all animate-fade-in border ${
                        theme === "dark"
                          ? "bg-slate-950/95 border-emerald-500/50 text-white"
                          : "bg-white/95 border-emerald-500 text-slate-900 shadow-lg"
                      }`}
                      style={{
                        left: `${(coords[hoveredIndex].x / svgWidth) * 100}%`,
                      }}
                    >
                      <div className={`text-[10px] font-bold ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                        {chartPoints[hoveredIndex].label}
                      </div>
                      <div className="text-xs font-black font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {chartPoints[hoveredIndex].amount.toLocaleString("uz-UZ")} so‘m
                      </div>
                      <div className={`text-[9px] ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                        {chartPoints[hoveredIndex].orders} ta chek
                      </div>
                    </div>
                  )}
                </div>

                {/* X-Axis Labels */}
                <div className={`flex justify-between text-[11px] font-bold px-4 border-t pt-2 ${
                  theme === "dark" ? "text-slate-400 border-slate-800/60" : "text-slate-600 border-slate-200"
                }`}>
                  {chartPoints.map((p, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`transition-colors cursor-pointer ${
                        hoveredIndex === i
                          ? "text-emerald-600 dark:text-emerald-400 font-black scale-110"
                          : theme === "dark"
                          ? "hover:text-white"
                          : "hover:text-slate-950"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`pt-4 mt-2 border-t flex items-center justify-between text-xs ${
                theme === "dark" ? "border-slate-800/60 text-slate-400" : "border-slate-200 text-slate-600"
              }`}>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Maksimal savdo davri: <strong className={theme === "dark" ? "text-white" : "text-slate-900"}>19:00 (Kechki pik)</strong>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Avtomatik hisoblandi ✓</span>
              </div>
            </div>

            {/* Payment Methods & Cash Distribution (5 Cols) */}
            <div className={`lg:col-span-5 p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-800/80"
                : "bg-slate-50/90 border-slate-200 shadow-sm"
            }`}>
              <div>
                <h4 className={`text-sm sm:text-base font-black flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  <CreditCard className="w-4 h-4 text-cyan-500" />
                  To‘lov Turlari Bo‘yicha Taqsimot
                </h4>
                <p className={`text-[11px] mb-5 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Naqd pul, bank kartalari va onlayn ilovalar ulushi
                </p>

                <div className="space-y-4">
                  {/* Naqd pul */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        💵 Naqd pul
                      </span>
                      <span className={`font-mono ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                        {current.cashShare}% (<AnimatedCounter target={current.cashAmount} /> s)
                      </span>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${
                      theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${current.cashShare}%` }}
                      />
                    </div>
                  </div>

                  {/* Karta */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                        💳 Karta (Humo / Uzcard)
                      </span>
                      <span className={`font-mono ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                        {current.cardShare}% (<AnimatedCounter target={current.cardAmount} /> s)
                      </span>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${
                      theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${current.cardShare}%` }}
                      />
                    </div>
                  </div>

                  {/* Click / Payme */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-purple-600 dark:text-purple-400 flex items-center gap-1">
                        📱 Click / Payme / Nasiya
                      </span>
                      <span className={`font-mono ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                        {current.onlineShare}% (<AnimatedCounter target={current.onlineAmount} /> s)
                      </span>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${
                      theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${current.onlineShare}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-5 mt-4 border-t text-[11px] flex items-center justify-between ${
                theme === "dark" ? "border-slate-800/80 text-slate-400" : "border-slate-200 text-slate-600"
              }`}>
                <span>Avtomat kassa inkassatsiyasi</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-black flex items-center gap-1">
                  Kassa Balansi: Aniq ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
