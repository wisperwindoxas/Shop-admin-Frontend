"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  FiDownload,
  FiMonitor,
  FiSmartphone,
  FiZap,
  FiShield,
  FiWifiOff,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiPlay,
  FiBarChart2,
  FiUsers,
  FiPackage,
  FiCreditCard,
  FiShoppingBag,
  FiHelpCircle,
  FiExternalLink,
  FiCheck,
  FiSun,
  FiMoon,
  FiCoffee,
  FiPieChart,
  FiLayers,
  FiClock,
  FiPercent,
  FiPhoneCall,
  FiMessageSquare,
  FiX,
  FiStar,
  FiMenu,
} from "react-icons/fi";
import {
  FaApple,
  FaWindows,
  FaAndroid,
  FaTelegramPlane,
} from "react-icons/fa";

import SmartPosTerminalHub from "@/components/SmartPosTerminalHub";
import CinematicStoryline from "@/components/CinematicStoryline";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import LiveSalesTicker from "@/components/LiveSalesTicker";
import ProductManagement3D from "@/components/ProductManagement3D";
import DashboardAnalytics from "@/components/DashboardAnalytics";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import BusinessModesShowcase from "@/components/BusinessModesShowcase";
import CtaSection from "@/components/CtaSection";

type BusinessDirection = "retail" | "cafe" | "bakery";

export default function LandingPage() {
  // Theme state: dark | light (persisted in localStorage)
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  // Active Business Direction (3 Directions: Do'kon, Kafe, Shirinliklar)
  const [direction, setDirection] = useState<BusinessDirection>("retail");

  // 3D Visualizer display mode: webgl | terminal
  const [view3DMode, setView3DMode] = useState<"webgl" | "terminal">("webgl");

  // Platform download tab
  const [activeTab, setActiveTab] = useState<"win" | "mac" | "android" | "ios">("win");

  // Interactive POS Demo State
  const [demoCart, setDemoCart] = useState<
    Array<{ id: number; name: string; price: number; qty: number; unit: string; note?: string }>
  >([
    { id: 1, name: "Olma Qizil (Qizil Shirin)", price: 18000, qty: 1.25, unit: "kg" },
    { id: 2, name: "Sut 3.2% Toshkent 1L", price: 11000, qty: 2, unit: "dona" },
    { id: 3, name: "Non Tandir Samarqand", price: 4000, qty: 3, unit: "dona" },
  ]);
  const [selectedPayment, setSelectedPayment] = useState<"cash" | "card" | "click" | "debt">("click");
  const [paymentDone, setPaymentDone] = useState(false);

  // Lead modal state
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    businessName: "",
    businessType: "retail",
    plan: "standard",
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Calculator State
  const [calcDailyChecks, setCalcDailyChecks] = useState<number>(85);
  const [calcAvgCheck, setCalcAvgCheck] = useState<number>(65000);

  // Mobile Menu & Active Nav for smooth animated scroll
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("directions");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 120;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy to highlight active nav scene & trigger pricing typewriter + sticky header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const sections = [
        "directions",
        "cinematic-story",
        "features",
        "analytics",
        "products",
        "business-types",
        "comparison",
        "pos-demo",
        "pricing",
        "download",
      ];
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(sections[i]);
          if (sections[i] === "pricing") {
            setPricingTriggered(true);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pricing Typewriter State
  const [pricingTriggered, setPricingTriggered] = useState(false);
  const [typedBasicLine, setTypedBasicLine] = useState(0);
  const [typedBasicChar, setTypedBasicChar] = useState(0);
  const [typedStandardLine, setTypedStandardLine] = useState(0);
  const [typedStandardChar, setTypedStandardChar] = useState(0);

  const basicPlanList = [
    "1 ta savdo nuqtasi (POS Kassa)",
    "Cheksiz tovarlar va menyu qo'shish",
    "3 tagacha xodim foydalanuvchisi",
    "100% Oflayn rejim va chek chop etish",
    "Shtrix-kod skaner (USB HID) qo'llab-quvvatlash",
    "Kunlik va oylik kassa hisobotlari (P&L)",
    "Xavfsizlik PIN kodi (Tovarni o'chirish himoyasi)",
  ];

  const standardPlanList = [
    "Barcha 3 xil rejim: Do'kon, Kafe va Shirinliklar",
    "3 tagacha kassa va bir nechta omborlar hisobi",
    "Cheksiz xodimlar (Kassir, Ofitsiant, Oshpaz, Admin)",
    "Shtrih-Print tarozi (UDP jonli vazn va PLU yuklash)",
    "Stollar xaritasi & Oshxona KDS planshet ekrani",
    "Tort buyurtmalari, tabrik yozuvlari va avans hisobi",
    "Nasiya (Qarz) daftari + Avtomatik SMS eslatmalar",
    "Telegram Bot: Kunlik tushum va qoldiqlar telefonda",
    "24/7 VIP Ko'mak va mutaxassis o'rnatib berishi",
  ];

  // Sequential typing loop when pricing is viewed
  useEffect(() => {
    if (!pricingTriggered) return;

    // Type Basic plan sequentially
    const basicInterval = setInterval(() => {
      setTypedBasicLine((curLine) => {
        if (curLine >= basicPlanList.length) {
          clearInterval(basicInterval);
          return curLine;
        }
        const lineText = basicPlanList[curLine];
        setTypedBasicChar((curChar) => {
          if (curChar < lineText.length) {
            return curChar + 1;
          } else {
            // Next line
            setTypedBasicLine((l) => l + 1);
            return 0;
          }
        });
        return curLine;
      });
    }, 22);

    // Type Standard plan sequentially
    const stdInterval = setInterval(() => {
      setTypedStandardLine((curLine) => {
        if (curLine >= standardPlanList.length) {
          clearInterval(stdInterval);
          return curLine;
        }
        const lineText = standardPlanList[curLine];
        setTypedStandardChar((curChar) => {
          if (curChar < lineText.length) {
            return curChar + 1;
          } else {
            // Next line
            setTypedStandardLine((l) => l + 1);
            return 0;
          }
        });
        return curLine;
      });
    }, 20);

    return () => {
      clearInterval(basicInterval);
      clearInterval(stdInterval);
    };
  }, [pricingTriggered]);

  const handleSkipPricingTypewriter = () => {
    setTypedBasicLine(basicPlanList.length + 1);
    setTypedStandardLine(standardPlanList.length + 1);
  };

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("shop_admin_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
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

  // Direction Switch Effect for Demo
  const handleDirectionChange = (newDir: BusinessDirection, shouldScroll = false) => {
    setDirection(newDir);
    setPaymentDone(false);
    if (newDir === "retail") {
      setDemoCart([
        { id: 1, name: "Olma Qizil (Qizil Shirin)", price: 18000, qty: 1.25, unit: "kg" },
        { id: 2, name: "Sut 3.2% Toshkent 1L", price: 11000, qty: 2, unit: "dona" },
        { id: 3, name: "Non Tandir Samarqand", price: 4000, qty: 3, unit: "dona" },
      ]);
    } else if (newDir === "cafe") {
      setDemoCart([
        { id: 10, name: "Cappuccino Grand (250ml)", price: 24000, qty: 2, unit: "dona", note: "Kam shakarli" },
        { id: 11, name: "Lavash Standart Mol Go'shti", price: 34000, qty: 1, unit: "dona", note: "Achchiqsiz" },
        { id: 12, name: "Moxito Limonli Muz bilan", price: 18000, qty: 2, unit: "dona" },
      ]);
    } else if (newDir === "bakery") {
      setDemoCart([
        { id: 20, name: "Qulupnayli Biskvit Tort", price: 165000, qty: 1, unit: "dona", note: "Yozuv: 'Tug'ilgan kuningiz bilan!'" },
        { id: 21, name: "Medovik Klassik (Asalli)", price: 22000, qty: 3, unit: "bo'lak" },
        { id: 22, name: "Kruassan Shokoladli", price: 14000, qty: 2, unit: "dona" },
      ]);
    }
    if (shouldScroll) {
      setTimeout(() => scrollToSection("pos-demo"), 80);
    }
  };

  type DemoCatalogItem = {
    id: number;
    name: string;
    price: number;
    unit: string;
    note?: string;
  };

  const demoItemsCatalog: Record<BusinessDirection, DemoCatalogItem[]> = {
    retail: [
      { id: 4, name: "Banan Ekvador (Tarozi)", price: 23000, unit: "kg" },
      { id: 5, name: "Tuxum 10 talik C-1", price: 16000, unit: "pachka" },
      { id: 6, name: "Coca-Cola 1.5L Klassik", price: 14500, unit: "dona" },
    ],
    cafe: [
      { id: 13, name: "Cheeseburger Double", price: 38000, unit: "dona", note: "Pishloqli" },
      { id: 14, name: "Americano Qora Kofe", price: 16000, unit: "dona" },
      { id: 15, name: "Kartoshka Fri Katta", price: 17000, unit: "dona" },
    ],
    bakery: [
      { id: 23, name: "Napoleon Qatlamli Tort", price: 140000, unit: "dona", note: "Maxsus quti bilan" },
      { id: 24, name: "Ekler Krem-Bryule", price: 12000, unit: "dona" },
      { id: 25, name: "Pechenye Kurabe (Tarozi)", price: 45000, unit: "kg" },
    ],
  };

  const addDemoItem = (item: { id: number; name: string; price: number; unit: string; note?: string }) => {
    setPaymentDone(false);
    setDemoCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx].qty = parseFloat((next[idx].qty + 1).toFixed(2));
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeDemoItem = (id: number) => {
    setPaymentDone(false);
    setDemoCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateDemoQty = (id: number, delta: number) => {
    setPaymentDone(false);
    setDemoCart((prev) =>
      prev
        .map((p) => {
          if (p.id === id) {
            const nextQty = parseFloat((p.qty + delta).toFixed(2));
            return nextQty > 0 ? { ...p, qty: nextQty } : null;
          }
          return p;
        })
        .filter(Boolean) as any
    );
  };

  const rawSubtotal = demoCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const serviceFeePercent = direction === "cafe" ? 10 : 0;
  const serviceFeeAmount = Math.round((rawSubtotal * serviceFeePercent) / 100);
  const demoTotal = rawSubtotal + serviceFeeAmount;

  const handleDemoCheckout = () => {
    if (demoCart.length === 0) return;
    setPaymentDone(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#10b981", "#06b6d4", "#f97316", "#f43f5e"],
      });
    } catch {}
  };

  const [leadLoading, setLeadLoading] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });
      setLeadSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
        });
      } catch {}
      setTimeout(() => {
        setIsLeadModalOpen(false);
        setLeadSubmitted(false);
        setLeadForm({
          name: "",
          phone: "",
          businessName: "",
          businessType: "retail",
          plan: "standard",
        });
      }, 2600);
    } catch (err) {
      console.error("Lead error:", err);
      setLeadSubmitted(true);
      setTimeout(() => {
        setIsLeadModalOpen(false);
        setLeadSubmitted(false);
      }, 2600);
    } finally {
      setLeadLoading(false);
    }
  };

  // Direction Color Tokens
  const dirColors = {
    retail: {
      badge: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
      accent: "#10b981",
      border: "border-emerald-500",
      glow: "neon-glow-emerald",
      bgSoft: "bg-emerald-500/5",
      btnGrad: "from-emerald-500 to-teal-500",
      title: "Do'kon & Supermarket",
      desc: "Oziq-ovqat, maishiy do'konlar, kiyim-kechak va chakana savdo tarmoqlari uchun to'liq kassa va omborxona ERP tizimi.",
    },
    cafe: {
      badge: "bg-orange-500/10 text-orange-500 border-orange-500/30",
      accent: "#f97316",
      border: "border-orange-500",
      glow: "neon-glow-orange",
      bgSoft: "bg-orange-500/5",
      btnGrad: "from-orange-500 to-amber-500",
      title: "Kafe & Restoran & Fast Food",
      desc: "Interaktiv stollar xaritasi, ofitsiant rejimi, oshxona KDS ekrani, taom modifikatorlari va xizmat haqi % avtomatik hisobi.",
    },
    bakery: {
      badge: "bg-rose-500/10 text-rose-500 border-rose-500/30",
      accent: "#f43f5e",
      border: "border-rose-500",
      glow: "neon-glow-rose",
      bgSoft: "bg-rose-500/5",
      btnGrad: "from-rose-500 to-pink-500",
      title: "Shirinliklar & Qandolat (Bakery)",
      desc: "Tort buyurtmalari, tabrik yozuvlari, grammli/vaznli pishiriqlar, oldindan to'lov (avans) va qandolatchi sexiga zakaz uzatish.",
    },
  };

  // Monthly Estimated Profit / Time Saved Calculation
  const monthlyRevenue = calcDailyChecks * calcAvgCheck * 30;
  const monthlyTimeSavedHours = Math.round(calcDailyChecks * 0.05 * 30);
  const monthlyLossPrevented = Math.round(monthlyRevenue * 0.035);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#070b12] text-slate-100" : "bg-[#f8fafc] text-slate-900"} relative grid-bg transition-colors duration-300`}>
      {/* Ambient Glows Container (clips glow circles without breaking position:sticky on page) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px]" />
      </div>

      {/* STICKY TOP NAVIGATION WRAPPER (Scroll paytida doim tepadagi menyu qotib turadi) */}
      <div
        className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-[#070b12]/95 shadow-xl shadow-black/40 border-b border-white/10"
              : "bg-white/95 shadow-lg shadow-slate-200/80 border-b border-slate-200"
            : theme === "dark"
            ? "bg-[#070b12] border-b border-white/10"
            : "bg-white border-slate-200"
        }`}
      >
        {/* TOP BRAND HEADER (Logo, Bog'lanish, Rejim o'zgartirish va 14 Kun Bepul CTA) */}
        <header className="transition-all duration-300">
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
            }`}
          >
            {/* Logo & Brand (Always on Left) */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div
                className={`flex items-center justify-center group-hover:scale-105 transition-all duration-300 shrink-0 ${
                  isScrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-11 sm:h-11"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Shop-Admin.uz Logo"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-black tracking-tight transition-all duration-300 ${
                      isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                    } ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    Shop-Admin<span className="text-emerald-500">.uz</span>
                  </span>
                </div>
                <span
                  className={`hidden sm:block text-[10px] font-bold tracking-wider uppercase ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Do&apos;kon • Kafe • Shirinliklar
                </span>
              </div>
            </Link>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Telegram Support link */}
              <a
                href="https://t.me/shop_admin_support_bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  theme === "dark"
                    ? "bg-slate-900 border-slate-700/80 text-cyan-400 hover:bg-slate-800"
                    : "bg-slate-50 border-slate-200 text-cyan-600 hover:bg-slate-100"
                }`}
              >
                <FaTelegramPlane className="text-sm" />
                <span>Bog‘lanish</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Tungi/Kunduzgi rejim"
                className={`p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900 border-slate-700/80 text-amber-400 hover:bg-slate-800 shadow-sm"
                    : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 shadow-sm"
                }`}
                title={theme === "dark" ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
              >
                {theme === "dark" ? <FiSun className="text-base sm:text-lg" /> : <FiMoon className="text-base sm:text-lg" />}
              </button>

              {/* Quick 14 Kun Bepul CTA Button */}
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className={`inline-flex items-center gap-1.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-95 shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0 ${
                  isScrolled ? "px-3.5 sm:px-4 py-2" : "px-4 sm:px-5 py-2.5"
                }`}
              >
                <FiZap className="text-sm" />
                <span>14 Kun Bepul</span>
              </button>
            </div>
          </div>
        </header>

        {/* SECONDARY STICKY SUB-NAVBAR */}
        <nav
          className={`border-t transition-all duration-300 ${
            theme === "dark" ? "border-white/10" : "border-slate-200/80"
          }`}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between sm:justify-center py-2 overflow-x-auto no-scrollbar gap-1 sm:gap-2">
              {[
                { id: "directions", label: "Bosh Sahifa", icon: FiLayers, color: "text-emerald-500" },
                { id: "cinematic-story", label: "Hikoya", icon: FiPlay, color: "text-brand-500", isLive: true },
                { id: "features", label: "Imkoniyatlar", icon: FiZap, color: "text-cyan-500" },
                { id: "analytics", label: "Tahlil", icon: FiBarChart2, color: "text-amber-500" },
                { id: "products", label: "Mahsulotlar", icon: FiPackage, color: "text-purple-500" },
                { id: "comparison", label: "Taqqoslash", icon: FiCheckCircle, color: "text-emerald-500" },
                { id: "pos-demo", label: "POS Demo", icon: FiPlay, color: "text-emerald-500" },
                { id: "pricing", label: "Tariflar", icon: FiCreditCard, color: "text-rose-500" },
                { id: "download", label: "Yuklab Olish", icon: FiDownload, color: "text-blue-500" },
              ].map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shrink-0 group ${
                      isActive
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 font-black scale-102"
                        : theme === "dark"
                        ? "text-slate-300 hover:text-white hover:bg-slate-800/80"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`text-base sm:text-lg transition-transform duration-200 group-hover:scale-110 flex items-center justify-center ${
                      isActive ? "text-white" : item.color
                    }`}>
                      <item.icon />
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.isLive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5" />
                    )}
                  </button>
                );
              })}

              <Link
                href="/guide"
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 shrink-0 group ${
                  theme === "dark"
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/80"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="text-base sm:text-lg text-cyan-500 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
                  <FiHelpCircle />
                </span>
                <span className="whitespace-nowrap">Qo&apos;llanma</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section id="directions" className="scene-section scroll-mt-24 relative pt-10 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Direction Pills */}
        <div className="flex items-center justify-center mb-8">
          <div className={`p-1.5 rounded-2xl border flex items-center gap-1.5 flex-wrap justify-center shadow-lg ${
            theme === "dark" ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200"
          }`}>
            <button
              onClick={() => handleDirectionChange("retail")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                direction === "retail"
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-102"
                  : "text-slate-500 hover:text-emerald-500"
              }`}
            >
              <span>🛒</span>
              <span>Do&apos;kon & Supermarket</span>
            </button>
            <button
              onClick={() => handleDirectionChange("cafe")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                direction === "cafe"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-102"
                  : "text-slate-500 hover:text-orange-500"
              }`}
            >
              <span>☕</span>
              <span>Kafe & Restoran</span>
            </button>
            <button
              onClick={() => handleDirectionChange("bakery")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                direction === "bakery"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-102"
                  : "text-slate-500 hover:text-rose-500"
              }`}
            >
              <span>🍰</span>
              <span>Shirinliklar & Qandolat</span>
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-black uppercase tracking-wider ${dirColors[direction].badge}`}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: dirColors[direction].accent }} />
              {dirColors[direction].title} Uchun Maxsus Ishlab Chiqilgan
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Biznesingizni Bitta POS Orqali Boshqaring
            </h1>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              Do‘kon, kafe va shirinliklar biznesi uchun zamonaviy savdo boshqaruv tizimi.
            </p>

            {/* Feature Bullets for the active direction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
              {direction === "retail" && (
                <>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-emerald-500 text-lg shrink-0" />
                    <span>Shtrih-Print tarozilar integratsiyasi (UDP)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-emerald-500 text-lg shrink-0" />
                    <span>Tezkor USB shtrix-kod skaner (0.1 soniya)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-emerald-500 text-lg shrink-0" />
                    <span>Nasiya (Qarz) daftari + SMS eslatma</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-emerald-500 text-lg shrink-0" />
                    <span>100% Oflayn rejim (internet uzilsa ham ishlaydi)</span>
                  </div>
                </>
              )}
              {direction === "cafe" && (
                <>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-orange-500 text-lg shrink-0" />
                    <span>Interaktiv stollar xaritasi va zallar</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-orange-500 text-lg shrink-0" />
                    <span>Oshxona & Bar KDS displeyi (Buyurtmalar)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-orange-500 text-lg shrink-0" />
                    <span>Xizmat haqi % foizini avtomatik hisoblash</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-orange-500 text-lg shrink-0" />
                    <span>Taom modifikatorlari (sutsiz, shakarsiz, pishloq)</span>
                  </div>
                </>
              )}
              {direction === "bakery" && (
                <>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-rose-500 text-lg shrink-0" />
                    <span>Tort buyurtmalari va tabrik yozuvlari</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-rose-500 text-lg shrink-0" />
                    <span>Oldindan to&apos;lov (Avans) va tayyor bo&apos;lish vaqti</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-rose-500 text-lg shrink-0" />
                    <span>Vaznli (gramm) va bo&apos;laklab sotish</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                    <FiCheckCircle className="text-rose-500 text-lg shrink-0" />
                    <span>Konditer sexiga avtomatik zakaz kvitansiyasi</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA Buttons (Requested in Prompt Section 2) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#cinematic-story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-brand-500 via-indigo-600 to-brand-600 hover:opacity-95 shadow-xl shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FiZap className="text-lg" />
                POS Tizimini Ko‘rish
              </a>
              <a
                href="#pos-demo"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm border transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700"
                    : "bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-2xs"
                }`}
              >
                <FiPlay className="text-emerald-500" />
                Demo Ko‘rish
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-semibold flex-wrap">
              <div className="flex items-center gap-2">
                <FiShield className="text-emerald-500 text-base" />
                <span>100% Ma&apos;lumot xavfsizligi</span>
              </div>
              <div className="flex items-center gap-2">
                <FiWifiOff className="text-cyan-500 text-base" />
                <span>Oflayn rejim kafolatlangan</span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="text-amber-400 text-base" />
                <span>1,000+ do&apos;konlar ishonchi</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Terminal & Three.js WebGL Interactive Canvas */}
          {/* Right Column: Smart Cloud POS Terminal & Live Store Monitor */}
          <div className="lg:col-span-5 relative">
            <SmartPosTerminalHub
              mode={direction}
              theme={theme}
              onOpenDemo={() => scrollToSection("pos-demo")}
            />
          </div>
        </div>
      </section>

      {/* 1. CINEMATIC STORYLINE SIMULATOR (PROMPT SECTIONS 1, 4, 5) */}
      <section
        id="cinematic-story"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <CinematicStoryline theme={theme} />
      </section>

      {/* 2. 6 CORE FEATURES SHOWCASE (PROMPT SECTION 7) */}
      <section
        id="features"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <FeaturesShowcase theme={theme} />
      </section>

      {/* 3. DASHBOARD SHOWCASE & ANALYTICS CHARTS (PROMPT SECTIONS 8 & 10) */}
      <section
        id="analytics"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <DashboardAnalytics theme={theme} />
      </section>

      {/* 4. 3D PRODUCT MANAGEMENT ON DESK WITH FLOATING SPECS HUD (PROMPT SECTION 9) */}
      <section
        id="products"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <ProductManagement3D theme={theme} />
      </section>

      {/* 5. 3 BUSINESS TYPES WITH 3D CARDS (PROMPT SECTION 11) */}
      <section
        id="business-types"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <BusinessModesShowcase
          theme={theme}
          currentMode={direction}
          onSelectMode={(m) => handleDirectionChange(m, true)}
        />
      </section>

      {/* 6. BEFORE / AFTER COMPARISON SLIDER (PROMPT SECTION 12) */}
      <section
        id="comparison"
        className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${
          theme === "dark" ? "border-white/5" : "border-slate-200"
        }`}
      >
        <BeforeAfterSlider theme={theme} />
      </section>

      {/* INTERACTIVE POS DEMO SECTION (JONLI KASSA TESTI) */}
      <section id="pos-demo" className={`scene-section scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-black uppercase tracking-wider mb-4">
            Interactive Test Drive
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}>
            Jonli POS Kassani Hozir Sinab Ko&apos;ring
          </h2>
          <p className={`mt-4 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Quyida tovarlarni savatga qo&apos;shing, miqdorini o&apos;zgartiring va chek chiqarib ko&apos;ring.
          </p>
        </div>

        {/* The POS Sandbox Container */}
        <div className={`glass-panel rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
          theme === "dark" ? "border-slate-800 bg-[#070b12]/80" : "border-slate-200 bg-white/95 shadow-slate-200/70"
        }`}>
          {/* Top Bar inside Demo */}
          <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 border-b ${
            theme === "dark" ? "border-white/10" : "border-slate-200"
          }`}>
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className={`text-sm font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  KASSA #01 — {dirColors[direction].title}
                </span>
                <span className={`block text-[11px] font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                  Smena: Ochiq • Kassir: Malika R.
                </span>
              </div>
            </div>

            {/* Direction Quick Pills inside POS */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 text-xs font-bold ${
              theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                onClick={() => handleDirectionChange("retail")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  direction === "retail"
                    ? "bg-emerald-500 text-white shadow-xs font-bold"
                    : theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🛒 Do&apos;kon
              </button>
              <button
                onClick={() => handleDirectionChange("cafe")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  direction === "cafe"
                    ? "bg-orange-500 text-white shadow-xs font-bold"
                    : theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ☕ Kafe
              </button>
              <button
                onClick={() => handleDirectionChange("bakery")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  direction === "bakery"
                    ? "bg-rose-500 text-white shadow-xs font-bold"
                    : theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                🍰 Shirinlik
              </button>
            </div>
          </div>

          {/* Catalog & Cart Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Catalog (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className={`text-xs font-black uppercase tracking-wider block ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}>
                Tezkor Mahsulotlar Katalogi (Bir marta bosing):
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {demoItemsCatalog[direction].map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => addDemoItem(prod)}
                    className={`p-4 rounded-2xl border text-left transition-all hover:scale-102 active:scale-98 cursor-pointer flex flex-col justify-between ${
                      theme === "dark"
                        ? "bg-slate-900/80 hover:bg-slate-800/90 border-slate-800 hover:border-emerald-500/40 text-white"
                        : "bg-white hover:bg-slate-50 border-slate-200 shadow-xs hover:border-emerald-500 text-slate-900"
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-extrabold line-clamp-2 ${
                        theme === "dark" ? "text-white" : "text-slate-900"
                      }`}>
                        {prod.name}
                      </div>
                      {prod.note && (
                        <span className="text-[10px] text-amber-500 font-bold block mt-1">
                          📝 {prod.note}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-500">
                        {prod.price.toLocaleString("uz-UZ")} so&apos;m
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        theme === "dark" ? "text-slate-400 bg-slate-500/10" : "text-slate-600 bg-slate-100"
                      }`}>
                        +{prod.unit}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Extra Features Pill bar inside demo */}
              <div className={`p-4 rounded-2xl border text-xs flex flex-wrap items-center justify-between gap-3 ${
                theme === "dark" ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}>
                <div className={`flex items-center gap-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  <FiZap className="text-emerald-500" />
                  <span>Skaner signali: <strong className={theme === "dark" ? "text-white" : "text-slate-900"}>Faol (USB / UDP)</strong></span>
                </div>
                {direction === "cafe" && (
                  <span className="text-orange-500 font-bold">
                    ☕ Stol #04 (Asosiy Zal) • +10% Xizmat haqi
                  </span>
                )}
                {direction === "bakery" && (
                  <span className="text-rose-500 font-bold">
                    🎂 Tort buyurtmasi: Tayyor bo&apos;lishi 18:00
                  </span>
                )}
                {direction === "retail" && (
                  <span className="text-emerald-500 font-bold">
                    ⚖️ Tarozi: Shtrih-Print Jonli ulangan (UDP 1111)
                  </span>
                )}
              </div>
            </div>

            {/* Cart & Receipt (Right 5 Cols) */}
            <div className={`lg:col-span-5 rounded-2xl p-5 border flex flex-col justify-between ${
              theme === "dark" ? "bg-slate-950/70 border-slate-800 text-white" : "bg-white border-slate-200 shadow-md text-slate-900"
            }`}>
              <div>
                <div className={`flex items-center justify-between pb-3 border-b ${
                  theme === "dark" ? "border-white/10" : "border-slate-200"
                }`}>
                  <span className={`text-xs font-black uppercase tracking-wider ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}>
                    Savat ({demoCart.length} xil)
                  </span>
                  <button
                    onClick={() => setDemoCart([])}
                    className="text-[11px] text-rose-500 hover:underline font-bold"
                  >
                    Tozalash
                  </button>
                </div>

                {/* Cart Rows */}
                <div className={`divide-y max-h-[220px] overflow-y-auto my-2 pr-1 ${
                  theme === "dark" ? "divide-white/5" : "divide-slate-100"
                }`}>
                  {demoCart.length === 0 ? (
                    <div className={`py-8 text-center text-xs ${
                      theme === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}>
                      Savat bo&apos;sh. Chapdagi tovarlardan tanlang.
                    </div>
                  ) : (
                    demoCart.map((item) => (
                      <div key={item.id} className="py-2.5 flex items-center justify-between gap-2 text-xs">
                        <div className="flex-1 min-w-0">
                          <span className={`font-extrabold truncate block ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}>
                            {item.name}
                          </span>
                          <span className={`text-[11px] ${
                            theme === "dark" ? "text-slate-400" : "text-slate-500"
                          }`}>
                            {item.price.toLocaleString("uz-UZ")} so&apos;m × {item.qty} {item.unit}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => updateDemoQty(item.id, -1)}
                            className={`w-6 h-6 rounded flex items-center justify-center font-bold transition-all ${
                              theme === "dark"
                                ? "bg-slate-800 hover:bg-slate-700 text-white"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-xs"
                            }`}
                          >
                            -
                          </button>
                          <span className={`font-black px-1 ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}>
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateDemoQty(item.id, 1)}
                            className={`w-6 h-6 rounded flex items-center justify-center font-bold transition-all ${
                              theme === "dark"
                                ? "bg-slate-800 hover:bg-slate-700 text-white"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-xs"
                            }`}
                          >
                            +
                          </button>
                          <span className="font-black text-emerald-500 ml-2 min-w-[70px] text-right">
                            {Math.round(item.price * item.qty).toLocaleString("uz-UZ")} so&apos;m
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Subtotal and Calculation */}
                {demoCart.length > 0 && (
                  <div className={`pt-3 border-t space-y-1.5 text-xs ${
                    theme === "dark" ? "border-white/10" : "border-slate-200"
                  }`}>
                    <div className={`flex justify-between ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}>
                      <span>Oraliq summa:</span>
                      <span className={`font-bold ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                        {rawSubtotal.toLocaleString("uz-UZ")} so&apos;m
                      </span>
                    </div>
                    {serviceFeePercent > 0 && (
                      <div className="flex justify-between text-orange-500 font-bold">
                        <span>Xizmat haqi ({serviceFeePercent}%):</span>
                        <span>+{serviceFeeAmount.toLocaleString("uz-UZ")} so&apos;m</span>
                      </div>
                    )}
                    <div className={`flex justify-between text-base font-black pt-1 border-t ${
                      theme === "dark" ? "border-white/10 text-white" : "border-slate-200 text-slate-900"
                    }`}>
                      <span>Jami to&apos;lov:</span>
                      <span className="text-emerald-500 font-black">
                        {demoTotal.toLocaleString("uz-UZ")} so‘m
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Type Selection & Checkout */}
              <div className="pt-4 space-y-3">
                <div className="grid grid-cols-4 gap-1 text-[11px] font-bold">
                  {[
                    { id: "cash", label: "Naqd" },
                    { id: "card", label: "Humo/Uz" },
                    { id: "click", label: "Click/Payme" },
                    { id: "debt", label: "Nasiya" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPayment(p.id as any)}
                      className={`py-1.5 rounded-lg border transition-all text-center ${
                        selectedPayment === p.id
                          ? "bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-xs"
                          : theme === "dark"
                          ? "border-slate-800 text-slate-400 hover:text-white bg-slate-900/50"
                          : "border-slate-200 text-slate-600 hover:text-slate-900 bg-slate-50"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <button
                  disabled={demoCart.length === 0}
                  onClick={handleDemoCheckout}
                  className={`w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    demoCart.length === 0
                      ? theme === "dark"
                        ? "opacity-50 cursor-not-allowed bg-slate-800 text-slate-500"
                        : "opacity-50 cursor-not-allowed bg-slate-200 text-slate-400"
                      : "bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:opacity-95 shadow-emerald-500/20 active:scale-98 cursor-pointer"
                  }`}
                >
                  <FiCheckCircle className="text-lg" />
                  {paymentDone ? "✅ Chek Chiqarildi!" : `Chek Chiqarish — ${demoTotal.toLocaleString("uz-UZ")} so‘m`}
                </button>

                {paymentDone && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold text-center animate-bounce">
                    🎉 Kvitansiya muvaffaqiyatli chop etildi va ombordan hisobdan chiqarildi!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION (2 TARIF: BASIC = 100k, STANDART = 150k) */}
      <section id="pricing" className={`scene-section scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs font-black uppercase tracking-wider mb-4">
            Shaffof va Qat&apos;iy Narxlar
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Ikkala Tarif Ham Barcha Bizneslar Uchun Qulay
          </h2>
          <p className={`mt-4 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Hech qanday yashirin komissiya yo&apos;q. 14 kunlik bepul sinov muddati mavjud.
          </p>
        </div>

        {/* Live Typewriter Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-400">
            {typedBasicLine < basicPlanList.length || typedStandardLine < standardPlanList.length
              ? "Tarif imkoniyatlari yozilmoqda... (Darhol ko‘rish uchun ustiga bosing)"
              : "Barcha imkoniyatlar muvaffaqiyatli yuklandi ✓"}
          </span>
        </div>

        {/* 2 Plans Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* PLAN 1: BASIC (100 ming so'm) */}
          <div className={`glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 border flex flex-col justify-between card-3d ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-500/15 text-slate-400 border border-slate-500/20">
                  Boshlang&apos;ich
                </span>
                <span className="text-xs text-slate-400 font-bold">1 ta kassa</span>
              </div>

              <h3 className="text-2xl font-black mt-4">Basic</h3>
              <p className={`text-xs mt-1 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Kichik do&apos;kon, qahvaxona yoki shirinlik do&apos;konchalari uchun qulay boshlang&apos;ich paket.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight">100 000</span>
                <span className="text-xs text-slate-400 font-extrabold uppercase">so&apos;m / oyiga</span>
              </div>

              {/* Sequential Typewriter Features List for Basic Plan */}
              <div
                onClick={handleSkipPricingTypewriter}
                className="mt-8 space-y-3.5 text-xs font-semibold cursor-pointer select-none"
                title="Barchasini tez ko'rish uchun bosing"
              >
                {basicPlanList.map((item, idx) => {
                  const isDone = idx < typedBasicLine;
                  const isCurrent = idx === typedBasicLine;
                  const isPending = idx > typedBasicLine;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 transition-all duration-300 ${
                        isPending ? "opacity-25" : "opacity-100"
                      }`}
                    >
                      {isDone ? (
                        <FiCheck className="text-emerald-500 text-base shrink-0" />
                      ) : isCurrent ? (
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 ml-1 mr-1" />
                      )}

                      <span className="leading-snug">
                        {isDone ? (
                          item
                        ) : isCurrent ? (
                          <>
                            {item.slice(0, typedBasicChar)}
                            <span className="animate-cursor text-emerald-400 font-black ml-0.5">|</span>
                          </>
                        ) : (
                          <span className="text-slate-500">{item}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => {
                  setLeadForm((prev) => ({ ...prev, plan: "basic" }));
                  setIsLeadModalOpen(true);
                }}
                className={`w-full py-4 rounded-xl font-black text-sm border transition-all cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900 hover:bg-slate-800 text-white border-slate-700"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
                }`}
              >
                Basic Tarifini Tanlash
              </button>
            </div>
          </div>

          {/* PLAN 2: STANDART (150 ming so'm) — RECOMMENDED */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 border-2 border-emerald-500 relative flex flex-col justify-between shadow-2xl shadow-emerald-500/15 card-3d">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
              ENG TAVSIYA ETILADIGAN
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  To&apos;liq Imkoniyat
                </span>
                <span className="text-xs text-emerald-500 font-extrabold">Cheksiz kassa</span>
              </div>

              <h3 className="text-2xl font-black mt-4">Standart (Standard)</h3>
              <p className={`text-xs mt-1 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Do&apos;kon, kafe yoki qandolatchilik tarmog&apos;ini 100% avtomatlashtirish uchun professional yechim.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-emerald-500 tracking-tight">150 000</span>
                <span className="text-xs text-slate-400 font-extrabold uppercase">so&apos;m / oyiga</span>
              </div>

              {/* Sequential Typewriter Features List for Standard Plan */}
              <div
                onClick={handleSkipPricingTypewriter}
                className="mt-8 space-y-3.5 text-xs font-semibold cursor-pointer select-none"
                title="Barchasini tez ko'rish uchun bosing"
              >
                {standardPlanList.map((item, idx) => {
                  const isDone = idx < typedStandardLine;
                  const isCurrent = idx === typedStandardLine;
                  const isPending = idx > typedStandardLine;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 transition-all duration-300 ${
                        isPending ? "opacity-25" : "opacity-100"
                      }`}
                    >
                      {isDone ? (
                        <FiCheck className="text-emerald-500 text-base shrink-0" />
                      ) : isCurrent ? (
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin shrink-0" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 ml-1 mr-1" />
                      )}

                      <span className="leading-snug">
                        {isDone ? (
                          item
                        ) : isCurrent ? (
                          <>
                            {item.slice(0, typedStandardChar)}
                            <span className="animate-cursor text-emerald-400 font-black ml-0.5">|</span>
                          </>
                        ) : (
                          <span className="text-slate-500">{item}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => {
                  setLeadForm((prev) => ({ ...prev, plan: "standard" }));
                  setIsLeadModalOpen(true);
                }}
                className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 hover:opacity-95 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                14 Kun Bepul Boshlash (Standart)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR: ESTIMATED REVENUE & TIME SAVED */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
        <div className={`glass-panel rounded-3xl p-8 sm:p-12 border ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-500 block">
                Foyda Kalkulyatori
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
                Shop-Admin.uz Bilan Qancha Mablag&apos; Tejaladi?
              </h3>
              <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                O&apos;g&apos;irliklar, hisob-kitobdagi xatolar va ortiqcha xarajatlarning oldini oling.
              </p>

              {/* Slider 1: Daily Checks */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black">
                  <span>Kunlik cheklar soni:</span>
                  <span className="text-emerald-500 text-sm">{calcDailyChecks} ta chek</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={calcDailyChecks}
                  onChange={(e) => setCalcDailyChecks(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Slider 2: Average Check Amount */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black">
                  <span>O&apos;rtacha bitta chek summasi:</span>
                  <span className="text-emerald-500 text-sm">{calcAvgCheck.toLocaleString("uz-UZ")} so‘m</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={calcAvgCheck}
                  onChange={(e) => setCalcAvgCheck(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Right Results */}
            <div className={`lg:col-span-6 rounded-2xl p-6 sm:p-8 border grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left ${
              theme === "dark" ? "bg-slate-900/90 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}>
              <div>
                <span className="text-xs text-slate-400 font-bold block mb-1">
                  Taxminiy Oylik Tushum:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {monthlyRevenue.toLocaleString("uz-UZ")} so‘m
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-bold block mb-1">
                  Yo&apos;qotishdan Saqlanadi:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-500">
                  +{monthlyLossPrevented.toLocaleString("uz-UZ")} so‘m
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-bold block mb-1">
                  Tejalgan Ish Vaqti:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-cyan-400">
                  ~{monthlyTimeSavedHours} soat / oy
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-bold block mb-1">
                  Standart Tarif Narxi:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-orange-400">
                  150 000 so‘m
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION (WINDOWS, ANDROID, MACOS, IOS) */}
      <section id="download" className={`scene-section scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t ${theme === "dark" ? "border-white/5" : "border-slate-200"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs font-black uppercase tracking-wider mb-4">
            Barcha Qurilmalar Uchun
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Ilovani Hoziroq O&apos;rnating
          </h2>
          <p className={`mt-4 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Kompyuter, noutbuk, monoblok yoki planshet — o&apos;zingizga qulay qurilmani tanlang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Windows Package */}
          <div className={`glass-panel glass-panel-hover rounded-3xl p-8 border flex flex-col justify-between ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-500 flex items-center justify-center text-3xl mb-6 shadow-md">
                <FaWindows />
              </div>
              <h3 className="text-2xl font-black">Windows Kassa (.exe)</h3>
              <p className={`text-xs mt-2 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Kassa monobloklari, kassa noutbuklari, Windows 10 va 11 uchun to&apos;liq o&apos;rnatish paketi.
              </p>

              <div className="mt-6 space-y-2 text-xs font-bold text-slate-400">
                <div>✓ Termal printerlar (58mm/80mm)</div>
                <div>✓ Shtrih-Print tarmoq tarozilari (UDP)</div>
                <div>✓ USB shtrix-kod skanerlar</div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href="/downloads/Shop-Admin.uz Setup 0.1.0.exe"
                download="Shop-Admin.uz Setup 0.1.0.exe"
                className="w-full py-3.5 rounded-xl font-black text-xs bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:opacity-95 flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <FiDownload />
                Windows Setup Yuklab Olish (.exe)
              </a>
              <a
                href="https://drive.google.com/file/d/1YDOIg9dPZv4O_0761uyvPXRSeiOBgv49/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-bold text-[11px] border flex items-center justify-center gap-2 transition-all ${
                  theme === "dark" ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/50" : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                Google Drive orqali yuklash
              </a>
              <span className="text-[11px] text-center block text-slate-400 font-medium">
                Windows 10 / 11 (64-bit) uchun to‘liq kassa dasturi
              </span>
            </div>
          </div>

          {/* Android App */}
          <div className={`glass-panel glass-panel-hover rounded-3xl p-8 border flex flex-col justify-between ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center text-3xl mb-6 shadow-md">
                <FaAndroid />
              </div>
              <h3 className="text-2xl font-black">Android Mobil Kassa</h3>
              <p className={`text-xs mt-2 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Telefon va planshet orqali savdo qilish, kamera orqali shtrix-kod skanerlash va monitoring.
              </p>

              <div className="mt-6 space-y-2 text-xs font-bold text-slate-400">
                <div>✓ Android 8.0 va undan yuqori</div>
                <div>✓ Bluetooth chek printerlar</div>
                <div>✓ Do&apos;kon egasi uchun jonli statistika</div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href="https://drive.google.com/file/d/1vm_cJpX7Uyq0nKk0urMYmGiMBOCa1My3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-black text-xs border flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${
                  theme === "dark" ? "bg-slate-900 hover:bg-slate-800 text-white border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
                }`}
              >
                <FiSmartphone />
                Android APK Yuklab Olish (Google Drive)
              </a>
              <span className="text-[11px] text-center block text-slate-400 font-medium">
                Barcha Android telefon va planshetlar uchun
              </span>
            </div>
          </div>

          {/* macOS & iOS Web */}
          <div className={`glass-panel glass-panel-hover rounded-3xl p-8 border flex flex-col justify-between ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-500/15 text-slate-300 flex items-center justify-center text-3xl mb-6 shadow-md">
                <FaApple />
              </div>
              <h3 className="text-2xl font-black">macOS & iOS (Apple)</h3>
              <p className={`text-xs mt-2 leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                MacBook va iMac kompyuterlari uchun DMG ilova, hamda iPad/iPhone brauzer PWA kassa.
              </p>

              <div className="mt-6 space-y-2 text-xs font-bold text-slate-400">
                <div>✓ Apple Silicon (M1/M2/M3/M4) va Intel</div>
                <div>✓ iPad uchun to&apos;liq sensorli kassa</div>
                <div>✓ Bulutli tezkor sinxronizatsiya</div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href="https://drive.google.com/file/d/1ELmzq8SPfsayoxo_iZo-3_oDac95m0fN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-black text-xs border flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${
                  theme === "dark" ? "bg-slate-900 hover:bg-slate-800 text-white border-slate-700" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
                }`}
              >
                <FaApple />
                macOS DMG Yuklab Olish (Google Drive)
              </a>
              <span className="text-[11px] text-center block text-slate-400 font-medium">
                Apple Silicon va Intel Mac kompyuterlari uchun
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (PROMPT SECTION 14) */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CtaSection
          theme={theme}
          onOpenLeadModal={(plan) => {
            if (plan) setLeadForm((p) => ({ ...p, plan }));
            setIsLeadModalOpen(true);
          }}
          onOpenDemo={() => scrollToSection("pos-demo")}
        />
      </section>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs ${
        theme === "dark" ? "border-white/5 text-slate-400" : "border-slate-200 text-slate-600"
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Shop-Admin.uz"
              width={36}
              height={36}
              className="w-9 h-9 object-contain drop-shadow-sm"
            />
            <span className={`font-black text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Shop-Admin.uz
            </span>
            <span className="text-slate-500">© 2026. Barcha huquqlar himoyalangan.</span>
          </div>

          <div className="flex items-center gap-6 font-semibold flex-wrap justify-center">
            <Link href="/guide" className="hover:text-emerald-500 transition-colors">
              Foydalanish Qo&apos;llanmasi
            </Link>
            <a href="#directions" className="hover:text-emerald-500 transition-colors">
              3 Yo&apos;nalish
            </a>
            <a href="#pricing" className="hover:text-emerald-500 transition-colors">
              Tariflar (100k / 150k)
            </a>
            <a href="#download" className="hover:text-emerald-500 transition-colors">
              Yuklab Olish
            </a>
            <a
              href="https://t.me/shop_admin_support_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline flex items-center gap-1 font-bold"
            >
              <FaTelegramPlane /> Telegram Qo&apos;llab-quvvatlash (@shop_admin_support_bot)
            </a>
          </div>
        </div>
      </footer>

      {/* LIVE SALES TICKER (PROMPT SECTION 6) */}
      <LiveSalesTicker />

      {/* LEAD MODAL (14 KUN BEPUL RO'YXATDAN O'TISH) */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className={`relative w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl ${
            theme === "dark" ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            <button
              onClick={() => setIsLeadModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <FiX className="text-lg" />
            </button>

            {leadSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center text-3xl">
                  <FiCheckCircle />
                </div>
                <h4 className="text-2xl font-black">Arizangiz Qabul Qilindi!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Mutaxassisimiz tez orada siz bilan bog&apos;lanib, 14 kunlik bepul sinov akkauntingizni ochib beradi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-black uppercase text-emerald-500 tracking-wider">
                    Bepul Sinovga Ulanish
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-1">14 Kun Bepul Foydalaning</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Telefon raqamingizni qoldiring, 5 daqiqada kassa dasturini tayyorlab beramiz.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Ismingiz</label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
                      theme === "dark" ? "bg-slate-950 border-slate-800 focus:border-emerald-500" : "bg-slate-50 border-slate-300 focus:border-emerald-500"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Telefon Raqamingiz</label>
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
                      theme === "dark" ? "bg-slate-950 border-slate-800 focus:border-emerald-500" : "bg-slate-50 border-slate-300 focus:border-emerald-500"
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Biznes Yo&apos;nalishingiz</label>
                  <select
                    value={leadForm.businessType}
                    onChange={(e) => setLeadForm({ ...leadForm, businessType: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
                      theme === "dark" ? "bg-slate-950 border-slate-800 focus:border-emerald-500" : "bg-slate-50 border-slate-300 focus:border-emerald-500"
                    }`}
                  >
                    <option value="retail">🛒 Do&apos;kon & Supermarket</option>
                    <option value="cafe">☕ Kafe & Restoran</option>
                    <option value="bakery">🍰 Shirinliklar & Qandolat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Tanlangan Tarif</label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setLeadForm({ ...leadForm, plan: "basic" })}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        leadForm.plan === "basic"
                          ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                          : "border-slate-700 text-slate-400"
                      }`}
                    >
                      Basic (100k so‘m)
                    </button>
                    <button
                      type="button"
                      onClick={() => setLeadForm({ ...leadForm, plan: "standard" })}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        leadForm.plan === "standard"
                          ? "bg-emerald-500 text-slate-950 font-black border-emerald-400"
                          : "border-slate-700 text-slate-400"
                      }`}
                    >
                      Standart (150k so‘m)
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={leadLoading}
                  className="w-full py-4 rounded-xl font-black text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {leadLoading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <span>Hoziroq Faollashtirish (14 Kun Bepul)</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
