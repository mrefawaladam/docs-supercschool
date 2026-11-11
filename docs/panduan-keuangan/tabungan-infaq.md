# Tabungan Siswa & Dana Infaq Sekolah

Aplikasi menyediakan modul khusus untuk mengelola Tabungan Siswa secara akurat, mulai dari loket teller kasir, setoran kolektif per rombel kelas, hingga pencatatan donasi kotak infaq sekolah secara transparan.

---

## 1. Loket Teller Tabungan Siswa (Setor & Tarik Cepat)

Halaman transaksi tabungan kasir dilengkapi dengan pemindai kartu pelajar RFID, input nominal instan, dan cetak buku tabungan fisik (*passbook*).

![Transaksi Teller Tabungan](/screenshots/tabungan-transaksi-teller.png)

### Alur Setor & Tarik Tabungan:
1. **Setor Tabungan (Deposit)**:
   - Tempelkan kartu siswa pada reader RFID atau cari nama/NISN siswa pada kolom pencarian.
   - Layar otomatis menampilkan saldo terkini dan profil siswa.
   - Masukkan nominal setoran tunai (tersedia tombol preset: Rp 5.000, Rp 10.000, Rp 50.000, Rp 100.000).
   - Klik **Simpan Transaksi** untuk mencetak struk kasir atau validasi cetak ke buku tabungan fisik.
2. **Tarik Tabungan (Withdrawal)**:
   - Pilih siswa pada pencarian loket kasir.
   - Masukkan nominal penarikan.
   - Sistem memiliki proteksi *insufficient balance*: penarikan otomatis ditolak jika nominal melebihi sisa saldo tabungan siswa.
   - Simpan transaksi dan cetak slip penarikan.

---

## 2. Setoran Massal / Kolektif Kelas (Bulk Savings Deposit)

Modul ini memudahkan pencatatan setoran tabungan rutin mingguan yang dikoordinasikan secara kolektif oleh bendahara kelas atau wali kelas.

![Setor Massal Tabungan](/screenshots/tabungan-bulk-deposit-admin.png)

### Keunggulan Fitur:
- **Pilihan Rombel Kelas**: Sistem menampilkan seluruh siswa aktif pada kelas yang dipilih.
- **Preset Nominal Cepat**: Mengisi nominal seragam secara serentak untuk seluruh siswa yang dicentang (misal Rp 10.000).
- **Penyesuaian Fleksibel**: Guru/Admin tetap dapat mengubah nominal untuk siswa tertentu yang menabung dengan jumlah berbeda.
- **Transaksi Database Atomik**: Seluruh transaksi diproses dalam satu batch transaksi database aman; jika terjadi gangguan koneksi, sistem otomatis melakukan rollback sehingga tidak terjadi selisih kas fisik vs digital.

---

## 3. Rekap Laporan Tabungan Per Kelas

![Rekap Tabungan Per Kelas](/screenshots/tabungan-laporan-kelas.png)

Admin dan bagian keuangan dapat memantau:
- Akumulasi total saldo simpanan per rombel kelas.
- Jumlah siswa aktif menabung dan rasio partisipasi kelas.
- Ekspor laporan rekap ke format Excel dan PDF siap cetak untuk laporan tahunan sekolah.

---

## 4. Tampilan Pengelolaan Infaq Sekolah

![Manajemen Infaq](/screenshots/infaq.png)

### Alur Penerimaan & Penyaluran Infaq:
1. **Penerimaan Infaq**:
   - Klik **`+ Catat Infaq Masuk`**.
   - Pilih program (Infaq Jumat Berkah, Donasi Renovasi Masjid, Santunan Yatim).
   - Masukkan nominal uang yang diterima, lalu klik simpan.
2. **Penyaluran Infaq**:
   - Klik **`- Penyaluran Dana Infaq`**.
   - Masukkan keperluan penyaluran dan lampirkan bukti nota/kuitansi pengeluaran.
   - Sistem mencatat saldo akhir dana infaq yang dapat dilaporkan secara transparan ke seluruh warga sekolah.
