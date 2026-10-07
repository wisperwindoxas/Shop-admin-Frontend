"use client";

import React from "react";
import {
  ShoppingCart,
  Layers,
  CreditCard,
  BarChart3,
  Users,
  Store,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface FeaturesShowcaseProps {
  theme: "dark" | "light";
}

const features = [
  {
    icon: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
    badge: "0.1s Tezlik",
    title: "Tezkor Savdo & POS Kassa",
    desc: "Shtrix-kod skaneri, elektron tarozi, tezkor qidiruv va bitta tugma bilan chek chiqarish.",
    highlight: "Sotuv vaqti 3 baravar tejaladi",
    color: "#10b981",
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-400" />,
    badge: "Real-vaqt Qoldiq",
    title: "Aqlli Ombor & Partiyalar",
    desc: "Mahsulot qoldiqlari, partiyalar, tannarx va muddati o‘tish xavfi bo‘yicha avtomatik ogohlantirishlar.",
    highlight: "Kam qolgan tovarlar darhol ko‘rinadi",
    color: "#6245ED",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-cyan-400" />,
    badge: "Aralash To‘lov",
    title: "Kassa & Moliya Nazorati",
    desc: "Naqd, Humo, Uzcard, Click va Nasiya to‘lovlari. Smena ochish/yopish va kassa tortmasini avto-ochish.",
    highlight: "Tushum bir tiyingacha to‘g‘ri chiqadi",
    color: "#06b6d4",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
    badge: "P&L Foyda Tahlili",
    title: "Avtomatik Hisobotlar",
    desc: "Kunlik, haftalik va oylik sof foyda, eng ko‘p sotilgan tovarlar va rentabellik grafiklari.",
    highlight: "Bir bosishda Excel/PDF yuklash",
    color: "#f59e0b",
  },
  {
    icon: <Users className="w-6 h-6 text-rose-400" />,
    badge: "SMS Eslatma",
    title: "Mijozlar & Nasiya Daftari",
    desc: "Mijozlar balansi, qarz muddatlari, to‘lov tarixi va avtomatik SMS xabarnomalar moduli.",
    highlight: "Qarzdorliklarni qaytarish 2 barobar tezlashadi",
    color: "#f43f5e",
  },
  {
    icon: <Store className="w-6 h-6 text-purple-400" />,
    badge: "Cheksiz Nuqtalar",
    title: "Tarmoq & Filiallar",
    desc: "Bir nechta do‘kon, filial yoki oshxona omborini yagona boshqaruv kabinetidan nazorat qilish.",
    highlight: "Barcha filiallar bitta ekranda",
    color: "#a855f7",
  },
];

export default function FeaturesShowcase({ theme }: FeaturesShowcaseProps) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          To‘liq Imkoniyatlar
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
          POS Bilan Biznesingizni Nazorat Qiling
        </h2>
        <p className={`mt-4 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Kichik qahvaxonadan tortib, yirik supermarketlar tarmog‘igacha bo‘lgan barcha ehtiyojlar uchun yagona yechim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] group cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/60 border-slate-800 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10"
                : "bg-white border-slate-200 hover:border-brand-500/50 hover:shadow-xl shadow-xs"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}35`,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: `${item.color}10`,
                    color: item.color,
                    borderColor: `${item.color}30`,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-black mb-2 group-hover:text-brand-400 transition-colors">
                {item.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>{item.highlight}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
