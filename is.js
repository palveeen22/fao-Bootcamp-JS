// function meek() {
//   console.log("tai");
//   return "berak";
// }
// meek();
// function naonSihMemek() {
//   console.log("tai");
//   return "taiUcing";
// }
// naonSihMemek();
// console.log(naonSihMemek());

// function semua(par1, par2, par3) {
//     if (par2 === 1) {
//       return pertama(par1, par3);
//     } else if (par2 === 2) {
//       return kedua(par1, par3);
//     }
//   }
//   function pertama(namaGuru, par2) {
//     // console.log(namaGuru);
//     // console.log(namaGuru.riwayatKerja[0].lamaMengajar);
//     let save = namaGuru.riwayatKerja[0].lamaMengajar + par2;
//     namaGuru.riwayatKerja[0].lamaMengajar = save;
//     // console.log(par2);
//     return namaGuru;
//    }
//   function kedua(p1, p2) {
//     let simpan = p1.listSiswa[1].umur + p2;
//     p1.listSiswa[1].umur = simpan;
//     return p1;
//   }
//   const total = semua(namaGuru, 2, 10);
//   console.log(total);

// // Buatlah sebuah function, dimana function tersebut menerima tiga parameter, pertama adalah namaGuru, kedua adalah angka 1-2 (bebas berapa aja), ketiga adalah angka 1-5 (bebas berapa aja)
// // // jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan lamaMengajar kedua di riwayatKerja dengan param yang dikirimkan, misal param ke-3 adalah 5 dan lamaMengajar pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10
// // // jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan umur pertama di listSiswa dengan param yang dikirimkan, misal param ke-3 adalah 2 dan umur KEDUA di listSiswa adalah 20, maka umur KEDUA di listSiswa menjadi 22

// function semua(par1, par2, par3) {
//   if (par2 === 1)

// const namaGuru = {
//   nama: "misa",
//   riwayatKerja: [
//     {
//       sekolah: "SMA 4 Pekabanrau",
//       lamaMengajar: 5,
//     },
//     {
//       sekolah: "SMA Penabur",
//       lamaMengajar: 10,
//     },
//   ],
//   listSiswa: [
//     {
//       nama: "Beko",
//       umur: 25,
//     },
//     {
//       nama: "Alik",
//       umur: 20,
//     },
//   ],
// };

// function f2(par1, par2, par3) {
//   if (par2 === 1) {
//     return tambah(par1, par3);
//   } else if (par2 === 2) {
//     return kedua(par1, par3);
//   }
// }

// function tambah(param1, param2) {
//   param1.riwayatKerja[1].lamaMengajar *= param2;
//   return param1;
// }
// function kedua(p1, p2) {
//   p1.listSiswa[1].umur *= p2;
//   return p1;
// }

// console.log(f2(namaGuru, 1, 3));

// const namaDiri = {
//   nama: "Anton",
//   umur: 4,
//   anak: ["Kalo", "Joki"],
//   riwayatKerja: [
//     {
//       namaKantor: "Atlas",
//       lamaKerja: 50,
//     },
//     {
//       namaKantor: "Git",
//       lamaKerja: 20,
//     },
//   ],
// };
// const dataRumah = {
//   namaPenghuni: "saepul",
//   istri: "jaenab",
//   anak: ["bro", "bre", "bru"],
// };
// var dataDiri = dataRumah;
// console.log(dataDiri);
