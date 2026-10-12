# Setup Lingkungan Lokal

Panduan langkah demi langkah untuk mengonfigurasi database, env file, dan menjalankan seluruh service secara lokal.

---

## 1. Konfigurasi Environment (`.env`)

Setiap service memiliki konfigurasi lingkungan masing-masing:

### A. Laravel (`niceweb-pembayaran/.env`)
Salin file `.env.example`:
```bash
cp niceweb-pembayaran/.env.example niceweb-pembayaran/.env
```
Pastikan variabel database diarahkan ke Central Database MySQL Anda:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=central_db
DB_USERNAME=root
DB_PASSWORD=
```

### B. Go Backend (`superapp-go/.env`)
```bash
cp superapp-go/.env.example superapp-go/.env
```
Konfigurasikan koneksi central dan database tenant default di `superapp-go/env/.env_TCD`.

### C. Frontend (`superapp-frontend/.env.local`)
Arahkan endpoint API ke service Laravel dan Go lokal:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_GO_API_URL=http://localhost:8080
```

---

## 2. Inisialisasi Database & Migrasi Multi-Tenant

Proyek ini telah menyediakan otomatisasi di root `Makefile`:

```bash
# Otomatisasi seluruh flow database:
# Buat DB -> Migrasi Central -> Seed Sekolah -> Migrasi Client -> Seed Perms -> Migrasi Go
make db-setup-all
```

::: tip Eksekusi Bertahap
Jika ingin menjalankan satu per satu secara manual:
1. `make db-create` - Membuat database MySQL
2. `make migrate-central` - Migrasi schema central DB (Laravel)
3. `make seed-central` - Mendaftarkan sekolah (tenant) ke tabel `schools`
4. `make migrate-clients` - Membuat tabel tenant di database masing-masing sekolah
5. `make seed-client` - Menyiapkan user awal, role, dan policy permissions
6. `make migrate-go` - Menjalankan migrasi Goose untuk Go API
:::

---

## 3. Menjalankan Aplikasi

Jalankan seluruh service secara bersamaan:

```bash
# Menjalankan Laravel (8000), Frontend (3000), dan Go (8080) bersamaan
make dev
```

Atau gunakan session Tmux untuk terminal terpisah yang rapi:
```bash
make tmux
```
