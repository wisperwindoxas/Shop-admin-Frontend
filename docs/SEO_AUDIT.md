# SHOPADMIN.UZ — GOOGLE TEXNIK SEO AUDITI (SEO_AUDIT)

**Domen:** `https://shop-admin.uz/`  
**Bozor:** O‘zbekiston (Toshkent va viloyatlar)  
**Asosiy Til:** O‘zbek tili (Lotin alifbosi), rus tili (ixtiyoriy)  

---

## 1. TEXNIK SEO AUDIT VA TEKSHIRUV RO'YXATI

| Ko‘rsatkich | Joriy Holat | Standart / Talab | Baho |
|---|---|---|---|
| **HTTPS va SSL** | Faol (SSL sertifikati mavjud) | Majburiy HTTPS | A |
| **Robots.txt** | ❌ Yo'q (404) | Mavjud va to'g'ri sozlangan bo'lishi shart | F |
| **Sitemap.xml** | ❌ Yo'q (404) | Dinamik sitemap.xml mavjud bo'lishi shart | F |
| **Canonical URL** | ❌ Yo'q | Har bir sahifada `link rel="canonical"` | D |
| **H1 Heading** | Bitta mavjud, lekin kalit so'zlar to'liq emas | Har bir sahifada bitta aniq H1 | B |
| **Meta Description** | Asosiy sahifada bor, boshqa sahifalar mavjud emas | Har bir sahifada 150-160 belgi | C |
| **OpenGraph / Twitter Card** | Bosh sahifada bor | Barcha sahifalarda to'liq | B |
| **Structured Data (JSON-LD)** | ❌ Yo'q | SoftwareApplication, Organization, FAQ | F |
| **Ichki Bog‘lanish (Internal Links)** | Faqat bir sahifali menyu (anchor links) | Haqiqiy sahifalararo ichki havolalar | D |
| **Sahifalar Ierarxiyasi** | Faqat bitta `/` sahifa bor | Alohida landing sahifalar | F |

---

## 2. KALIT SO'ZLAR VA SEMANTIK YADRO TAHLILI

O‘zbekiston bozorida tadbirkorlar va kassirlar tomonidan eng ko‘p qidiriladigan asosiy so‘rovlar:

1. **Do‘kon yo‘nalishi:**
   - *POS tizimi*, *POS dasturi*
   - *Do‘kon uchun kassa dasturi*
   - *Savdo dasturi*, *Ombor hisobi dasturi*
   - *Shtrix-kodli kassa tizimi*
2. **Umumiy ovqatlanish (Kafe va Restoran):**
   - *Kafe uchun POS tizimi*
   - *Restoran avtomatlashtirish dasturi*
   - *Oshxona kassa dasturi*, *Ofitsiant dasturi*
3. **Qandolatchilik va Shirinliklar:**
   - *Shirinliklar do‘koni hisob dasturi*
   - *Tort buyurtmalari hisobi dasturi*
   - *Tarozi bilan ishlaydigan kassa dasturi*
4. **Texnik xususiyatlar:**
   - *Offline ishlaydigan kassa dasturi*
   - *Internet uzilganda ishlaydigan POS*
   - *ShopAdmin kassa*

---

## 3. ZARURIY SAHIFALAR VA ROUTING ARXITEKTURASI

Quyidagi sahifalar alohida URL sifatida mavjud bo‘lishi shart:

- `/` — Bosh sahifa: Smart Cloud ERP & POS umumiy imkoniyatlari
- `/do-kon-uchun-pos` — Do‘konlar, marketlar va kiyim-kechak do‘konlari uchun POS va ombor
- `/kafe-restoran-uchun-pos` — Kafe, restoran va fastfudlar uchun stollar xaritasi va oshxona kassa
- `/shirinliklar-uchun-hisob` — Qandolat sexlari va shirinlik do‘konlari uchun tarozi va tort buyurtmalari hisobi
- `/offline-pos` — 100% oflayn ishlovchi kassa imkoniyati (internet o‘chganda to‘xtamaslik)
- `/narxlar` — Shaffof tariflar (Basic va Standart)
- `/aloqa` — Qo‘llab-quvvatlash xizmati, telefon, Telegram va ofis manzili
- `/maxfiylik-siyosati` — Shaxsiy ma’lumotlarni himoya qilish siyosati
- `/foydalanish-shartlari` — Ommaviy oferta va xizmat ko‘rsatish shartlari

---

## 4. STRUCTURED DATA (JSON-LD) REJASI

1. **Organization**: ShopAdmin kompaniyasi rasmiy nomi, logotipi, veb-sayti va aloqa raqami.
2. **SoftwareApplication**: Kategoriya: `BusinessApplication`, `PointOfSale`, Operatsion tizimlar: `Windows, macOS, Android, iOS`, Narxlari va valyutasi: `UZS`.
3. **BreadcrumbList**: Sayt ichki yo‘nalishlari bo‘yicha navigatsiya zanjiri.
4. **FAQPage**: Eng ko‘p beriladigan 5 ta muhim savol-javob.
