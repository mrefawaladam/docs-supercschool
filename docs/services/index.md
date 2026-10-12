# Layanan / Services Monorepo

Setiap direktori dalam repositori ini bertindak sebagai service mandiri dengan tanggung jawab terisolasi:

- [Laravel Backend (`niceweb-pembayaran`)](/services/niceweb-pembayaran) — Port 8000
- [Go Backend (`superapp-go`)](/services/superapp-go) — Port 8080
- [Next.js Web Portal (`superapp-frontend`)](/services/superapp-frontend) — Port 3000
- [Playwright E2E Tests (`superapp-e2e`)](/services/superapp-e2e) — Automation Test Suite
