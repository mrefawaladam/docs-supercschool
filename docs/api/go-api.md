# Katalog API Go v2

Backend Go menyediakan endpoint v2 berkinerja tinggi untuk operasional ujian CBT dan pengiriman pesan.

---

## Endpoint Kunci

| Method | Endpoint | Deskripsi | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v2/cbt/exams` | Mengambil daftar ujian aktif | Bearer Token |
| `POST` | `/api/v2/cbt/exams/:id/start` | Memulai sesi ujian siswa | Bearer Token |
| `POST` | `/api/v2/cbt/exams/:id/answers` | Menyimpan jawaban soal ujian | Bearer Token |
| `POST` | `/api/v2/cbt/exams/:id/finish` | Mengakhiri & submit sesi ujian | Bearer Token |
| `POST` | `/api/v2/notifications/send` | Mengirim notifikasi / push notification | Internal API Key |

::: tip Swagger UI
Swagger lengkap untuk Go API dapat diakses melalui `http://localhost:8080/swagger/index.html` saat service Go berjalan.
:::
