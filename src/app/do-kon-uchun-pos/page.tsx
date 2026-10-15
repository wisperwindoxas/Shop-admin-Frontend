import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiShoppingBag,
  FiCheck,
  FiZap,
  FiWifiOff,
  FiBarChart2,
  FiShield,
  FiArrowRight,
  FiHelpCircle,
  FiPhoneCall,
  FiLayers,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Do‘kon Uchun POS Kassa va Ombor Hisobi Dasturi | ShopAdmin",
  description:
    "Chakana savdo, minimarket, supermarket va kiyim-kechak do‘konlari uchun tezkor POS dastur. Shtrix-kod skaner, tarozi, chek printer, oflayn savdo va qoldiqlar hisobi.",
  alternates: {
    canonical: "https://shop-admin.uz/do-kon-uchun-pos",
  },
  openGraph: {
    title: "Do‘kon Uchun POS Kassa va Ombor Hisobi Dasturi | ShopAdmin",
    description:
      "Shtrix-kod skaner bilan 0.1 soniyada savdo qiling. Internet o‘chganda ham kassa to‘xtovsiz ishlaydi.",
    url: "https://shop-admin.uz/do-kon-uchun-pos",
  },
};

export default function RetailPosLanding() {
  const features = [
    {
      title: "Tezkor Shtrix-Kod Savdosi",
      desc: "USB va Bluetooth skanerlar bilan tovarlarni 0.1 soniyada topish, savatga solish va chek chiqarish.",
      icon: FiZap,
    },
    {
      title: "Ombor Qoldiqlari va Kamomad Nazorati",
      desc: "Tovarlar kirimi, qoldiq miqdori va tannarx hisobi. Tovar tugab borayotganda avtomatik ogohlantirish.",
      icon: FiLayers,
    },
    {
      title: "100% Oflayn Ishlash",
      desc: "Internet yoki elektr uzilganda ham kassa to‘xtamaydi. Ma’lumotlar lokal bazada saqlanadi va aloqa tiklanganda bulutga sinxronlanadi.",
      icon: FiWifiOff,
    },
    {
      title: "Nasiya (Qarz) Daftari & SMS",
      desc: "Doimiy mijozlarga qarzga savdo qilish, qarz limitlari va to‘lov muddati kelganda avtomatik eslatmalar.",
      icon: FiShoppingBag,
    },
    {
      title: "Kassa Hisoboti & Z-Hisobot",
      desc: "Kunlik tushum, naqd va karta ulushi, smenani ochish va yopish, kassa qoldig‘i bir tiyingacha aniq hisoblanadi.",
      icon: FiBarChart2,
    },
    {
      title: "Xodimlar va PIN Kod Himoyasi",
      desc: "Kassirning tovar o‘chirish, narx o‘zgartirish yoki chegirmani boshqarish huquqini administrator PIN kodi bilan cheklash.",
      icon: FiShield,
    },
  ];

  const faqs = [
    {
      q: "Dastur qanday kompyuter yoki apparatlarda ishlaydi?",
      a: "ShopAdmin har qanday Windows, macOS, Android planshet va sensorli POS monobloklarda ishlaydi. Oddiy noutbuk yoki planshet yetarli.",
    },
    {
      q: "Internet o‘chib qolsa nima bo‘ladi?",
      a: "Tizim 100% oflayn rejimda ishlashni davom ettiradi. Siz bemalol savdo qilib chek chiqaraverasiz. Internet kelishi bilan barcha ma’lumotlar avtomatik bulutga yuklanadi.",
    },
    {
      q: "Shtrix-kod skaner va chek printerni qanday ulaymiz?",
      a: "Barcha standart USB, LAN va Bluetooth 58mm/80mm chek printerlar hamda shtrix-kod skanerlar dasturga drayversiz ulanadi.",
    },
    {
      q: "Tarif narxi qancha va sinov muddati bormi?",
      a: "Basic tarifi 100 000 so‘m, Standart tarifi 150 000 so‘m oyiga. 14 kunlik bepul sinov muddati taqdim etiladi.",
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
            <Link href="/do-kon-uchun-pos" className="text-emerald-400">
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
            <Link href="/narxlar" className="hover:text-white transition">
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
          <FiShoppingBag className="w-3.5 h-3.5" />
          Chakana Savdo va Do‘konlar Uchun Maxsus
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Do‘kon va Minimarketlar Uchun Tezkor POS Kassa va Ombor Hisobi Dasturi
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Shtrix-kodli savdo, ombor qoldiqlari nazorati, oflayn rejim va kassa hisobotlari.
          Savdo hajmini oshiring va har bir tiyinni aniq nazorat qiling.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#lead-form"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm shadow-xl shadow-emerald-500/25 transition active:scale-95 flex items-center justify-center gap-2"
          >
            <span>14 Kunlik Bepul Sinovni Boshlash</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/narxlar"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition"
          >
            Tariflar bilan tanishish
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Do‘kon Boshqaruvini Osonlashtiradigan Imkoniyatlar
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Kassir xatolarini minimallashtiring, tovar qoldiqlarini 100% nazorat qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <FiHelpCircle className="w-4 h-4" />
            Ko‘p Beriladigan Savollar
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">Savollaringizga Aniq Javoblar</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <h3 className="text-sm font-black text-white mb-2">{faq.q}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ShopAdmin. Barcha huquqlar himoyalangan.</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-slate-400">
          <Link href="/maxfiylik-siyosati" className="hover:text-white transition">
            Maxfiylik Siyosati
          </Link>
          <Link href="/foydalanish-shartlari" className="hover:text-white transition">
            Foydalanish Shartlari
          </Link>
          <Link href="/aloqa" className="hover:text-white transition">
            Aloqa
          </Link>
        </div>
      </footer>
    </div>
  );
}
