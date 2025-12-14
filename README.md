# Network Monitoring Dashboard

## 📌 Deskripsi Proyek
Network Monitoring Dashboard adalah aplikasi web monitoring yang digunakan untuk menganalisis status perangkat jaringan secara **real-time**. Aplikasi ini menampilkan informasi seperti status perangkat (online/offline), latency (ping), dan aktivitas jaringan melalui dashboard berbasis web.

Proyek ini dibuat sebagai **tugas kuliah / praktikum pengembangan web monitoring jaringan**.

---

## 🎯 Tujuan
- Memonitor status perangkat jaringan secara real-time
- Memvisualisasikan kondisi jaringan melalui dashboard web
- Menerapkan konsep WebSocket / Socket.IO
- Mengimplementasikan backend dan frontend terintegrasi

---

## ⚙️Cara Kerja Sistem
1. Server backend melakukan pengecekan status perangkat jaringan secara berkala (menggunakan simulasi atau metode ping).
2. Data status perangkat dan penggunaan bandwidth diperbarui secara otomatis.
3. Data yang telah diperbarui dikirim ke client melalui WebSocket agar dapat ditampilkan secara real-time.
4. Client (browser) menampilkan data monitoring dalam bentuk:
        - Tabel perangkat jaringan
        - Grafik penggunaan bandwidth
        - Area log dan alert
  5. Jika perangkat mengalami gangguan atau berstatus offline, sistem akan menampilkan alert pada halaman web.

---

## 🛠️ Teknologi yang Digunakan
- **Backend**: Node.js, Express
- **Realtime Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript
- **Runtime**: Node.js

---

## 📂 Struktur Folder
```
network-monitoring-dashboard/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── README.md
└── node_modules/
```

---

## ⚙️ Cara Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/network-monitoring-dashboard.git
```

### 2. Masuk ke Folder Project
```bash
cd network-monitoring-dashboard
```

### 3. Install Dependencies
```bash
npm install
```

---

## ▶️ Cara Menjalankan Aplikasi

### A. Akses dari Laptop (Server / Dashboard)
Jalankan perintah berikut di laptop:
```bash
npm start
```

Buka browser di **laptop** dan akses:
```
http://IP_Laptop/?dashboard=true
```

---

### B. Akses dari HP (Client) melalui WiFi Lokal
> **Syarat:** HP dan laptop harus terhubung ke **WiFi yang sama**.

1. Cek IP Address laptop:
   - **Windows:**
     ```bash
     ipconfig
     ```
   - Cari `IPv4 Address`, contoh:
     ```
     192.168.100.12
     ```

2. Buka browser di **HP**, lalu akses:
```
http://192.168.100.12:3000
```
(ganti IP sesuai IP laptop)

❌ Jangan gunakan `localhost` di HP karena hanya berlaku untuk laptop/server.


Buka browser dan akses:
```
http://localhost:3000
```

---

## 📊 Fitur Utama
- Monitoring status perangkat jaringan
- Update data secara real‑time
- Dashboard sederhana dan informatif
- UI responsif

---

## 📈 Diagram Arsitektur Sistem
Diagram berikut menggambarkan alur kerja aplikasi Network Monitoring Dashboard:

```text
+------------+        +-------------------+        +-------------------+
|  Perangkat | -----> |   Server Node.js  | <----> |   Web Dashboard   |
|  Jaringan  |  Ping  | (Express + Socket)|  Data  | (HTML, CSS, JS)  |
+------------+        +-------------------+        +-------------------+
        |                        |
        |<------ Status --------|
```

**Penjelasan diagram:**
- Perangkat jaringan mengirimkan status (online/offline dan latency)
- Server Node.js memproses data dan mengirimkannya secara real‑time menggunakan Socket.IO
- Web Dashboard menampilkan hasil monitoring secara langsung

---


## 👤 Identitas Pembuat
- **Nama** : Yuda Wahyu Ramadhan
- **NIM**  : 241091900368
- **Prodi**: Sistem Komputer
- **Universitas**: Universitas Pamulang Kota Serang

---

## 📝 Catatan
Web Monitoring merupakan solusi efektif untuk memantau perangkat jaringan secara real-time. Dengan memanfaatkan teknologi web dan komunikasi real-time, pengguna dapat memperoleh informasi kondisi jaringan secara cepat, akurat, dan mudah diakses melalui browser.
---

## 📸 Screenshot (Opsional)
1. Dashboard Saat Petama Dibuka
<img width="1342" height="634" alt="Screenshot awal masuk web" src="https://github.com/user-attachments/assets/589a9fe4-51ec-4cea-a900-b47bd1766c7d" />

2. Device Ketika Connect Ke Dalam Web
<img width="1344" height="627" alt="Screenshot jika device nyambung" src="https://github.com/user-attachments/assets/e43d0c24-7b17-4bbb-9fef-3134b9fc69c4" />

3. Device Ketika Disconnect Ke Dalam Web dan Wifi
<img width="1345" height="640" alt="Screenshot jika device tidak nyambung wifi" src="https://github.com/user-attachments/assets/8897bb70-fc19-4aa9-b6de-93803c24b1aa" />
---
