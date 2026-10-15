import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FiShield, FiLock, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Maxfiylik Siyosati | ShopAdmin",
  description:
    "ShopAdmin POS dasturi foydalanuvchilarining shaxsiy va tijoriy ma’lumotlarini himoya qilish siyosati.",
  alternates: {
    canonical: "https://shop-admin.uz/maxfiylik-siyosati",
  },
};

export default function PrivacyPolicyPage() {
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
          <FiShield className="w-3.5 h-3.5" />
          Hujjat oxirgi yangilanishi: 2026-yil
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-8">
          Maxfiylik Siyosati (Privacy Policy)
        </h1>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Umumiy Qoidalar</h2>
            <p>
              Ushbu Maxfiylik Siyosati ShopAdmin POS tizimi („Biz“, „Bizning xizmat“) orqali
              foydalanuvchilarning shaxsiy va biznes ma’lumotlarini to‘plash, qayta ishlash hamda
              himoya qilish tartibini belgilaydi. Biz foydalanuvchilarimizning ma’lumotlari
              daxlsizligini qat’iy hurmat qilamiz va O‘zbekiston Respublikasining „Shaxsga doir
              ma’lumotlar to‘g‘risida“gi Qonuni talablariga to‘liq rioya qilamiz.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Qanday Ma’lumotlar To‘planadi?</h2>
            <p>Xizmatdan foydalanish jarayonida quyidagi ma’lumotlar to‘planishi mumkin:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
              <li>Ism, familiya va telefon raqami (ro‘yxatdan o‘tish va bog‘lanish uchun);</li>
              <li>Do‘kon, kafe yoki qandolat biznesining nomi va manzili;</li>
              <li>Dastur ishlashi uchun kiritilgan mahsulotlar nomi va savdo ma’lumotlari;</li>
              <li>Tizim nosozliklarini tahlil qilish uchun texnik jurnallar (logs).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Tijoriy Ma’lumotlar Daxlsizligi</h2>
            <p>
              Sizning savdo aylanmangiz, tovarlaringiz tannarxi, foyda miqdoringiz va mijozlaringiz
              ro‘yxati qat’iy tijorat siri hisoblanadi. ShopAdmin ushbu ma’lumotlarni uchinchi
              shaxslarga oshkor qilmaydi, sotmaydi yoki reklama maqsadlarida foydalanmaydi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Ma’lumotlar Xavfsizligi</h2>
            <p>
              Barcha uzatilayotgan ma’lumotlar zamonaviy SSL/TLS shifrlash protokollari orqali
              himoyalangan. Oflayn rejimda foydalanilayotgan ma’lumotlar faqatgina sizning
              qurilmangizda lokal ravishda xavfsiz saqlanadi.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. Bog‘lanish</h2>
            <p>
              Maxfiylik siyosati bo‘yicha savollar bo‘yicha biz bilan{" "}
              <Link href="/aloqa" className="text-emerald-400 underline">
                Aloqa sahifasi
              </Link>{" "}
              orqali yoki info@shop-admin.uz pochtai orqali bog‘lanishingiz mumkin.
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
