# Referensi API

Seluruh komunikasi antar-layanan mengikuti konvensi RESTful API dengan format respon terstandar.

---

## Standar Struktur Response (JSON Envelope)

Semua endpoint mengembalikan struktur format standar berikut:

```json
{
  "success": true,
  "message": "Data berhasil diambil",
  "data": {
    "id": 1,
    "name": "SMK Ponorogo"
  },
  "meta": {
    "current_page": 1,
    "total_pages": 5,
    "total_records": 100
  }
}
```

---

## Katalog Endpoint

- [Katalog API Laravel (Core & Keuangan)](/api/laravel-api)
- [Katalog API Go v2 (CBT & High Throughput)](/api/go-api)
