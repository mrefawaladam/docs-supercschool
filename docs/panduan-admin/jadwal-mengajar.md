# Jadwal Mengajar

Menu **Jadwal Mengajar** mengatur alokasi jadwal pelajaran mingguan per kelas yang memetakan guru pengampu, jam mengajar, dan mata pelajaran secara terintegrasi.

---

## Tampilan Jadwal Mengajar

![Jadwal Mengajar](/screenshots/jadwal-mengajar.png)

---

## 1. Alur Menambah Slot Jadwal Baru

```mermaid
flowchart LR
    A["1. Klik '+ Tambah Jadwal'"] --> B["2. Pilih Hari & Jam"]
    B --> C["3. Pilih Rombel Kelas"]
    C --> D["4. Pilih Mapel & Guru"]
    D --> E["5. Klik 'Simpan'"]
```

### Langkah-langkah:
1. Klik tombol **`+ Tambah Jadwal`** berwarna ungu di pojok kanan atas.
2. Lengkapi formulir alokasi:
   - **Hari**: Pilih hari (Senin, Selasa, Rabu, Kamis, Jumat, atau Sabtu).
   - **Jam Mulai & Selesai**: Tentukan jam pelajaran (misal: `07:30 - 09:00`).
   - **Kelas**: Pilih rombel target (contoh: *9 - AL FUQON*).
   - **Mata Pelajaran**: Pilih mata pelajaran (contoh: *Pendidikan Pancasila dan Kewarganegaraan (PPKn)*).
   - **Guru Pengajar**: Pilih nama guru yang ditugaskan (contoh: *Budi Santoso, S.Pd*).
3. Klik tombol **`Simpan Jadwal`**.

---

## 2. Filter & Tampilan Jadwal

- Gunakan tombol **Filter** untuk melihat jadwal khusus satu guru tertentu, atau khusus satu rombel kelas.
- Jadwal yang telah disimpan otomatis muncul pada portal login guru yang bersangkutan dan kalender belajar siswa di kelas tersebut.
