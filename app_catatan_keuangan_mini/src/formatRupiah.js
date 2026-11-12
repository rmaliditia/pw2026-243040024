// src/formatRupiah.js
// Fungsi bantu murni: mengubah angka menjadi teks rupiah, contoh 50000 -> "Rp 50.000"
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

export default formatRupiah;
