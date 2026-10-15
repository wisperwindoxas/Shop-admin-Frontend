import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaffof Tariflar va Narxlar | ShopAdmin POS Dasturi",
  description:
    "ShopAdmin POS tizimining qulay va shaffof narxlari. Do‘kon, Kafe va Shirinliklar yo‘nalishlari bo‘yicha alohida Basic (100 000 so‘m) va Standart (150 000 so‘m) tariflar. 14 kunlik bepul sinov.",
  alternates: {
    canonical: "https://shop-admin.uz/narxlar",
  },
  openGraph: {
    title: "Shaffof Tariflar va Narxlar | ShopAdmin POS Dasturi",
    description:
      "Har bir biznes yo‘nalishi uchun alohida moslashtirilgan tariflar. Do‘kon, Kafe yoki Shirinliklar yo‘nalishini tanlang va 14 kun bepul sinab ko‘ring.",
    url: "https://shop-admin.uz/narxlar",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
