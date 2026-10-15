export type BusinessDirection = "retail" | "cafe" | "sweets";

export interface PricingPlan {
  id: "basic" | "standard";
  name: string;
  badge: string;
  posLimit: string;
  price: number;
  priceFormatted: string;
  period: string;
  description: string;
  directionTitle: string;
  directionNotice: string;
  features: string[];
  recommended?: boolean;
}

export interface DirectionPlanSet {
  directionId: BusinessDirection;
  title: string;
  subtitle: string;
  tagline: string;
  iconName: string;
  badgeColor: string;
  basic: PricingPlan;
  standard: PricingPlan;
}

export const DIRECTION_PLANS: Record<BusinessDirection, DirectionPlanSet> = {
  retail: {
    directionId: "retail",
    title: "Do‘kon & Supermarket",
    subtitle: "Chakana savdo, oziq-ovqat, maishiy va kiyim do‘konlari uchun",
    tagline: "Shtrix-kod, ombor, nasiya daftari va tezkor savdo",
    iconName: "FiShoppingBag",
    badgeColor: "emerald",
    basic: {
      id: "basic",
      name: "Do‘kon Basic",
      badge: "Boshlang‘ich",
      posLimit: "1 ta kassa",
      price: 100000,
      priceFormatted: "100 000",
      period: "so‘m / oyiga",
      directionTitle: "Do‘kon yo‘nalishi uchun",
      directionNotice: "Faqat do‘kon savdosi uchun amal qiladi. Boshqa yo‘nalishlar alohida tariflanadi.",
      description: "1 ta kassa bilan ishlaydigan kichik do‘kon yoki chakana savdo nuqtalari uchun.",
      features: [
        "1 ta savdo nuqtasi (Do‘kon POS Kassasi)",
        "Cheksiz tovarlar va shtrix-kodlar kiritish",
        "Shtrix-kod skaner (USB / Bluetooth) qo‘llab-quvvatlash",
        "100% Oflayn ishlash va 58/80mm chek chiqarish",
        "Ombor qoldiqlari va tannarx hisobi",
        "Kassa smenasini ochish va yopish (Z-hisobot)",
        "Kassir PIN kodi (Tovarni o‘chirish himoyasi)",
        "Kunlik va oylik asosiy savdo hisobotlari",
      ],
    },
    standard: {
      id: "standard",
      name: "Do‘kon Standart",
      badge: "Eng Ommabop",
      posLimit: "3 tagacha kassa",
      price: 150000,
      priceFormatted: "150 000",
      period: "so‘m / oyiga",
      recommended: true,
      directionTitle: "Do‘kon yo‘nalishi uchun",
      directionNotice: "Faqat do‘kon savdosi uchun amal qiladi (150 000 so‘m/oy). Kafe yoki shirinlik alohida to‘lanadi.",
      description: "Supermarket, minimarket va rivojlanayotgan do‘konlar uchun to‘liq kassa va omborxona ERP tizimi.",
      features: [
        "3 tagacha kassa va bir nechta omborlar hisobi",
        "Nasiya (Qarz) daftari + Mijozlar limiti nazorati",
        "Shtrih-Print tarozilar integratsiyasi (UDP jonli vazn & PLU)",
        "Partiyalar hisobi va yaroqlilik muddati nazorati",
        "Kamomad va inventarizatsiya taqqoslash jurnali",
        "Ta’minotchilar hisobi va xaridlar kirimi",
        "Inkassatsiya (Collector) moduli va kassa topshirish",
        "Cheksiz xodimlar rollari (Kassir, Omborchi, Boshqaruvchi)",
        "Telegram Bot: Kunlik savdo tushumi va qoldiqlar telefonda",
        "VIP ko‘mak va bepul masofaviy/joyida sozlash",
      ],
    },
  },

  cafe: {
    directionId: "cafe",
    title: "Kafe & Restoran",
    subtitle: "Kafe, qahvaxona, fastfud, restoran va pizzeriyalar uchun",
    tagline: "Stollar xaritasi, oshxona KDS cheki va taom modifikatorlari",
    iconName: "FiCoffee",
    badgeColor: "amber",
    basic: {
      id: "basic",
      name: "Kafe Basic",
      badge: "Boshlang‘ich",
      posLimit: "1 ta terminal",
      price: 100000,
      priceFormatted: "100 000",
      period: "so‘m / oyiga",
      directionTitle: "Kafe & Restoran uchun",
      directionNotice: "Faqat kafe/restoran tizimi uchun amal qiladi. Boshqa yo‘nalishlar alohida tariflanadi.",
      description: "Kichik qahvaxona, kofe-to-go va bitta kassali tezkor ovqatlanish nuqtalari uchun.",
      features: [
        "1 ta kassa terminali (Tezkor kassa rejimi)",
        "Taomlar menyusi va toifalari (issiq taom, ichimlik)",
        "Chek printeri (58/80mm) va to‘lov turlari",
        "100% Oflayn rejimda buyurtma olish",
        "Kunlik va smena tushumi hisoboti",
        "Kassir va barmen PIN kodi himoyasi",
        "Xizmat haqi (% servis) fiksirlangan hisobi",
      ],
    },
    standard: {
      id: "standard",
      name: "Kafe Standart",
      badge: "Eng Ommabop",
      posLimit: "3 tagacha kassa / planshet",
      price: 150000,
      priceFormatted: "150 000",
      period: "so‘m / oyiga",
      recommended: true,
      directionTitle: "Kafe & Restoran uchun",
      directionNotice: "Faqat kafe/restoran tizimi uchun amal qiladi (150 000 so‘m/oy). Do‘kon yoki shirinlik alohida to‘lanadi.",
      description: "Stollar, ofitsiantlar va oshxona printerlari bilan ishlovchi to‘liq restoran avtomatlashtirish tizimi.",
      features: [
        "3 tagacha terminal / planshet (Kassa va Ofitsiantlar)",
        "Interaktiv stollar xaritasi (Zallar, VIP, Terassa xonalari)",
        "Oshxona KDS ekrani va oshxona printeriga avtomatik chek",
        "Bar va oshxona printerlarini tarmoq (LAN/Wi-Fi) bo‘yicha ajratish",
        "Taom modifikatorlari (muzli, shakarsiz, qo‘shimcha sous)",
        "Hisobni bo‘lish (Split check) va stollarni ko‘chirish",
        "Taom retseptlari (Kalkulyatsiya, texkarta va masalliqlar sarfi)",
        "Ofitsiantlar va kadrlar smena hisoboti",
        "Telegram Bot: Kunlik restoran aylanmasi va marja",
        "24/7 VIP qo‘llab-quvvatlash va menyuni kiritishda ko‘mak",
      ],
    },
  },

  sweets: {
    directionId: "sweets",
    title: "Shirinliklar & Qandolat",
    subtitle: "Qandolat do‘koni, buyurtma tort ustaxonalari va desert sexlari uchun",
    tagline: "Vaznli savdo, tort buyurtmalari, avans va sexga uzatish",
    iconName: "GiCakeSlice",
    badgeColor: "pink",
    basic: {
      id: "basic",
      name: "Qandolat Basic",
      badge: "Boshlang‘ich",
      posLimit: "1 ta kassa",
      price: 100000,
      priceFormatted: "100 000",
      period: "so‘m / oyiga",
      directionTitle: "Shirinliklar yo‘nalishi uchun",
      directionNotice: "Faqat shirinliklar tizimi uchun amal qiladi. Boshqa yo‘nalishlar alohida tariflanadi.",
      description: "Bitta kassa orqali tayyor pishiriq va shirinliklar sotadigan kichik do‘konlar uchun.",
      features: [
        "1 ta kassa nuqtasi (Shirinliklar uchun moslashgan kassa)",
        "Pishiriqlar, tortlar va konfetlar katalogi",
        "100% Oflayn rejim va chek chop etish",
        "Smena va kunlik shirinliklar savdosi hisoboti",
        "Kassir ruxsatlari va PIN kod nazorati",
        "Quti va qadoqlar hisobi (asosiy)",
      ],
    },
    standard: {
      id: "standard",
      name: "Qandolat Standart",
      badge: "Eng Ommabop",
      posLimit: "3 tagacha kassa",
      price: 150000,
      priceFormatted: "150 000",
      period: "so‘m / oyiga",
      recommended: true,
      directionTitle: "Shirinliklar yo‘nalishi uchun",
      directionNotice: "Faqat shirinliklar tizimi uchun amal qiladi (150 000 so‘m/oy). Do‘kon yoki kafe alohida to‘lanadi.",
      description: "Buyurtma tortlar, tarozi, avans va qandolatchi sexi bilan ishlaydigan qandolatchilik korxonalari uchun.",
      features: [
        "3 tagacha kassa va tarmoq shoxobchalari hisobi",
        "Stollarsiz, vizual rasmli Shirinliklar POS kassa oynasi",
        "Elektron tarozi integratsiyasi (gramm aniqligida tortish)",
        "Maxsus tort buyurtmalari va yetkazish vaqti kalendari",
        "Tabrik yozuvlari, bezak va dizayn talablarini qayd etish",
        "Avans (Zaklad) qabul qilish va yakuniy qoldiqni to‘lash cheki",
        "Qandolat sexiga zakaz uzatish va statuslar nazorati",
        "Tez buziluvchi kremli mahsulotlar yaroqlilik muddati nazorati",
        "Lenta, korobka va qadoqlash xarajatlarini tannarxga kiritish",
        "Telegram Bot: Kunlik buyurtmalar va tushum telefonda",
      ],
    },
  },
};

// Orqaga moslik (Backward compatibility) uchun standart Do'kon tariflari
export const PRICING_PLANS = {
  basic: DIRECTION_PLANS.retail.basic,
  standard: DIRECTION_PLANS.retail.standard,
};
