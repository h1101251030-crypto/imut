// script.js
// Tunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen tombol berdasarkan ID
    const tombol = document.getElementById('tombolAksi');
    // Ambil elemen paragraf untuk output
    const output = document.getElementById('pesanOutput');
    
    // Tambahkan event listener untuk klik tombol
    tombol.addEventListener('click', function() {
        // Logika saat tombol diklik
        output.textContent = 'Anda berhasil mengklik tombol! Fungsi JavaScript berjalan.';
        output.style.color = '#007bff'; // Ubah warna teks
    });
});