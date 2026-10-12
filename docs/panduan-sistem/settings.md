# Pengaturan Umum Sistem (Settings)

Menu **Pengaturan Aplikasi** adalah pusat kendali konfigurasi operasional, format percetakan dokumen keuangan, serta identitas visual lembaga sekolah di Super Schools. 

Halaman ini dapat diakses oleh Administrator melalui menu **Pengaturan Aplikasi** pada sidebar.

---

## Tampilan Halaman Pengaturan Utama

Di halaman utama Pengaturan, sistem menampilkan modul konfigurasi dalam bentuk kartu interaktif:

![Halaman Utama Pengaturan](/screenshots/settings.png)

---

## 1. Modul Pengaturan Aplikasi (`app_settings`)

Modul ini digunakan untuk mengatur profil legal, identitas sekolah, informasi kontak, aturan presensi, dan kategori kepegawaian staf.

### Tangkapan Layar Formulir Pengaturan Aplikasi:
![Formulir Pengaturan Aplikasi](/screenshots/settings-app-modal.png)

### Rincian Bidang & Fungsinya:

1. **Logo Sekolah**:
   - **Fungsi**: Mengunggah gambar logo resmi sekolah (format PNG transparan atau JPG, ukuran maksimal 2 MB).
   - **Penempatan**: Logo ini otomatis muncul pada header portal, kop surat resmi, kartu pelajar digital, dan kop laporan akademik.
   - **Ikon Hapus (Tong Sampah)**: Digunakan untuk menghapus logo yang sudah ada jika ingin mengganti logo baru.

2. **Nama Sekolah**:
   - **Fungsi**: Nama resmi lembaga sekolah (contoh: `MTsN 3 Ponorogo`).
   - **Pengaruh**: Ditampilkan pada judul aplikasi, kop rapor, dan identitas pengirim pesan/tagihan.

3. **Alamat Lengkap**:
   - **Fungsi**: Alamat domisili fisik sekolah beserta nama jalan, nomor, kelurahan/desa, dan kecamatan.
   - **Pengaruh**: Dicantumkan pada kop seluruh surat dan dokumen yang diterbitkan sistem.

4. **Telepon**:
   - **Fungsi**: Nomor telepon resmi tata usaha atau kantor sekolah (contoh: `+62 123 456 789`).
   - **Pengaruh**: Muncul sebagai kontak darurat dan bantuan di portal siswa dan wali murid.

5. **Email**:
   - **Fungsi**: Alamat email resmi sekolah (contoh: `info@sekolah.com`).
   - **Pengaruh**: Digunakan sebagai identitas kontak resmi dan tujuan balasan surel otomatis.

6. **Aktifkan Poin Absensi (Centang/Checkbox)**:
   - **Fungsi**: Mengaktifkan sistem kalkulasi poin otomatis pada presensi siswa.
   - **Cara Kerja**: Jika dicentang, setiap kali siswa melakukan absensi (baik melalui mesin RFID atau input guru), sistem secara otomatis mengakumulasikan skor kedisiplinan (misal: *Hadir tepat waktu = +2 poin*, *Terlambat = +1 poin*, *Alpha = 0 poin*). Poin ini dapat digunakan sekolah untuk penilaian kedisiplinan dan penghargaan siswa teladan.

7. **Status Kepegawaian Guru**:
   - **Fungsi**: Mengatur kategori ikatan kerja guru dan tenaga kependidikan di sekolah (seperti: PNS, PPPK, Guru Tetap Yayasan, GTT, Honorer).
   - **Tombol Reset Default**: Mengembalikan daftar kategori ke konfigurasi standar kementerian.

### Alur Mengubah Pengaturan Aplikasi:
1. Pada kartu **Pengaturan Aplikasi**, klik tombol **Edit**.
2. Jendela modal formulir akan terbuka. Sesuaikan informasi yang diperlukan.
3. Klik tombol **Simpan Pengaturan** di bagian bawah jendela modal.

---

## 2. Modul Pengaturan Nota (`receipt_settings`)

Modul ini bertanggung jawab mengatur tata letak, kop dokumen, format teks, dan ukuran kertas untuk seluruh bukti pembayaran kasir, kuitansi SPP, dan struk belanja kantin sekolah.

### Tangkapan Layar Formulir Pengaturan Nota:
![Formulir Pengaturan Nota](/screenshots/settings-receipt-modal.png)

### Rincian Bidang & Fungsinya:

1. **Logo Nota**:
   - **Fungsi**: Mengunggah logo instansi atau lambang komite sekolah yang dicetak di atas kuitansi bukti pembayaran.

2. **Judul Nota**:
   - **Fungsi**: Baris judul teratas pada kop bukti pembayaran (contoh: `Komite MTsN 3 Ponorogo` atau `Loket Pembayaran SPP`).

3. **Sub Judul**:
   - **Fungsi**: Keterangan pelengkap di bawah judul utama (contoh: `Madrasah Tsanawiyah Negeri 3 Ponorogo`).

4. **Nama Sekolah**:
   - **Fungsi**: Nama sekolah yang dicetak di bagian badan kuitansi resmi.

5. **Alamat**:
   - **Fungsi**: Alamat lengkap lokasi loket kasir atau tata usaha yang tercetak pada kop kuitansi.

6. **Kontak**:
   - **Fungsi**: Nomor telepon/WhatsApp loket kasir sekolah (contoh: `(0352) 483779`) agar wali murid dapat menghubungi bendahara jika ada kekeliruan pencatatan tagihan.

7. **Catatan Kaki (Footer Note)**:
   - **Fungsi**: Teks pesan himbauan di bagian terbawah struk kuitansi (contoh: *"Simpan tanda terima ini sebagai bukti pembayaran yang sah. Terima kasih atas kerja sama Anda."*).

8. **Format Tanda Tangan Penyetor & Penerima**:
   - **Penyetor (Kiri)**: Label nama penandatangan sebelah kiri (default: *Penyetor / Wali Murid*).
   - **Penerima (Kanan)**: Label nama penandatangan sebelah kanan (default: *Penerima / Bendahara Sekolah*).

9. **Opsi Tampilan Tambahan**:
   - **Tampilkan Status Lunas**: Mencetak stempel tulisan status **LUNAS** secara otomatis pada struk jika pembayaran sudah tuntas.
   - **Tampilkan Tabel Riwayat Angsuran**: Menampilkan riwayat cicilan sebelumnya jika tagihan dibayar secara bertahap.

10. **Ukuran Kertas Cetak**:
    - **Ukuran Kertas Pembayaran SPP**: Pilihan ukuran kertas lembar kuitansi besar (**A4**, **A5**, atau ukuran kasir **A8**).
    - **Ukuran Kertas Kasir Kantin**: Disesuaikan dengan printer thermal kasir mini (**A8 / 58mm & 80mm**).
    - **Ukuran Kertas Top-Up Saldo**: Format struk bukti pengisian saldo kartu digital siswa (**A8**).

### Alur Mengubah Pengaturan Nota:
1. Pada kartu **Pengaturan Nota**, klik tombol **Edit**.
2. Sesuaikan kop kuitansi, catatan kaki, serta ukuran kertas printer yang digunakan sekolah Anda.
3. Klik tombol **Simpan Pengaturan**.

---

## 3. Modul Tema & Branding Sekolah (`custom_theme`)

Modul ini memberikan kebebasan bagi Administrator sekolah untuk menyesuaikan tampilan estetika aplikasi agar selaras dengan identitas, warna almamater, atau ciri khas madrasah/sekolah masing-masing.

### Tangkapan Layar Modal Tema & Branding:
![Atur Tema & Tampilan Sekolah](/screenshots/settings-theme-modal.png)

### Rincian Pilihan & Fungsinya:

1. **Pilihan Preset Tema Sistem**:
   Sistem menyediakan 8 kombinasi palet warna siap pakai yang dirancang profesional untuk institusi pendidikan:
   - **Academic Navy**: Kombinasi warna biru dongker formal berwibawa, sangat cocok untuk sekolah umum dan SMA/SMK.
   - **Madrasah Green**: Perpaduan hijau botol khas Kementerian Agama dan pesantren, ideal untuk MTs, MA, dan pondok pesantren.
   - **Ocean Blue**: Warna biru muda cerah yang ramah dan segar, sangat cocok untuk jenjang SD dan SMP.
   - **Forest Green**: Warna hijau alami yang memberikan kesan sejuk dan bersahabat.
   - **Warm Orange**: Warna oranye energik dan kreatif, cocok untuk sekolah berbasis kejuruan dan seni.
   - **Elite Maroon**: Warna merah marun elegan untuk institusi bergengsi dan akademi.
   - **Tech Teal**: Warna hijau toska modern bernuansa sains dan teknologi.
   - **Classic Indigo**: Warna nila klasik modern dengan aksen warna yang tajam.

2. **Kustomisasi Mandiri (Custom Color Picker)**:
   Jika sekolah memiliki standar warna khusus (HEX Code), admin dapat memilih opsi **Kustomisasi**:
   - **Warna Utama (Primary Color)**: Mengubah warna tombol utama, warna sorotan menu aktif di sidebar, serta latar belakang header.
   - **Warna Sekunder (Secondary Color)**: Mengatur warna tombol bantuan, kartu statistik, dan aksen latar belakang lembut.
   - **Warna Aksen (Accent Color)**: Mengatur warna status khusus, lencana penting (*badges*), dan tombol penegas aksi.

3. **Mode Tampilan Visual**:
   - **Mode Terang (Light Mode)**: Latar belakang putih bersih untuk penggunaan siang hari di ruang kantor yang terang.
   - **Mode Gelap (Dark Mode)**: Latar belakang gelap ramah mata untuk kenyamanan penggunaan jangka panjang.

### Alur Mengubah Tema Aplikasi:
1. Pada kartu **Tema & Branding**, klik tombol **Atur Tema**.
2. Klik salah satu kotak preset tema yang diinginkan, atau masukkan kode warna HEX kustom sekolah Anda.
3. Klik tombol **Simpan Tema**.
4. Halaman aplikasi akan otomatis diperbarui dan seluruh elemen antarmuka akan langsung berganti warna mengikuti tema yang Anda pilih.
