# Troubleshooting & Tips

Kumpulan solusi untuk kendala yang sering terjadi selama proses development.

---

## 1. Port Tersangkut / Port Already in Use

Jika port `8000`, `3000`, atau `8080` masih terpakai oleh proses background lama yang belum mati:

```bash
# Periksa status port
make status

# Hentikan semua proses yang menggunakan port tersebut secara paksa
make stop
```

---

## 2. Gagal Migrasi Client Database

**Penyebab umum:**
Record sekolah belum ada di tabel `schools` pada Central DB, atau koneksi tenant dinamis gagal dibuat.

**Solusi:**
1. Pastikan `make seed-central` sudah berhasil dijalankan.
2. Periksa apakah nama database client di tabel `schools.db_name` sudah benar-benar ada di MySQL Anda (`make db-create`).

---

## 3. Live Reload Go (Air) Error

Jika binary `air` belum terinstall di komputer lokal:
```bash
go install github.com/air-verse/air@latest
```
Pastikan `$(go env GOPATH)/bin` sudah masuk ke dalam variabel `$PATH` sistem Anda.
