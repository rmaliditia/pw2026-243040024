// src/FormTransaksi.jsx
import { useState } from 'react';

const BATAS_KETERANGAN = 40;

function FormTransaksi({ onTambah }) {
  // State lokal: setiap input terkendali (value/checked dibaca dari state, onChange menulis ke state)
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');

  // Nilai turunan untuk validasi: tidak perlu state baru
  const terlaluPanjang = keterangan.length > BATAS_KETERANGAN;
  const nominalAngka = Number(nominal); // nilai input selalu teks, ubah dulu menjadi angka
  const nominalTidakValid = nominal !== '' && !(nominalAngka > 0);
  const tidakValid =
    keterangan.trim() === '' || nominal === '' || nominalTidakValid || terlaluPanjang;

  const tanganiKirim = (event) => {
    event.preventDefault(); // cegah halaman reload
    if (tidakValid) return;

    onTambah({
      keterangan: keterangan.trim(),
      nominal: nominalAngka,
      jenis,
    }); // "melapor" ke komponen induk (App)

    setKeterangan('');
    setNominal('');
  };

  return (
    <form onSubmit={tanganiKirim} noValidate>
      <div className="bidang">
        <label className="label" htmlFor="keterangan">
          Keterangan
        </label>
        <input
          id="keterangan"
          className="input"
          type="text"
          placeholder="Gaji, makan siang, listrik…"
          autoComplete="off"
          value={keterangan}
          onChange={(event) => setKeterangan(event.target.value)}
        />
        {terlaluPanjang && (
          <p className="galat" role="alert">
            Keterangan maksimal {BATAS_KETERANGAN} karakter ({keterangan.length}/{BATAS_KETERANGAN}).
          </p>
        )}
      </div>

      <div className="bidang">
        <label className="label" htmlFor="nominal">
          Nominal (Rp)
        </label>
        <input
          id="nominal"
          className="input input-angka"
          type="number"
          inputMode="numeric"
          placeholder="50000"
          min="1"
          value={nominal}
          onChange={(event) => setNominal(event.target.value)}
        />
        {nominalTidakValid && (
          <p className="galat" role="alert">
            Nominal harus lebih besar dari 0.
          </p>
        )}
      </div>

      <fieldset className="bidang pilihan">
        <legend className="label">Jenis</legend>
        <label className={jenis === 'Pemasukan' ? 'opsi opsi-aktif opsi-masuk' : 'opsi'}>
          <input
            type="radio"
            name="jenis"
            value="Pemasukan"
            checked={jenis === 'Pemasukan'}
            onChange={(event) => setJenis(event.target.value)}
          />
          Pemasukan
        </label>
        <label className={jenis === 'Pengeluaran' ? 'opsi opsi-aktif opsi-keluar' : 'opsi'}>
          <input
            type="radio"
            name="jenis"
            value="Pengeluaran"
            checked={jenis === 'Pengeluaran'}
            onChange={(event) => setJenis(event.target.value)}
          />
          Pengeluaran
        </label>
      </fieldset>

      <button className="tombol" type="submit" disabled={tidakValid}>
        Catat Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
