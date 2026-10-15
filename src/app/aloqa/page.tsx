import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Biz Bilan Bog‘laning | ShopAdmin Qo‘llab-quvvatlash Markazi",
  description:
    "ShopAdmin POS tizimi mutaxassislari bilan bog‘laning. Bepul konsultatsiya, dasturni joyida o‘rnatib berish va 24/7 texnik yordam.",
  alternates: {
    canonical: "https://shop-admin.uz/aloqa",
  },
  openGraph: {
    title: "Biz Bilan Bog‘laning | ShopAdmin Qo‘llab-quvvatlash Markazi",
    description:
      "Savollaringiz bormi? Mutaxassislarimiz sizga do‘kon, kafe yoki qandolat kassa tizimini tanlashda yordam beradi.",
    url: "https://shop-admin.uz/aloqa",
  },
};

export default function ContactPage() {
  const contactCards = [
    {
      title: "Telefon Orqali Aloqa",
      desc: "Mutaxassis bilan to‘g‘ridan-to‘g‘ri suhbat",
      value: "+998 (71) 200-00-00",
      link: "tel:+998712000000",
      icon: FiPhone,
      cta: "Qo‘ng‘iroq qilish",
    },
    {
      title: "Telegram Orqali Yordam",
      desc: "Tezkor javob va video yo‘riqnomalar",
      value: "@shopadmin_support",
      link: "https://t.me/shopadmin_support",
      icon: FaTelegramPlane,
      cta: "Telegramda yozish",
    },
    {
      title: "Elektron Pochta",
      desc: "Hamkorlik va rasmiy takliflar uchun",
      value: "info@shop-admin.uz",
      link: "mailto:info@shop-admin.uz",
      icon: FiMail,
      cta: "Xat yuborish",
    },
    {
      title: "Ish Vaqti va Manzil",
      desc: "Dushanba - Shanba: 09:00 - 19:00",
      value: "Toshkent shahri, O‘zbekiston",
      link: "#",
      icon: FiClock,
      cta: "Har doim aloqada",
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
            <Link href="/narxlar" className="hover:text-white transition">
              Tariflar
            </Link>
            <Link href="/aloqa" className="text-emerald-400">
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
          <FiMessageSquare className="w-3.5 h-3.5" />
          Biz Bilan Bog‘laning
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Sizga Yordam Berishdan Mamnunmiz
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Dasturni o‘rnatish, apparatlarni sozlash (printer, skaner, tarozi) yoki tarif tanlash
          bo‘yicha savollaringiz bormi? Mutaxassislarimiz har doim aloqada!
        </p>
      </section>

      {/* CONTACT CARDS GRID */}
      <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-white">{card.title}</h3>
                  <p className="text-slate-400 text-xs mt-1.5">{card.desc}</p>
                  <p className="text-sm font-bold text-white mt-4">{card.value}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={card.link}
                    className="text-xs font-black text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
                  >
                    {card.cta} →
                  </a>
                </div>
              </div>
            );
          })}
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
          <Link href="/narxlar" className="hover:text-white">
            Tariflar
          </Link>
        </div>
      </footer>
    </div>
  );
}
