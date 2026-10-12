# ‍ Data Guru

Menu **Data Guru** digunakan untuk mencatat identitas seluruh pendidik di sekolah, mengelola NIP/NUPTK, penugasan mata pelajaran, serta mengaktifkan akun portal guru.

---

## Tampilan Halaman Data Guru

![Data Guru](/screenshots/data-guru.png)

---

## 1. Pencarian & Filter Guru

- **Pencarian Cepat**: Masukkan Nama Guru, NIP, atau Email pada kotak pencarian di bagian atas.
- **Filter Status**: Saring berdasarkan status guru aktif atau nonaktif/pensiun.

---

## 2. Alur Menambah Guru Baru

```mermaid
flowchart LR
    A["1. Klik '+ Tambah Guru'"] --> B["2. Lengkapi NIP & Nama"]
    B --> C["3. Masukkan Email & Mapel"]
    C --> D["4. Klik 'Simpan'"]
    D --> E["Akun Guru Terdaftar & Aktif"]
```

### Langkah-langkah:
1. Klik tombol **`+ Tambah Guru`** di pojok kanan atas tabel.
2. Lengkapi formulir pendaftaran:
   - **NIP / NUPTK**: Nomor Identitas Pegawai (opsional untuk guru honorer).
   - **Nama Lengkap & Gelar** *(Wajib)*: Contoh: *Dra. Siti Aminah, M.Pd*.
   - **Email Resmi** *(Wajib)*: Digunakan sebagai username login guru ke aplikasi.
   - **Nomor Telepon / WhatsApp**: Untuk keperluan komunikasi dinas.
   - **Mata Pelajaran Utama**: Pilih mata pelajaran yang diampu.
3. Klik tombol **`Simpan Data Guru`**.

---

## 3. Alur Mengedit Data Guru

1. Cari nama guru pada tabel.
2. Klik tombol **Ikon Edit (Pensil)** di kolom aksi.
3. Ubah data yang diinginkan (gelar, nomor kontak, penugasan mapel).
4. Klik tombol **`Update Data`**.

---

## 4. Import & Export Data Guru

- **Import Excel**: Masukkan daftar guru sekaligus dengan format file Excel (`.xlsx`). Unduh template yang disediakan, lengkapi data, lalu unggah kembali.
- **Export Excel**: Unduh seluruh daftar kepegawaian guru ke dalam file spreadsheet untuk pelaporan Dapodik/EMIS.
