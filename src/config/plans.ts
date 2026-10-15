export interface PricingPlan {
  id: "basic" | "standard";
  name: string;
  badge: string;
  posLimit: string;
  price: number;
  priceFormatted: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export const PRICING_PLANS: Record<string, PricingPlan> = {
  basic: {
    id: "basic",
    name: "Basic",
    badge: "Boshlang'ich",
    posLimit: "1 ta kassa",
    price: 100000,
    priceFormatted: "100 000",
    period: "so'm / oyiga",
    description: "Kichik do'kon, qahvaxona yoki kichik shirinlik shoxobchalari uchun qulay boshlang'ich paket.",
    features: [
      "1 ta savdo nuqtasi (POS Kassa)",
      "Cheksiz tovarlar va menyu qo'shish",
      "3 tagacha xodim foydalanuvchisi",
      "100% Oflayn rejim va chek chop etish",
      "Shtrix-kod skaner (USB HID) qo'llab-quvvatlash",
      "Kunlik va oylik kassa hisobotlari (P&L)",
      "Xavfsizlik PIN kodi (Tovarni o'chirish himoyasi)",
    ],
  },
  standard: {
    id: "standard",
    name: "Standart",
    badge: "Eng Ommabop",
    posLimit: "3 tagacha kassa",
    price: 150000,
    priceFormatted: "150 000",
    period: "so'm / oyiga",
    recommended: true,
    description: "Rivojlanayotgan do'konlar, kafe/restoranlar va qandolat sexlari uchun to'liq avtomatlashtirish paketi.",
    features: [
      "Barcha 3 xil rejim: Do'kon, Kafe va Shirinliklar",
      "3 tagacha kassa va bir nechta omborlar hisobi",
      "Cheksiz xodimlar (Kassir, Ofitsiant, Oshpaz, Admin)",
      "Shtrih-Print tarozi (UDP jonli vazn va PLU yuklash)",
      "Stollar xaritasi & Oshxona KDS planshet ekrani",
      "Tort buyurtmalari, tabrik yozuvlari va avans hisobi",
      "Nasiya (Qarz) daftari + Avtomatik SMS eslatmalar",
      "Telegram Bot: Kunlik tushum va qoldiqlar telefonda",
      "24/7 VIP Ko'mak va mutaxassis o'rnatib berishi",
    ],
  },
};
