# SHOPADMIN.UZ — XAVFSIZLIK AUDITI (SECURITY_AUDIT)

**Sana:** 2026-10-15  
**Loyiha:** ShopAdmin Frontend & Platform Security  

---

## 1. FRONTEND VA CLIENT-SIDE XAVFSIZLIGI

| Xavf Turi | Tekshiruv Natijasi | Baho |
|---|---|---|
| **Maxfiy kalitlar (.env / API Secrets)** | Tekshirildi: `.env` yoki server maxfiy kalitlari frontend build ichida yo‘q | **Xavfsiz** |
| **XSS (Cross-Site Scripting)** | React 19 / JSX avtomatik escape qiladi; `dangerouslySetInnerHTML` faqat tasdiqlangan JSON-LD skriptlarida ishlatiladi | **Xavfsiz** |
| **CSRF & Cookie Protection** | JWT tokenlar saqlanishi va so'rovlar Bearer token bilan jo'natiladi | **Xavfsiz** |
| **Tariflar va Narxlarni Serverda Tekshirish** | Narxlar client-side qabul qilinmaydi, serverdagi bazadan olinadi | **Xavfsiz** |
| **Multi-Tenant Izolyatsiyasi** | Har bir so'rov `company_id` tenant kontekstida bajariladi | **Xavfsiz** |

---

## 2. FORM VALIDATION VA INPUT SANITIZATION

1. **Lead / Telefon raqamlarini qabul qilish:**
   - Telefon raqami formati: `+998 XX XXX XX XX` regex bilan tekshiriladi.
   - Bo'sh yoki spam xabarlarga qarshi cheklovlar qo'yilgan.
2. **Server javoblari va xatoliklar:**
   - Clientga serverning ichki xatolari yoki stack trace sizdirilmaydi; faqat tushunarli xabarlar ko'rsatiladi.

---

## 3. ELECTRON DESKTOP VA OFFLINE POS XAVFSIZLIGI

1. **IPC Kommunikatsiyasi:**
   - `contextIsolation: true`
   - `nodeIntegration: false`
   - Faqat oq ro'yxatdagi (`whitelist`) IPC kanallari (printer, tarozi, offline-sync) orqali muloqot qilinadi.
2. **Offline Kassa Bazasi:**
   - Lokal ma'lumotlar xavfsiz papkada saqlanadi va internet paydo bo'lganda idempotent tranzaksiya bilan sinxronlanadi.
