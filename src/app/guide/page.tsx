"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiPrinter,
  FiWifi,
  FiCoffee,
  FiPieChart,
  FiSun,
  FiMoon,
  FiHelpCircle,
  FiDownload,
  FiShield,
  FiCpu,
  FiCreditCard,
  FiSliders,
} from "react-icons/fi";
import { FaTelegramPlane, FaApple, FaWindows, FaAndroid } from "react-icons/fa";

export default function GuidePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState<string>("installation");

  useEffect(() => {
    const saved = localStorage.getItem("shop_admin_theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("shop_admin_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const sections = [
    { id: "installation", name: "🚀 1. O'rnatish & Kirish", icon: FiDownload, color: "text-emerald-500" },
    { id: "directions", name: "✨ 2. 3 Ta Biznes Yo'nalishi", icon: FiSliders, color: "text-brand-500" },
    { id: "scales", name: "⚖️ 3. Elektron Tarozi Sozlash", icon: FiCpu, color: "text-emerald-500" },
    { id: "scanners-printers", name: "🖨️ 4. Skaner & Chek Printer", icon: FiPrinter, color: "text-cyan-500" },
    { id: "pos", name: "🧾 5. Kassa & POS Sotuv & PIN", icon: FiShoppingBag, color: "text-blue-500" },
    { id: "inventory", name: "📦 6. Ombor & Kirim (Prixod)", icon: FiPackage, color: "text-purple-500" },
    { id: "debts", name: "📒 7. Nasiya (Qarz) & SMS", icon: FiUsers, color: "text-amber-500" },
    { id: "finance", name: "📊 8. Moliya & Z-Hisobot", icon: FiBarChart2, color: "text-rose-500" },
    { id: "telegram", name: "🤖 9. Telegram Bot Xabarlari", icon: FaTelegramPlane, color: "text-sky-500" },
    { id: "security", name: "🔒 10. Xodimlar & Huquqlar", icon: FiShield, color: "text-teal-500" },
  ];

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#070b12] text-slate-100" : "bg-[#f8fafc] text-slate-900"} grid-bg transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all ${
        theme === "dark" ? "bg-[#070b12]/85 border-white/10" : "bg-white/85 border-slate-200 shadow-xs"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-bold p-2.5 rounded-xl border transition-all ${
                theme === "dark" ? "text-slate-300 hover:text-emerald-400 bg-slate-900 border-slate-800" : "text-slate-700 hover:text-emerald-600 bg-slate-100 border-slate-300"
              }`}
            >
              <FiArrowLeft className="text-base" /> Bosh Sahifa
            </Link>
            <div className="h-6 w-[1px] bg-slate-700/40" />
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Shop-Admin.uz Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <div>
                <span className={`text-lg font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  Shop-Admin<span className="text-emerald-500">.uz</span>
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase">
                  To‘liq Qo‘llanma (Docs)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                theme === "dark" ? "bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800" : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {theme === "dark" ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>

            <a
              href="https://t.me/shop_admin_support_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#229ED9] hover:bg-[#1e8ec3] text-white transition-all shadow-md shadow-sky-500/20"
            >
              <FaTelegramPlane className="text-base" />
              <span>Telegram Yordam</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-3 sticky top-28 space-y-1">
            <div className={`p-4 rounded-2xl border mb-3 ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-xs"}`}>
              <h2 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2 px-2">Mundarija</h2>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                      activeSection === sec.id
                        ? "bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/25"
                        : theme === "dark"
                        ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <sec.icon className={activeSection === sec.id ? "text-slate-950" : sec.color} />
                    <span className="truncate">{sec.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Support Badge */}
            <div className={`p-4 rounded-2xl border text-center ${theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-emerald-50 border-emerald-200"}`}>
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2">
                <FiHelpCircle className="text-lg" />
              </div>
              <h3 className="text-xs font-bold">Savollaringiz bormi?</h3>
              <p className="text-[11px] text-slate-400 mt-1">24/7 texnik mutaxassislarimiz dasturni o‘rnatishda yordam beradi.</p>
              <a
                href="https://t.me/shop_admin_support_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:underline"
              >
                <FaTelegramPlane /> @shop_admin_support_bot
              </a>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="lg:col-span-9 space-y-10">
            {/* 1. O'RNATISH VA KIRISH */}
            {(activeSection === "installation" || activeSection === "all") && (
              <section id="installation" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 text-xl font-bold">
                    <FiDownload />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">1-Qadam</span>
                    <h2 className="text-2xl font-black">Dasturni O‘rnatish va Tizimga Kirish</h2>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-300 mb-6">
                  Shop-Admin POS tizimi <strong>Windows (7/10/11)</strong>, <strong>macOS (Apple Silicon & Intel)</strong> va <strong>Android</strong> qurilmalari uchun maxsus mahalliy (native) ilova sifatida ishlab chiqilgan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-sky-400 font-bold mb-2">
                      <FaWindows className="text-lg" /> Windows Setup
                    </div>
                    <p className="text-xs text-slate-400">
                      <code>Shop-Admin.uz Setup.exe</code> faylini yuklab oling va ishga tushiring. Dastur avtomatik o‘rnatilib, ishchi stolga belgi chiqaradi.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-300 font-bold mb-2">
                      <FaApple className="text-lg" /> macOS DMG
                    </div>
                    <p className="text-xs text-slate-400">
                      <code>.dmg</code> faylini oching va Shop-Admin belgisini <em>Applications</em> papkasiga suring.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                      <FaAndroid className="text-lg" /> Android Mobil
                    </div>
                    <p className="text-xs text-slate-400">
                      <code>.apk</code> faylini planshet yoki telefonga o‘rnatib, Bluetooth chek printer va kamera skaneri bilan ishlating.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 space-y-1.5">
                  <strong className="text-emerald-400 block font-bold">🔐 Boshlang‘ich Tizimga Kirish:</strong>
                  <div>• <strong>Login:</strong> Ro‘yxatdan o‘tgan telefon raqamingiz yoki berilgan admin login</div>
                  <div>• <strong>Parol:</strong> SMS orqali kelgan yoki xavfsiz o‘rnatilgan maxfiy kod</div>
                  <div>• <strong>Oflayn rejim:</strong> Internet uzilsa ham dastur kassa sotuvini to‘xtatmaydi, internet kelishi bilan server bilan avtomatik sinxronlanadi.</div>
                </div>
              </section>
            )}

            {/* 2. 3 TA BIZNES YO'NALISHI */}
            {(activeSection === "directions" || activeSection === "all") && (
              <section id="directions" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-brand-500/15 text-brand-400 text-xl font-bold">
                    <FiSliders />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-brand-400 tracking-wider">2-Qadam</span>
                    <h2 className="text-2xl font-black">3 Ta Biznes Yo‘nalishi va Interfeys Rejimlari</h2>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-300 mb-6">
                  Dastur sozlamalaridan biznesingiz turini tanlaganingizda, kassa interfeysi aynan shu soha uchun zarur vositalarga moslashadi:
                </p>

                <div className="space-y-4">
                  {/* Do'kon */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-emerald-500/30">
                    <h3 className="text-base font-black text-emerald-400 mb-1 flex items-center gap-2">
                      <FiShoppingBag /> 1. Chakana Savdo & Supermarket (Retail)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Shtrix-kodli tovarlar, donabay va o‘lchovli mahsulotlar uchun mo‘ljallangan. Shtrih-Print tarozi bilan to‘g‘ridan-to‘g‘ri sinxronlanadi, USB skaner 0.1 soniyada tovarni topadi, kassir 1 kunda 1000+ mijozga tez xizmat ko‘rsata oladi.
                    </p>
                  </div>

                  {/* Kafe */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-orange-500/30">
                    <h3 className="text-base font-black text-orange-400 mb-1 flex items-center gap-2">
                      <FiCoffee /> 2. Kafe & Restoran & Fast Food (Food & Beverage)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Interaktiv stollar xaritasi (Asosiy zal, Terassa, VIP xonalar), ofitsiant buyurtmalari, oshxona va bar KDS displeyiga kvitansiya yuborish, 10% yoki 15% xizmat haqini avtomatik hisoblash va chekni bo‘lib to‘lash (Split Check).
                    </p>
                  </div>

                  {/* Shirinliklar */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-rose-500/30">
                    <h3 className="text-base font-black text-rose-400 mb-1 flex items-center gap-2">
                      <FiPieChart /> 3. Shirinliklar & Qandolat (Bakery & Pastry)
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Oldindan tort zakazlari qabul qilish, tabrik yozuvlari (&apos;Tug‘ilgan kuningiz bilan!&apos;), tayyorlanish sanasi va kiritilgan avans to‘lovi nazorati, tort sexiga kvitansiya chiqarish va vaznli shirinliklar hisobi.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* 3. ELEKTRON TAROZI SOZLASH */}
            {(activeSection === "scales" || activeSection === "all") && (
              <section id="scales" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 text-xl font-bold">
                    <FiCpu />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">3-Qadam</span>
                    <h2 className="text-2xl font-black">Shtrih-Print va Elektron Tarozilarni LAN Orqali Ulash</h2>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-300 mb-6">
                  Shop-Admin dasturi <strong>Shtrih-Print</strong>, <strong>CAS</strong> va boshqa tarmoq tarozilari bilan UDP/TCP protokoli (0x50 buyrug‘i) orqali to‘g‘ridan-to‘g‘ri ishlaydi.
                </p>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">1. Tarozining Tarmoq Sozlamalari (IP Address):</strong>
                    <div>• Tarozini do‘kondagi Wi-Fi routerga LAN kabel orqali ulang.</div>
                    <div>• Taroziga statik IP bering (Masalan: <code>192.168.1.120</code>, port <code>1111</code>).</div>
                    <div>• Shop-Admin sozlamalarida <em>&quot;Tarozilar&quot;</em> bo‘limiga kirib, shu IP manzilni kiriting va <em>&quot;Aloqani Tekshirish (Ping)&quot;</em> tugmasini bosing.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">2. Tovarlarni Taroziga Yuklash (PLU Hotkeys):</strong>
                    <div>• Dasturda vaznli tovarlarni belgilang (Olma, Banan, Go‘sht va h.k.).</div>
                    <div>• <em>&quot;Taroziga Yuklash&quot;</em> tugmasini bosing — barcha tovarlar narxi, nomi va klaviatura raqamlari (Hotkeys 0xB1) 2 soniyada taroziga yuklanadi.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">3. Jonli Tarozi Rejimi (Live Weight):</strong>
                    <div>• Kassa sahifasida vaznli tovarni bosganingizda, <strong>&quot;Tarozidan Olish&quot;</strong> tugmasi chiqadi.</div>
                    <div>• Tarozi ustidagi barqaror vazn (Stable weight) avtomatik kassa oynasiga tushadi va summa 0.01 soniyada hisoblanadi.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 4. SKANER VA CHEK PRINTER */}
            {(activeSection === "scanners-printers" || activeSection === "all") && (
              <section id="scanners-printers" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 text-xl font-bold">
                    <FiPrinter />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-cyan-400 tracking-wider">4-Qadam</span>
                    <h2 className="text-2xl font-black">Shtrix-Kod Skaner va Termal Chek Printerlarni Sozlash</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">📟 Shtrix-Kod Skaner:</strong>
                    <div>• Barcha USB va Bluetooth 1D/2D skanerlar drayversiz (Plug & Play) ishlaydi.</div>
                    <div>• Tarozi shtrix-kodi: Tarozi chiqargan <code>22XXXXXWWWWWK</code> formatidagi shtrix-kodni skanerlaganda dastur tovarni va uning aniq vaznini avtomatik ajratib oladi.</div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">🧾 Termal Chek Printer (58mm / 80mm):</strong>
                    <div>• ESC/POS standartidagi barcha printerlar (Xprinter, Rongta, Epson) qo‘llab-quvvatlanadi.</div>
                    <div>• Chekda do‘kon nomi, telefon raqami, xarid ro‘yxati, QR-kod va qarz qoldig‘i to‘liq ko‘rsatiladi.</div>
                    <div>• Chek chop etilganda kassa tortmasi (Cash Drawer) avtomatik tarzda ochiladi.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 5. KASSA VA POS SOTUV & PIN */}
            {(activeSection === "pos" || activeSection === "all") && (
              <section id="pos" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400 text-xl font-bold">
                    <FiShoppingBag />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-blue-400 tracking-wider">5-Qadam</span>
                    <h2 className="text-2xl font-black">Kassa Operatsiyalari, Xavfsizlik PIN-Kodi va Qaytarish</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">🔒 Tovar O‘chirishda Xavfsizlik PIN-Kodi:</strong>
                    <p className="leading-relaxed">
                      Kassir savatdagi tovarni o‘chirishga yoki miqdori 1 dona turganda minus (<code>−</code>) tugmasini bosib 0 ga tushirishga harakat qilsa, tizim ruxsatsiz o‘chirishni bloklaydi va <strong>Menejer/Admin PIN-kodini</strong> so‘raydi. Bu do‘konda kassir tomonidan bo‘ladigan suiiste‘molliklarning oldini oladi. PIN-kod jismoniy klaviatura raqamlari orqali ham qulay teriladi.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">💳 To‘lov Turlari:</strong>
                    <div>• <strong>Naqd:</strong> Olingan summa kiritilganda qaytim (sdacha) soniyada hisoblanadi.</div>
                    <div>• <strong>Karta:</strong> Uzcard va Humo terminallari orqali to‘lov.</div>
                    <div>• <strong>Aralash:</strong> Qisman naqd, qisman karta orqali chekni yopish.</div>
                    <div>• <strong>Nasiya (Qarz):</strong> Doimiy mijoz hisobiga qarz yozish.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 6. OMBOR VA PRIXOD */}
            {(activeSection === "inventory" || activeSection === "all") && (
              <section id="inventory" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-400 text-xl font-bold">
                    <FiPackage />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-400 tracking-wider">6-Qadam</span>
                    <h2 className="text-2xl font-black">Ombor Hisobi va Partiyaviy Kirim (Prixod)</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">📦 Yangi Tovarlar Kirimi:</strong>
                    <div>• Ta&apos;minotchi (yetkazib beruvchi) tanlanadi va partiya raqami beriladi.</div>
                    <div>• Tannarx, ustama (marja foizi) va sotish narxi kiritiladi — marja avtomatik hisoblanadi.</div>
                    <div>• Excel orqali 10 000+ tovarni 1 daqiqada ommaviy yuklash imkoniyati mavjud.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">⚠️ Kam Qolgan Tovarlar Signali:</strong>
                    <div>• Omborda kritik miqdordan kam qolgan tovarlar bo‘yicha tizim ogohlantirish beradi va avtomatik xarid buyurtmasini shakllantiradi.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 7. NASIYA VA SMS */}
            {(activeSection === "debts" || activeSection === "all") && (
              <section id="debts" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-400 text-xl font-bold">
                    <FiUsers />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">7-Qadam</span>
                    <h2 className="text-2xl font-black">Nasiya (Qarz) Daftari va Avtomatik SMS Eslatmalar</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">📒 Mijoz Balansi va Qarz Tarixi:</strong>
                    <div>• Har bir mijoz uchun ism, telefon va qarz limiti belgilanadi.</div>
                    <div>• Mijozning barcha olingan cheklari va to‘lagan pullari daqiqa-daqiqa saqlanadi.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">📲 SMS Eslatmalar:</strong>
                    <div>• Qarz muddati kelganda mijoz telefoniga xushmuomala eslatma SMS avtomatik yuboriladi.</div>
                    <div>• To‘lov qilinganda chek va qolgan qarz miqdori ko‘rsatilgan SMS tasdiqnomasi boradi.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 8. MOLIYA VA Z-HISOBOT */}
            {(activeSection === "finance" || activeSection === "all") && (
              <section id="finance" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-rose-500/15 text-rose-400 text-xl font-bold">
                    <FiBarChart2 />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-rose-400 tracking-wider">8-Qadam</span>
                    <h2 className="text-2xl font-black">Moliya, Kassa Balansi va Smena Yopish (Z-Hisobot)</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">💰 Kassa Balansi va Inkassatsiya:</strong>
                    <div>• Kun boshidagi qoldiq, kassa kirimlari va xarajatlar (arenda, tushlik, xodim oyligi) alohida qayd etiladi.</div>
                    <div>• Smena yopilganda Z-Hisobot chiqariladi va naqd kassa summasi dastur bilan 1 tiyingacha solishtiriladi.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">📈 Sof Foyda Hisoboti:</strong>
                    <div>• Sotilgan tovarlarning tannarxi avtomatik chegirilib, real sof daromad (Net Profit) hisoblanadi.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 9. TELEGRAM BOT XABARLARI */}
            {(activeSection === "telegram" || activeSection === "all") && (
              <section id="telegram" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-sky-500/15 text-sky-400 text-xl font-bold">
                    <FaTelegramPlane />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-sky-400 tracking-wider">9-Qadam</span>
                    <h2 className="text-2xl font-black">Telegram Bot Integratsiyasi va Jonli Xabarnomalar</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">🤖 Rasmiy Botga Ulanish:</strong>
                    <div>• Do‘kon egasi <code>@shop_admin_uz_bot</code> ga kirib <code>/start</code> bosadi va telefon raqamini yuboradi.</div>
                    <div>• Har bir yirik savdo, kassa yopilishi va kunlik tushum haqida darhol hisobot Telegramga keladi.</div>
                    <div>• Siz dunyoning istalgan nuqtasidan do‘koningizdagi savdoni telefoningizda kuzatib turasiz.</div>
                  </div>
                </div>
              </section>
            )}

            {/* 10. XODIMLAR VA HUQUQLAR */}
            {(activeSection === "security" || activeSection === "all") && (
              <section id="security" className={`p-6 sm:p-8 rounded-3xl border ${theme === "dark" ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-teal-500/15 text-teal-400 text-xl font-bold">
                    <FiShield />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-teal-400 tracking-wider">10-Qadam</span>
                    <h2 className="text-2xl font-black">Xodimlar Huquqlari (RBAC) va Xavfsizlik Sozlamalari</h2>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <strong className="text-white text-sm block">👥 Rollar Bo‘yicha Cheklovlar:</strong>
                    <div>• <strong>Admin (Ega):</strong> To‘liq boshqaruv, foyda, tannarx, sozlamalar va xodimlar maoshi.</div>
                    <div>• <strong>Menejer:</strong> Ombor kirimi, tovar narxlarini o‘zgartirish, savatdan tovar o‘chirish huquqi.</div>
                    <div>• <strong>Kassir:</strong> Faqat savdo qilish, chek chiqarish. Tannarx va umumiy foydani ko‘ra olmaydi. Tovarni o‘chirish uchun PIN-kod talab qilinadi.</div>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
