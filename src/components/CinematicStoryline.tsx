"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Play,
  RotateCcw,
  CheckCircle2,
  DownloadCloud,
  ShoppingCart,
  Printer,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface CinematicStorylineProps {
  theme: "dark" | "light";
}

export default function CinematicStoryline({ theme }: CinematicStorylineProps) {
  // Steps:
  // 0: Bo'sh do'kon (Empty store ready)
  // 1: Ready to install
  // 2: Installing (0 -> 100%)
  // 3: Installed! POS boots up
  // 4: Customer arrives & items added (Cola 12k, Burger 35k, Fri 18k)
  // 5: Payment success & Receipt printed
  // 6: Sales statistics updated (2 450 000 -> 2 515 000 so'm) & Celebration!
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [installProgress, setInstallProgress] = useState<number>(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState<boolean>(false);
  const [salesRevenue, setSalesRevenue] = useState<number>(2450000);

  // Auto-play orchestrator
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlayingAuto) {
      if (currentStep === 1) {
        timer = setTimeout(() => {
          handleStartInstall();
        }, 800);
      } else if (currentStep === 3) {
        timer = setTimeout(() => {
          setCurrentStep(4);
        }, 1600);
      } else if (currentStep === 4) {
        timer = setTimeout(() => {
          handleExecutePayment();
        }, 2200);
      } else if (currentStep === 5) {
        timer = setTimeout(() => {
          setCurrentStep(6);
          triggerConfetti();
        }, 2400);
      }
    }

    return () => clearTimeout(timer);
  }, [isPlayingAuto, currentStep]);

  // Install Progress Loop
  const handleStartInstall = () => {
    setCurrentStep(2);
    setInstallProgress(0);

    const interval = setInterval(() => {
      setInstallProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentStep(3);
          }, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 280);
  };

  const handleExecutePayment = () => {
    setCurrentStep(5);
    setSalesRevenue(2515000); // 2 450 000 + 65 000
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6245ED", "#10b981", "#06b6d4", "#f59e0b"],
    });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setInstallProgress(0);
    setSalesRevenue(2450000);
    setIsPlayingAuto(false);
  };

  return (
    <div
      className={`rounded-3xl border overflow-hidden transition-all shadow-2xl ${
        theme === "dark"
          ? "bg-slate-950/80 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Top Controller Bar */}
      <div
        className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 ${
          theme === "dark" ? "border-slate-800 bg-slate-900/60" : "border-slate-100 bg-slate-50/80"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-400">
            Cinematic Story: Bo‘sh Joydan → Real Savdogacha
          </span>
        </div>

        {/* Step indicator badges */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((stepNum) => (
            <button
              key={stepNum}
              onClick={() => {
                if (stepNum === 2) handleStartInstall();
                else if (stepNum === 5) handleExecutePayment();
                else setCurrentStep(stepNum);
              }}
              className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center transition-all ${
                currentStep === stepNum
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30 scale-110"
                  : currentStep > stepNum
                  ? "bg-emerald-500/20 text-emerald-400"
                  : theme === "dark"
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {currentStep > stepNum ? "✓" : stepNum}
            </button>
          ))}
        </div>

        {/* Play & Reset controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (currentStep >= 6) handleReset();
              setIsPlayingAuto(!isPlayingAuto);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlayingAuto
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/20"
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isPlayingAuto ? "animate-spin" : ""}`} />
            {isPlayingAuto ? "Pauza" : "Avto Hikoya (Play)"}
          </button>

          <button
            onClick={handleReset}
            className={`p-2 rounded-xl text-xs border transition-all cursor-pointer ${
              theme === "dark"
                ? "border-slate-800 text-slate-400 hover:text-white"
                : "border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
            title="Qaytadan boshlash"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Context: Story Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-500/10 text-brand-400 border border-brand-500/20">
              Bosqich #{currentStep} / 6
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
              {currentStep === 1 && "1. Bo‘sh Do‘kon va POS O‘rnatishga Tayyorgarlik"}
              {currentStep === 2 && "2. Dastur O‘rnatilmoqda (0% → 100%)"}
              {currentStep === 3 && "3. Tizim Tayyor! Mahsulotlar Bazasiga Ulash"}
              {currentStep === 4 && "4. Xaridor Keldi: Mahsulotlar Kassaga Kiritildi"}
              {currentStep === 5 && "5. To‘lov Muvaffaqiyatli & Chek Chop Etildi"}
              {currentStep === 6 && "6. Kunlik Savdo Yangilandi: Savdo Boshlandi!"}
            </h3>

            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              {currentStep === 1 &&
                "Yangi ochilgan do‘kon yoki kafeda hali kassa yo‘q. Kompyuter yoki POS terminal qo‘yiladi va tizimni bir tugma orqali o‘rnatish mumkin."}
              {currentStep === 2 &&
                "Shop-Admin o‘rnatish paketi ombor, xodimlar roli va chek printeri drayverlarini avtomatik sozlaydi."}
              {currentStep === 3 &&
                "POS terminal ishga tushdi! Menyudagi barcha tovarlar, narxlar va shtrix-kodlar soniyalar ichida yuklandi."}
              {currentStep === 4 &&
                "Birinchi mijoz buyurtmasi: Burger (35 000 so‘m), Coca-Cola (12 000 so‘m) va Fri (18 000 so‘m) skanerdan o‘tkazildi."}
              {currentStep === 5 &&
                "Mijoz to‘lovni amalga oshirdi. 0.2 soniyada 80mm termal kvitansiya chop etildi va kassa tortmasi avtomatik ochildi."}
              {currentStep === 6 &&
                "Kunlik tushum 2 450 000 so‘mdan 2 515 000 so‘mga oshdi! Barcha ma’lumotlar bulutli serverga va xo‘jayinning telefoniga yetib bordi."}
            </p>

            {/* Interactive Action Button */}
            <div className="pt-2">
              {currentStep === 1 && (
                <button
                  onClick={handleStartInstall}
                  className="px-6 py-3.5 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-brand-500 to-indigo-600 hover:opacity-95 shadow-xl shadow-brand-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <DownloadCloud className="w-4 h-4" />
                  POS Tizimini O‘rnatish (Bosing)
                </button>
              )}

              {currentStep === 3 && (
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3.5 rounded-2xl font-black text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Xaridor Savdosini Boshlash
                </button>
              )}

              {currentStep === 4 && (
                <button
                  onClick={handleExecutePayment}
                  className="px-6 py-3.5 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-emerald-400 to-teal-500 hover:opacity-95 shadow-xl shadow-emerald-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  To‘lovni Qabul Qilish (65 000 so‘m)
                </button>
              )}

              {currentStep === 5 && (
                <button
                  onClick={() => {
                    setCurrentStep(6);
                    triggerConfetti();
                  }}
                  className="px-6 py-3.5 rounded-2xl font-black text-xs text-white bg-brand-500 hover:bg-brand-600 shadow-xl shadow-brand-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
                >
                  <TrendingUp className="w-4 h-4" />
                  Statistikani Yangilash
                </button>
              )}

              {currentStep === 6 && (
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-black flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Savdo Muvaffaqiyatli Boshlandi!
                  </span>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Qaytadan Ko‘rish
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Stage: Interactive POS Visual Simulation */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 border relative min-h-[380px] flex flex-col justify-between shadow-2xl transition-all ${
                theme === "dark"
                  ? "bg-slate-900/90 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              {/* Terminal Frame Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-mono font-bold text-slate-400 ml-2">Shop-Admin POS v2.4</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE SINKRONIZATSIYA</span>
                </div>
              </div>

              {/* STAGE 1: Ready to Install */}
              {currentStep === 1 && (
                <div className="my-auto text-center py-10 space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-brand-500/15 text-brand-400 border border-brand-500/30 mx-auto flex items-center justify-center text-4xl shadow-xl">
                    🖥️
                  </div>
                  <h4 className="text-xl font-black">Your POS System is Ready to Install</h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Kassa kompyuteringiz tayyor. Bir tugmani bosing va tizim bir necha soniyada ishga tushadi.
                  </p>
                  <button
                    onClick={handleStartInstall}
                    className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs shadow-lg shadow-brand-500/30 cursor-pointer transition-all inline-flex items-center gap-2"
                  >
                    <DownloadCloud className="w-4 h-4" /> O‘rnatishni Boshlash
                  </button>
                </div>
              )}

              {/* STAGE 2: Installing Progress */}
              {currentStep === 2 && (
                <div className="my-auto text-center py-12 space-y-6">
                  <div className="text-4xl animate-bounce">⚡</div>
                  <div className="space-y-2">
                    <div className="text-sm font-black tracking-wider uppercase text-brand-400">
                      INSTALLING POS SYSTEM...
                    </div>
                    <div className="text-5xl font-black font-mono tracking-tight text-emerald-400">
                      {installProgress}%
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="max-w-md mx-auto h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-300 shadow-md shadow-emerald-500/50"
                      style={{ width: `${installProgress}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-400 font-mono">
                    {installProgress < 40 && "Modullar va drayverlar tekshirilmoqda..."}
                    {installProgress >= 40 && installProgress < 80 && "Kassa va ombor bazasi sozlanmoqda..."}
                    {installProgress >= 80 && "Chek printeri va tarozi ulanmoqda..."}
                  </p>
                </div>
              )}

              {/* STAGE 3: Installed! Ready */}
              {currentStep === 3 && (
                <div className="my-auto text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center text-3xl shadow-lg">
                    ✓
                  </div>
                  <h4 className="text-2xl font-black text-emerald-400">POS SYSTEM INSTALLED!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Dastur muvaffaqiyatli o‘rnatildi. Barcha mahsulotlar menyusi tayyor.
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-bold">
                      📦 1 284 ta tovar
                    </span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-bold">
                      🖨️ Printer Ulangan
                    </span>
                  </div>
                </div>
              )}

              {/* STAGE 4: Real Cart Scanning (Burger, Cola, Fri = 65 000) */}
              {currentStep === 4 && (
                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-slate-400">Savatcha (Buyurtma #1042)</span>
                    <span className="text-xs font-bold text-emerald-400">Kassir: Xurshid S.</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">🥤</span>
                        <div>
                          <div className="font-black">Coca-Cola 0.5L</div>
                          <div className="text-[10px] text-slate-400">1 dona • Shtrix-kod: 5449000000996</div>
                        </div>
                      </div>
                      <span className="font-black text-white font-mono">12 000 so‘m</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">🍔</span>
                        <div>
                          <div className="font-black">Burger Classic Double Beef</div>
                          <div className="text-[10px] text-slate-400">1 dona • Oshxona KDS ga uzatiladi</div>
                        </div>
                      </div>
                      <span className="font-black text-white font-mono">35 000 so‘m</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">🍟</span>
                        <div>
                          <div className="font-black">Kartoshka Fri Qarsildoq</div>
                          <div className="text-[10px] text-slate-400">1 dona • Porsiya</div>
                        </div>
                      </div>
                      <span className="font-black text-white font-mono">18 000 so‘m</span>
                    </div>
                  </div>

                  {/* Cart Total */}
                  <div className="p-4 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">JAMI TO‘LOV</span>
                      <span className="text-2xl font-black text-emerald-400 font-mono tracking-tight">
                        65 000 so‘m
                      </span>
                    </div>
                    <button
                      onClick={handleExecutePayment}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs shadow-lg cursor-pointer transition-all"
                    >
                      To‘lovni Tasdiqlash →
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 5 & 6: Printed Receipt & Revenue Update */}
              {(currentStep === 5 || currentStep === 6) && (
                <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {/* Printed Thermal Receipt */}
                  <div className="p-4 rounded-xl bg-white text-slate-900 font-mono text-[11px] shadow-2xl border border-slate-300 relative transform rotate-1 transition-transform">
                    {/* Jagged paper top */}
                    <div className="text-center pb-2 border-b border-dashed border-slate-300">
                      <div className="font-black text-sm tracking-tight">SHOP-ADMIN.UZ</div>
                      <div className="text-[9px] text-slate-500">Kassa Cheki #1042</div>
                      <div className="text-[9px] text-slate-500">Sana: Bugun 20:30</div>
                    </div>

                    <div className="py-2 space-y-1 border-b border-dashed border-slate-300">
                      <div className="flex justify-between">
                        <span>Coca-Cola 0.5L</span>
                        <span>12 000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Burger Classic</span>
                        <span>35 000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fri Porsiya</span>
                        <span>18 000</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between font-black text-xs">
                      <span>JAMI:</span>
                      <span className="text-emerald-700">65 000 so‘m</span>
                    </div>
                    <div className="text-center pt-2 text-[9px] text-slate-500">
                      Xaridingiz uchun rahmat! ✓
                    </div>
                  </div>

                  {/* Revenue Growth Card */}
                  <div className="p-5 rounded-2xl bg-slate-800/90 border border-emerald-500/40 shadow-xl space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>PAYMENT SUCCESSFUL ✓</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Today&apos;s Sales (Kunlik Savdo)
                      </span>
                      <div className="text-2xl font-black font-mono text-emerald-400 tracking-tight flex items-baseline gap-2 mt-1">
                        <span>{salesRevenue.toLocaleString("uz-UZ")}</span>
                        <span className="text-xs font-bold text-slate-400">so‘m</span>
                      </div>
                      <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+65 000 so‘m avtomatik qo‘shildi!</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-[11px] flex items-center justify-between">
                      <span className="text-slate-400">Ombor balansi:</span>
                      <span className="text-white font-bold">-3 dona mahsulot</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Status Ticker */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                  <span>Offline & Cloud Real-Time</span>
                </div>
                <div>Bugungi sotilgan cheklar: 143 ta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
