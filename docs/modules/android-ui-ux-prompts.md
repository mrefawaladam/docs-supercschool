# 📱 Android UI/UX Design System & Master Prompts — Super Schools Mobile

Dokumen ini berisi arsitektur antarmuka, prinsip desain minimalis & modern, serta kumpulan prompt terstruktur (Visual Generator, Prototype Engine, dan Component Code Spec) yang disesuaikan secara langsung dengan modul sistem **Super Schools** (`niceweb-pembayaran`, `superapp-frontend`, `superapp-go`).

---

## 1. Konteks Ekosistem Super Schools

Aplikasi Android Super Schools dirancang untuk 2 target persona utama:
1. **Siswa & Wali Murid (Student & Parent Portal)**:
   - Dashboard Ringkasan Akademik & Finansial (Saldo Tabungan, Tagihan SPP, Absensi Hari Ini).
   - Modul Keuangan: `bills` (Tagihan & Rincian Pembayaran), `top-up`, `infaq`, `savings-goals`.
   - Modul Akademik: `student-attendance` (QR/Geofencing), `class-schedule`, `lms` (Tugas & Materi), `awards`, `reports` (Rapor Siswa).
   - Modul Izin: `special-permission` (Pengajuan Surat Dispensasi/Sakit).
2. **Guru & Wali Kelas (Teacher Mode)**:
   - Presensi Harian Siswa & Agenda Mengajar.
   - Verifikasi Dispensasi/Izin Siswa.
   - Monitoring Nilai & Input Catatan Sikap.

---

## 2. Standar Desain UI/UX (Minimalist & Modern Android)

Sesuai standar Android Material 3 dan prinsip *Clean Baseline UI*:

| Parameter | Spesifikasi Standar |
| :--- | :--- |
| **Grid & Spacing** | 8dp baseline grid (padding: 16dp / 24dp screen gutters, 12dp card gaps). |
| **Typography** | Sans-serif modern (Plus Jakarta Sans / Inter). Skala: Display 24sp (semibold), Body 14sp, Caption 12sp. Tabular numbers (`tabular-nums`) untuk nominal uang & tanggal. |
| **Color Tokens** | Neutral Slate/Zinc background (`#F8FAFC` light / `#090D16` dark). Clean subtle border (`#E2E8F0` / `#1E293B`). 1 Aksen primer cerdas (Emerald `#059669` atau Deep Indigo `#4F46E5`). Tanpa gradien ungu norak atau glow berlebih. |
| **Elevation & Corners** | Flat/subtle border (1px solid), rounded corners 16dp untuk Cards, 12dp untuk Input Fields & Buttons. |
| **Touch Targets** | Minimum $\ge$ 48x48 dp untuk semua tombol, tab bar, dan chip interaktif. |
| **Motion** | Durasi singkat ($\le 200\text{ms}$) pada GPU-accelerated props (`opacity`, `transform: translateY`). |

---

## 3. 5 Standar Visual States (Wajib di Setiap Layar)

Setiap layar Android dalam sistem ini wajib memiliki 5 spesifikasi state:
1. **Ideal State**: Data terisi rapi dengan card hierarkis, badge status terstandarisasi, dan aksi cepat.
2. **Loading State**: Shimmer skeleton layout geometri (panjang garis & card identik dengan data asli, tanpa fullscreen spinner).
3. **Empty State**: Ikon minimalis (duotone outline), judul ringkas, keterangan 1-2 baris, dan 1 CTA primer (contoh: *"Belum ada tagihan aktif"*).
4. **Partial State**: Pagination horizontal chips tanggal atau infinite scroll list dengan loader indikator bawah.
5. **Error State**: Non-blocking banner atau inline feedback dengan tombol "Coba Lagi" (*Retry*).

---

## 4. Master Prompts Siap Pakai

### A. Prompt Visual Concept / Mockup (Midjourney, Dribbble, Stable Diffusion)

> **Kegunaan**: Generate visual referensi layar Android modern, clean, dan profesional.

#### Prompt 1: Dashboard Siswa & Kartu Finansial (Home Screen)
```text
Clean modern Android mobile app UI design for "Super Schools" Student Portal dashboard, Material 3 guidelines, sleek card-based interface, dark neutral slate background #0F172A with crisp white cards or high-contrast clean light mode #F8FAFC, emerald green functional accent #10B981, top student profile header with notification bell, school wallet balance card with quick actions (Top Up, Bayar SPP, Infaq), daily attendance status chip (Hadir 07:12 WIB), upcoming class schedule timeline, high contrast typography using Inter font, tabular numbers for currency IDR, elegant whitespace, 8dp grid, Dribbble trending, Figma showcase, UI/UX Behance quality, mobile screenshot --ar 9:16 --v 6.0
```

#### Prompt 2: Layar Detail Tagihan SPP & Pembayaran (`bills` & `checkout`)
```text
Minimalist Android mobile app UI for School Fee Bill Payment ("Tagihan SPP Super Schools"), clean Material Design 3, white and light slate gray palette, deep indigo accent color, invoice breakdown card showing tuition month, lab fee, discount coupon chip, total amount with bold tabular typography, payment method selector (BCA Virtual Account, QRIS, Bank Transfer) with radio pill buttons, non-blocking sticky bottom bar with "Bayar Sekarang" 48dp CTA button, clean micro-copy, error and empty state badge designs, 4k resolution mobile screen --ar 9:16 --v 6.0
```

#### Prompt 3: Presensi Siswa & Scanner QR (`student-attendance`)
```text
Ultra minimalist Android app interface for Student Attendance & Check-in ("Presensi Digital Sekolah"), camera viewfinder card with rounded corners 24dp for QR Code scan, geolocation badge showing "Radius Sekolah: Valid (15m)", clean bottom sheet displaying today's check-in/out timestamps, switch tab for "Pengajuan Izin / Dispensasi" with file upload attachment preview, subtle outline borders, accessible high contrast, no messy gradients, professional fintech and edtech style --ar 9:16 --v 6.0
```

---

### B. Prompt AI Prototyping / Wireframing (Galileo AI / Uizard / v0)

> **Kegunaan**: Masukkan prompt ini ke tool auto-layout AI untuk langsung mendapatkan layout wireframe yang fungsional.

```text
Create a clean, minimalist Android app interface for "Super Schools Mobile" (Student & Guardian Portal).

1. Target Platform:
   - Android Material 3 layout with status bar, dynamic Top App Bar, and 5-item Bottom Navigation Bar: [Beranda, Akademik, Tagihan, Izin, Profil].

2. Core Screen - Dashboard:
   - Header: School identity ("SMK Telkom Ponorogo"), student avatar, student name ("Rizky Ramadhan - XII RPL 1"), and notification bell.
   - Financial Widget: Dual card showing "Saldo Dompet Kantin" and "Tagihan Belum Lunas" with quick action buttons [Top Up] and [Bayar SPP].
   - Today's Activity: Attendance check-in card showing timestamp status (07:10 AM - Tepat Waktu) with a QR Presensi shortcut.
   - Schedule Carousel: Next two classes with subject, teacher name, and room number.

3. Design Rules:
   - Palette: Background #F8FAFC (Slate 50), Surface #FFFFFF, Primary Accent #059669 (Emerald 600), Text Primary #0F172A (Slate 900), Text Muted #64748B.
   - Spacing: 8dp grid, 16dp horizontal edge padding, 16dp rounded card radius.
   - Minimum tap target: 48x48dp for all actionable icons and buttons.
   - Include empty state indicator when no bills are pending.
```

---

### C. Prompt Code Generation (Claude / ChatGPT / Cursor untuk Jetpack Compose)

> **Kegunaan**: Menghasilkan kode Android Jetpack Compose native yang clean, reactive, dan modular.

```text
Bertindaklah sebagai Senior Android Developer (Kotlin + Jetpack Compose). Buatkan implementasi komponen modular UI untuk layar "Student Bills / Tagihan SPP" pada aplikasi Super Schools dengan ketentuan:

1. Architecture:
   - Jetpack Compose + Material 3 (androidx.compose.material3).
   - MVI / StateFlow pattern dengan UI State class:
     * Loading (Skeleton/Shimmer placeholder cards).
     * Empty (Ikon amplop/dokumen bersih + teks "Semua tagihan lunas" + tombol "Riwayat Transaksi").
     * Error (Banner kartu merah lembut dengan pesan kegagalan + tombol "Coba Lagi").
     * Success (List kartu tagihan dengan judul, tenggat waktu, nominal format Rupiah tabular, dan status badge [LUNAS / BELUM BAYAR]).

2. Styling:
   - Terapkan design token minimalis: Warna netral zinc/slate dengan aksen primer Emerald (#059669).
   - Card beradius 16.dp, border tipis 1.dp solid (#E2E8F0), tanpa bayangan berlebihan.
   - Modifier clickable dengan minTouchTarget 48.dp dan ripple effect halus.

3. Output:
   - Berikan kode Kotlin lengkap untuk State class, Screen composable, dan ItemCard composable yang siap copy-paste ke Android Studio.
```

---

## 5. Checklist Verifikasi Desain Sebelum Handoff

- [ ] **Contrast Check**: Semua teks rasio kontras $\ge 4.5:1$ terhadap background card.
- [ ] **Data Density**: Menggunakan `tabular-nums` untuk nominal mata uang Rupiah dan jam presensi agar angka tidak bergeser saat refresh.
- [ ] **Touch Target**: Seluruh tombol, chip filter, dan icon navigation berukuran minimal $48 \times 48\text{ dp}$.
- [ ] **Shimmer Geometry**: Skeleton loader memiliki bentuk dan proporsi yang identik dengan kartu aslinya.
- [ ] **Non-blocking Errors**: Pesan error jaringan tidak menutupi seluruh layar (kecuali fatal crash).
