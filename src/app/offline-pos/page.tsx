import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiWifiOff,
  FiZap,
  FiDatabase,
  FiRefreshCw,
  FiShield,
  FiArrowRight,
  FiHelpCircle,
  FiCheckCircle,
  FiCpu,
  FiServer,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Offline Ishlaydigan POS Kassa Dasturi | ShopAdmin",
  description:
    "Internet va elektr uzilishlarida ham 100% to‘xtovsiz ishlaydigan oflayn POS dasturi. Ma’lumotlar lokal saqlanadi, internet qaytganda avtomatik sinxronlanadi.",
  alternates: {
    canonical: "https://shop-admin.uz/offline-pos",
  },
  openGraph: {
    title: "Offline Ishlaydigan POS Kassa Dasturi | ShopAdmin",
    description:
      "Internet uzilishi sababli kassa to‘xtab qolmasin. 0 ms kechikish, 100% oflayn savdo va xavfsiz sinxronizatsiya.",
    url: "https://shop-admin.uz/offline-pos",
  },
};

export default function OfflinePosLanding() {
  const features = [
    {
      title: "Lokal Baza va 0 ms Kechikish",
      desc: "Har bir operatsiya to‘g‘ridan-to‘g‘ri kompyuterning lokal xotirasida bajariladi. Bulut serveriga so‘rov jo‘natib kutish shart emas.",
      icon: FiCpu,
    },
    {
      title: "Internet Uzilganda To‘xtovsiz Savdo",
      desc: "Wi-Fi yoki mobil internet yo‘qolsa ham kassir shtrix-kod skanerlaydi, chek chiqaradi va to‘lovlarni qabul qiladi.",
      icon: FiWifiOff,
    },
    {
      title: "Aqlli Ikki Tomonlama Sinxronizatsiya",
      desc: "Internet aloqasi tiklanganda barcha qilingan savdolar avtomatik va fon rejimida serverga xavfsiz yuklanadi.",
      icon: FiRefreshCw,
    },
    {
      title: "Noldan Tiklanish (Crash-Proof)",
      desc: "Elektr to‘satdan o‘chib qolsa yoki kompyuter qayta yoqilsa, oxirgi savatdagi tovarlar va ma’lumotlar to‘liq saqlanib qoladi.",
      icon: FiDatabase,
    },
    {
      title: "LAN Lokal Tarmoq Qo‘llab-quvvatlashi",
      desc: "Bir nechta kassa yoki planshetlar internet bo‘lmaganda ham bitta ichki Wi-Fi router orqali o‘zaro ma’lumot almasha oladi.",
      icon: FiServer,
    },
    {
      title: "Kriptografik Ma’lumotlar Himoyasi",
      desc: "Lokal ma’lumotlar shifrlangan holatda saqlanadi va kassir yoki uchinchi shaxslar tomonidan o‘zgartirilishi mumkin emas.",
      icon: FiShield,
    },
  ];

  const faqs = [
    {
      q: "Oflayn ishlash uchun internet umuman kerak emasmi?",
      a: "Dasturni o‘rnatish, mahsulotlar bazasini birinchi marta yuklash va yangilanishlarni olish uchun internet kerak bo‘ladi. Kundalik savdo jarayoni esa haftalab internetsiz ishlashi mumkin.",
    },
    {
      q: "Internet kelganda savdo ma’lumotlari chalkashib ketmaydimi?",
      a: "Yo‘q. ShopAdmin har bir savdoga unikal vaqt tamg‘asi va identifikator beradi. Tizim konfliktlarni avtomatik hal etib, dublikat hosil qilmaydi.",
    },
    {
      q: "Telefonim yoki planshetimda ham oflayn ishlaydimi?",
      a: "Ha, ShopAdmin Electron (Windows/macOS) va Android dasturlari o‘zining mustaqil oflayn bazasiga ega bo‘lib, to‘liq oflayn ishlaydi.",
    },
    {
      q: "Oflayn rejimda karta orqali to‘lov olsa bo‘ladimi?",
      a: "Bank terminallari (Uzcard/Humo) bankning o‘z aloqa kanali (SIM-karta) orqali ishlaydi. POS dasturimiz esa chek chiqarish va hisob yuritishni oflayn bajaradi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-cyan-500/20">
              S
            </span>
            <span className="font-black text-xl tracking-tight text-white">
              Shop<span className="text-cyan-400">Admin</span>
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
            <Link href="/offline-pos" className="text-cyan-400">
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
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition active:scale-95"
          >
            Bepul Sinab Ko‘rish
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-black uppercase tracking-wider mb-6">
          <FiWifiOff className="w-3.5 h-3.5" />
          Internetga Bog‘liq Bo‘lmagan Mustaqil Arxitektura
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Offline Ishlaydigan Professional POS Kassa Dasturi
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Internet uzilishi yoki past tezligi sabab kassa hech qachon to‘xtamaydi. 100% oflayn
          savdo qiling, aloqa tiklanganida tizim barchasini server bilan avtomatik sinxronlaydi.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#lead-form"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-black text-sm rounded-xl shadow-xl shadow-cyan-500/25 flex items-center gap-2.5 transition active:scale-95"
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
              Nega aynan Oflayn-birinchi (Offline-First) tizim?
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Faqat bulutda ishlaydigan dasturlar internet o‘chganida butun savdoni to‘xtatib
              qo‘yadi. ShopAdmin esa har doim barqaror ishlaydi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
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
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400 mb-2">
            <FiHelpCircle className="w-4 h-4" /> Ko‘p Beriladigan Savollar
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Oflayn kassa ishlashi bo‘yicha savol-javoblar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-b from-cyan-500/10 to-transparent border-t border-cyan-500/20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Savdoingizni internetga qaramlikdan ozod qiling
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
          ShopAdmin 14 kunlik bepul sinov muddatini taqdim etadi. O‘rnatish va sozlash bepul!
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex px-8 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-black text-sm rounded-xl shadow-xl shadow-cyan-500/25 transition active:scale-95"
        >
          Oflayn POS-ni Sinab Ko‘rish
        </Link>
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
          <Link href="/narxlar" className="hover:text-white">
            Tariflar
          </Link>
        </div>
      </footer>
    </div>
  );
}
