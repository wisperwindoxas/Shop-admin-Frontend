import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_PLANS } from "@/config/plans";
import {
  FiCheck,
  FiX,
  FiZap,
  FiShield,
  FiHelpCircle,
  FiArrowRight,
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Shaffof Tariflar va Narxlar | ShopAdmin POS Dasturi",
  description:
    "ShopAdmin POS tizimining qulay va shaffof narxlari. Yashirin to‘lovlarsiz, 14 kunlik bepul sinov muddati bilan. Basic 100 000 so‘m, Standart 150 000 so‘m oyiga.",
  alternates: {
    canonical: "https://shop-admin.uz/narxlar",
  },
  openGraph: {
    title: "Shaffof Tariflar va Narxlar | ShopAdmin POS Dasturi",
    description:
      "Biznesingiz uchun eng maqbul tarifni tanlang. 14 kun bepul sinov, bepul o‘rnatish va texnik qo‘llab-quvvatlash.",
    url: "https://shop-admin.uz/narxlar",
  },
};

export default function PricingPage() {
  const comparisonRows = [
    { name: "Kassalar soni (baza tarifda)", basic: "1 ta kassa", standard: "3 tagacha kassa" },
    {
      name: "Biznes rejimlari (Do‘kon, Kafe, Shirinlik)",
      basic: "Faqat 1 ta tanlangan rejim",
      standard: "Barcha 3 ta rejim qo‘llab-quvvatlanadi",
    },
    { name: "100% Oflayn ishlash imkoniyati", basic: true, standard: true },
    { name: "Shtrix-kod skaner va chek printer integratsiyasi", basic: true, standard: true },
    { name: "Ombor qoldiqlari va kamomad hisobi", basic: true, standard: true },
    { name: "Qarz (nasiya) daftari va mijozlar hisobi", basic: true, standard: true },
    { name: "Stollar xaritasi va oshxona printeri (KDS)", basic: false, standard: true },
    { name: "Vaznli mahsulotlar va tarozi integratsiyasi", basic: false, standard: true },
    { name: "Avans (zaklad) va maxsus buyurtmalar taqvimi", basic: false, standard: true },
    { name: "Mobil analitika va Telegram hisobotlar", basic: false, standard: true },
    { name: "Qo‘shimcha kassa ulash imkoniyati", basic: "+50 000 so‘m/oy", standard: "+50 000 so‘m/oy" },
    { name: "Bepul 14 kunlik sinov muddati", basic: true, standard: true },
    { name: "Bepul o‘rnatish va xodimlarni o‘rgatish", basic: true, standard: true },
  ];

  const faqs = [
    {
      q: "Tarif to‘lovlari qachon va qanday to‘lanadi?",
      a: "Birinchi 14 kun davomida tizimdan bepul foydalanasiz. Sinov muddati tugagach, xizmatni oylik yoki yillik Payme, Click yoki bank o‘tkazmasi orqali to‘lashingiz mumkin.",
    },
    {
      q: "Keyinchalik qo‘shimcha kassa qo‘shsa bo‘ladimi?",
      a: "Albatta. Standart tarifda dastlab 3 tagacha kassa kiritilgan. Zarurat bo‘lsa har bir qo‘shimcha kassa uchun oyiga atigi 50 000 so‘m qo‘shiladi.",
    },
    {
      q: "Hech qanday yashirin komissiya yoki foiz bormi?",
      a: "Mutlaqo yo‘q. ShopAdmin savdo aylanmangizdan foiz ushlamaydi. Siz faqat qat’iy belgilangan oylik abonent to‘lovini to‘laysiz.",
    },
    {
      q: "Internet o‘chib qolsa tarif to‘xtab qoladimi?",
      a: "Litsenziya muddati dastur ichida saqlanadi va internet bo‘lmaganda ham dasturingiz to‘xtovsiz ishlashda davom etadi.",
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-black uppercase tracking-wider mb-6">
          <FiZap className="w-3.5 h-3.5" />
          Shaffof va Qat’iy Narxlar
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Biznesingiz Hajmiga Mos Keladigan Oddiy Tariflar
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Savdo aylanmasidan foiz olinmaydi. Yashirin to‘lovlarsiz, 14 kunlik to‘liq bepul sinov
          muddati bilan boshlang.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(PRICING_PLANS).map((plan) => (
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
                <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                <p className="text-slate-400 text-xs mt-2">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {plan.priceFormatted}
                  </span>
                  <span className="text-slate-400 text-sm font-semibold">{plan.period}</span>
                </div>

                <div className="mt-8 space-y-3.5">
                  <p className="text-xs font-black text-slate-300 uppercase tracking-wider">
                    Tarif imkoniyatlari:
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

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Tariflarning to‘liq taqqoslanishi
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Ehtiyojingizga qarab eng maqbul imkoniyatlarni tanlang.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-slate-400">
                    Funksiya / Imkoniyat
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-slate-300 text-center">
                    Basic
                  </th>
                  <th className="py-4 px-4 text-xs font-black uppercase tracking-wider text-emerald-400 text-center">
                    Standart
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
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
            Tariflar bo‘yicha savol-javoblar
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
