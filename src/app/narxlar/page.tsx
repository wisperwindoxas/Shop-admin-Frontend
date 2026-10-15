"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DIRECTION_PLANS, BusinessDirection } from "@/config/plans";
import {
  FiCheck,
  FiX,
  FiZap,
  FiShield,
  FiHelpCircle,
  FiArrowRight,
  FiShoppingBag,
  FiCoffee,
  FiInfo,
} from "react-icons/fi";
import { GiCakeSlice } from "react-icons/gi";

export default function PricingPage() {
  const [direction, setDirection] = useState<BusinessDirection>("retail");

  const currentSet = DIRECTION_PLANS[direction];

  // Yo'nalishga qarab user-panel imkoniyatlari taqqoslash jadvali
  const comparisonData: Record<
    BusinessDirection,
    Array<{ name: string; basic: string | boolean; standard: string | boolean }>
  > = {
    retail: [
      { name: "Savdo nuqtalari (Kassalar soni)", basic: "1 ta kassa", standard: "3 tagacha kassa" },
      { name: "Cheksiz tovarlar va shtrix-kodlar", basic: true, standard: true },
      { name: "100% Oflayn rejim va chek chop etish", basic: true, standard: true },
      { name: "Shtrix-kod skaner (USB / Bluetooth)", basic: true, standard: true },
      { name: "Kassa smenasi (Ochish/Yopish, Z-hisobot)", basic: true, standard: true },
      { name: "Omborxona qoldiqlari va tannarx hisobi", basic: true, standard: true },
      { name: "Nasiya (Qarz) daftari + avtomatik SMS eslatma", basic: false, standard: true },
      { name: "Shtrih-Print tarozilar (UDP jonli vazn va PLU)", basic: false, standard: true },
      { name: "Kamomad va inventarizatsiya taqqoslash jurnali", basic: false, standard: true },
      { name: "Partiyalar va yaroqlilik muddati nazorati", basic: false, standard: true },
      { name: "Inkassatsiya (Collector) moduli", basic: false, standard: true },
      { name: "Telegram Bot: Kunlik savdo tushumi va qoldiqlar", basic: false, standard: true },
      { name: "Qo‘shimcha kassa ulash", basic: "+50 000 so‘m/oy", standard: "+50 000 so‘m/oy" },
      { name: "Bepul 14 kunlik to‘liq sinov", basic: true, standard: true },
    ],
    cafe: [
      { name: "Terminallar va planshetlar soni", basic: "1 ta terminal", standard: "3 tagacha kassa / planshet" },
      { name: "Tezkor kassa savdosi va chek chiqarish", basic: true, standard: true },
      { name: "100% Oflayn rejimda buyurtma olish", basic: true, standard: true },
      { name: "Taomlar menyusi va fotosuratlari", basic: true, standard: true },
      { name: "Kassir va xodimlar PIN kodi himoyasi", basic: true, standard: true },
      { name: "Interaktiv stollar xaritasi (Zallar, VIP, Terassa)", basic: false, standard: true },
      { name: "Oshxona KDS planshet ekrani va chek printeri", basic: false, standard: true },
      { name: "Taom modifikatorlari (muzli, shakarsiz, qo‘shimcha)", basic: false, standard: true },
      { name: "Xizmat haqi (% servis) avtomatik hisobi", basic: false, standard: true },
      { name: "Hisobni bo‘lish (Split) va stollarni ko‘chirish", basic: false, standard: true },
      { name: "Taom retseptlari (Texkarta va masalliqlar sarfi)", basic: false, standard: true },
      { name: "Telegram Bot: Kunlik kassa va tushum", basic: false, standard: true },
      { name: "Qo‘shimcha ofitsiant plansheti", basic: "+50 000 so‘m/oy", standard: "+50 000 so‘m/oy" },
      { name: "Bepul 14 kunlik to‘liq sinov", basic: true, standard: true },
    ],
    sweets: [
      { name: "Savdo nuqtalari (Kassalar soni)", basic: "1 ta kassa", standard: "3 tagacha kassa" },
      { name: "Pishiriq va shirinliklar katalogi", basic: true, standard: true },
      { name: "100% Oflayn rejim va chek chop etish", basic: true, standard: true },
      { name: "Kassa smenasi va kunlik tushum hisoboti", basic: true, standard: true },
      { name: "Stollarsiz, vizual Shirinliklar POS oynasi", basic: false, standard: true },
      { name: "Elektron tarozi bilan grammli savdo", basic: false, standard: true },
      { name: "Maxsus tort buyurtmalari va topshirish kalendari", basic: false, standard: true },
      { name: "Tabrik yozuvlari va bezak talablari hisobi", basic: false, standard: true },
      { name: "Avans (zaklad) qabul qilish va yakuniy chek", basic: false, standard: true },
      { name: "Qandolat sexiga zakaz uzatish statuslari", basic: false, standard: true },
      { name: "Kremli mahsulotlar yaroqlilik muddati", basic: false, standard: true },
      { name: "Lenta va korobka qadoqlash xarajatlari", basic: false, standard: true },
      { name: "Telegram Bot: Buyurtmalar holati telefonda", basic: false, standard: true },
      { name: "Qo‘shimcha savdo nuqtasi", basic: "+50 000 so‘m/oy", standard: "+50 000 so‘m/oy" },
      { name: "Bepul 14 kunlik to‘liq sinov", basic: true, standard: true },
    ],
  };

  const faqs = [
    {
      q: "150 000 so‘mlik tarif barcha 3 ta yo‘nalishni o‘z ichiga oladimi?",
      a: "Yo‘q. ShopAdmin tizimida biznes yo‘nalishlari (Do‘kon, Kafe, Shirinliklar) bir-biridan qat’iy ajratilgan mustaqil arxitekturaga ega. 150 000 so‘mlik Standart tarif faqat siz tanlagan 1 ta yo‘nalish uchun to‘liq imkoniyatlarni (3 tagacha kassa, KDS/tarozi/ombor) taqdim etadi. Agar bir vaqtning o‘zida ham do‘kon, ham kafe yuritsangiz, har bir yo‘nalish uchun alohida mos tarif to‘lanadi.",
    },
    {
      q: "Birinchi 14 kunlik sinov qanday ishlaydi?",
      a: "Siz tanlagan biznes yo‘nalishi bo‘yicha 14 kun davomida tizimning barcha imkoniyatlaridan to‘liq va bepul foydalanasiz. Hech qanday oldindan to‘lov talab etilmaydi.",
    },
    {
      q: "Keyinchalik qo‘shimcha kassa yoki filial qo‘shsa bo‘ladimi?",
      a: "Albatta. Standart tarifda tanlangan yo‘nalish uchun dastlab 3 tagacha kassa mavjud. Har bir qo‘shimcha kassa uchun oyiga atigi 50 000 so‘m qo‘shiladi.",
    },
    {
      q: "Savdo aylanmasidan foiz ushlanadimi?",
      a: "Mutlaqo yo‘q. ShopAdmin abonent to‘lovi asosida ishlaydi, aylanmangiz qancha bo‘lishidan qat’i nazar qo‘shimcha foiz olinmaydi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-emerald-500/20">
              S
            </span>
            <span className="font-black text-xl tracking-tight text-white">
              Shop<span className="text-emerald-400">Admin</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <Link href="/do-kon-uchun-pos" className="hover:text-white transition">
              Do‘kon
            </Link>
            <Link href="/kafe-restoran-uchun-pos" className="hover:text-white transition">
              Kafe & Restoran
            </Link>
            <Link href="/shirinliklar-uchun-hisob" className="hover:text-white transition">
              Shirinliklar
            </Link>
            <Link href="/offline-pos" className="hover:text-white transition">
              Oflayn POS
            </Link>
            <Link href="/narxlar" className="text-emerald-400">
              Tariflar
            </Link>
            <Link href="/aloqa" className="hover:text-white transition">
              Aloqa
            </Link>
          </nav>

          <Link
            href="/#lead-form"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition active:scale-95"
          >
            Bepul Sinab Ko‘rish
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-wider mb-6">
          <FiZap className="w-3.5 h-3.5" />
          Shaffof va Yo‘nalish Bo‘yicha Alohida Tariflar
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Biznesingiz Yo‘nalishiga Mos Moslashuvchan Tariflar
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Har bir biznes yo‘nalishi o‘ziga xos imkoniyatlarga ega. Kerakli yo‘nalishni tanlang va
          14 kun bepul sinab ko‘ring.
        </p>

        {/* 3 DIRECTION TOGGLE BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setDirection("retail")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
              direction === "retail"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 scale-105 border border-emerald-400"
                : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            <FiShoppingBag className="text-base" />
            <span>Do‘kon & Supermarket</span>
          </button>

          <button
            onClick={() => setDirection("cafe")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
              direction === "cafe"
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105 border border-amber-400"
                : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            <FiCoffee className="text-base" />
            <span>Kafe & Restoran</span>
          </button>

          <button
            onClick={() => setDirection("sweets")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
              direction === "sweets"
                ? "bg-pink-500 text-slate-950 shadow-lg shadow-pink-500/30 scale-105 border border-pink-400"
                : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            <GiCakeSlice className="text-base" />
            <span>Shirinliklar & Qandolat</span>
          </button>
        </div>

        {/* DIRECTION NOTICE BOX */}
        <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 max-w-xl text-left">
          <FiInfo className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Eslatma:</strong> Tarif faqat tanlangan{" "}
            <span className="text-white font-bold">{currentSet.title}</span> uchun amal qiladi. Har
            bir yo‘nalish uchun alohida obuna to‘lanadi.
          </span>
        </div>
      </section>

      {/* PRICING CARDS FOR ACTIVE DIRECTION */}
      <section className="pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[currentSet.basic, currentSet.standard].map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 sm:p-10 border transition relative flex flex-col justify-between ${
                plan.recommended
                  ? "bg-slate-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-lg">
                  Tavsiya etiladi
                </div>
              )}

              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-white/5 text-[11px] font-bold text-slate-400 mb-2">
                  {plan.directionTitle}
                </div>
                <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                <p className="text-slate-400 text-xs mt-2">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {plan.priceFormatted}
                  </span>
                  <span className="text-slate-400 text-sm font-semibold">{plan.period}</span>
                </div>

                <div className="mt-2 text-[11px] text-amber-400/90 font-medium">
                  {plan.directionNotice}
                </div>

                <div className="mt-8 space-y-3.5">
                  <p className="text-xs font-black text-slate-300 uppercase tracking-wider">
                    Ushbu tarif imkoniyatlari:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10">
                <Link
                  href="/#lead-form"
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition active:scale-95 ${
                    plan.recommended
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-white/10 hover:bg-white/15 text-white"
                  }`}
                >
                  14 Kun Bepul Sinash
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE FOR ACTIVE DIRECTION */}
      <section className="py-20 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-white">
              {currentSet.title}: User Panel Imkoniyatlari Taqqoslanishi
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Basic va Standart tariflarining texnik va amaliy farqlari
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-slate-400">
                    User Panel Imkoniyati
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-slate-300 text-center">
                    Basic (100k)
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-emerald-400 text-center">
                    Standart (150k)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonData[direction].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01]">
                    <td className="py-4 px-4 text-slate-300 font-medium">{row.name}</td>
                    <td className="py-4 px-4 text-center text-slate-400">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <FiCheck className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : (
                          <FiX className="w-4 h-4 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-300">{row.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <FiCheck className="w-4 h-4 text-emerald-400 mx-auto" />
                        ) : (
                          <FiX className="w-4 h-4 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-emerald-400">{row.standard}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400 mb-2">
            <FiHelpCircle className="w-4 h-4" /> Ko‘p Beriladigan Savollar
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Tariflar va to‘lov bo‘yicha savol-javoblar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ShopAdmin POS tizimi. Barcha huquqlar himoyalangan.</p>
        <div className="mt-3 flex justify-center gap-6 text-slate-400">
          <Link href="/do-kon-uchun-pos" className="hover:text-white">
            Do‘kon POS
          </Link>
          <Link href="/kafe-restoran-uchun-pos" className="hover:text-white">
            Kafe POS
          </Link>
          <Link href="/shirinliklar-uchun-hisob" className="hover:text-white">
            Shirinliklar
          </Link>
          <Link href="/narxlar" className="text-emerald-400">
            Tariflar
          </Link>
        </div>
      </footer>
    </div>
  );
}
