# TEMUKAN - Sistem Barang Hilang

## Judul & Deskripsi
**TEMUKAN** adalah aplikasi web berbasis *cloud* untuk melaporkan barang hilang dan menemukan barang yang ditemukan di lingkungan sekolah. Aplikasi ini memudahkan siswa, guru, dan staf sekolah dalam berbagi informasi secara *real-time* (langsung) tanpa perlu me-refresh halaman.

**Masalah yang diselesaikan:** Sulitnya melacak barang hilang di sekolah karena informasi hanya disebar dari mulut ke mulut atau grup chat yang cepat tenggelam.
**Target pengguna:** Siswa, Guru, dan Staf Sekolah.

## Fitur Utama
1. **Autentikasi Pengguna:** Sistem Daftar dan Login yang aman menggunakan Firebase Authentication.
2. **Lapor Barang:** Formulir untuk mengunggah data barang hilang (Nama, Deskripsi, Lokasi, dan Foto).
3. **Daftar Real-time:** Menampilkan daftar barang hilang secara otomatis dari database tanpa perlu refresh.
4. **Pencarian (Search):** Mencari barang berdasarkan kata kunci (nama atau deskripsi).
5. **Akses Lintas Perangkat:** Data tersimpan di server Google (Firebase), sehingga laporan dari laptop bisa langsung dilihat dari HP.
6. **Responsif:** Tampilan optimal saat dibuka di HP maupun PC.

## Teknologi yang Digunakan
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Backend & Database:** Google Firebase (Firestore & Authentication)
- **Hosting / Deployment:** Vercel
- **Icon:** FontAwesome

## Cara Menjalankan Secara Lokal
1. Clone repositori ini.
2. Buka folder proyek di VS Code.
3. Buka file `index.html` menggunakan ekstensi *Live Server*.
4. Pastikan Anda terhubung ke internet karena data diambil langsung dari Firebase.

## Tautan Publikasi (Live Demo)
- **Website:** [https://temukan-app.vercel.app](https://temukan-app.vercel.app)

## Tim Pengembang
1. **Jauzaa Putri Ardelica** (SMAN 1 Madiun) - *Frontend Developer, Firebase Integration & Deployment Engineer*
2. **Jet Imerovigli Singomudo** (SMAN 1 Madiun) - *UI/UX Designer, Firebase Database Architect & Quality Assurance (QA)*
