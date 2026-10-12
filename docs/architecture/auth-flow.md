# Alur Otentikasi & Otorisasi

Sistem menerapkan autentikasi terpadu berbasis Token JWT dan Role-Based Access Control (RBAC) yang sinkron antara frontend dan backend.

---

## Autentikasi Pengguna

1. Pengguna melakukan login di `superapp-frontend`.
2. Request login divalidasi oleh endpoint auth Laravel atau Go.
3. Klien menerima access token dan refresh token yang memuat metadata pengguna serta hak akses (`roles` & `permissions`).
4. Token dikirim pada header `Authorization: Bearer <token>` untuk setiap request selanjutnya.

---

## Sistem Otorisasi & Policy

Izin akses dipetakan secara terperinci (*fine-grained permissions*):
- **Superadmin**: Akses menyeluruh ke Central DB & konfigurasi sistem.
- **Admin Sekolah**: Pengaturan data master, manajemen siswa, dan konfigurasi tagihan.
- **Bendahara / Kasir**: Pembayaran SPP, top-up dompet, dan rekap keuangan.
- **Guru / Wali Kelas**: Absensi, input nilai, dan manajemen CBT/LMS.
- **Siswa / Orang Tua**: Melihat jadwal, mengerjakan ujian, dan cek histori pembayaran.
