import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Buku Panduan Super Schools',
  description: 'Panduan Resmi Penggunaan Aplikasi Sekolah untuk Admin TU, Bendahara, Guru, Siswa, dan Pengurus Kantin',
  lang: 'id-ID',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
  ],

  vite: {
    optimizeDeps: {
      include: ['mermaid', 'debug']
    }
  },

  themeConfig: {
    siteTitle: 'Panduan Super Schools',
    logo: '/favicon.svg',

    // Pencarian lokal bahasa Indonesia
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Cari panduan fitur...',
                buttonAriaLabel: 'Cari panduan'
              },
              modal: {
                noResultsText: 'Tidak ditemukan panduan untuk',
                resetButtonTitle: 'Bersihkan pencarian',
                footer: {
                  selectText: 'pilih',
                  navigateText: 'navigasi',
                  closeText: 'tutup'
                }
              }
            }
          }
        }
      }
    },

    // Header Navigasi dibuat minimalis (tidak ada menu peran yang menumpuk di header)
    nav: [],

    // Seluruh menu navigasi dipindahkan ke Sidebar kiri dengan Font Awesome / Favicon icons
    sidebar: [
      {
        text: '<i class="fa-solid fa-database"></i> Data Master (Admin & TU)',
        collapsed: false,
        items: [
          { text: 'Data Siswa', link: '/panduan-admin/data-siswa' },
          { text: 'Pindah Kelas', link: '/panduan-admin/pindah-kelas' },
          { text: 'Data Guru', link: '/panduan-admin/data-guru' },
          { text: 'Kelas', link: '/panduan-admin/kelas' },
          { text: 'Mata Pelajaran', link: '/panduan-admin/mata-pelajaran' },
          { text: 'Tahun Ajaran', link: '/panduan-admin/tahun-ajaran' },
          { text: 'Hari Libur', link: '/panduan-admin/hari-libur' },
          { text: 'Jadwal Mengajar', link: '/panduan-admin/jadwal-mengajar' }
        ]
      },
      {
        text: '<i class="fa-solid fa-sliders"></i> Manajemen User & Settings',
        collapsed: false,
        items: [
          { text: 'Ringkasan Manajemen Sistem', link: '/panduan-sistem/' },
          { text: '1. Manajemen User (Daftar Pengguna)', link: '/panduan-sistem/manage-users' },
          { text: '2. Pengaturan Umum Sistem (Settings)', link: '/panduan-sistem/settings' }
        ]
      },
      {
        text: '<i class="fa-solid fa-wallet"></i> Bendahara & Kasir',
        collapsed: false,
        items: [
          { text: 'Ringkasan Manajemen Keuangan', link: '/panduan-keuangan/' },
          { text: '1. Menetapkan Tarif SPP & Tagihan', link: '/panduan-keuangan/setting-tagihan' },
          { text: '2. Pencatatan Pembayaran Kasir', link: '/panduan-keuangan/pembayaran-kasir' },
          { text: '3. Pembayaran Online (Virtual Account)', link: '/panduan-keuangan/pembayaran-online' },
          { text: '4. Tabungan Siswa & Dana Infaq', link: '/panduan-keuangan/tabungan-infaq' },
          { text: '5. Rekap Laporan & Tunggakan', link: '/panduan-keuangan/laporan-keuangan' }
        ]
      },
      {
        text: '<i class="fa-solid fa-chalkboard-user"></i> Guru & Wali Kelas',
        collapsed: false,
        items: [
          { text: 'Ringkasan Aktivitas Guru', link: '/panduan-guru/' },
          { text: '1. Pencatatan Presensi Harian Siswa', link: '/panduan-guru/presensi-siswa' },
          { text: '2. Pelaksanaan Ujian Online (CBT)', link: '/panduan-guru/ujian-cbt' },
          { text: '3. Unggah Materi & Tugas Siswa', link: '/panduan-guru/lms-materi' },
          { text: '4. Input Buku Nilai & Rapor', link: '/panduan-guru/rapor-nilai' },
          { text: '5. Dashboard Perwalian Wali Kelas', link: '/panduan-guru/dashboard-walikelas' }
        ]
      },
      {
        text: '<i class="fa-solid fa-graduation-cap"></i> Siswa & Orang Tua',
        collapsed: false,
        items: [
          { text: 'Selamat Datang di Portal Siswa', link: '/panduan-siswa/' },
          { text: '1. Panduan Login Pertama Kali', link: '/panduan-siswa/login-portal' },
          { text: '2. Cara Cek & Bayar Tagihan SPP', link: '/panduan-siswa/cek-bayar-spp' },
          { text: '3. Tata Cara Mengikuti Ujian CBT', link: '/panduan-siswa/mengikuti-ujian-cbt' },
          { text: '4. Saldo Kartu Pelajar & Riwayat Jajan', link: '/panduan-siswa/dompet-kartu-siswa' }
        ]
      },
      {
        text: '<i class="fa-solid fa-store"></i> Kantin & Koperasi',
        collapsed: false,
        items: [
          { text: 'Ringkasan Ekosistem Kantin', link: '/panduan-kantin/' },
          { text: '1. Kasir POS & Scan Kartu RFID', link: '/panduan-kantin/pos-kasir' },
          { text: '2. Manajemen Menu & Cetak Barcode', link: '/panduan-kantin/daftar-menu' },
          { text: '3. Batas Belanja Harian Siswa', link: '/panduan-kantin/limit-harian' },
          { text: '4. Tutup Buku & Settlement Supplier', link: '/panduan-kantin/tutup-buku' },
          { text: '5. Layanan Top-Up Saldo Siswa', link: '/panduan-kantin/topup-saldo' }
        ]
      },
      {
        text: '<i class="fa-solid fa-circle-question"></i> Bantuan & Pertanyaan Umum',
        collapsed: false,
        items: [
          { text: 'Kendala yang Sering Terjadi (FAQ)', link: '/faq/' }
        ]
      }
    ],

    footer: {
      message: 'Buku Panduan Resmi Operasional Aplikasi Super Schools.',
      copyright: 'Copyright © 2026 Tim Pengembang Super Schools'
    },

    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    },

    outline: {
      level: [2, 3],
      label: 'Daftar Pembahasan'
    }
  }
})
