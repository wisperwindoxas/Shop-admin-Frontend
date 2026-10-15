import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FiFileText, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Foydalanish Shartlari (Oferta) | ShopAdmin",
  description:
    "ShopAdmin POS dasturiy ta’minotidan foydalanish shartlari, litsenziya qoidalari va tomonlarning huquq va majburiyatlari.",
  alternates: {
    canonical: "https://shop-admin.uz/foydalanish-shartlari",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500 selection:text-white">
      {/* HEADER */}
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
          <Link
            href="/"
            className="text-xs font-bold text-slate-300 hover:text-white transition"
          >
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-4">
          <FiFileText className="w-3.5 h-3.5" />
          Ommaviy Oferta Kelishuvi
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-8">
          Foydalanish Shartlari (Terms of Service)
        </h1>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Kelishuv Predmeti</h2>
            <p>
              Ushbu shartlar ShopAdmin kassa va avtomatlashtirish dasturiy ta’minotidan
              foydalanish tartibini tartibga soladi. Dasturdan ro‘yxatdan o‘tish yoki yuklab olish
              orqali foydalanuvchi ushbu kelishuv shartlarini to‘liq qabul qilgan hisoblanadi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Litsenziya va Huquqlar</h2>
            <p>
              ShopAdmin foydalanuvchiga dasturdan shaxsiy yoki tijoriy maqsadlarda belgilangan tarif
              rejalari doirasida foydalanish huquqini (oddiy noeksklyuziv litsenziya) beradi.
              Dastur kodini o‘zgartirish, noqonuniy nusxalash yoki qayta sotish taqiqlanadi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Bepul Sinov Muddati</h2>
            <p>
              Har bir yangi foydalanuvchiga tizim imkoniyatlarini o‘rganish va sinab ko‘rish uchun
              14 (o‘n to‘rt) kunlik bepul sinov muddati taqdim etiladi. Sinov muddati yakunida
              dasturdan foydalanishni davom ettirish uchun tarif rejasiga muvofiq to‘lov amalga
              oshiriladi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Mas’uliyat Chegaralari</h2>
            <p>
              ShopAdmin dasturning barqaror va uzluksiz ishlashini ta’minlash uchun barcha texnik
              choralarni ko‘radi. Foydalanuvchining apparat qurilmalari (printer, kompyuter,
              skaner) nosozligi yoki xodimlarining noto‘g‘ri kiritgan ma’lumotlari natijasidagi
              zararlar uchun ShopAdmin javobgar emas.
            </p>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ShopAdmin POS tizimi. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}
