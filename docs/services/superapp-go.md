# superapp-go (Go Backend)

Backend berkinerja tinggi yang ditulis dalam bahasa pemrograman Go untuk menangani modul ujian online (CBT), mailing, dan antrean pesan.

---

## Menjalankan Service

```bash
# Dari root monorepo (dengan Air live-reload)
make dev-go

# Atau langsung dari foldernya
cd superapp-go
air
```

---

## Database Migration (Goose)

Migrasi skema database di Go dikelola menggunakan Goose:

```bash
# Migrasi schema tenant Go
make migrate-go
```
