# SHOPADMIN.UZ — GOOGLE SEARCH CONSOLE VA ANALYTICS QO'LLANMASI (GOOGLE_SETUP)

**Domen:** `https://shop-admin.uz/`  

---

## 1. GOOGLE SEARCH CONSOLE SOZLASH

### 1.1. Domenni Tasdiqlash (Verification)
1. Google Search Console platformasiga kiring: `https://search.google.com/search-console`.
2. **Domain** tanlovini tanlang va `shop-admin.uz` domenini kiriting.
3. DNS provayderingiz (Cloudflare, Reg.ru yoki hosting boshqaruv paneli) da quyidagi **TXT yozuvini** qo‘shing:
   - **Type:** `TXT`
   - **Name:** `@` yoki `shop-admin.uz`
   - **Value:** `google-site-verification=...`
4. Muqobil HTML tekshiruvi: Loyihada allaqachon `Frontend/public/google21386177ed224827.html` fayli mavjud bo‘lib, `https://shop-admin.uz/google21386177ed224827.html` orqali ham tasdiqlash mumkin.

### 1.2. Sitemap Yuborish
- GSC panelida chap menyudan **Sitemaps** bo‘limiga o‘ting.
- Yangi sitemap manzilini kiriting: `https://shop-admin.uz/sitemap.xml`.
- **Submit** tugmasini bosing.
- Holat **"Success"** bo‘lishini tekshiring.

---

## 2. GOOGLE ANALYTICS 4 (GA4) INTEGRATSIYASI

1. Google Analytics da yangi Property yarating (`ShopAdmin Web`).
2. Web Data Stream ochib `Measurement ID` ni oling (masalan: `G-XXXXXXXXXX`).
3. Quyidagi konversiya hodisalari (Events) o‘lchanadi:
   - `lead_form_submitted` — Demo yoki tarif arizasi yuborilganda.
   - `plan_selected_basic` — Basic tarif tanlanganda.
   - `plan_selected_standard` — Standart tarif tanlanganda.
   - `cta_contact_clicked` — Telegram yoki telefon havolasi bosilganda.
4. Shaxsiy ma’lumotlar (telefon raqam, ism) GA4 ga yuborilmaydi (Privacy First).

---

## 3. CORE WEB VITALS & RICH RESULTS TEST

1. **Rich Results Test:** `https://search.google.com/test/rich-results`
   - `https://shop-admin.uz/` manzilini tekshiring va `SoftwareApplication` hamda `Organization` JSON-LD sxemalari tasdiqlanishiga ishonch hosil qiling.
2. **PageSpeed Insights:** `https://pagespeed.web.dev/`
   - Sayt tezligini kompyuter va mobil uchun alohida tekshiring.
