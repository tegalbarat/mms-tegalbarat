// data.js
const SITE = {
  nama: "MMS Tegal Barat",
  wilayah: ["Tegal Barat", "Tegal Selatan", "Margadana"],
  call: "1500 300", callTel: "1500300", email: "tanya@btpnsyariah.com",
  playstore: "https://play.google.com/store/apps/details?id=com.btpns.individualfinancing&pcampaignid=web_share",
  cabang: { nama: "Kantor Cabang Semarang – Pamularsih", alamat: "Jl. Pamularsih No. 17, Gisikdrono, Kec. Semarang Barat, Kota Semarang, Jawa Tengah", telp: "(024) 3531 8090", tel: "02435318090" },
  head: ["Menara SMBC Lt.12 – CBD Mega Kuningan", "Jl. Dr. Ide Anak Agung Gde Agung Kav 5.5 – 5.6", "Jakarta Selatan 12950"],
  sosial: [["Facebook", "https://www.facebook.com/btpns.id"], ["Instagram", "https://www.instagram.com/btpnsyariah/"], ["YouTube", "https://www.youtube.com/c/BTPNSyariah"]],
  pengaduan: [
    ["Tata cara pelayanan dan penyelesaian pengaduan konsumen", "https://www.btpnsyariah.com/layanan-konsumen#pdf-preview"],
    ["Publikasi penanganan pengaduan konsumen", "https://www.btpnsyariah.com/PublikasiPenangananPengaduanKonsumen"],
  ],
  legal: "PT Bank BTPN Syariah Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan, Bank Indonesia serta merupakan peserta penjaminan LPS. Maksimum nilai simpanan yang dijamin LPS per nasabah per bank adalah Rp2 miliar. PT Bank BTPN Syariah Tbk adalah Lembaga Keuangan Syariah Penerima Wakaf Uang.",
  laps: "PT Bank BTPN Syariah Tbk merupakan anggota Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan (LAPS SJK). Penyelesaian sengketa konsumen dengan kriteria tertentu dapat diselesaikan melalui LAPS SJK.",
  disclaimer: "Informasi di situs ini bersifat ringkasan dan bukan penawaran resmi. Ketentuan, margin, dan biaya dapat berubah. Jika berbeda, yang berlaku adalah perjanjian/akad yang Anda tandatangani bersama BTPN Syariah.",
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
    ["Plafon", "Rp 2 juta – Rp 100 juta", "pengajuan mulai Rp 2 juta"],
    ["Jangka waktu", "6 bulan – 2 tahun", "tergantung jenis fasilitas"],
    ["Angsuran", "Setiap 2 minggu", "dibayar di Pertemuan Rutin Sentra"],
    ["Margin", "25 – 30% flat", "tetap sampai jatuh tempo"],
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
    "Usia maksimal 60 tahun (tidak berlaku bagi nasabah yang masih aktif melanjutkan siklus pembiayaan)",
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
    ["Modal usaha", "Pembiayaan untuk kebutuhan usaha atau pembelian barang pendukung usaha, dengan margin tetap sampai jatuh tempo."],
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
  simulasi: { plafon: 2000000, margin: 30, jumlah: 25, angsuran: 104000, usaha: "usaha kelontong", tenor: "12 bulan" },
};

const TPSIK = {
  nama: "Tepat Pembiayaan Syariah Individu – Komunitas (TPSIK)",
  intro: "Pembiayaan untuk nasabah MMS terpilih yang usahanya sudah berkembang dan siap membayar angsuran lewat transfer. Seluruh proses lewat aplikasi Sitepat, jadi Anda tidak perlu datang ke Pertemuan Rutin Sentra (PRS) dan bisa lebih fokus pada usaha.",
  catatanTerpilih: "TPSIK tidak bisa didaftarkan sendiri. Produk ini ditawarkan petugas kepada nasabah yang memenuhi kriteria. Petugas akan memastikan Anda siap sebelum menawarkannya.",
  ringkas: [
    ["Plafon", "Rp 8 juta – Rp 100 juta", "dapat berubah sesuai penilaian bank"],
    ["Jangka waktu", "12 – 36 bulan", "untuk fasilitas pembiayaan"],
    ["Angsuran", "Bulanan", "transfer pada tanggal tertentu"],
    ["Margin", "25 – 30% flat per tahun", "berlaku saat ringkasan produk terbit"],
  ],
  poin: [
    ["Tanpa agunan", "Tidak perlu menyerahkan jaminan."],
    ["Bebas UPS", "Tidak ada Uang Pertanggungjawaban Sentra."],
    ["Tanpa penahanan (hold) rekening", "Rekening Anda tidak ditahan."],
    ["Tanpa biaya administrasi", "Biaya administrasi Rp 0."],
    ["Asuransi jiwa", "Ditanggung oleh BTPN Syariah."],
  ],
  siap: ["Riwayat pembayaran dan usaha Anda baik", "Usaha Anda terus berkembang", "Anda nyaman memakai HP dan aplikasi", "Anda siap membayar angsuran lewat transfer setiap bulan"],
  syarat: [
    "Nasabah pembiayaan aktif BTPN Syariah yang telah melewati 3 siklus pembiayaan, dengan kriteria tambahan dari bank",
    "Bersedia memenuhi persyaratan dokumen dan ketentuan pembiayaan",
    "Memiliki rekening tabungan dan siap memakai aplikasi Sitepat",
    "Memberikan data yang benar, akurat, dan terkini, serta memberi tahu bank bila ada perubahan",
  ],
  langkah: [
    ["Bank menyeleksi nasabah layak", "Bank melihat riwayat usaha dan pembayaran Anda, memeriksa riwayat pembiayaan (SLIK), dan menghitung rekomendasi limit."],
    ["Petugas menawarkan kepada Anda", "Petugas datang, menjelaskan ringkasan produk, dan memastikan Anda siap memakai aplikasi."],
    ["Anda memutuskan mengajukan", "Pelajari penawaran dengan tenang. Tidak ada paksaan."],
    ["Lengkapi dokumen dan rekening tabungan", "Serahkan dokumen yang diminta untuk pengajuan."],
    ["Survei dan wawancara usaha", "Petugas melihat langsung usaha Anda dan berbincang tentang rencana pengembangannya."],
    ["Bank memutuskan", "Pengajuan ditinjau oleh bank. Jika disetujui, Anda mempelajari dan menandatangani akad pembiayaan."],
    ["Dana cair di rekening wadiah", "Dana diterima di rekening Anda. Tarik limit lewat Sitepat sesuai kebutuhan, lalu bayar angsuran bulanan lewat transfer."],
  ],
  masaJeda: "Setelah menandatangani permohonan, Anda punya masa jeda 2 hari kerja untuk membaca ulang ringkasan produk dan syarat. Jika tidak ada pembatalan, proses dilanjutkan. Berlaku untuk pembiayaan dengan tenor lebih dari 1 tahun.",
  fitur: [
    ["Limit pembiayaan bergulir", "Plafon dapat ditarik sewaktu-waktu dengan jumlah dan periode yang fleksibel. Nilai limit dapat berubah sesuai penilaian bank."],
    ["Autodebit angsuran", "Saldo dipotong otomatis pada tanggal jatuh tempo. Angsuran dihitung sukses bila pemotongan berhasil, jadi pastikan saldo cukup."],
    ["Pengingat jadwal", "Pengingat agar Anda sempat mengisi saldo tabungan bila belum cukup."],
    ["Beberapa pembiayaan sekaligus", "Penarikan berulang dapat menghasilkan beberapa pembiayaan aktif, dengan besar dan tanggal angsuran yang berbeda."],
    ["Kirim bukti pembelian barang", "Unggah bukti pembelian barang dari dana yang ditarik, sebagai pemenuhan akad."],
  ],
  biaya: [["Biaya administrasi", "Rp 0"], ["Asuransi jiwa", "Ditanggung BTPN Syariah"], ["Meterai", "Rp 10.000 / dokumen (jika diperlukan)"], ["Pelunasan dipercepat", "Rp 0"], ["Ta’zir (denda)", "Tidak ada*"]],
  biayaCatatan: "*Hanya dikenakan kepada nasabah yang mampu tetapi sengaja menunda pembayaran. Biaya dapat berubah sewaktu-waktu sesuai kebijakan BTPN Syariah.",
  risiko: [
    "Terlambat atau gagal membayar dapat menurunkan kualitas pembiayaan dan memengaruhi riwayat Anda di SLIK.",
    "Bank dapat melakukan penagihan dan mengirim surat peringatan bila kewajiban tidak dipenuhi.",
    "Gangguan jaringan, aplikasi, atau sistem dapat memperlambat pengajuan, pencairan, atau pembayaran.",
    "Kata sandi, PIN, kode OTP, atau data rekening yang disalahgunakan pihak lain dapat menimbulkan kerugian.",
  ],
  simulasiBank: "Contoh ilustrasi dari bank: nasabah usaha kelontong mengajukan fasilitas Rp 15 juta dan menarik seluruhnya untuk 18 bulan. Total margin ilustratif Rp 2.700.000, total kewajiban Rp 17.700.000, angsuran Rp 983.333 per bulan selama 18 kali. Margin sebenarnya dapat berbeda sesuai ketentuan bank.",
};

const SITEPAT = {
  intro: "Aplikasi mobile banking khusus nasabah pembiayaan BTPN Syariah. Cek saldo, ajukan penarikan pembiayaan, transfer, hingga bayar pulsa dan listrik dari ponsel.",
  fitur: [
    ["Layanan perbankan", ["Cek saldo dan mutasi", "Transfer ke sesama BTPN Syariah", "Transfer ke bank lain"]],
    ["Informasi pembiayaan", ["Permohonan pembukaan fasilitas", "Informasi pembiayaan aktif dan fasilitas", "Permohonan tarik fasilitas"]],
    ["Layanan tunai", ["Setor tunai di gerai mitra", "Tarik tunai di gerai mitra", "Informasi tarik dan tambah saldo"]],
    ["Pembayaran (PPOB)", ["Pulsa dan paket data", "Token dan tagihan PLN", "Pembayaran BPJS"]],
  ],
  biaya: [["Transfer ke rekening BTPN Syariah", "Gratis"], ["Transfer ke bank lain", "Rp 6.500"], ["Pembayaran PLN", "Rp 2.750"], ["Pembayaran BPJS", "Rp 2.500"], ["Setor tunai", "Rp 5.000 – Rp 6.000"], ["Tarik tunai", "Rp 5.000 – Rp 5.500"]],
  syarat: ["Nasabah aktif perorangan BTPN Syariah", "Memiliki rekening tabungan BTPN Syariah", "Ponsel Android 5.1 atau lebih baru", "Nomor HP yang terdaftar di sistem BTPN Syariah"],
  registrasi: ["Unduh Sitepat di Play Store", "Aktivasi dengan nomor HP terdaftar dan kode OTP", "Buat kata sandi sesuai ketentuan", "Baca dan setujui syarat dan ketentuan", "Masuk ke aplikasi"],
  tarikTunai: "Contoh tarik tunai Rp 500.000: saldo berkurang Rp 505.500 (Rp 500.000 + biaya Rp 5.500), Anda menerima uang tunai Rp 500.000 di gerai.",
  setorTunai: "Contoh setor tunai Rp 500.000: Anda memberi Rp 505.000 ke petugas gerai (Rp 500.000 + biaya Rp 5.000), saldo bertambah Rp 500.000.",
  catatan: "Biaya dan limit dapat berubah sewaktu-waktu sesuai kebijakan BTPN Syariah.",
};

const PENDAMPINGAN = {
  kelompok: { judul: "Pendampingan Kelompok", isi: "Pemberdayaan di dalam sentra setiap dua minggu sekali oleh bankir pemberdaya terlatih. Isinya tips dan pelatihan seputar kewirausahaan, kesehatan, dan lingkungan hidup.", contoh: ["Daya tahan tubuh", "Ketahanan pangan", "Apotek sehat", "Peluang usaha baru"], lanjut: "Nasabah yang usahanya konsisten tumbuh dan ikut memberdayakan warga sekitar mendapat pelatihan lebih intensif, termasuk webinar kewirausahaan bersama mitra berpengalaman." },
  individu: { judul: "Pendampingan Individu", isi: "Pendampingan dengan materi lebih spesifik dan intensif untuk meningkatkan usaha nasabah.", program: [["Nasabah Inspiratif", "Dilakukan bankir pemberdaya, berupa pendampingan kewirausahaan yang sejalan dengan paket keuangan nasabah."], ["Bestee", "Pendampingan terintegrasi platform oleh mahasiswa, dengan materi sesuai kebutuhan nasabah, bekerja sama dengan lembaga nonprofit dan institusi pendidikan."]] },
};

const GRAMEEN = {
  judul: "Apa itu model kelompok (Grameen)?",
  isi: "Model kredit mikro yang dipelopori Muhammad Yunus lewat Grameen Bank di Bangladesh (dirintis 1976, menjadi bank 1983). Pinjaman diberikan kepada kelompok kecil 5–25 orang tanpa agunan fisik. Kepercayaan dan tanggung jawab bersama menjadi jaminannya.",
  alur: [["Kelompok = Sentra", "Anggota berasal dari lingkungan yang sama dan saling mengenal."], ["Tanggung renteng", "Anggota saling menopang lewat Uang Pertanggungjawaban Sentra (UPS)."], ["Pertemuan rutin (PRS)", "Setiap 2 minggu: bayar angsuran sekaligus belajar bersama."], ["Karakter BDKS", "Berani Berusaha, Disiplin, Kerja Keras, Saling Bantu."]],
};

const GLOSARIUM = [
  ["Sentra", "Kelompok nasabah yang berkumpul rutin."],
  ["PRS", "Pertemuan Rutin Sentra, setiap 2 minggu, untuk bayar angsuran dan belajar."],
  ["UPS", "Uang Pertanggungjawaban Sentra, dana bersama untuk membantu anggota yang kesulitan membayar."],
  ["Murabahah", "Jual beli dengan keuntungan (margin) yang disepakati sejak awal."],
  ["Margin flat", "Keuntungan tetap, dihitung dari awal dan tidak berubah sampai lunas."],
  ["SLIK", "Catatan riwayat kredit Anda di sistem keuangan. Disiplin membayar menjaga catatan tetap baik."],
  ["Bankir pemberdaya", "Petugas BTPN Syariah yang melayani dan mendampingi nasabah di sentra."],
  ["Tabungan awal", "Setoran tabungan 10% dari pinjaman saat pembiayaan kelompok cair. Tidak dipotong dari pinjaman."],
  ["TPSIK", "Tepat Pembiayaan Syariah Individu – Komunitas. Untuk nasabah terpilih, dibayar bulanan lewat transfer dan lewat aplikasi Sitepat."],
  ["Autodebit", "Pemotongan saldo otomatis di tanggal jatuh tempo untuk membayar angsuran."],
  ["Limit pembiayaan", "Batas dana yang boleh Anda tarik dari fasilitas pembiayaan sesuai kebutuhan."],
];

const TIPS = [
  ["Pinjam sesuai kemampuan", "Ambil sebesar yang dibutuhkan usaha dan sanggup dicicil setiap 2 minggu."],
  ["Catat uang usaha", "Tulis uang masuk dan keluar setiap hari agar tahu untung rugi."],
  ["Pisahkan uang usaha dan rumah", "Agar modal tidak terpakai untuk kebutuhan sehari-hari."],
  ["Bayar tepat waktu", "Tunggakan tercatat di SLIK dan memengaruhi pengajuan berikutnya."],
  ["Jaga kata sandi dan OTP", "Jangan bagikan ke siapa pun. Hindari tanggal lahir atau angka berurutan."],
  ["Gunakan kanal resmi", "Ragu atau menemukan hal mencurigakan? Hubungi layanan 24 jam 1500 300."],
];