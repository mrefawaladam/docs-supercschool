# Katalog API Laravel

Backend Laravel menyediakan endpoint untuk pengelolaan administrasi sekolah, pembayaran tagihan, dan sinkronisasi callback bank.

---

## Endpoint Kunci

| Method | Endpoint | Deskripsi | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/login` | Login user & generate token | Public |
| `GET` | `/api/v1/schools` | Mengambil data konfigurasi tenant | Bearer Token |
| `POST` | `/api/v1/payments/create-va` | Membuat Virtual Account pembayaran | Bearer Token |
| `POST` | `/api/v1/payments/callback/bni` | Webhook notifikasi pembayaran bank | Public (Signature) |
| `GET` | `/api/v1/wallet/balance` | Cek saldo dompet siswa | Bearer Token |
