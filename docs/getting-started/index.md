# Panduan Mulai (Getting Started)

Selamat datang di ekosistem **Schools Super Workspace**. Monorepo ini menggabungkan beberapa service yang saling terhubung untuk menyediakan layanan administrasi, keuangan, dan kegiatan belajar mengajar di sekolah.

---

## Struktur Layanan

| Service | Direktori | Stack Teknologi | Port Lokal | Peran Utama |
| :--- | :--- | :--- | :--- | :--- |
| **niceweb-pembayaran** | `/niceweb-pembayaran` | PHP 8.2+, Laravel | `8000` | Central DB, Payment Gateway, Administrasi Tenant |
| **superapp-frontend** | `/superapp-frontend` | Next.js 15, React 19, Tailwind | `3000` | Web Portal Siswa, Guru, dan Admin |
| **superapp-go** | `/superapp-go` | Go 1.22+, GORM, Goose | `8080` | API v2 High-Performance (CBT, Ujian, Notifikasi) |
| **superapp-e2e** | `/superapp-e2e` | Playwright, TypeScript | - | Pengujian otomatis end-to-end |

---

## Prasyarat Sistem

Sebelum menjalankan proyek, pastikan perangkat lokal Anda telah terpasang:

- **Node.js** (>= 20) & **npm / pnpm**
- **PHP** (>= 8.2) & **Composer**
- **Go** (>= 1.22) & **Air** *(untuk live reload Go)*
- **MySQL Database Server** (disarankan v8.0)
- **Redis Cache & Queue**
- **Make** *(opsional tapi sangat disarankan untuk menjalankan Makefile)*

---

## Langkah Cepat

Jalankan instalasi otomatis semua dependency dari root direktori:

```bash
# Install dependency composer, pnpm, dan go mod sekaligus
make install
```

Lanjutkan membaca panduan detail di [Setup Lingkungan Lokal](/getting-started/setup).
