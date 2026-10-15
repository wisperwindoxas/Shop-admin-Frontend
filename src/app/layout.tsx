import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shop-admin.uz"),
  title: "Shop-Admin.uz — Smart POS & Cloud ERP Tizimi | Barcha Qurilmalar Uchun",
  description: "Do'kon, kafe va shirinliklar biznesi uchun zamonaviy POS kassa va ombor hisobi dasturi. 100% oflayn rejim, Shtrih-Print tarozi, chek printer va Telegram bot integratsiyasi.",
  keywords: [
    "pos tizimi",
    "kassa dasturi",
    "do'kon uchun kassa dasturi",
    "kafe uchun pos tizimi",
    "shirinliklar hisob dasturi",
    "ombor hisobi dasturi",
    "savdo dasturi",
    "offline kassa dasturi",
    "shopadmin",
    "shop-admin.uz",
  ],
  alternates: {
    canonical: "https://shop-admin.uz",
  },
  openGraph: {
    title: "Shop-Admin.uz — Smart POS & Cloud ERP Tizimi",
    description: "Savdo va hisob-kitobni avtomatlashtirishning yangi darajasi. Har qanday qurilmada tez va ishonchli ishlaydi.",
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
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://shop-admin.uz/#organization",
        "name": "ShopAdmin",
        "url": "https://shop-admin.uz",
        "logo": "https://shop-admin.uz/icon.png",
        "description": "Do'kon, kafe va shirinliklar biznesi uchun smart POS kassa va ombor hisobi tizimi",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UZ",
          "addressLocality": "Toshkent",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+998-90-000-00-00",
          "contactType": "customer service",
          "availableLanguage": ["Uzbek", "Russian"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://shop-admin.uz/#website",
        "url": "https://shop-admin.uz",
        "name": "ShopAdmin POS",
        "publisher": {
          "@id": "https://shop-admin.uz/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://shop-admin.uz/#software",
        "name": "ShopAdmin POS & ERP Tizimi",
        "operatingSystem": "Windows, macOS, Android, iOS, Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "UZS",
          "lowPrice": "100000",
          "highPrice": "150000",
          "offerCount": "2",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128",
        },
      },
    ],
  };

  return (
    <html lang="uz" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased selection:bg-emerald-500 selection:text-white"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
