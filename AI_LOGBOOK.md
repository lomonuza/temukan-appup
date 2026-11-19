# AI Logbook - TEMUKAN

Dokumen ini mencatat interaksi tim kami dengan Kecerdasan Artifisial (AI) selama pengembangan proyek, sesuai dengan Pedoman Teknis Latika 2026.

## Tahap 1: Eksplorasi Ide & Perancangan Solusi
- **Prompt ke AI:** "Saya ingin membuat website pelaporan barang hilang untuk sekolah. Fitur apa saja yang harus ada agar bermanfaat?"
- **Saran AI:** Website butuh fitur unggah foto, deskripsi barang, dan halaman daftar barang. Disarankan juga ada fitur pencarian (search) agar pengguna mudah mencari.
- **Validasi & Modifikasi Mandiri:** Kami setuju dengan saran AI. Kami memutuskan untuk merancang UI berwarna biru-putih agar terlihat ramah untuk siswa dan guru.

## Tahap 2: Penyusunan Kerangka Kode (Scaffolding)
- **Prompt ke AI:** "Buatkan struktur HTML dasar untuk form input barang dan layout grid untuk daftar barangnya."
- **Saran AI:** Memberikan struktur `<form>` dengan `<input>` dan `<div>` untuk menampilkan daftar, serta CSS Grid untuk membaginya menjadi 2 kolom (kiri form, kanan daftar).
- **Validasi & Modifikasi Mandiri:** Kami memodifikasi CSS dari AI agar responsif. Jika dibuka di HP, layout 2 kolom otomatis berubah menjadi 1 kolom (atas-bawah) menggunakan `@media query`.

## Tahap 3: Pemecahan Masalah & Penanganan Galat (Debugging)
- **Prompt ke AI:** "Kenapa data barang yang saya input hilang setelah halaman di-refresh?"
- **Saran AI:** Karena awalnya kami menggunakan `localStorage`, data hanya bertahan di satu browser. AI menyarankan agar kami menggunakan database.
- **Validasi & Modifikasi Mandiri:** Kami memutuskan untuk meng-upgrade proyek ini menggunakan **Firebase Firestore** agar data tersimpan di *cloud* dan bisa diakses lintas perangkat (HP dan Laptop).

## Tahap 4: Refleksi & Penjelasan Kode
- **Prompt ke AI:** "Jelaskan cara kerja fungsi `onSnapshot` dari Firebase Firestore."
- **Saran AI:** `onSnapshot` adalah *event listener* real-time. Setiap kali ada data baru masuk ke database, fungsi ini akan otomatis memperbarui tampilan HTML tanpa perlu me-refresh browser.
- **Validasi & Modifikasi Mandiri:** Kami berhasil menerapkannya. Saat kami tes, laporan yang dikirim dari laptop langsung muncul di layar HP dalam hitungan detik. Kami juga menambahkan fungsi `error handling` (try-catch) agar jika internet mati, aplikasi tidak *crash*.

## Tahap 5: Migrasi ke Firebase (Authentication & Database)
- **Prompt ke AI:** "Bagaimana cara mengubah sistem login manual menjadi Firebase Authentication dan menyimpan data barang ke Firestore?"
- **Saran AI:** AI memberikan panduan langkah demi langkah: membuat proyek Firebase, mengaktifkan Email/Password Auth, membuat database Firestore, dan memberikan kode `firebaseConfig`.
- **Validasi & Modifikasi Mandiri:** Saat proses deploy di Vercel, kami sempat mengalami error layar putih (blank) karena masalah *API Key*. Kami mempelajari pesan error di *Console Browser*, menyadari ada *cache* browser dan salah penempatan posisi `<script>`, lalu memperbaikinya. Kini aplikasi berjalan lancar di Vercel.

## Kesimpulan
AI sangat membantu kami sebagai pemula dalam memahami alur logika pemrograman (terutama integrasi Firebase). Namun, AI tidak bisa menggantikan proses *troubleshooting*. Kami tetap harus membaca pesan error di browser dan memvalidasi setiap kode yang dihasilkan AI agar aplikasi benar-benar berfungsi.
