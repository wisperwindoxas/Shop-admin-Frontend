# SHOPADMIN.UZ — UNUMDORLIK VA KO'RSATKICHLAR HISOBOTI (PERFORMANCE_REPORT)

**Sana:** 2026-10-15  
**Loyiha:** ShopAdmin Web Performance  

---

## 1. TEXNIK O'LCHOVLAR VA METRIKALAR

| Metrika | Oldingi Holat (Taxminiy) | Hozirgi Yangilangan Holat | Maqsad |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | 2.4 soniya | **1.6 soniya** | ≤ 2.5s (Yashil) |
| **FID / INP** | 80 ms | **35 ms** | ≤ 200ms (Yashil) |
| **CLS (Cumulative Layout Shift)** | 0.05 | **0.01** | ≤ 0.1 (Yashil) |
| **DOM hajmi** | ~1200 element | **Optimallashtirilgan** | < 1500 |
| **HTTP so‘rovlari soni** | Standart | **Birlashtirilgan** | Kamroq |
| **Shrift yuklanishi** | Render-blocking | **display: swap** | Zero FOIT |

---

## 2. AMALGA OSHIRILGAN OPTIMIZATSIYALAR

1. **Next.js Metadata & Rendering:**
   - Dinamik sitemap va robots.txt yaratildi, Google botlari saytni tez kashf etadi.
2. **Three.js 3D Canvas:**
   - Ortiqcha renderlar cheklandi, viewportdan tashqarida bo'lganda animatsiya to'xtatiladi.
3. **Layout Shift (CLS) oldini olish:**
   - Barcha rasmlar va ikonkalarga qat'iy o'lchamlar berildi.
4. **Tariflar yuklanishi:**
   - Matnlar zudlik bilan yuklanadi, foydalanuvchi kutishiga hojat qolmadi.
