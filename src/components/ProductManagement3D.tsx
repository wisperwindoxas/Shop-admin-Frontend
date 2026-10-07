"use client";

import React, { useState } from "react";
import { Package, TrendingUp, Barcode, DollarSign, Layers, Check } from "lucide-react";

interface ProductManagementProps {
  theme: "dark" | "light";
}

interface ProductDetail {
  id: string;
  name: string;
  price: number;
  stock: number | string;
  soldToday: number | string;
  category: string;
  barcode: string;
  icon: string;
  profitMargin: string;
  color: string;
}

const productsList: ProductDetail[] = [
  {
    id: "burger",
    name: "Burger Classic Double Beef",
    price: 35000,
    stock: 124,
    soldToday: 37,
    category: "Kafe & Fast Food",
    barcode: "4780012480112",
    icon: "🍔",
    profitMargin: "+48%",
    color: "#f97316",
  },
  {
    id: "cola",
    name: "Coca-Cola 0.5L Muzdek",
    price: 12000,
    stock: 340,
    soldToday: 89,
    category: "Ichimliklar & Chakana",
    barcode: "5449000000996",
    icon: "🥤",
    profitMargin: "+32%",
    color: "#ef4444",
  },
  {
    id: "cake",
    name: "Qulupnayli Biskvit Tort",
    price: 85000,
    stock: 18,
    soldToday: 12,
    category: "Shirinliklar & Qandolat",
    barcode: "2000001008502",
    icon: "🎂",
    profitMargin: "+62%",
    color: "#f43f5e",
  },
  {
    id: "apple",
    name: "Qizil Olma (Tarozi Vaznli)",
    price: 18000,
    stock: "85.4 kg",
    soldToday: "42.1 kg",
    category: "Supermarket & Do‘kon",
    barcode: "2000001014505",
    icon: "🍎",
    profitMargin: "+40%",
    color: "#10b981",
  },
];

export default function ProductManagement3D({ theme }: ProductManagementProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail>(productsList[0]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-black uppercase tracking-wider mb-3">
          <Package className="w-3.5 h-3.5" />
          Aqlli Mahsulotlar Boshqaruvi
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Mahsulotni Tanlang va POS Ma’lumotlarini Ko‘ring
        </h2>
        <p className={`mt-3 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Har bir mahsulot real vaqtda ombor zaxirasi, kunlik sotuv dinamikasi va foyda foizi bilan bog‘langan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 4 3D Product Interactive Cards on Desk */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {productsList.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`rounded-3xl p-6 border cursor-pointer transition-all transform hover:-translate-y-1.5 select-none relative ${
                  isSelected
                    ? "border-brand-500 shadow-2xl shadow-brand-500/20 scale-102"
                    : theme === "dark"
                    ? "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
                style={{
                  background: isSelected
                    ? theme === "dark"
                      ? "linear-gradient(145deg, rgba(98, 69, 237, 0.15), rgba(15, 23, 42, 0.8))"
                      : "linear-gradient(145deg, rgba(98, 69, 237, 0.08), rgba(255, 255, 255, 0.95))"
                    : undefined,
                }}
              >
                {/* Active check pill */}
                {isSelected && (
                  <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}

                <div className="text-4xl mb-3 drop-shadow-lg">{prod.icon}</div>
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  {prod.category}
                </div>
                <h4 className="text-sm font-black mt-1 line-clamp-1">{prod.name}</h4>
                <div className="mt-3 font-mono font-black text-emerald-400 text-sm">
                  {prod.price.toLocaleString("uz-UZ")} so‘m
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Floating 3D POS Information HUD Card */}
        <div className="lg:col-span-6">
          <div
            className={`rounded-3xl p-8 border relative shadow-2xl animate-float-slow transition-all ${
              theme === "dark"
                ? "bg-slate-900/90 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            {/* Ambient light glow */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: selectedProduct.color }}
            />

            <div className={`flex items-center justify-between pb-6 border-b ${
              theme === "dark" ? "border-white/10" : "border-slate-200"
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedProduct.icon}</span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-500">
                    POS INFORMATION CARD
                  </span>
                  <h3 className={`text-xl font-black ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                {selectedProduct.profitMargin} Foyda
              </span>
            </div>

            {/* Spec Details Grid */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className={`p-4 rounded-2xl border ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-50 border-slate-200"
              }`}>
                <span className={`text-[10px] uppercase font-bold flex items-center gap-1.5 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                  Sotuv Narxi (Price)
                </span>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                  {selectedProduct.price.toLocaleString("uz-UZ")}{" "}
                  <span className={`text-xs font-sans ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>so‘m</span>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-50 border-slate-200"
              }`}>
                <span className={`text-[10px] uppercase font-bold flex items-center gap-1.5 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  Ombor Qoldig‘i (Stock)
                </span>
                <div className={`text-2xl font-black font-mono mt-1 ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  {selectedProduct.stock}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-50 border-slate-200"
              }`}>
                <span className={`text-[10px] uppercase font-bold flex items-center gap-1.5 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                  Bugun Sotildi (Sold Today)
                </span>
                <div className="text-2xl font-black font-mono text-amber-600 dark:text-amber-400 mt-1">
                  {selectedProduct.soldToday}
                </div>
              </div>

              <div className={`p-4 rounded-2xl border ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-slate-50 border-slate-200"
              }`}>
                <span className={`text-[10px] uppercase font-bold flex items-center gap-1.5 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  <Barcode className="w-3.5 h-3.5 text-brand-500" />
                  Shtrix-Kod (Barcode)
                </span>
                <div className={`text-xs font-mono font-bold mt-2 truncate ${
                  theme === "dark" ? "text-slate-300" : "text-slate-800"
                }`}>
                  |||| {selectedProduct.barcode}
                </div>
              </div>
            </div>

            <div className={`pt-4 border-t flex items-center justify-between text-xs ${
              theme === "dark" ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"
            }`}>
              <span>Status: Sotuvga tayyor ✓</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Avtomatik hisobdan chiqariladi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
