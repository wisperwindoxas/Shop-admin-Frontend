# SHOPADMIN.UZ — PRODUCTION DEPLOYMENT VA XAVFSIZLIK CHECKLISTI (DEPLOYMENT_CHECKLIST)

**Sana:** 2026-10-15  
**Loyiha:** ShopAdmin Deployment  

---

## 1. DEPLOYMENT OLDIDAN TEKSHIRUV

- [x] **TypeScript Build:** `npm run build` muvaffaqiyatli xatosiz tugashi kerak.
- [x] **Sitemap & Robots:** `https://shop-admin.uz/robots.txt` va `https://shop-admin.uz/sitemap.xml` 200 OK qaytarishi kerak.
- [x] **SSL / HTTPS:** Barcha HTTP so'rovlar avtomatik HTTPS ga 301 yo'naltirilishi kerak.
- [x] **Canonical URLs:** Har bir sahifada o'zining to'g'ri `canonical` havolasi bo'lishi kerak.
- [x] **Maxfiy kalitlar tekshiruvi:** `.env` va server sirlari frontend build ichiga kirmasligi kerak.
- [x] **404 va Xatolik sahifalari:** Noto'g'ri URL kiritilganda chiroyli 404 sahifa chiqishi kerak.
- [x] **Rollback (Orqaga qaytarish) rejasi:** Oldingi barqaror git commit hash saqlangan bo'lishi kerak.

---

## 2. PRODUCTION SERVISLAR VA PORTLAR

- **Landing Page (Frontend):** Port `3005` (PM2 yoki Systemd orqali boshqariladi).
- **Kassir & Boshqaruv (User Panel):** Port `3000`.
- **Go Backend API:** Port `8080`.
- **Nginx Reverse Proxy:** `shop-admin.uz` domenini port `3005` ga yo'naltiradi, `/api/` ni esa backend `8080` ga yo'naltiradi.

---

## 3. ROLLBACK (QAYTARISH) BUYRUQLARI

Agar deploydan so'ng kutilmagan nosozlik yuz bersa:
```bash
git checkout HEAD~1
npm run build
pm2 restart shop-admin-landing
```
