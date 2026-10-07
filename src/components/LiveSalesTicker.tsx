"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, TrendingUp, Sparkles, X } from "lucide-react";

interface SaleNotification {
  id: number;
  item: string;
  price: number;
  location: string;
  icon: string;
  timeAgo: string;
}

const mockStream: Omit<SaleNotification, "id" | "timeAgo">[] = [
  { item: "Burger Classic Double", price: 35000, location: "Toshkent, Chilonzor • Kafe", icon: "🍔" },
  { item: "Coca-Cola 0.5L Muzdek", price: 12000, location: "Samarqand, Markaz • Do‘kon", icon: "🥤" },
  { item: "Qulupnayli Tort 1.2kg", price: 85000, location: "Toshkent, Yunusobod • Qandolat", icon: "🎂" },
  { item: "Lavash Tandir Pishloqli", price: 32000, location: "Farg‘ona • Fast Food", icon: "🌯" },
  { item: "Olma Qizil (Tarozi 1.45kg)", price: 26100, location: "Buxoro, Supermarket", icon: "🍎" },
  { item: "Issiq Cappuccino 2x", price: 36000, location: "Namangan • Coffee Point", icon: "☕" },
  { item: "Shokoladli Donut 3x", price: 27000, location: "Andijon • Shirinliklar", icon: "🍩" },
  { item: "Kartoshka Fri Katta", price: 18000, location: "Qarshi • Burger Bar", icon: "🍟" },
];

export default function LiveSalesTicker() {
  const [currentSale, setCurrentSale] = useState<SaleNotification | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    // Show new notification every 4.5 seconds
    const interval = setInterval(() => {
      const template = mockStream[index % mockStream.length];
      setCurrentSale({
        id: Date.now(),
        item: template.item,
        price: template.price,
        location: template.location,
        icon: template.icon,
        timeAgo: "Hozirgina",
      });
      setIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, [index]);

  if (!isVisible || !currentSale) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm pointer-events-auto animate-bounce-subtle">
      <div className="rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-emerald-500/30 p-3.5 shadow-2xl text-white flex items-start gap-3 relative group">
        {/* Glowing badge icon */}
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
          {currentSale.icon}
        </div>

        <div className="flex-1 pr-6">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Real-Vaqt Savdosi • {currentSale.timeAgo}</span>
          </div>

          <div className="text-xs font-black text-white mt-0.5 line-clamp-1">
            {currentSale.item}
          </div>

          <div className="flex items-center justify-between text-[11px] mt-1">
            <span className="font-mono font-black text-emerald-400">
              +{currentSale.price.toLocaleString("uz-UZ")} so‘m
            </span>
            <span className="text-[10px] text-slate-400">{currentSale.location}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors p-1"
          title="Yopish"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
