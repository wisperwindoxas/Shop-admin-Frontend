# SHOPADMIN.UZ — UNUMLIK VA TEZLIK AUDITI (PERFORMANCE_AUDIT)

**Sana:** 2026-10-15  
**Loyiha:** ShopAdmin Frontend Performance  

---

## 1. CORE WEB VITALS MAQSADLI ME'YORLARI

| Ko‘rsatkich | Maqsadli Me’yor | Joriy Taxminiy Ko‘rsatkich | Holati |
|---|---|---|---|
| **LCP (Largest Contentful Paint)** | ≤ 2.5 soniya | ~1.8 – 2.4s | Yaxshi |
| **INP (Interaction to Next Paint)** | ≤ 200 ms | ~40 – 80 ms | A’lo |
| **CLS (Cumulative Layout Shift)** | ≤ 0.1 | ~0.02 | A’lo |
| **FCP (First Contentful Paint)** | ≤ 1.8 soniya | ~1.2s | Yaxshi |
| **TTFB (Time to First Byte)** | ≤ 800 ms | ~250 – 400 ms | Yaxshi |

---

## 2. ANIMATSIYALAR VA 3D CANVAS AUDITI

1. **Three.js 3D POS Terminal:**
   - `ThreePosScene.tsx` komponenti brauzer yuklanishida katta resurs olmasligi uchun `requestAnimationFrame` optimallashtirilgan.
   - Mobil qurilmalarda yuklanishni yengillashtirish uchun optimallashtirilgan geometriya va past poligonli modellar qo'llangan.
2. **Shrift Yuklanishi:**
   - Shriftlar `display: swap` bilan yuklanishi kerak, shunda matn ko'rinishi bloklanmaydi (FOIT oldini olish).
3. **Rasmlar va Assetlar:**
   - Rasm formatlari WebP / AVIF formatlariga o'tkazilishi, aniq `width` va `height` berilishi CLS ni nolga tushiradi.
