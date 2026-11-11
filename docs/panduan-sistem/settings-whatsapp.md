# Kontak Bantuan & Support WhatsApp Admin

Fitur **Kontak Bantuan & Support WhatsApp** memungkinkan Administrator sekolah untuk mengonfigurasi tombol bantuan WhatsApp terapung (*floating support badge*) yang tampil di halaman login, portal siswa, dan antarmuka aplikasi.

Fitur ini mendukung **multi-kontak PIC** (Person in Charge), sehingga sekolah dapat membagi layanan bantuan berdasarkan divisi/keperluan (misal: *Admin TU*, *Bendahara Keuangan*, dan *Layanan IT / Teknis*).

---

## 1. Lokasi Pengaturan WhatsApp

Pengaturan kontak WhatsApp berada di dalam modal **Pengaturan Aplikasi**:

1. Masuk sebagai **Administrator** / **Super Admin**.
2. Buka menu **Pengaturan Aplikasi** di sidebar kiri (`/manage/settings`).
3. Pada kartu **Pengaturan Aplikasi**, klik tombol **Edit**.
4. Gulir layar ke bagian paling bawah pada seksi **Kontak Bantuan & Support WhatsApp**.

![Formulir Pengaturan WhatsApp](/screenshots/settings-whatsapp-modal.png)

---

## 2. Parameter & Rincian Konfigurasi

| Parameter | Tipe | Wajib | Keterangan |
| :--- | :---: | :---: | :--- |
| **Aktifkan Badge (Checkbox)** | Boolean | Ya | Jika dicentang, tombol bantuan WhatsApp akan aktif dan melayang di pojok kanan bawah layar. Jika dinonaktifkan, badge akan disembunyikan sepenuhnya. |
| **Nama PIC / Layanan** | Teks | Ya | Nama staf atau unit layanan yang menangani bantuan (contoh: `Admin Tata Usaha`, `Bendahara Sekolah`, `Customer Service`). |
| **Nomor WhatsApp** | Nomor | Ya | Nomor ponsel tujuan WhatsApp. Mendukung format lokal (`0812...`) atau internasional (`+628...` / `628...`). Sistem otomatis mengonversinya ke format baku WhatsApp URL (`https://wa.me/628...`). |
| **Peran / Deskripsi Singkat** | Teks | Opsional | Penjelasan tanggung jawab PIC (contoh: `Informasi Pendaftaran & Administrasi`, `Konsultasi Pembayaran SPP`). Ditampilkan di menu popup jika terdapat lebih dari satu kontak. |
| **Pesan Awal WhatsApp** | Teks | Opsional | Template teks otomatis yang akan langsung terisi saat pengguna membuka chat WhatsApp (contoh: `Halo Admin TU, saya ingin bertanya terkait persyaratan pendaftaran sekolah`). |

---

## 3. Menambah & Menghapus Kontak (Multi-Contact Support)

- **Menambah Kontak Baru**:
  - Klik tombol **`+ Tambah Kontak Bantuan`**.
  - Isi rincian Nama PIC, Nomor WhatsApp, Divisi, dan Template Pesan.
  - Anda dapat menambahkan beberapa PIC sesuai kebutuhan layanan sekolah.
- **Menghapus Kontak**:
  - Klik tombol merah **`Hapus`** pada baris kontak PIC yang ingin dihilangkan.
- **Menyimpan Perubahan**:
  - Klik tombol **`Simpan Pengaturan`** di bagian bawah formulir modal.

---

## 4. Tampilan di Sisi Pengguna (User Experience)

Setelah diaktifkan, badge bantuan WhatsApp akan tampil di pojok kanan bawah halaman publik login dan portal siswa:

![Badge Bantuan WhatsApp di Halaman Login](/screenshots/whatsapp-support-badge-login.png)

### Perilaku Badge:
1. **Mode Kontak Tunggal (1 PIC)**:
   - Pengguna yang mengklik tombol langsung dialihkan ke obrolan WhatsApp dengan PIC tersebut beserta pesan pembuka yang sudah disiapkan.
2. **Mode Multi-Kontak (2 PIC atau Lebih)**:
   - Saat tombol diklik, sistem memunculkan menu dropdown rapi berisi pilihan divisi bantuan. Pengguna dapat memilih PIC yang paling sesuai dengan kendalanya (misal: urusan SPP ke Bendahara, urusan akun ke Admin IT).
