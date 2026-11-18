// data.js
const SITE = {
  nama: "MMS Tegal Barat",
  wilayah: ["Tegal Barat", "Tegal Selatan", "Margadana"],
  call: "1500 300", callTel: "1500300", email: "tanya@btpnsyariah.com",
  disclaimer: "Ketentuan dan biaya dapat berubah sewaktu-waktu sesuai kebijakan BTPN Syariah.",
  cabang: { nama: "Kantor Cabang Semarang – Pamularsih", alamat: "Jl. Pamularsih No. 17, Gisikdrono, Kec. Semarang Barat, Kota Semarang, Jawa Tengah", telp: "(024) 3531 8090", tel: "02435318090" },
  head: ["Menara SMBC Lt.12 – CBD Mega Kuningan", "Jl. Dr. Ide Anak Agung Gde Agung Kav 5.5 – 5.6", "Jakarta Selatan 12950"],
  sosial: [["Facebook", "https://www.facebook.com/btpns.id"], ["Instagram", "https://www.instagram.com/btpnsyariah/"], ["YouTube", "https://www.youtube.com/c/BTPNSyariah"]],
  pengaduan: [
    ["Tata cara pelayanan dan penyelesaian pengaduan konsumen", "https://www.btpnsyariah.com/layanan-konsumen#pdf-preview"],
    ["Publikasi penanganan pengaduan konsumen", "https://www.btpnsyariah.com/PublikasiPenangananPengaduanKonsumen"],
  ],
  legal: "PT Bank BTPN Syariah Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan, Bank Indonesia serta merupakan peserta penjaminan LPS. Maksimum nilai simpanan yang dijamin LPS per nasabah per bank adalah Rp2 miliar. PT Bank BTPN Syariah Tbk adalah Lembaga Keuangan Syariah Penerima Wakaf Uang.",
  laps: "PT Bank BTPN Syariah Tbk merupakan anggota Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan (LAPS SJK). Penyelesaian sengketa konsumen dengan kriteria tertentu dapat diselesaikan melalui LAPS SJK.",
};

const NAV = [["index.html", "Beranda"], ["produk.html", "Produk Pembiayaan"], ["pendampingan.html", "Pendampingan"], ["literasi.html", "Literasi Keuangan"], ["kontak.html", "Kontak"]];

const TENTANG = {
  komitmen: "BTPN Syariah berkomitmen memberikan kesempatan bagi setiap umat untuk mewujudkan niat baik lebih cepat, membangun hidup yang lebih berarti serta memberikan dampak yang bermakna bagi jutaan rakyat Indonesia.",
  mms: "MMS Tegal Barat adalah kantor operasional wilayah BTPN Syariah yang melayani Kecamatan Tegal Barat, Tegal Selatan, dan Margadana di Kota Tegal. Tim bankir pemberdaya kami mendampingi nasabah langsung di sentra, mulai dari pengajuan pembiayaan, pertemuan rutin, hingga pelatihan usaha.",
  sejarah: [
    ["2010", "Berawal dari Unit Usaha Syariah PT Bank Tabungan Pensiunan Nasional Tbk (kini PT Bank SMBC Indonesia Tbk), merangkul masyarakat yang belum tersentuh perbankan."],
    ["14 Juli 2014", "Resmi terdaftar sebagai Bank Umum Syariah ke-12 di Indonesia."],
    ["Kini", "Satu-satunya bank umum syariah di Indonesia yang fokus melayani pemberdayaan masyarakat inklusi dan keuangan inklusif."],
  ],
  visi: "Menjadi bank syariah terbaik untuk keuangan inklusif, mengubah hidup berjuta rakyat Indonesia.",
  misi: "Bersama, kita ciptakan kesempatan tumbuh dan hidup yang lebih berarti.",
  nilai: [["P", "Profesional"], ["R", "Integritas"], ["I", "Saling menghargai"], ["S", "Kerja sama"]],
  bdks: [["Berani Berusaha", "Berani memulai dan mengembangkan usaha."], ["Disiplin", "Hadir dan membayar angsuran tepat waktu."], ["Kerja Keras", "Gigih menjalankan usaha setiap hari."], ["Saling Bantu", "Peduli pada sesama anggota sentra."]],
};

const TEPAT = {
  nama: "Tepat Pembiayaan Syariah – Kelompok",
  intro: "Pembiayaan modal usaha khusus untuk perempuan prasejahtera produktif, memakai akad jual beli (wakalah wal murabahah). Fokusnya bukan hanya modal, tetapi juga membangun karakter dan kebiasaan baik nasabah.",
  ringkas: [
    ["Plafon", "Rp 2 juta – Rp 100 juta", "dalam kelipatan Rp 1 juta"],
    ["Jangka waktu", "1 – 2 tahun", "25 / 37 / 50 kali angsuran"],
    ["Angsuran", "Setiap 2 minggu", "dibayar di Pertemuan Rutin Sentra"],
    ["Persyaratan", "Tanpa agunan", "tanpa uang muka dan biaya administrasi"],
  ],
  poin: [
    ["Tanpa agunan", "Tidak perlu menyerahkan jaminan barang."],
    ["Tanpa uang muka", "Tidak ada uang muka untuk mengajukan."],
    ["Tanpa biaya administrasi", "Tidak ada biaya administrasi pembiayaan."],
    ["Sambil menabung", "Anda menabung saat pencairan dan diajak menabung di tiap pertemuan."],
    ["Sesuai prinsip syariah", "Mengikuti Fatwa DSN-MUI No. 119/DSN-MUI/II/2018."],
  ],
  fasilitas: ["Pembiayaan Awal", "Pembiayaan Siklus Lanjutan", "Pembiayaan Tambahan", "Pendidikan, renovasi, dan lainnya (masih uji coba)"],
  syarat: [
    "Perorangan atau anggota komunitas/paguyuban",
    "Warga Negara Indonesia yang berdomisili di Indonesia",
    "Usia minimal 18 tahun (sudah/pernah menikah) atau 21 tahun (belum menikah)",
    "Usia maksimal 59 tahun",
    "Memberikan data dan dokumen yang benar, akurat, dan terkini",
  ],
  langkah: [
    ["Ajukan permohonan", "Sampaikan niat usaha Anda kepada petugas, lalu lakukan pembukaan rekening."],
    ["Lengkapi dokumen", "Serahkan dokumen yang diminta bank."],
    ["Ikut pelatihan keanggotaan", "Pelajari cara kerja sentra dan kewajiban anggota."],
    ["Penuhi ketentuan sentra", "Ikut mengumpulkan Uang Pertanggungjawaban Sentra (UPS) dan menyiapkan tabungan awal 10% dari pinjaman."],
    ["Pencairan dan PRS", "Pembiayaan cair, lalu hadiri Pertemuan Rutin Sentra setiap 2 minggu untuk mengangsur."],
  ],
  manfaat: [
    ["Modal usaha", "Pembiayaan untuk kebutuhan usaha atau pembelian barang pendukung usaha, dengan angsuran yang tetap sama sampai lunas."],
    ["Perlindungan nasabah", "Jika nasabah meninggal dunia, bank membayarkan sisa kewajiban pembiayaan."],
    ["Santunan pasangan", "Jika pasangan/suami nasabah meninggal dunia, bank memberikan santunan kepada nasabah."],
    ["Tabungan", "Dana tabungan terkumpul secara berkesinambungan untuk masa depan."],
    ["Pelatihan dan penyuluhan", "Pendampingan usaha dan pengetahuan baru secara rutin."],
  ],
  risiko: [
    "Pembiayaan tidak otomatis diterima. Bank dapat menolak jika persyaratan tidak terpenuhi.",
    "UPS dan/atau tabungan nasabah dapat dipakai untuk membayar angsuran anggota sentra yang mengalami kesulitan (tanggung renteng).",
    "Menunggak atau tidak membayar kewajiban akan tercatat di Sistem Layanan Informasi Keuangan (SLIK).",
    "Gangguan sistem bank dapat memengaruhi pelaporan dan transaksi operasional.",
  ],
  tabungan: {
    awal: "Sesuai ketentuan akad, saat pembiayaan cair Anda menyetor tabungan sebesar 10% dari jumlah pinjaman. Uang ini tidak dipotong dari pinjaman: Anda menerima pinjaman penuh, lalu menyetor tabungan itu sendiri ke rekening tabungan Anda. Contoh: pinjaman Rp 2.000.000, tabungan awal Rp 200.000.",
    rutin: "Di setiap pertemuan (PRS), selain angsuran Anda diajak menabung sebesar 0,8% dari pinjaman. Contoh: Rp 2.000.000 × 0,8% = Rp 16.000, sehingga setoran Rp 104.000 + Rp 16.000 = Rp 120.000. Jika sedang hanya mampu membayar angsuran, tetap diterima. Menabung berapa pun sesuai kemampuan juga diterima.",
  },
  tenor: [{ n: 25, label: "1 tahun" }, { n: 37, label: "1,5 tahun" }, { n: 50, label: "2 tahun" }],
  simulasi: { plafon: 2000000, jumlah: 25, angsuran: 104000, usaha: "usaha kelontong", tenor: "1 tahun" },
};

// Pilihan jangka waktu menurut besar pinjaman
function tenorTersedia(p) {
  if (p <= 5000000) return [25];          // Rp 2 – 5 juta: 1 tahun saja
  if (p <= 20000000) return [25, 37];     // Rp 6 – 20 juta: 1 atau 1,5 tahun
  return [25, 37, 50];                    // di atas Rp 20 juta: 1, 1,5, atau 2 tahun
}

// Angsuran per 2 minggu. Margin tetap 30% flat per tahun (tidak ditampilkan di situs)
function hitungKelompok(p, n) {
  const tahun = n === 25 ? 1 : n === 37 ? 1.5 : 2;
  const angsuran = Math.ceil(p * (1 + 0.3 * tahun) / n / 1000) * 1000;
  const tabungan = Math.round(p * 0.008);
  return { angsuran, tabungan, setoran: angsuran + tabungan, tabunganAwal: p * 0.1 };
}



const PENDAMPINGAN = {
  kelompok: { judul: "Pendampingan Kelompok", isi: "Pemberdayaan di dalam sentra setiap dua minggu sekali oleh bankir pemberdaya terlatih. Isinya tips dan pelatihan seputar kewirausahaan, kesehatan, dan lingkungan hidup.", contoh: ["Daya tahan tubuh", "Ketahanan pangan", "Apotek sehat", "Peluang usaha baru"], lanjut: "Nasabah yang usahanya konsisten tumbuh dan ikut memberdayakan warga sekitar mendapat pelatihan lebih intensif, termasuk webinar kewirausahaan bersama mitra berpengalaman." },
  individu: { judul: "Pendampingan Individu", isi: "Pendampingan dengan materi lebih spesifik dan intensif untuk meningkatkan usaha nasabah.", program: [["Nasabah Inspiratif", "Dilakukan bankir pemberdaya, berupa pendampingan kewirausahaan yang sejalan dengan paket keuangan nasabah."], ["Bestee", "Pendampingan terintegrasi platform oleh mahasiswa, dengan materi sesuai kebutuhan nasabah, bekerja sama dengan lembaga nonprofit dan institusi pendidikan."]] },
};

const GRAMEEN = {
  judul: "Apa itu model kelompok?",
  isi: "Model kredit mikro yang dipelopori Muhammad Yunus lewat Grameen Bank di Bangladesh (dirintis 1976, menjadi bank 1983). Pinjaman diberikan kepada kelompok kecil 5–25 orang tanpa agunan fisik. Kepercayaan dan tanggung jawab bersama menjadi jaminannya.",
  alur: [["Kelompok = Sentra", "Anggota berasal dari lingkungan yang sama dan saling mengenal."], ["Tanggung renteng", "Anggota saling menopang lewat Uang Pertanggungjawaban Sentra (UPS)."], ["Pertemuan rutin (PRS)", "Setiap 2 minggu: bayar angsuran sekaligus belajar bersama."], ["Karakter BDKS", "Berani Berusaha, Disiplin, Kerja Keras, Saling Bantu."]],
};

const GLOSARIUM = [
  ["Sentra", "Kelompok nasabah yang berkumpul rutin."],
  ["PRS", "Pertemuan Rutin Sentra, setiap 2 minggu, untuk bayar angsuran dan belajar."],
  ["UPS", "Uang Pertanggungjawaban Sentra, dana bersama untuk membantu anggota yang kesulitan membayar."],
  ["Murabahah", "Jual beli dengan keuntungan bank yang disepakati sejak awal di akad."],
  ["Angsuran tetap", "Besar angsuran sama setiap 2 minggu sampai lunas."],
  ["Tabungan awal", "Setoran tabungan 10% dari pinjaman saat pembiayaan cair. Tidak dipotong dari pinjaman."],
  ["SLIK", "Catatan riwayat kredit Anda di sistem keuangan. Disiplin membayar menjaga catatan tetap baik."],
  ["Bankir pemberdaya", "Petugas BTPN Syariah yang melayani dan mendampingi nasabah di sentra."],
];

const TIPS = [
  ["Pinjam sesuai kemampuan", "Ambil sebesar yang dibutuhkan usaha dan sanggup dicicil setiap 2 minggu."],
  ["Catat uang usaha", "Tulis uang masuk dan keluar setiap hari agar tahu untung rugi."],
  ["Pisahkan uang usaha dan rumah", "Agar modal tidak terpakai untuk kebutuhan sehari-hari."],
  ["Bayar tepat waktu", "Tunggakan tercatat di SLIK dan memengaruhi pengajuan berikutnya."],
  ["Jaga kata sandi dan OTP", "Jangan bagikan ke siapa pun. Hindari tanggal lahir atau angka berurutan."],
  ["Gunakan kanal resmi", "Ragu atau menemukan hal mencurigakan? Hubungi layanan 24 jam 1500 300."],
];