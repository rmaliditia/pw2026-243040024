// src/RingkasanSaldo.jsx
// Hanya menampilkan data. Semua angka dihitung di App (nilai turunan), lalu dikirim lewat props.
import formatRupiah from './formatRupiah';

function RingkasanSaldo({ saldo, pemasukan, pengeluaran }) {
  return (
    <section className="ringkasan" aria-label="Ringkasan keuangan">
      <p className="label">Total Saldo</p>
      <p className={saldo < 0 ? 'saldo saldo-minus' : 'saldo'}>{formatRupiah(saldo)}</p>

      <dl className="rincian">
        <div className="rincian-kolom">
          <dt className="label">Pemasukan</dt>
          <dd className="angka angka-masuk">{formatRupiah(pemasukan)}</dd>
        </div>
        <div className="rincian-kolom">
          <dt className="label">Pengeluaran</dt>
          <dd className="angka angka-keluar">{formatRupiah(pengeluaran)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default RingkasanSaldo;
