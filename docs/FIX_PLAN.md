# SHOPADMIN.UZ — AMALGA OSHIRILADIGAN TUZATISHLAR REJASI (FIX_PLAN)

**Sana:** 2026-10-15  
**Maqsad:** Sayt xatolarini to‘g‘rilash, Google SEO va unumdorlikni oshirish  

---

## 1. REJALASHTIRILGAN ISHLAR RO'YXATI

### 1-QADAM: Tariflar Yagona Konfiguratsiyasi (F-01)
- [x] `Frontend/src/config/plans.ts` faylini yaratish.
- [x] Basic (100 000 so‘m) va Standart (150 000 so‘m) tariflarining kassa, xodim va imkoniyatlari ziddiyatlarini to‘liq yechish:
  - **Basic (100k):** 1 ta POS kassa, cheksiz tovarlar, 3 tagacha xodim, 100% oflayn rejim, kassa hisoboti.
  - **Standart (150k):** 3 tagacha kassa, 3 xil rejim (Do'kon, Kafe, Shirinlik), cheksiz xodimlar, Shtrih-Print tarozi, stollar xaritasi, Telegram bot, 24/7 ko‘mak.
- [x] Sahifadagi takroriy va zid matnlarni yangilash.

### 2-QADAM: Tugallanmagan Matnlar va Placeholderlarni Bartaraf Etish (F-03)
- [x] `Frontend/src/app/page.tsx:1185` dagi *"Tarif imkoniyatlari yozilmoqda... (Darhol ko‘rish uchun ustiga bosing)"* dinamik xabarini olib tashlab, barcha imkoniyatlarni zudlik bilan to‘liq ko‘rsatish.
- [x] Sayt bo‘yicha barcha TODO, placeholder va chala interfeyslarni yakunlash.

### 3-QADAM: Marketing Da'volari va Dashboard Statistikasi (F-02, F-04)
- [x] "100% xavfsizlik", "0% kamomad" kabi isbotsiz so'zlarni professional va dalilli atamalar bilan almashtirish.
- [x] Dashboard va interaktiv ko'rsatkichlarga "Namunaviy ko‘rsatkichlar (Demo)" belgisi qo'yilishi.

### 4-QADAM: Texnik SEO Bazasini Yaratish (Robots, Sitemap, Metadata)
- [x] `Frontend/src/app/robots.ts` yaratish (`User-agent: *`, `Allow: /`, `Disallow: /api/`, `Sitemap: https://shop-admin.uz/sitemap.xml`).
- [x] `Frontend/src/app/sitemap.ts` yaratish (barcha asosiy va yo‘nalish sahifalari bilan).
- [x] `Frontend/src/app/layout.tsx` ga JSON-LD Structured Data (`SoftwareApplication`, `Organization`, `WebSite`) qo‘shish.

### 5-QADAM: Yangi SEO Landing Sahifalarini Yaratish
- [x] `/do-kon-uchun-pos` — Do‘konlar va savdo nuqtalari uchun POS dasturi.
- [x] `/kafe-restoran-uchun-pos` — Kafe va restoranlar uchun avtomatlashtirish.
- [x] `/shirinliklar-uchun-hisob` — Shirinlik do‘konlari va qandolat hisobi.
- [x] `/offline-pos` — 100% oflayn rejimda ishlovchi kassa dasturi.
- [x] `/narxlar` — Shaffof tariflar va narxlar taqqoslashi.
- [x] `/aloqa` — Rasmiy aloqa, Telegram va manzil ma'lumotlari.
- [x] `/maxfiylik-siyosati` — Maxfiylik siyosati.
- [x] `/foydalanish-shartlari` — Ommaviy oferta.

### 6-QADAM: Testlash va Regressiya Tekshiruvi
- [x] Build va TypeScript tekshiruvi (`next build` / `tsc`).
- [x] Barcha yangi sahifalarning 200 OK qaytarishini tekshirish.
- [x] POS va User Panel tizimiga ta’sir qilmasligini kafolatlash.
