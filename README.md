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
```bash
npm start
```

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
- **Universitas**: Universitas Pamulang Kota s

---

## 📝 Catatan
Proyek ini dibuat untuk keperluan akademik dan pembelajaran. Data monitoring bersifat simulasi / lokal.

---

## 📸 Screenshot (Opsional)

<img width="1342" height="634" alt="Screenshot awal masuk web" src="https://github.com/user-attachments/assets/589a9fe4-51ec-4cea-a900-b47bd1766c7d" />

---
