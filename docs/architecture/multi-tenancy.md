# Arsitektur Multi-Tenancy

Sistem ini menerapkan pola **Multi-Tenant Database Isolation (Database-per-Tenant)** untuk menjamin privasi data antar sekolah, kepatuhan regulasi, dan performa query yang terisolasi.

---

## Pemisahan Database

```mermaid
flowchart LR
    subgraph Central["Central Layer"]
        CDB[("central_db")]
        Schools["Tabel 'schools'<br/>(id, name, db_name, db_host, status)"]
    end

    subgraph Tenants["Tenant Databases"]
        T1[("school_smk_ponorogo_db")]
        T2[("school_sma_surabaya_db")]
        TN[("school_n_db")]
    end

    CDB --- Schools
    Schools -->|Koneksi Dinamis Sekolah 1| T1
    Schools -->|Koneksi Dinamis Sekolah 2| T2
    Schools -->|Koneksi Dinamis Sekolah N| TN
```

---

## Alur Penentuan Tenant Saat Request Masuk

1. **Identifikasi Header / Subdomain**:
   Setiap request dari klien membawa identitas tenant via header:
   ```http
   X-School-ID: 1
   # atau via Bearer Token JWT payload
   ```
2. **Lookup Konfigurasi**:
   Backend membaca tabel `schools` di `central_db` (dengan cache Redis) untuk mengambil kredensial database sekolah tersebut.
3. **Koneksi Dinamis (Tenant Switcher)**:
   - Di **Laravel**: Middleware mengubah koneksi database default ke koneksi `tenant`.
   - Di **Go**: Repository/Service mengambil koneksi pool database yang telah di-cache untuk ID sekolah tersebut.
