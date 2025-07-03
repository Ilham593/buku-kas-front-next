# Buku Kas Digital - Versi Next.js

Ini adalah frontend untuk aplikasi **Buku Kas Digital** yang dibangun ulang menggunakan **Next.js** dengan **App Router**. Proyek ini bertujuan untuk menciptakan aplikasi yang lebih cepat, efisien, dan sesuai dengan standar industri modern untuk aplikasi web berbasis React.

Aplikasi ini memanfaatkan **React Server Components** untuk pengambilan data di sisi server dan **Server Actions** untuk menangani mutasi data, sehingga mengurangi jumlah JavaScript yang dikirim ke browser dan meningkatkan performa.

## Fitur Utama

  - ✅ Menampilkan semua daftar transaksi yang diambil datanya di sisi server.
  - ✅ Menambahkan transaksi baru menggunakan Server Actions.
  - ✅ Menghapus transaksi dengan pembaruan UI otomatis melalui `revalidatePath`.
  - ✅ Mengubah (Update) transaksi pada halaman dinamis (`/edit/[id]`).
  - ✅ Routing berbasis file dengan App Router.

## Teknologi yang Digunakan

  - **Next.js**: Framework React untuk aplikasi web produksi.
  - **React**: Library utama untuk membangun antarmuka pengguna.
  - **Tailwind CSS**: Framework CSS utility-first untuk styling.
  - **Server Actions**: Untuk menangani mutasi data (Create, Update, Delete) di sisi server.

-----

## Persiapan & Instalasi Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

**1. Clone Repository**

```bash
git clone https://github.com/nama-anda/buku-kas-nextjs.git
cd buku-kas-nextjs
```

**2. Install Dependensi**

```bash
npm install
```

**3. Buat File `.env.local`**
Buat sebuah file baru bernama `.env.local` di folder utama proyek. File ini tidak akan ter-upload ke Git. Isi dengan URL backend API Anda.

```
API_URL="https://URL-BACKEND-ANDA/api/transactions"
```

**4. Jalankan Server Development**

```bash
npm run dev
```

Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser Anda untuk melihat hasilnya.

### Skrip yang Tersedia

Dalam file `package.json`, Anda akan menemukan beberapa skrip:

  - `npm run dev`: Menjalankan aplikasi dalam mode development.
  - `npm run build`: Membuat *build* aplikasi untuk produksi.
  - `npm run start`: Menjalankan *build* produksi.
  - `npm run lint`: Menjalankan linter untuk memeriksa kualitas kode.

-----
