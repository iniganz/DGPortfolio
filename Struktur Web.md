# 📐 Struktur & Alur Website Portfolio — DGanz

---

## 🎨 Color Palette (Aturan 60-30-10)

| Peran           | Warna              | Hex       | Penggunaan                                  |
|-----------------|--------------------|-----------|--------------------------------------------|
| **60% Primary** | Dark Navy          | `#0a0f1a` | Background utama, section gelap             |
| **30% Secondary** | Slate Blue-Gray  | `#1a1f36` | Card, navbar, section alternate             |
| **10% Accent**  | Electric Cyan      | `#00d4ff` | Button, link hover, border highlight, icon  |
| Text Primary    | Pure White         | `#ffffff` | Heading, body text                          |
| Text Secondary  | Soft Gray          | `#94a3b8` | Subtitle, deskripsi, caption                |
| Accent Gradient | Cyan → Purple      | `#00d4ff → #7c3aed` | CTA button, hover glow, decorasi   |

> **Kenapa dark theme?** — Portofolio developer/desainer dengan dark theme memberikan **first impression** profesional, modern, dan fokus pada konten visual (project screenshots akan lebih "pop" di background gelap).

---

## 🏗️ Struktur Halaman

### 📄 `index.html` — Halaman Utama
```
[Navbar]           → Logo | Home | About | Skills | Projects | Contact
[Hero Section]     → Tagline besar + CTA button "Lihat Projects"
[About Section]    → Foto/avatar + bio singkat + download CV
[Skills Section]   → Tech stack icons dalam grid/tag
[Projects Preview] → 3 project terbaik + button "Lihat Semua →" (link ke projects.html)
[Contact Section]  → Form kontak / link sosial media
[Footer]           → Copyright + social icons
```

### 📄 `page/projects.html` — Halaman All Projects (Grid Layout)
```
[Navbar]           → Sama dengan index
[Header]           → Title "My Projects"
[Filter Tabs]      → All | Web | Mobile | Design (opsional)
[Project Grid]     → Card grid responsive (gambar + judul + tag + link)
[Footer]           → Sama dengan index
```

---

## 🔀 Alur Navigasi User

```
User masuk → index.html (Hero)
  ├── Scroll ke About → kenal siapa DGanz
  ├── Scroll ke Skills → lihat kemampuan teknis
  ├── Scroll ke Projects Preview → lihat 3 highlight project
  │     └── Klik "Lihat Semua" → page/projects.html (Grid lengkap)
  │           └── Klik project card → buka link demo/github
  ├── Scroll ke Contact → hubungi / connect
  └── Navbar → navigasi cepat ke section manapun
```

---

## 📁 Struktur File

```
DGanzPortfolio/
├── index.html              ← Halaman utama
├── Struktur Web.md         ← File ini (dokumentasi)
├── assets/                 ← Gambar, foto, icons
├── css/
│   └── app.css             ← Semua styling
├── js/
│   └── app.js              ← Interaksi & animasi
└── page/
    └── projects.html       ← Halaman project grid
```

---

## ✨ Fitur yang Bikin First Impression Bagus

1. **Smooth scroll** — navigasi halus antar section
2. **Scroll reveal animation** — elemen muncul saat di-scroll
3. **Navbar transparent → solid** — berubah saat scroll ke bawah
4. **Glow effect** pada hover button & card
5. **Gradient accent** pada elemen penting
6. **Responsive** — bagus di mobile & desktop
7. **Project grid masonry-style** — layout project yang rapi & modern
8. **Typing animation** pada hero tagline

---

## 📝 Konten yang Perlu Diisi (Nanti)

- [ ] Foto profil / avatar
- [ ] Bio singkat (siapa kamu, passion, dll)
- [ ] Daftar skills/tech stack
- [ ] Screenshot + deskripsi project
- [ ] Link GitHub / LinkedIn / Email
- [ ] CV (PDF) untuk di-download