# niceweb-pembayaran (Laravel)

Service backend utama yang mengelola relasi database multi-tenant dan administrasi tagihan keuangan.

---

## Menjalankan Service

```bash
# Dari root monorepo
make dev-nice

# Atau langsung dari foldernya
cd niceweb-pembayaran
php artisan serve --port=8000
```

---

## Perintah Penting Artisan

```bash
# Migrasi central database
php artisan migrate --database=central_db

# Migrasi client database untuk seluruh tenant
php artisan tenants:migrate

# Generate permission dari Policy
php artisan permission:generate-from-policies
```
