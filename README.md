# 📖 superapp-docs: Schools Super Documentation Portal

Portal dokumentasi resmi untuk ekosistem **Schools Super Workspace**, dibangun menggunakan **VitePress**.

---

## ⚡ Cara Menjalankan

Dari root monorepo:
```bash
# Menjalankan dev server VitePress pada port 5173
make docs
# atau: make dev-docs
```

Atau dari dalam folder `superapp-docs`:
```bash
npm run docs:dev
```
Buka browser di: [http://localhost:5173](http://localhost:5173).

---

## 🤖 Panduan Vibe Coding dengan VitePress

Proyek ini dirancang agar sangat mudah dikembangkan dan diperbarui bersama AI (*vibe coding*).

### 1. Menambah Halaman Baru
Cukup buat file Markdown `.md` di folder yang relevan dalam `docs/`:
- `docs/modules/nama-fitur.md`
- `docs/architecture/konsep-baru.md`
- `docs/api/nama-endpoint.md`

### 2. Mendaftarkan Halaman ke Menu / Sidebar
Buka file `docs/.vitepress/config.mts`, lalu tambahkan item baru ke array `nav` atau `sidebar`:
```typescript
{ text: 'Fitur Baru', link: '/modules/nama-fitur' }
```

### 3. Contoh Prompt Vibe Coding yang Bisa Anda Gunakan:
> *"Tambahkan halaman baru di `superapp-docs/docs/modules/perpustakaan.md` yang menjelaskan alur peminjaman buku dengan diagram Mermaid sequence dan tabel endpoint API-nya, lalu daftarkan ke sidebar modul."*

### 4. Format Khusus yang Didukung:
- **Mermaid Diagram**: Cukup gunakan blok kode ```` ```mermaid ````.
- **Alerts / Callouts**:
  ```markdown
  ::: tip Tips
  Gunakan instruksi ini untuk performa lebih cepat.
  :::

  ::: warning Perhatian
  Jangan ubah konfigurasi ini di produksi.
  :::
  ```
- **Syntax Highlighting**: Otomatis mendeteksi Go, PHP, TypeScript, Bash, JSON, SQL, dll.
