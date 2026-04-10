# 🧪 Tabel Periodik 3D Interaktif

Sebuah visualisasi Tabel Periodik Unsur Kimia 3D interaktif berbasis web. Proyek ini menampilkan 118 unsur kimia lengkap dengan animasi transisi yang mulus ke dalam empat bentuk tata letak yang berbeda.

## ✨ Fitur Utama

* **118 Unsur Lengkap:** Menampilkan seluruh unsur kimia dari Hidrogen (H) hingga Oganeson (Og).
* **Kode Warna Kategori:** Setiap blok unsur diberi warna spesifik berdasarkan sifat kimianya (seperti Logam Alkali, Gas Mulia, Lantanida, dll.) agar mudah dibedakan sesuai legenda.
* **4 Mode Tampilan 3D:**
  * **TABLE:** Tampilan tabel periodik standar (mendatar).
  * **SPHERE:** Elemen membentuk bola dunia 3D.
  * **HELIX:** Elemen melingkar menyerupai struktur DNA.
  * **GRID:** Elemen tersusun dalam format kisi/kubus 3D.
* **Kontrol Interaktif:** Pengguna dapat memutar sudut pandang (drag mouse) dan melakukan zoom in/out (scroll mouse) untuk melihat elemen lebih dekat berkat kontrol *trackball*.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web dasar dan library 3D:
* **HTML5 & CSS3:** Untuk struktur halaman dan styling elemen (efek bayangan/neon).
* **JavaScript (ES6):** Mengatur data array unsur dan logika interaksi.
* **[Three.js](https://threejs.org/):** Library 3D JavaScript utama (menggunakan `CSS3DRenderer` untuk merender elemen DOM HTML ke dalam ruang 3D).
* **[Tween.js](https://github.com/tweenjs/tween.js):** Digunakan untuk menciptakan animasi transisi yang mulus (*smooth easing*) saat perpindahan antar bentuk.

## 📂 Struktur File

* `index.html` - Struktur utama halaman dan tautan ke library eksternal (CDN).
* `style.css` - Tata letak visual, warna latar belakang, tombol menu, dan efek *hover* pada kartu elemen.
* `script.js` - Menyimpan database 118 unsur (Simbol, Nama, Massa, Posisi), pengaturan kamera Three.js, dan fungsi animasi transformasi bentuk.

## 🚀 Cara Menjalankan Proyek

Proyek ini sepenuhnya bersifat *client-side* (dijalankan di browser) dan tidak memerlukan instal
