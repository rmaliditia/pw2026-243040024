// src/ItemTransaksi.jsx
import formatRupiah from './formatRupiah';

function formatTanggal(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function ItemTransaksi({ transaksi, onHapus }) {
  const isPemasukan = transaksi.jenis === 'Pemasukan';

  return (
    <li className="item">
      <div className="item-info">
        <span className="item-judul">{transaksi.keterangan}</span>
        <span className="item-meta">
          {transaksi.jenis}
          {/* Data lama mungkin belum punya tanggal, jadi tampilkan hanya jika ada */}
          {transaksi.tanggal && ` · ${formatTanggal(transaksi.tanggal)}`}
        </span>
      </div>

      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={isPemasukan ? 'nominal angka-masuk' : 'nominal angka-keluar'}>
        {isPemasukan ? '+' : '−'}
        {formatRupiah(transaksi.nominal)}
      </span>

      <button
        className="tombol-hapus"
        onClick={() => onHapus(transaksi.id)}
        aria-label={`Hapus transaksi ${transaksi.keterangan}`}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
