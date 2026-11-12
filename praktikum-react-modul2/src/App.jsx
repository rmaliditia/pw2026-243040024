// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

function App() {
  // 1. Deklarasi state UTAMA harus di urutan paling atas
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }
    return [
      { id: 1, judul: "Install Node.js dan Vite", selesai: true },
      { id: 2, judul: "Pelajari useState", selesai: false },
    ];
  });

  // 2. Deklarasi state filter untuk Tugas 1
  const [filter, setFilter] = useState("semua");

  // 3. Logika pemfilteran berdasarkan state 'filter' dan 'daftarTugas'
  const tugasTampil = daftarTugas.filter((tugas) => {
    if (filter === "selesai") return tugas.selesai;
    if (filter === "belum_selesai") return !tugas.selesai;
    return true; // 'semua'
  });

  // 4. Logika hapus semua tugas yang sudah selesai (Tugas 2)
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // Efek A: dijalankan SEKALI saat App pertama kali tampil
  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  // Efek B: perbarui judul tab peramban setiap daftarTugas berubah
  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  // Efek C: simpan daftarTugas ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  // Menambah tugas: buat array BARU berisi tugas lama + tugas baru
  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // Mengubah status selesai: salin tugas yang dicentang, biarkan yang lain
  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  // Menghapus tugas: ambil semua tugas KECUALI yang id-nya sama
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // Nilai turunan untuk ringkasan
  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Filter & Aksi">
        <div className="baris">
          <button
            className={`tombol ${filter === "semua" ? "aktif" : "pasif"}`}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>
          <button
            className={`tombol ${filter === "belum_selesai" ? "aktif" : "pasif"}`}
            onClick={() => setFilter("belum_selesai")}
          >
            Belum Selesai
          </button>
          <button
            className={`tombol ${filter === "selesai" ? "aktif" : "pasif"}`}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {/* Tugas 2: Conditional Rendering dengan && */}
        {daftarTugas.some((tugas) => tugas.selesai) && (
          <button
            className="tombol tombol-merah"
            onClick={hapusSemuaSelesai}
            style={{ marginTop: "10px" }}
          >
            Hapus Semua yang Selesai
          </button>
        )}
      </Kartu>

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Menggunakan tugasTampil agar daftar menyesuaikan tombol filter */}
        {tugasTampil.length === 0 ? (
          <p className="kosong">Tidak ada tugas di kategori ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTampil.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
