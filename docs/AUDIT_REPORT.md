# SHOPADMIN.UZ — LOYIHA AUDITI VA TEXNIK HOLAT HISOBOTI (AUDIT_REPORT)

**Sana:** 2026-10-15  
**Loyiha:** ShopAdmin — [https://shop-admin.uz/](https://shop-admin.uz/)  
**Auditor:** Senior Full-Stack Engineer & SEO Technical Lead  

---

## 1. TEXNOLOGIYALAR VA ARXITEKTURA XARITASI

| Yo‘nalish | Texnologiya | Versiya / Konfiguratsiya | Holati |
|---|---|---|---|
| **Landing & Marketing (Frontend)** | Next.js (App Router), React, TypeScript | Next.js 16.3.2, React 19.2.0 | Faol (Port 3005) |
| **Kassir & Boshqaruv (User Panel)** | Next.js, React, TailwindCSS | Next.js 14.x, React 18.x | Faol (Port 3000) |
| **Backend & API** | Go (Golang), Chi Router, pgxpool | Go 1.22+, REST API `/api/v1` | Faol (Port 8080 / VPS) |
| **Ma’lumotlar Bazasi** | PostgreSQL | Multi-tenant (`company_id`) | Faol |
| **Desktop POS** | Electron POS | Offline-sync, Kassa printer, Shtrih tarozi | Faol |
| **Mobil Ilova** | Flutter / Dart | Android APK, Offline DB | Tayyor |
| **Stilizatsiya & Grafika** | TailwindCSS, Three.js 3D Canvas | Tailwind 3.4, Three.js 0.186 | Faol |

---

## 2. ANIKLANGAN MUAMMOLAR RO'YXATI (FINDINGS)

### [AUD-01] Standart va Basic Tariflardagi Ziddiyatlar va Noaniqliklar
- **Muammo:** Tariflar kartasida va matnlarida kassa soni va imkoniyatlar bir-biriga zid (masalan, ayrim joylarda "cheksiz kassa", boshqa joyda "3 tagacha kassa").
- **Dalil:** `Frontend/src/app/page.tsx:168` vs `Frontend/src/app/page.tsx:1201`.
- **Jiddiylik:** **High**
- **Biznes/SEO ta’siri:** Mijozlarda ishonchsizlik uyg'otadi, konversiyani pasaytiradi.
- **Tavsiya:** Yagona `Frontend/src/config/plans.ts` konfiguratsiyasi yaratilib, barcha tariflar bitta manbadan o'qilsin.
- **Status:** **Confirmed**

---

### [AUD-02] Tugallanmagan Matnlar va Placeholderlar
- **Muammo:** Sahifada ishlab chiqish jarayonidagi dinamik yozuv ko'rinib qolgan: *"Tarif imkoniyatlari yozilmoqda... (Darhol ko‘rish uchun ustiga bosing)"*.
- **Dalil:** `Frontend/src/app/page.tsx:1185`.
- **Jiddiylik:** **Medium**
- **Biznes/SEO ta’siri:** Google bot sahifani to'liq yuklanmagan deb indekslashi mumkin, professional imijga putur yetkazadi.
- **Tavsiya:** Matnni to'liq tayyor, professional holatga keltirish va barcha imkoniyatlarni sukut bo'yicha ko'rinadigan qilish.
- **Status:** **Confirmed**

---

### [AUD-03] robots.txt va sitemap.xml Fayllarining Mavjud Emasligi
- **Muammo:** `https://shop-admin.uz/` domenida qidiruv botlari (Googlebot) uchun `robots.txt` va `sitemap.xml` mavjud emas (404 qaytaradi).
- **Dalil:** `Frontend/public/robots.txt` va `Frontend/src/app/sitemap.ts` mavjud emas.
- **Jiddiylik:** **Critical** (SEO uchun)
- **Biznes/SEO ta’siri:** Google sayt sahifalarini to'liq kashf eta olmaydi va indekslash kechikadi.
- **Tavsiya:** Next.js metadata route (`robots.ts`, `sitemap.ts`) yaratilsin.
- **Status:** **Confirmed**

---

### [AUD-04] Yo'nalishlar Bo'yicha Alohida SEO Landing Sahifalarining Yo'qligi
- **Muammo:** Sayt hozirda faqat yagona bitta asosiy sahifadan iborat. Do'kon, Kafe/Restoran, Shirinliklar, Offline rejim va Narxlar uchun mustaqil SEO sahifalar yo'q.
- **Dalil:** `Frontend/src/app` papkasida faqat `page.tsx` va `guide` mavjud.
- **Jiddiylik:** **Critical** (SEO uchun)
- **Biznes/SEO ta’siri:** Google'da "Do'kon uchun kassa dasturi", "Kafe uchun POS tizimi", "Shirinliklar hisob dasturi" kabi yuqori daromadli qidiruvlarda yuqori o'ringa chiqish imkonsiz.
- **Tavsiya:** `/do-kon-uchun-pos`, `/kafe-restoran-uchun-pos`, `/shirinliklar-uchun-hisob`, `/offline-pos`, `/narxlar`, `/aloqa`, `/maxfiylik-siyosati`, `/foydalanish-shartlari` sahifalari yaratilsin.
- **Status:** **Confirmed**

---

### [AUD-05] Structured Data (JSON-LD) Sxemalarining Yo'qligi
- **Muammo:** Qidiruv tizimlari saytni dasturiy ta'minot (SoftwareApplication) va Tashkilot (Organization) sifatida taniy olishi uchun Schema.org JSON-LD teglari yo'q.
- **Dalil:** `Frontend/src/app/layout.tsx` da faqat metadata bor, JSON-LD skripti yo'q.
- **Jiddiylik:** **High**
- **Biznes/SEO ta’siri:** Google Search natijalarida boyitilgan natijalar (Rich Snippets) chiqmaydi.
- **Tavsiya:** `Organization`, `SoftwareApplication`, `BreadcrumbList`, `FAQPage` JSON-LD sxemalari kiritilsin.
- **Status:** **Confirmed**

---

### [AUD-06] Isbotsiz Marketing Da'volari
- **Muammo:** "0% kamomad", "100% mutlaq xavfsizlik" kabi o'ta qat'iy va isbotsiz marketing raqamlari mavjud.
- **Dalil:** `Frontend/src/components/BeforeAfterSlider.tsx` va `DashboardAnalytics.tsx`.
- **Jiddiylik:** **Medium**
- **Biznes/SEO ta’siri:** Real biznes egalari bunday gaplarga ishonmaydi, konversiya tushadi.
- **Tavsiya:** Raqamlar dalil va real mantiq bilan ifodalansin ("Kamomad xavfini 90% gacha qisqartiradi", "Oflayn rejimda ham to'xtovsiz ishlash").
- **Status:** **Confirmed**

---

## 3. AUDIT XULOSASI
Loyiha frontend qismi juda zamonaviy (Next.js 16, React 19, Three.js) poydevorga ega, biroq SEO tuzilishi, robots/sitemap, alohida yo'nalishlar sahifasi va aniq tarif konfiguratsiyasi to'liq kiritilishi talab etiladi.
Keyingi bosqichlarda tasdiqlangan tuzatishlar xavfsiz amalga oshiriladi.
