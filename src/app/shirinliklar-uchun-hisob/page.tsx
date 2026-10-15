import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiCheck,
  FiZap,
  FiWifiOff,
  FiBarChart2,
  FiShield,
  FiArrowRight,
  FiHelpCircle,
  FiCalendar,
  FiPercent,
  FiPackage,
} from "react-icons/fi";
import { GiCakeSlice } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Shirinliklar va Qandolat Do‘koni Uchun POS Hisob Dasturi | ShopAdmin",
  description:
    "Qandolatchilik, shirinliklar do‘koni va buyurtma tort ustaxonalari uchun avtomatlashtirilgan kassa dasturi. Vaznli mahsulotlar, mijoz tort buyurtmalari, avans va muddat nazorati.",
  alternates: {
    canonical: "https://shop-admin.uz/shirinliklar-uchun-hisob",
  },
  openGraph: {
    title: "Shirinliklar va Qandolat Do‘koni Uchun POS Hisob Dasturi | ShopAdmin",
    description:
      "Vaznli shirinliklar hisobi, elektron tarozi, maxsus tort buyurtmalari va avans qoldiqlarini bir joyda boshqaring.",
    url: "https://shop-admin.uz/shirinliklar-uchun-hisob",
  },
};

export default function SweetsBakeryPosLanding() {
  const features = [
    {
      title: "Vaznli Savdo & Elektron Tarozi",
      desc: "Shirinliklar, pechenye va konfetlarni gramm aniqligida tezkor tortish va narxini bir zumda savatga qo‘shish.",
      icon: FiZap,
    },
    {
      title: "Maxsus Tort Buyurtmalari & Kalendar",
      desc: "Mijozning to‘y yoki tug‘ilgan kun uchun maxsus tort buyurtmalari: yozuv, dizayn, yetkazib berish kuni va soatini qayd etish.",
      icon: FiCalendar,
    },
    {
      title: "Avans (Zaklad) & Qoldiq To‘lov",
      desc: "Buyurtma qabul qilishda avans pulini olish, chek chiqarish va mahsulot topshirilganda qolgan summani aniq yopish.",
      icon: FiBarChart2,
    },
    {
      title: "Yaroqlilik Muddati Nazorati",
      desc: "Tez buziluvchi kremli mahsulotlar va pishiriqlarning yaroqlilik muddatini kuzatish, muddati yaqinlashganda ogohlantirish.",
      icon: FiShield,
    },
    {
      title: "Quti va Qadoqlash Xarajatlari",
      desc: "Har bir tort yoki shirinlik uchun ishlatiladigan lenta, quti va qadoq xarajatlarini avtomatik tannarxga kiritish.",
      icon: FiPackage,
    },
    {
      title: "100% Oflayn va To‘xtovsiz Kassa",
      desc: "Internet o‘chganda ham kassa to‘xtamaydi. Mijozlarni navbatsiz xizmat qiling, aloqa tiklanganda barcha ma’lumotlar yangilanadi.",
      icon: FiWifiOff,
    },
  ];

  const faqs = [
    {
      q: "Elektron tarozi kompyuterga ulanadimi?",
      a: "Ha, ShopAdmin USB yoki COM-port orqali ulanadigan barcha ommabop elektron savdo tarozilarini qo‘llab-quvvatlaydi. Og‘irlik avtomatik ekranda chiqadi.",
    },
    {
      q: "Mijoz avans to‘laganida alohida chek chiqadimi?",
      a: "Albatta. Buyurtma qabul qilinganda avans cheki, tayyor bo‘lib to‘liq to‘langanda esa yakuniy kassa cheki chiqariladi.",
    },
    {
      q: "Bir nechta filial yoki do‘konlarni bitta dasturdan ko‘rsa bo‘ladimi?",
      a: "Ha, Standart tarifda bir nechta shoxobcha va kassalarni yagona boshqaruv panelidan real vaqtda kuzatishingiz mumkin.",
    },
    {
      q: "Dasturdan foydalanish qiyin emasmi, sotuvchilar tez o‘rganadimi?",
      a: "Interfeys juda sodda va to‘liq o‘zbek tilida. Yangi sotuvchi 10 daqiqa ichida barcha kassa amallarini mustaqil bajara oladi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-pink-500/20">
              S
            </span>
            <span className="font-black text-xl tracking-tight text-white">
              Shop<span className="text-pink-400">Admin</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <Link href="/do-kon-uchun-pos" className="hover:text-white transition">
              Do‘kon
            </Link>
            <Link href="/kafe-restoran-uchun-pos" className="hover:text-white transition">
              Kafe & Restoran
            </Link>
            <Link href="/shirinliklar-uchun-hisob" className="text-pink-400">
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
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-black text-xs rounded-xl shadow-lg shadow-pink-500/20 transition active:scale-95"
          >
            Bepul Sinab Ko‘rish
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-black uppercase tracking-wider mb-6">
          <GiCakeSlice className="w-4 h-4" />
          Qandolatchilik va Shirinliklar Biznesi Uchun Maxsus
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Shirinliklar va Qandolat Do‘koni Uchun POS Hisob Dasturi
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Vaznli mahsulotlarni grammgacha aniq soting, maxsus tort buyurtmalari va mijoz
          avanslarini tartibli yuritib, kamomad va adashishlarga butunlay barham bering.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#lead-form"
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-black text-sm rounded-xl shadow-xl shadow-pink-500/25 flex items-center gap-2.5 transition active:scale-95"
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
              Qandolat biznesining nozik jihatlarini hisobga oluvchi yechim
            </h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Tarozi, avans, tayyor bo‘lish sanasi va yaroqlilik muddatini bitta dastur orqali
              oson boshqaring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition">
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
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-pink-400 mb-2">
            <FiHelpCircle className="w-4 h-4" /> Ko‘p Beriladigan Savollar
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Shirinliklar kassa tizimi bo‘yicha savol-javoblar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-pink-400">Q:</span> {faq.q}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-b from-pink-500/10 to-transparent border-t border-pink-500/20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Qandolat do‘koningizni avtomatlashtiring
        </h2>
        <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
          ShopAdmin orqali tort va shirinliklar savdosini yangi bosqichga olib chiqing. 14 kun bepul!
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex px-8 py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-black text-sm rounded-xl shadow-xl shadow-pink-500/25 transition active:scale-95"
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
          <Link href="/kafe-restoran-uchun-pos" className="hover:text-white">
            Kafe POS
          </Link>
          <Link href="/shirinliklar-uchun-hisob" className="text-pink-400">
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
