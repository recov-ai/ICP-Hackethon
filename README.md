# 🧠 Metalog - Platform Kesehatan Mental Berbasis Blockchain

Metalog adalah platform kesehatan mental yang mengutamakan keamanan dan anonimitas dengan teknologi blockchain, dibangun menggunakan **Internet Computer Protocol (ICP)**. Aplikasi ini menyediakan layanan konsultasi psikolog, asisten AI, serta komunitas kesehatan mental dalam ekosistem yang terdesentralisasi, memastikan pengalaman yang aman dan terpercaya bagi pengguna.

---

## 🚀 Fitur Utama
•⁠  ⁠*🩺 Konsultasi Profesional* – Sesi privat dengan psikolog bersertifikat, memberikan kenyamanan dan anonimitas bagi pengguna.
•⁠  ⁠*🤖 AI Mental Health Assistant* – Chatbot AI yang memberikan saran berbasis kecerdasan buatan untuk kesehatan mental serta merangkum hasil konsultasi dengan psikolog.
•⁠  ⁠*🔒 Keamanan & Privasi Terjamin* – Data pengguna dilindungi dengan teknologi blockchain dan enkripsi berbasis ICP, memastikan informasi tetap aman.
•⁠  ⁠*💰 Pembayaran dengan ICP Token* – Sistem pembayaran menggunakan token ICP untuk transaksi yang cepat, efisien, dan transparan.
•⁠  ⁠*💬 Komunitas Pendukung* – Forum interaktif bagi pengguna untuk berbagi pengalaman, saling mendukung, dan berdiskusi dalam lingkungan yang anonim.


---

## 🔧 **Instalasi & Deployment**
Aplikasi ini menggunakan **dfx (Dfinity SDK), Node.js, dan Vite**.

### **1️⃣ Install Dependencies**
```sh
# Install Dfinity SDK (dfx)
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

# Cek versi dfx
dfx --version

# Clone repo & install dependencies
git clone https://github.com/your-repo/metalog.git
cd metalog
npm install
```

---

### **2️⃣ Konfigurasi Environment**
Pastikan file .env sudah dikonfigurasi di metalog_frontend/.env:
```sh
VITE_BACKEND_CANISTER_ID=<CANISTER_ID_METALOG_BACKEND>
VITE_FRONTEND_CANISTER_ID=<CANISTER_ID_METALOG_FRONTEND>
VITE_AUTH_PROVIDER=https://identity.ic0.app
```
🔹 Ganti **<CANISTER_ID_METALOG_BACKEND>** dan **<CANISTER_ID_METALOG_FRONTEND>** dengan canister ID setelah dfx deploy.

---

### **3️⃣ Jalankan di Jaringan Lokal**
```sh
# Jalankan ICP di lokal
dfx start --background

# Hapus build lama
rm -rf .dfx node_modules .vite

# Deploy backend & frontend ke lokal
dfx deploy --network local

# Jalankan frontend di mode development
npm run dev
```

🔗 Akses aplikasi:
- 👉 Frontend: http://localhost:5173/?canisterId=<CANISTER_ID_METALOG_FRONTEND>
- 👉 Backend Candid UI: http://127.0.0.1:4943/?canisterId=<CANISTER_ID_METALOG_BACKEND>

### **4️⃣ Deploy ke Mainnet ICP**
Untuk deploy ke jaringan utama ICP:
```sh
dfx deploy --network ic
```
🔹 Setelah selesai, gunakan canister ID baru untuk .env sebelum menjalankan ulang aplikasi.

---

## **💡 Integrasi ICP di Metalog**

Metalog menggunakan Internet Computer Protocol (ICP) untuk mendukung keamanan, privasi, dan skalabilitas aplikasi. Berikut adalah beberapa aspek utama integrasi ICP di Metalog:

**✅ 1. Identity & Authentication**

Pengguna dapat login menggunakan Internet Identity (II) dari identity.ic0.app.
Principal ID digunakan sebagai identitas unik setiap pengguna, memastikan keamanan & desentralisasi tanpa ketergantungan pada email atau kata sandi.

**✅ 2. Smart Contract (Canister) untuk Backend**

Metalog_backend berfungsi sebagai smart contract (canister) di blockchain ICP.
Semua data pengguna, transaksi, dan logika bisnis disimpan di dalam canister backend.
Tidak ada server terpusat, semua data dikelola langsung dalam blockchain ICP, memastikan keamanan data yang lebih baik.

**✅ 3. Keamanan & Desentralisasi**

Tidak ada server terpusat → seluruh data pengguna disimpan dalam decentralized canisters.
Privasi lebih terjaga → hanya pengguna yang memiliki akses penuh ke data mereka sendiri.
Tidak ada perusahaan pihak ketiga yang dapat mengakses atau mengontrol data pengguna.
Dukungan ICP Stable Memory untuk memastikan data tetap persisten dan aman.

**✅ 4. Pembayaran dengan ICP Token**

Pembayaran sesi konsultasi dilakukan dengan ICP Token yang terintegrasi langsung dalam Metalog.
ICP Wallet dapat digunakan untuk transaksi yang lebih mudah dan cepat.
Tidak memerlukan kartu kredit, semua transaksi dilakukan melalui blockchain ICP, memastikan transparansi dan kecepatan pembayaran.

---

## **🛠 Teknologi yang Digunakan**
Metalog dibangun dengan menggunakan teknologi Web3 dan ICP untuk menciptakan aplikasi yang cepat, aman, dan efisien.

**Backend & Blockchain:**

- Motoko → Bahasa pemrograman untuk smart contract di ICP.

- ICP Canister → Digunakan sebagai backend desentralisasi.

- DFX SDK → Untuk pengelolaan dan deployment canister.

- Candid UI → Untuk pengujian fungsi canister backend.

**Frontend & UI:**

- React.js + Vite → Untuk membangun antarmuka yang cepat dan responsif.

- TailwindCSS / SCSS → Framework styling untuk tampilan modern.

- React Router → Untuk navigasi antar halaman.

- SweetAlert2 → Untuk menampilkan alert dalam aplikasi.

**Autentikasi & Keamanan:**
- Internet Identity (II) → Untuk login aman menggunakan Web3 Identity.

- @dfinity/auth-client → Library untuk autentikasi pengguna.

- ICP Principal ID → Digunakan sebagai identitas unik pengguna.

**Penyimpanan & Database:**

- Stable Memory (ICP) → Untuk menyimpan data di blockchain ICP.

- ICP Web3 Storage → Penyimpanan file dan transaksi di blockchain.

**Pembayaran & Wallet Web3:**

- ICP Tokens → Digunakan untuk transaksi dalam platform Metalog.

- Plug Wallet → Wallet Web3 yang kompatibel dengan ICP.

---

## 📂 **Struktur Folder**
```bash
metalog/
│── src/
│   ├── metalog_backend/    # Smart contract (Motoko)
│   ├── metalog_frontend/   # Frontend (React + Vite)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── utils/
│   │   │   ├── context/
│   │   │   ├── scss/
│   │   │   ├── App.jsx
│   │   │   ├── main.jsx
│   │   ├── .env
│   ├── declarations/       # Auto-generated canister bindings
│── .dfx/                   # DFX build cache
│── package.json
│── dfx.json                # ICP Canister Configuration
│── vite.config.js          # V

```

## 📜 **Lisensi - MIT License**
MIT License

Copyright (c) 2025 Metalog
