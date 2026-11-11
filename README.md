<<<<<<< HEAD
# VYSUAL — Modern Artistic Photography Studio

Website resmi studio fotografi independen dengan konsep **White Editorial Aesthetic × Modern Meets Art × Subtle Liquid Glass**. Menghadirkan visual bermakna melalui pendekatan artistik, siluet visual yang elegan, komposisi foto besar terarah, tipografi editorial ekspresif, dan animasi sinematik yang hidup.

---

## 💎 Konsep & Arah Desain

- **White Editorial Aesthetic**:
  - Dominasi palet warna putih hangat / *Warm Alabaster* (`#FAF9F6`), *Soft Linen / Ivory* (`#F4F2EC`), *Pure White* (`#FFFFFF`), dengan teks *Deep Charcoal Black* (`#121212`), *Warm Taupe* (`#58544E`), dan aksen *Camera Bronze / Gold* (`#9E8963`).
  - Nol warna biru sebagai warna utama.
  - Tampilan terang, bersih, mewah, dan berkelas seperti galeri seni / majalah editorial fotografi kelas dunia.
- **Artistic Silhouette & Visual Elements**:
  - Siluet kurva organik abstrak dan siluet portrait manusia yang bergerak halus (*subtle breathing drift*) sebagai latar belakang pendukung.
  - Retikel sudut bidik optik kamera (*viewfinder framing corners* `┌ ┐ └ ┘`) dan spesifikasi metadata fotografi (*ISO 100 // 35MM*, *f/1.4 RAW 4K*).
  - Geometri cincin *aperture* kamera pada bagian About.
- **Subtle Liquid Glass UI (Light Edition)**:
  - Permukaan kaca putih tembus pandang (*frosted white liquid glass*) dengan *backdrop blur* halus (`20px`).
  - Garis batas halus (`rgba(18, 18, 18, 0.08)`) dengan refleksi cahaya (*specular highlight*).
  - Tombol dengan proporsi elegan (bukan bentuk pill yang berlebihan).
- **Tipografi Editorial**:
  - Headings & Display: **DM Serif Display** (elegan, artistik, berkarakter dengan aksen *italic* halus).
  - Body & UI: **Inter** (tajam, bersih, sangat nyaman dibaca).
  - Metadata & Tags: **Space Grotesk** (aksen teknis kamera dan arsip modern).
- **Micro-Interactions & Custom Cursor**:
  - Kursor artistik magnetik (titik hitam presisi + cincin halus yang membesar secara mulus saat hover elemen interaktif). Dinonaktifkan secara otomatis pada perangkat layar sentuh/mobile.
  - Efek hover halus pada tombol dengan translasi ikon panah `↗`.
  - Parallax halus berbasis scroll pada kartu visual hero.

---

## 🏛️ Struktur Halaman & Fitur

1. **Navigation (Subtle Liquid Glass)**:
   - Logo studio berupa **IMAGE** di sisi kiri (`assets/images/logo.png`) dengan sistem rendering kontras tinggi dan fallback otomatis.
   - Menu desktop: *Home, Portfolio, About, Services*.
   - CTA *"Hubungi Kami"* di sisi kanan dengan gaya frosted glass.
   - Drawer menu responsif untuk mobile dan tablet.
   - Sticky navbar dengan efek blur saat digulir (*scroll*).
2. **Hero Section (Dramatic Cinematic Editorial Photography Showcase)**:
   - **Editorial Masthead Ribbon**: Pita identitas majalah di bagian atas (`ISSUE 01 // 2026`, `VYSUAL STUDIO`, `6°12'S 106°49'E · JAKARTA & BALI`, `EST. 2026 · VISUAL STORYTELLING`).
   - **Retikel Bidik Optik Kamera & Koordinat**: Retikel sudut bidik `[+]`, tanda `FRAME [01/EXP]`, dan spesifikasi `35MM · F/1.4 · ISO 100`.
   - **Ambient Artistic Silhouette**: Siluet kurva portrait manusia dan elemen optik bergerak halus (*subtle breathing drift*) yang memberi kedalaman visual tanpa mengganggu foto.
   - **Tipografi Editorial**: Headline berkarakter dengan animasi bertahap (*word-by-word reveal*): *"Mengabadikan Cerita yang Bermakna"* (aksen *italic* elegan pada *Cerita*).
   - **Narasi Studio**: *"Setiap momen memiliki cerita. Kami menangkapnya melalui perspektif, cahaya, dan detail yang menjadikannya abadi."*
   - **Dual CTAs**:
     - *"Jelajahi Portfolio"* (Solid Deep Black dengan panah `↗` menuju `#selected-works`)
     - *"Konsultasi Proyek"* (Frosted Liquid Glass dengan tautan WhatsApp aktif)
   - **Studio Editorial Metadata Strip**: Lokasi (*Jakarta & Bali, ID*), Status (*Terbuka untuk 2026* dengan indikator hijau berdenyut), dan Cakupan Komisi (*Nasional & Global*).
   - **Cinematic Multi-Layered Showcase Stage**:
     - *Primary Focal Photo Frame* (`assets/images/hero.jpg`): Foto utama beresolusi tinggi dengan nomor arsip film edge bar (`VYSUAL ARCHIVE · 35MM EXP-01`), liquid glass rim, dan badge `FOCAL POINT // ARSIP 01`.
     - *Overlapping Portrait Card* (`assets/images/hero-accent.jpg`): Kartu aksen asimetris potret manusia dengan efek kedalaman parallax (`Perspektif Manusia`).
     - *Floating Macro Detail Stamp* (`assets/images/about-detail.jpg`): Stamp optik still life melayang dengan aksen liquid glass.
     - *Floating Spec Chip*: Chip spesifikasi rana melayang (`1/250s · F/1.4 · ISO 100`).
   - **Bottom Running Dot Scroll Anchor**: Tautan navigasi gulir vertikal beranimasi menuju `#selected-works`.
3. **Selected Works (Karya Pilihan)**:
   - Terletak langsung setelah Hero.
   - Grid 2-kolom asimetris (kombinasi rasio landscape 16:10 dan portrait 4:5 yang berselang-seling).
   - Efek hover dengan frosted glass pill, judul karya, dan pintasan lightbox.
   - Terintegrasi penuh dengan Lightbox layar penuh saat diklik.
4. **Studio Philosophy (Filosofi Studio)**:
   - Pernyataan editorial terpusat dengan tipografi DM Serif berlatar siluet optik halus:
     > *"Kami tidak hanya menangkap gambar — kami mengabadikan cerita yang layak dikenang."*
   - Garis pembatas elegan dan pita atribusi est. 2026.
5. **Services (Layanan Editorial)**:
   - Layout daftar editorial 5 layanan dengan penomoran besar minimalis (`01` - `05`):
     - *Engagement Photography*
     - *Portrait Photography*
     - *Event Documentation*
     - *Landscape Photography*
     - *Graphic Design*
   - Setiap baris dilengkapi tombol konsultasi langsung terhubung ke WhatsApp dengan pesan kustom per layanan.
6. **All Projects (Arsip Karya Lengkap)**:
   - Filter tab liquid glass interaktif: *Semua, Engagement, Portrait, Event, Landscape, Graphic Design*.
   - Grid galeri `.gallery-clean-grid` responsif (4 kolom desktop besar, 3 kolom laptop, 2 kolom tablet & mobile) berisi 12 karya dengan rasio konsisten, `object-fit: cover`, dan efek zoom halus.
   - Modal Lightbox layar penuh dengan navigasi keyboard (Escape, Arrow Left, Arrow Right), counter, dan deskripsi kategori.
7. **About the Studio (Tentang Studio)**:
   - Komposisi multi-foto editorial (foto proses kerja utama + foto detail produk dengan lencana *EST. 2026*) berlatar ring aperture siluet.
   - Narasi pendekatan visual studio dan 3 metrik studio (*100% Dedikasi, 4K+ Resolusi, 2026 Est.*).
8. **Contact CTA (Kartu Liquid Glass)**:
   - Kartu kaca tembus pandang berukuran besar dengan specular edge glow pada latar putih bersih.
   - Headline: *"Let's Create Something Meaningful."*
   - Tombol utama WhatsApp CTA berukuran besar.
   - Baris informasi kontak: nomor WhatsApp, lokasi, tautan Instagram, dan status jadwal.
9. **Footer (Minimal & Clean)**:
   - Logo studio IMAGE di sisi kiri, navigasi tautan, hak cipta, dan tombol *"Kembali ke Atas"*.
10. **Floating WhatsApp Button**:
    - Tombol melayang di sudut kanan bawah dengan efek liquid glass dan tooltip *"Ayo Diskusi"*.

---

## 📁 Struktur Berkas

```
LandingPageVYSUAL/
│
├── index.html                  # Halaman utama landing page semantic HTML5
├── README.md                   # Dokumentasi panduan
│
└── assets/
    ├── css/
    │   └── style.css           # Sistem desain White Editorial Aesthetic & Liquid Glass
    │
    ├── js/
    │   └── script.js           # Logika interaktif: Custom cursor, WhatsApp, filter, lightbox, drawer & parallax
    │
    └── images/
        ├── logo.png            # File logo studio (transparan PNG/SVG)
        ├── hero.jpg            # Foto utama besar di Hero section
        ├── hero-accent.jpg     # Foto aksen editorial di Hero section
        ├── about.jpg           # Foto proses kerja studio
        ├── about-detail.jpg    # Foto detail optik & produk
        ├── statement.jpg       # Foto visual pause
        └── portfolio/          # Koleksi foto portfolio
            ├── portfolio-01.jpg  (Wedding)
            ├── portfolio-02.jpg  (Portrait)
            ├── portfolio-03.jpg  (Event)
            ├── portfolio-04.jpg  (Landscape Panoramic)
            ├── portfolio-05.jpg  (Landscape Fashion)
            ├── portfolio-06.jpg  (Event)
            ├── portfolio-07.jpg  (Landscape Architecture)
            ├── portfolio-08.jpg  (Portrait)
            ├── portfolio-09.jpg  (Product)
            └── portfolio-10.jpg  (Wedding & Engagement)
```

---

## ⚙️ Panduan Kustomisasi

### 1. Mengubah Nomor WhatsApp
Buka berkas `assets/js/script.js` pada baris 70:
```javascript
const WHATSAPP_NUMBER = "628XXXXXXXXXX"; // Ganti dengan nomor WhatsApp studio Anda (contoh: "6281234567890")
```
Semua tombol kontak di website otomatis tersinkronisasi dengan pesan spesifik per layanan.

### 2. Mengganti Logo Studio
Ganti file `assets/images/logo.png` dengan logo studio Anda. Jika logo dihapus atau dipindahkan sementara, website otomatis menampilkan fallback text `[LOGO COMPANY]`.

### 3. Mengganti Foto Portfolio
Cukup ganti file di dalam folder `assets/images/portfolio/` dengan nama file yang sama untuk memperbarui foto tanpa mengubah kode.

---

## 🚀 Cara Menjalankan

Buka file `index.html` langsung di peramban favorit Anda (Chrome, Edge, Safari, Firefox), atau jalankan local server:
```bash
npx serve .
```
=======
# VYSUAL
>>>>>>> 6cea12028852b58ec9e5d4f1ee755b7011d62210
