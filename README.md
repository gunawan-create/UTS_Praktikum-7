## LAPORAN PRAKTIKUM 7

## Tujuan Praktikum
Tujuan dari praktikum ini adalah untuk menerapkan konsep dasar HTML, CSS, dan JavaScript dalam membangun sebuah website interaktif,
dengan studi kasus pembuatan sistem Toko Buku Online yang memiliki beberapa fitur seperti login, katalog buku, pemesanan, 
dan pelacakan pengiriman.

## 2. Dasar Teori
Dalam pembuatan website ini digunakan tiga komponen utama pemrograman web, yaitu:
### 1) HTML (HyperText Markup Language)
Digunakan untuk membuat struktur dasar halaman web seperti form, tabel, dan navigasi.

### 2) CSS (Cascading Style Sheets)
Digunakan untuk mengatur tampilan, warna, font, dan layout agar website lebih menarik serta responsif.

### 3)JavaScript
Digunakan untuk menambahkan interaktivitas dan logika, seperti validasi login, penambahan data dinamis, dan simulasi pemesanan.

### 4)Konsep Data Client-Side
Semua data pengguna, katalog buku, dan tracking disimpan sementara pada file JavaScript (data.js) dan ditampilkan secara dinamis ke halaman web.

## Alat dan Bahan
Adapun alat dan bahan yang digunakan dalam praktikum ini, yaitu:
### 1	Visual Studio Code	
Text editor untuk coding

### 2	Google Chrome	Browser 
untuk testing web

### 3	HTML, CSS, JavaScript	
Bahasa pemrograman web

### 4	Folder Project UTS	
Berisi seluruh file web

### 5	Gambar dan Logo
Untuk tampilan antarmuka web

## Struktur Folder dan File

Struktur proyek Toko Buku Online terdiri dari beberapa folder dan file berikut:

<img width="441" height="655" alt="Screenshot 2025-11-09 150640" src="https://github.com/user-attachments/assets/6a935dd5-49d1-49b7-b20c-c9dbd6786bdf" />

Penjelasan singkat:
### - login.html
→ Halaman login utama (berisi tab Login, Daftar, dan Lupa Password).
### - dashboard.html 
→ Halaman utama setelah login dengan navigasi ke seluruh menu.
### - stok.html 
→ Menampilkan daftar katalog buku dan fitur tambah buku baru.
### - checkout.html 
→ Simulasi proses pemesanan dan perhitungan total harga.
### - tracking.html 
→ Melacak pengiriman berdasarkan nomor DO.
### - data.js 
→ Menyimpan data pengguna, katalog buku, dan tracking pengiriman.
### - style.css
→ Mengatur desain dan tampilan seluruh halaman web.

## Langkah-Langkah Pembuatan dan Penjelasan Tiap Halaman
## A. Halaman Login (login.html)
Halaman ini merupakan halaman utama atau index dari website Toko Buku Online.
Halaman login memiliki tiga tab utama: Login, Daftar, dan Lupa Password.

<img width="1648" height="8728" alt="code login" src="https://github.com/user-attachments/assets/d2236500-9bb9-4571-b48f-61c42ed500c8" />

## Langkah Pembuatan:
### - Membuat struktur dasar HTML dengan tag <header>, <div>, dan <form>.
### - Menambahkan logo toko buku di bagian atas agar identitas situs terlihat jelas.
### - Membuat tiga tab navigasi menggunakan JavaScript yang dapat berpindah antar form:
### a. Tab Login → berisi input email dan password.
### b. Tab Daftar → berisi input nama lengkap, email, dan password untuk registrasi.
### c. Tab Lupa Password → berisi input email untuk simulasi reset password.
### - Menambahkan CSS untuk mempercantik tampilan, terutama gaya warna hijau khas toko buku.

## Menambahkan fungsi JavaScript untuk:
### - Menangani aksi klik tiap tab.
### - Menampilkan alert “Login berhasil!” dan mengarahkan ke dashboard.html.
### - Simulasi daftar dan lupa password.

## Tujuan Halaman:
Sebagai pintu masuk sistem untuk mengatur hak akses pengguna sebelum dapat mengakses menu lain.

## B. Halaman Dashboard (dashboard.html)
Setelah pengguna berhasil login, sistem akan menampilkan halaman Dashboard.
Dashboard berfungsi sebagai pusat navigasi utama ke seluruh fitur website.

<img width="1756" height="7284" alt="code dashboard" src="https://github.com/user-attachments/assets/7ab7a5e5-f3c8-4814-a617-d1bcb531213b" />

## Langkah Pembuatan:
### - Membuat elemen header dengan greeting otomatis (pagi, siang, sore, malam) berdasarkan waktu real.
### - Membuat menu utama dalam bentuk grid yang berisi empat pilihan:
### a. Informasi Stok / Katalog Buku
### b. Tracking Pengiriman
### c. Laporan Pemesanan
### d. History Transaksi
### - Menambahkan tombol Logout di bagian bawah halaman.
### - Menghubungkan setiap menu ke file HTML masing-masing dengan tag <a href="">.
### - Menambahkan script main.js untuk logika greeting dan fungsi logout.

## Tujuan Halaman:
Sebagai pusat kontrol yang mengarahkan pengguna ke fitur-fitur utama website.

## C. Halaman Informasi Stok / Katalog Buku (stok.html)
Halaman ini menampilkan daftar lengkap buku yang dijual di toko online.
Semua data diambil dari file data.js dan dimuat secara dinamis ke dalam tabel menggunakan JavaScript.

<img width="1748" height="4130" alt="code stok" src="https://github.com/user-attachments/assets/64485633-a119-4aea-83ab-1932018d11ba" />

## Langkah Pembuatan:
### a. Membuat tabel dengan kolom:
### b. Kode Buku
### c. Nama Buku
### d. Jenis Buku
### e. Edisi
### f. Stok
### g. Harga
### h. Gambar Cover
### - Menambahkan script untuk memanggil data dari array dataKatalogBuku pada data.js.
### - Menggunakan perulangan forEach() untuk menampilkan data ke baris tabel (<tr>).
### - Menambahkan form Tambah Buku Baru di bawah tabel:
# Input kode, nama, jenis, edisi, stok, dan harga.
# Tombol Tambah Buku untuk menambahkan data ke array dan memperbarui tampilan tabel.
### - Menambahkan tombol Kembali ke Dashboard agar pengguna mudah berpindah halaman.

## Tujuan Halaman:
Sebagai tempat melihat dan mengelola data stok buku secara langsung.

