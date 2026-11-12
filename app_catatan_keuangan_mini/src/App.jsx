// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import formatRupiah from "./formatRupiah";
import Kartu from "./Kartu";
import RingkasanSaldo from "./RingkasanSaldo";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";

const KUNCI_STORAGE = "catatan-keuangan-mini";

function App() {
  // 1. State utama: coba ambil dari localStorage (hanya dijalankan sekali), jika kosong pakai array kosong
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    try {
      const dataTersimpan = localStorage.getItem(KUNCI_STORAGE);
      return dataTersimpan ? JSON.parse(dataTersimpan) : [];
    } catch {
      return []; // isi localStorage rusak: mulai dari kosong
    }
  });

  // 2. Efek: sinkronkan state ke luar React
  // Efek A: simpan ke localStorage setiap kali daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem(KUNCI_STORAGE, JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // 3. Nilai turunan: dihitung dari state, tidak disimpan sebagai state baru
  const pemasukan = daftarTransaksi
    .filter((t) => t.jenis === "Pemasukan")
    .reduce((total, t) => total + t.nominal, 0);
  const pengeluaran = daftarTransaksi
    .filter((t) => t.jenis === "Pengeluaran")
    .reduce((total, t) => total + t.nominal, 0);
  const saldo = pemasukan - pengeluaran;

  // Efek B: perbarui judul tab peramban setiap saldo berubah
  useEffect(() => {
    document.title = `${formatRupiah(saldo)} · Catatan Keuangan`;
  }, [saldo]);

  // 4. Menambah: array BARU berisi transaksi baru + transaksi lama
  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      tanggal: new Date().toISOString(),
      ...dataBaru,
    };
    setDaftarTransaksi([transaksiBaru, ...daftarTransaksi]);
  };

  // 5. Menghapus: ambil semua transaksi KECUALI yang id-nya sama
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  return (
    <div className="wadah">
      <header className="kepala">
        <p className="label">Buku Kas Pribadi</p>
        <h1 className="judul">Catatan Keuangan</h1>
      </header>

      <RingkasanSaldo
        saldo={saldo}
        pemasukan={pemasukan}
        pengeluaran={pengeluaran}
      />

      <Kartu judul="Transaksi Baru">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Riwayat">
        {/* Conditional rendering dengan ternary: pesan khusus jika belum ada transaksi */}
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">
            Belum ada transaksi.
            <br />
            Catat pemasukan atau pengeluaran pertamamu di atas.
          </p>
        ) : (
          <>
            <p className="jumlah">{daftarTransaksi.length} catatan</p>
            <ul className="daftar">
              {daftarTransaksi.map((transaksi) => (
                <ItemTransaksi
                  key={transaksi.id}
                  transaksi={transaksi}
                  onHapus={hapusTransaksi}
                />
              ))}
            </ul>
          </>
        )}
      </Kartu>
    </div>
  );
}

export default App;
