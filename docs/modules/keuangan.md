# Modul Keuangan & Pembayaran SPP

Modul keuangan dikelola secara terpusat melalui service `niceweb-pembayaran` untuk mengelola tagihan siswa, auto-debit, serta integrasi payment gateway.

---

## Integrasi Payment Gateway

Sistem mendukung multiple payment provider:
- **BNI Virtual Account & Autodebit**
- **BRI Virtual Account**
- **BCA Virtual Account**

---

## Alur Pembayaran & Webhook Callback

```mermaid
sequenceDiagram
    autonumber
    actor Siswa as Siswa / Orang Tua
    participant Portal as superapp-frontend
    participant Server as niceweb-pembayaran
    participant Bank as Bank Gateway (BNI/BRI)

    Siswa->>Portal: Pilih Tagihan & Metode Bayar
    Portal->>Server: Request Create VA / Payment
    Server->>Bank: Generate Virtual Account (API)
    Bank-->>Server: VA Number & Expiry
    Server-->>Portal: Tampilkan Nomor VA
    Portal-->>Siswa: Siswa melakukan transfer bank
    Bank->>Server: Callback Webhook Pembayaran Berhasil
    Server->>Server: Validasi Signature & Update Status Lunas
    Server-->>Bank: Respon 200 OK Callback
```
