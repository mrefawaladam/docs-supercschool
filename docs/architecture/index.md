# Ringkasan Arsitektur Sistem

Ekosistem **Schools Super Workspace** dirancang menggunakan pendekatan hybrid monorepo yang memadukan service Laravel, Go, dan Next.js dengan pemisahan database per tenant (*database-per-tenant isolation*).

---

## High-Level Diagram

```mermaid
graph TB
    subgraph Klien["Aktor Pengguna"]
        Siswa[" Siswa & Orang Tua"]
        Guru[" Guru & Wali Kelas"]
        Admin[" Admin Sekolah & TU"]
    end

    subgraph Frontend["Frontend Layer (Port 3000)"]
        NextJS["Next.js 15 Web Portal"]
    end

    subgraph API_Services["Backend Services"]
        Laravel["niceweb-pembayaran (Port 8000)<br/>- Central Tenant Auth<br/>- Payment Gateway (BNI, BRI)<br/>- Core Administration"]
        GoAPI["superapp-go (Port 8080)<br/>- High TPS Engine<br/>- CBT & LMS API<br/>- Mailing & Notifikasi"]
    end

    subgraph Storage["Database & Cache Layer"]
        CentralDB[("Central DB (MySQL)<br/>Daftar Tenant & Global Config")]
        ClientDB[("Client DB per Sekolah<br/>Siswa, Guru, Nilai, Transaksi")]
        RedisCache[("Redis Cache<br/>Session & Rate Limiting")]
    end

    Siswa --> NextJS
    Guru --> NextJS
    Admin --> NextJS

    NextJS -->|REST API Keuangan & Admin| Laravel
    NextJS -->|REST API CBT & LMS| GoAPI

    Laravel --> CentralDB
    Laravel --> ClientDB
    Laravel --> RedisCache

    GoAPI --> CentralDB
    GoAPI --> ClientDB
    GoAPI --> RedisCache
```

---

## Komponen Utama

### 1. `niceweb-pembayaran` (Laravel Backend)
- Menangani pendaftaran dan metadata sekolah di **Central DB**.
- Menangani transaksi pembayaran, auto-debit, webhook/callback bank (BNI/BRI).
- Mengelola permission, role, dan policy generator.

### 2. `superapp-go` (Go Backend API v2)
- Dirancang untuk menangani beban tinggi (*concurrency tinggi*) seperti ujian online serentak (CBT).
- Menghubungkan koneksi database client secara dinamis berdasarkan identifier sekolah di header/token request.

### 3. `superapp-frontend` (Next.js 15)
- Menyediakan UI responsif untuk dashboard admin sekolah, guru, dan portal siswa.
- Mengintegrasikan state auth dan hak akses (*role-based access control*).
