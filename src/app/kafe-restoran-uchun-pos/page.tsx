import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiCoffee,
  FiCheck,
  FiZap,
  FiWifiOff,
  FiBarChart2,
  FiShield,
  FiArrowRight,
  FiHelpCircle,
  FiGrid,
  FiPrinter,
  FiClock,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Kafe va Restoran Uchun POS Tizimi va Stollar Boshqaruvi | ShopAdmin",
  description:
    "Kafe, restoran, fastfud va pizzeriyalar uchun qulay POS kassa tizimi. Interaktiv stollar xaritasi, oshxona chek printeri (KDS), ofitsiantlar buyurtmalari va xizmat haqi hisobi.",
  alternates: {
    canonical: "https://shop-admin.uz/kafe-restoran-uchun-pos",
  },
  openGraph: {
    title: "Kafe va Restoran Uchun POS Tizimi va Stollar Boshqaruvi | ShopAdmin",
    description:
      "Stollarni boshqaring, buyurtmani oshxonaga lahzada yuboring va xizmat haqini avtomatik hisoblang. Internet o‘chganda ham to‘xtovsiz ishlaydi.",
    url: "https://shop-admin.uz/kafe-restoran-uchun-pos",
  },
};

export default function CafeRestaurantPosLanding() {
  const features = [
    {
      title: "Interaktiv Stollar Xaritasi",
      desc: "Zallarga bo‘lingan qulay stollar xaritasi. Bo‘sh, band va hisob kutilayotgan stollar rangi bilan darhol ajralib turadi.",
      icon: FiGrid,
    },
    {
      title: "Oshxona va Bar Chek Printeri (KDS)",
      desc: "Ofitsiant buyurtma olishi bilanoq taomlar nomi oshxona va bar printerlariga avtomatik bo‘linib chop etiladi.",
      icon: FiPrinter,
    },
    {
      title: "Buyurtma Qo‘shimchalari (Modifikatorlar)",
      desc: "Mijoz xohishiga ko‘ra taomlarga qo‘shimcha (muzli, shakarsiz, achchiq, qo‘shimcha pishloq) kiritish va narxini hisoblash.",
      icon: FiZap,
    },
    {
      title: "Xizmat Haqi va Chegirmalar",
      desc: "Muassasangiz qoidasiga ko‘ra xizmat haqi (10%, 15%) yoki maxsus soatlar uchun chegirmalarni avtomatik hisob-kitob qilish.",
      icon: FiBarChart2,
    },
    {
      title: "Hisobni Bo‘lish va Birlashtirish",
      desc: "Mijozlar hisobni alohida yoki birgalikda to‘lashini oson boshqarish. Stollarni birlashtirish yoki boshqa stolga ko‘chirish.",
      icon: FiClock,
    },
    {
      title: "100% Oflayn va Xavfsiz Kassa",
      desc: "Wi-Fi yoki internet uzilsa ham ofitsiantlar buyurtma olaveradi, chek chiqarilaveradi. Aloqa tiklangach barcha zallar sinxronlanadi.",
      icon: FiWifiOff,
    },
  ];

  const faqs = [
    {
      q: "Oshxonaga alohida, barga alohida chek chiqarish mumkinmi?",
      a: "Ha, ShopAdmin bir vaqtning o‘zida bir nechta tarmoq yoki USB printerlariga ulanadi. Taomlar toifasiga qarab oshxona va barga avtomatik taqsimlanadi.",
    },
    {
      q: "Ofitsiantlar telefon yoki planshetdan buyurtma olsa bo‘ladimi?",
      a: "Ha, tizim har qanday Android yoki iOS planshet va telefonlarida brauzer yoki ilova orqali tezkor ishlaydi.",
    },
    {
      q: "Internet o‘chib qolsa zal va oshxona o‘rtasida aloqa uziladimi?",
      a: "Yo‘q, tizim lokal tarmoq (LAN/Wi-Fi router) orqali internet talab qilmasdan oflayn rejimda bir-biri bilan to‘liq aloqada ishlaydi.",
    },
    {
      q: "Kafe uchun qaysi tarif to‘g‘ri keladi?",
      a: "Kichik qahvaxona uchun Basic tarifi (100 000 so‘m), stollar va oshxona printeri ko‘p bo‘lgan restoranlar uchun Standart tarifi (150 000 so‘m) mos keladi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-amber-500/20">
              S
            </span>
            <span className="font-black text-xl tracking-tight text-white">
              Shop<span className="text-amber-400">Admin</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <Link href="/do-kon-uchun-pos" className="hover:text-white transition">
              Do‘kon
            </Link>
            <Link href="/kafe-restoran-uchun-pos" className="text-amber-400">
              Kafe & Restoran
            </Link>
            <Link href="/shirinliklar-uchun-hisob" className="hover:text-white transition">
              Shirinliklar
            </Link>
            <Link href="/offline-pos" className="hover:text-white transition">
              Oflayn POS
            </Link>
            <Link href="/narxlar" className="hover:text-white transition">
              Tariflar
            </Link>
            <Link href="/aloqa" className="hover:text-white transition">
              Aloqa
            </Link>
          </nav>

          <Link
            href="/#lead-form"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition active:scale-95"
          >
            Bepul Sinab Ko‘rish
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-black uppercase tracking-wider mb-6">
          <FiCoffee className="w-3.5 h-3.5" />
          Kafe, Restoran va Fastfud Muassasalari Uchun
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Kafe va Restoranlar Uchun Tezkor POS Tizimi va Stollar Boshqaruvi
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Ofitsiantlar buyurtmasini oshxonaga soniyalarda yetkazing, zallardagi stollarni nazorat
          qiling va hisob-kitobni xatosiz chiqaring. Internet o‘chganda ham to‘xtovsiz ishlaydi.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#lead-form"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm rounded-xl shadow-xl shadow-amber-500/25 flex items-center gap-2.5 transition active:scale-95"
          >
            14 Kun Bepul Ishlatish
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/narxlar"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-slate-200 font-bold text-sm rounded-xl border border-white/10 transition"
          >
            Tariflar bilan tanishish
          </Link>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Restoran biznesingiz uchun barcha qulayliklar
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              ShopAdmin umumiy ovqatlanish sohasining har bir bosqichini soddalashtirish uchun
              ishlab chiqilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
            <FiHelpCircle className="w-4 h-4" /> Ko‘p Beriladigan Savollar
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Kafe va restoran POS tizimi bo‘yicha savol-javoblar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-amber-400">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-b from-amber-500/10 to-transparent border-t border-amber-500/20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Kafengizda qulay hisob-kitobni bugunoq boshlang
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
          ShopAdmin 14 kunlik bepul sinov muddatini taqdim etadi. O‘rnatish va o‘rgatish bepul!
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm rounded-xl shadow-xl shadow-amber-500/25 transition active:scale-95"
        >
          Demoni Bepul Sinab Ko‘rish
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ShopAdmin POS tizimi. Barcha huquqlar himoyalangan.</p>
        <div className="mt-3 flex justify-center gap-6 text-slate-400">
          <Link href="/do-kon-uchun-pos" className="hover:text-white">
            Do‘kon POS
          </Link>
          <Link href="/kafe-restoran-uchun-pos" className="text-amber-400">
            Kafe POS
          </Link>
          <Link href="/shirinliklar-uchun-hisob" className="hover:text-white">
            Shirinliklar
          </Link>
          <Link href="/narxlar" className="hover:text-white">
            Tariflar
          </Link>
        </div>
      </footer>
    </div>
  );
}
