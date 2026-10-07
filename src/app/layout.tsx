import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop-Admin.uz — Smart POS & Cloud ERP Tizimi | Barcha Qurilmalar Uchun",
  description: "Do'kon, supermarket, kiyim-kechak va chakana savdo uchun zamonaviy POS tizim. Windows, macOS, Android va iOS uchun ilovalar. Oflyon rejim, avtomatlashtirilgan kassa va ombor hisobi.",
  keywords: ["shop-admin.uz", "pos tizimi", "kassa dasturi", "ombor hisobi", "savdo dasturi", "erp uzbekistan", "kassa skaner"],
  openGraph: {
    title: "Shop-Admin.uz — Smart POS & Cloud ERP Tizimi",
    description: "Savdoni avtomatlashtirishning yangi darajasi. Har qanday qurilmada tez va ishonchli ishlaydi.",
    url: "https://shop-admin.uz",
    siteName: "Shop-Admin.uz",
    images: [
      {
        url: "/images/hero_pos.jpg",
        width: 1200,
        height: 630,
        alt: "Shop-Admin.uz POS Terminal Mockup",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-emerald-500 selection:text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
