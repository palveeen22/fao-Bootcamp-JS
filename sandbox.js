// console.log("For looping");
// for(let i=0;i<10;i++){
//     // i=0 => true
//     console.log(`${i} hello world`);
//     // i++ => i =
// }

// const { func } = require("prop-types");

// console.log();
// console.log("While looping\n");
// let i = 0;
// while(i < 10){
//     console.log(`${i} hello world`);
//     i++
// }

// console.log();
// console.log("Do-While looping\n");
// let j = 0
// do{
//     console.log(` ${j} hello world`);
//     j++
// } while(j<10)

// let arr = [1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let k = 0
// while(k < arr.length) {
//   console.log(arr[k]);
//   k++
// }

//const arr1 = ["ad", 3, 5, "asd", "dsf", 134, "df"]
//for(let i= 0; i<arr1.length; i++){
//  console.log(arr1[i]);
//}

// const mobil = {
//     body: 'kaleng',
//     peleg: true,
//     tahun: 2022,
// };

// console.log(mobil.body);
// console.log(mobil.peleg);
// console.log(mobil.tahun);

// const antrianPoli = ["sergey", "palvin","bebi","madun","dodo","fao","ros","ryan","firly","bedul"]
//  console.log(antrianPoli[0])
//  console.log(antrianPoli[3])
//  console.log(antrianPoli[5])
//  console.log(antrianPoli[6])
//  console.log(antrianPoli[8])

// const namaMakan =["muhamad", 40, "umar", 23]
// console.log(namaMakan[0],namaMakan[2])
// console.log(namaMakan[2])
// console.log(namaMakan[3])

// const rumahSakit ={
//     kamarMayat: 3,
//     pelayanan: true,
//     ambulance: "banyak",
//     namaKamar: ["melati", "mawar"],
// }
// rumahSakit.kamarMayat = 5
// rumahSakit.pelayanan = false
// rumahSakit.namaKamar = ["matahari", "bulan"]
// console.log(rumahSakit);
// console.log(rumahSakit.namaKamar[1]);

// const makanPadang ={
//     nasi: ["perak","pulen","merah"],
//     lauk: ["ikan","ayam","perkedel", "telor dadar"],
//     harga: [2500, 5000, 7500, 10000],
// }
// console.log(makanPadang.nasi[1]);
// console.log(makanPadang.lauk[2]);
// console.log(makanPadang.harga[1]);

// const namAlvin = 22
// const universitaKazan ={
//   pemerintah: "kfu",
//   univTekhnik: 5,
//   budaya: 3,
// };
// universitaKazan.pemerintah = "krasnodar"
// universitaKazan.rector = "gavurof"
// console.log(universitaKazan);

// const mahasiswaNganggur = ["ryan","alvin","fao","firli","karos"]
// console.log(mahasiswaNganggur[1]);

// const kantorPos = {
//   JNE: true,
//   Pegawai: 27,
//   Standar: 'cepat',
//   pegawaiOnDuty: ['Maman', 'Abdur', 'Kodir'],
//   cabang: {
//     melawai: {
//       jumlahPetugas: 5,
//       satpam: [{
//         nama: 'agus',
//         umur: 25,
//       }, {
//         nama: 'Jaya',
//         umur: 20,
//       }]
//     },
//     jakarta: {
//       jumlahPetugas: 7,
//       satpam: [{
//         nama: 'Mari',
//         umur: 12,
//       }, {
//         nama: 'Okta',
//         umur: 20,
//       }]
//     }
//   }
// };

// kantorPos.cabang.jakarta.satpam[1].umur = 25
// console.log(kantorPos.cabang.jakarta.satpam[1].umur);
// kantorPos.cabang.jakarta.satpam[1]= {
//   nama: "octav",
//   umur: 25,
//   pendidikan : "sd",
// }
// console.log(kantorPos.cabang.jakarta.satpam[1]);
//ini untuk menambahkan value array dr belakang---->
// const murid = ["a"]
// murid.push("b")
// console.log(murid);
// const nama =["a","b"]
// const nama1 = nama.pop()
// console.log(nama1);
// const ryan = "iuef"
// const cokin = ryan
// console.log(cokin);
//  const hargaShaurma = [120,200,250]
//  hargaShaurma.pop()
// hargaShaurma.push(320)
// console.log(hargaShaurma); // ini untuk menghapus value akhir dan menambah value yg baru

//  const hargaBaru = hargaShaurma.pop()
//  console.log(hargaBaru);

//  const newestHarga = [280,300]
//  newestHarga.push(hargaBaru)
// console.log(newestHarga);

// const urutan = [1,2,4,5]
// urutan.push (6)
// const takeOut = urutan.pop()
// urutan.push(takeOut)
// urutan.push(5)
// console.log(urutan);

// const nasiCampur = ["babi","ayam","campur"]
// const campurBali = nasiCampur.pop()

// const array = [2,4,6,6]
// array.pop()
// const getOne = array.pop()
// const getTwo = array.shift()
// array.unshift(getOne)
// array.pop()
// array.push(getTwo)
// console.log(array);

// const rumahSakit = {
//   namaRumah: 'Ayah Bunda',
//   cabang: {
//     Surabaya: {
//       jumlahPetugas: 5,
//       Dokter: [{
//         nama: 'agus',
//         umur: 25,
//         namaAnak: ['Mansur', 'Anwar']
//       }, {
//         nama: 'Jaya',
//         umur: 20,
//         namaAnak: ['Mansur', 'Jagur']
//       }]
//     },
//     Jakarta: {
//       jumlahPetugas: 7,
//       satpam: [{
//         nama: 'Mari',
//         umur: 12,
//         namaAnak: ['Malawi', 'Ansor']
//       }, {
//         nama: 'Okta',
//         umur: 20,
//         namaAnak: ['joki', 'Balay', 'Mega']
//       }]
//     }
//   }
// };
// ada petugas di rumah sakit Jakarta, bapak Okta, lahir anak baru namanya "Susilo"

// rumahSakit.cabang.Jakarta.satpam[1].namaAnak.push("susilo")
// console.log(rumahSakit.cabang.Jakarta.satpam[1].namaAnak[3]);
// rumahSakit.cabang.Surabaya.Dokter[]
// pak mari anak pertama wafat, terus si pak agus lahir anak baru, nama nya anak pertama pak mari, terakhir clg semua anaknya pak mari dan agus

// const anakMeninggal = rumahSakit.cabang.Jakarta.satpam[0].namaAnak.shift()
// rumahSakit.cabang.Surabaya.Dokter[0].namaAnak.push(anakMeninggal)

// console.log(rumahSakit.cabang.Jakarta.satpam[0].namaAnak);
// console.log(rumahSakit.cabang.Surabaya.Dokter[0].namaAnak);

// function cariNilai(nama, nilai) { //function basic
//   let grade;
//   if (nilai >= 80 && nilai < 100) {
//     grade = "A";
//   } else if (nilai >=70 && nilai < 80) {
//     grade = "B";
//   } else if (nilai >=50 && niai < 70) {
//     grade = "C";
//   }
//   console.log(`${nama} mendapatkan grade ${grade}`);
//   }

//   cariNilai ("Alvin", 85)

//  function tahunLahir(bulan, tahun) {
//   let waktu;
//   if (tahun >= 2000 && tahun < 2002) {
//     waktu = 1;
//   } else if (tahun >= 2003 && < 2002) {
//     waktu = 2;
//   } else if (tahun >= 2004 && < 2003) {
//     waktu = 3;
//   }
//   console.log(`${angkatan} merupakan urutan ${urutan}`);
//   }
//   gradeKelas ("Alvin", 2000)

// function tanggal(nama, waktu) { //function basic
//     let tahun;
//     if (waktu >= 80 && waktu < 100) {
//       tahun = "A";
//     } else if (waktu >=70 && waktu < 80) {
//       tahun = "B";
//     } else if (waktu >=50 && waktu < 70) {
//       tahun = "C";
//     }
//     console.log(`${nama} mendapatkan grade ${tahun}`);
//     }

//     tanggal ("Alvin", 85)

// function cariNilai(nama,nilai) {
//   let arti;
//      if (nilai >= 90 && nilai < 100) {
//          arti = 'S';
//      } else if (nilai >= 80 && nilai <= 90) {
//          arti = 'A';
//      } else if (nilai >= 70 && nilai <= 80) {
//          arti = 'B';
//      } else if (nilai >= 60 && nilai <= 70) {
//          arti = 'C';
//      } else if (nilai >= 50 && nilai <= 60) {
//          arti = "D";
//      } else {
//          arti = "E";
//      }
//      console.log(`${nama} kamu mendapatkan nilai ${arti}`);
//     }
//      cariNilai('ryan' , 40)
//push
// const muridBaik =["alvin","ryan","fao","ilham","firly"]
// muridBaik.push("dewa")
// console.log(muridBaik);
//pop
// const muridBaik =["alvin","ryan","fao","ilham","firly"]
// muridBaik.pop("firly")
// console.log(muridBaik);
//  //shift
//  const muridBaik =["alvin","ryan","fao","ilham","firly"]
//  muridBaik.shift("alvin")
//  console.log(muridBaik);
//unshift
// const muridBaik =["alvin","ryan","fao","ilham","firly"]
// muridBaik.unshift("ben")
// console.log(muridBaik);
//TOD
// const restaurant = {
//   name:"samsa",
//   city: "kazan",
//   favouriteDrink: "ayran",
//   favouriteFood: "sashlik",
// isForTajik: true,
// }
// //buatlah variabel name, lalu isi dengan nilai name dr properti di obj restaurant
// const name = restaurant.name
// console.log(name);
// //buatlah variabel fav drink
// const favouriteDrink = restaurant.favouriteDrink
// console.log(favouriteDrink);
// let x =10;
// {
//   let x = 2;
// }
// document.getElementById("demo").innerHTML = x;
// console.log(x);
// const siswa = {
//     name:"alvin",
//     city: "kazan",
//     namaFakultas: "geologi",
//     namaKafedra: "geokimia",
//     instansiFederal: true
//   }
//   //buatlah variabel name, lalu isi dengan nilai name dr properti di obj restaurant
//   const name = siswa.name
//   console.log(name);
//   //buatlah variabel fav drink
//   const namaKafedra = siswa.namaKafedra
//   // console.log(namaKafedra);

// const student = {
//   nama: "dewa",
//   angkatan: 2022,
//   kampus: "kfu",
//   namaFakultas: "igingt",
//   asal: "indonesia",
//   jenisKelamin: "pria",
//   beasiswa: true,
//   tahunAjaran: 2019,
// }
// // console.log(student.nama, student.beasiswa, student.tahunAjaran);
// const namaMasjid = ["nurulah","nurilah","nuruloh"]
// namaMasjid.pop("nuruloh")
// console.log(namaMasjid);
// example for loop with conditions  // ask fao
// let text = 0;
// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   text += i;  // text = text + i
//   console.log(text);
// }
// i=2
// text=3
// 0
// 1
// 3
// function myFunction(1, 2)
// return 1 * 2;

//versi pertama
// const rumah = {
//   namaJalan: "adelya kutuya",
//   penghuni: ["alvin","dewa","ben","putra"],
//   statusPembayaranListrik: true,
//   tahunPembuatanRumah: 2025,
//   listContractorRumah: 3,
//   contractor: [{
//     nama: "ryan",
//     umur: 18,
//   },
//   {
//     nama: "ryan",
//     umur: 23,
//   },
//   {
//     nama: "valdo",
//     umur: 12,
//   }]
//   }

// console.log(rumah.penghuni[2]);
// rumah.contractor[1].umur = 50
// console.log(rumah.contractor[1].umur);
// rumah.contractor.push ({
//   nama: "fao",
//   umur: 23,
// })
// console.log(rumah);

// //versi kedua
// const rumah = {
//   namaJalan: "adelya kutuya",
//   penghuni: [{
//     nama: "alvin",
//   },
//   {
//     nama: "dewa",
//   },
//   {
//     nama: "ben",
//   },
//   {
//     nama: "putra",
//   },
//   {}

//   statusPembayaranListrik: true,
//   tahunPembuatanRumah: 2025,
//   listContractorRumah: 3,
//   contractor: [{
//     nama: "ryan",
//     umur: 18,
//   },
//   {
//     nama: "ryan",
//     umur: 23,
//   },
//   {
//     nama: "valdo",
//     umur: 12,
//   }]
//   }

//////////// FUNCTION!!!
// function pertambahan (x,y){
//   return x+y
// }
// const hasil = pertambahan (10,23)
// console.log(hasil);
// x = nama
// y = umur

/////// FUNCTION DENGAN OBJEK
// function dataDiri (nama,umur) {
//   const showData = {
//     nama: nama,
//     umur: umur,
//   }
//   return showData
// }
// const hasil = dataDiri("alvin",24)
// console.log(hasil);

////////buat function barisan yang dimana saat panggil func kirim argumen isi parameternya 3 orang, returny harus 4 orang
// function barisan(array) {
//   array.push("fao")
//   return array
//   }
// const hasil = barisan(["ryan","dodo","firly"])
// console.log(hasil);

// //////// cara lain soal atas
// function barisan(array) {
//   let newArr = array
//   newArr.push("fao")
//   return newArr
//   }
// const hasil = barisan(["ryan","dodo","firly"])
// console.log(hasil);
// const rumah = {
//   alamat: "bekasi",
// }
// console.log(rumah.alamat);

///// function baru,Bikin sebuah fungsi yang namanya perubahanData yang berisi 2 params, dimana parameter ke-2 harus mengisi alamat di parameter ke-2 RETURN: object yang sudah diubah
// function pahamData(x,y,z){
//   // const perubahanData = nama, alamat
//   // x.nama = y
//   // x.alamat = y               ////// harus nanaya lagi sama fakhrul
//   // x.rt = "004"
//   // x.rt = z
//   // x.alamat = z
// x.alamat = y
// x.rt = z
//   return x
//  }
//   const ubahData=pahamData({nama:"Fakhrul",alamat:"",rt:""},"Bekasi","002")
// //pahamData.alamat.push("bekasi")
// console.log(ubahData);

/// kata
// function perkalian (kata){
//   const angka = 2
//   return angka*kata
// }
// const hasil = perkalian(3)
// console.log(hasil);
//////////// soal ke 2
// function namaLengkap(belakang,depan){
//   const nama = depan+belakang+depan
//   return nama
// }
// const hasil = namaLengkap("fakhrul","arifin")
// console.log(hasil);

///// soal ke 3, cara1
// function  perhitunganPajak(PPN,Persen){
//   const angka = (PPN*Persen)/100
//    return angka
// }
// const hasil = perhitunganPajak(2000000, 10)
// console.log(hasil);

//////soal ke 3, cara ke 2
// function  perhitunganPajak(PPN,Persen){
//    return(PPN*Persen)/100
// }
// const hasil = perhitunganPajak(2000000, 10)
// console.log(hasil);

////////// mentahan soal func
// function perubahanData(nama, address, umur) {
//   nama.alamat = address;
//   nama.age = umur; // ini nambah key baru
//   nama.thisYear[1] = 0; // merubah value dalam array
//   nama.thisYear.push(2, 2);
//   nama.alamat = {
//     // nambah object.key = value, ke dalam object
//     namaJalan: "Jl. Kumaha Aing RT/RW 003/003",
//     nomorRumah: "12C",
//   };
//   return nama.thisYear
// }

// const hasil = perubahanData(
//   { nama: "Fakhrul", alamat: "", thisYear: [2, 4] },
//   "Bekasi",
//   22
// );
// console.log(hasil);

/////// new latihan
// function rumours(x,y,z){
//   // const perubahanData = nama, alamat
//   // x.nama = z
//   // x.alamat = y               ////// harus nanaya lagi sama fakhrul
//   // x.rt = "004"
//   // x.rt = z
//   x.alamat = y
//   return x
//  }
//   const ubahData = rumours({nama:"dewa",alamat:""},"ostrovskogo", "002")

// // pahamData.alamat.push("bekasi")
// console.log(ubahData);

/////// latihan 4, tanya fao!!!!!!
// function royalEstet(pavilion1, _pavilion2, _pavilion3) {
//   pavilion1.jumlahPenghuni.push({
//     nama: "pak yusuf",
//     umur: 37,
//     jumlahKeluarga: [
//       {
//         istri: "maimunah",
//         anak: ["anton", "julaeha"],
//       },
//     ],
//   });
//   return pavilion1.jumlahPenghuni[2].jumlahKeluarga[0].anak;
// }
// const penghuni = royalEstet(
//   {
//     jumlahPenghuni: [
//       {
//         nama: "pak ahmad",
//         umur: 47,
//         jumlahKeluarga: [
//           {
//             istri: "sisi",
//             anak: ["anton", "igor"],
//           },
//         ],
//       },
//       {
//         nama: "pak susilo",
//         umur: 58,
//         jumlahKeluarga: [
//           {
//             istri: "mely",
//             anak: ["messi", "bejo", "diki"],
//           },
//         ],
//       },
//     ],
//   },
//   "satpam",
//   "011"
// );
// console.log(penghuni);

//////////// soal baru 25/sept
// function lahiranAnak(dataCatatanSipil, anakPakYusuf) {
//   // dataCatatanSipil[0].anak[2] = anakPakYusuf;
//   // console.log(dataCatatanSipil);
//   dataCatatanSipil[0].anak.push(anakPakYusuf);
//   return dataCatatanSipil;
// }
// const dapatHasil = lahiranAnak(
//   [
//     {
//       nama: "Yucup",
//       istri: "Anwar",
//       anak: ["Ahay", "Goks"],
//     },
//     {
//       nama: "Makar",
//       istri: "Olaf",
//       anak: ["aw", "asd", "Saol"],
//     },
//   ],
//   "FAO"
// );
// console.log(dapatHasil);

////////////// soal baru
// function tambahSotrudnik(pekerjaPakYucup, _anakIntern1, _anakInter2) {
//   // console.log(pekerjaPakYucup);
//   pekerjaPakYucup[1].toko.london.sotrudnik.push(_anakIntern1);
//   // console.log(pekerjaPakYucup[0].toko.jakarta.sotrudnik);
//   pekerjaPakYucup[0].toko.jakarta.sotrudnik.push(_anakInter2);
//   console.log(pekerjaPakYucup[0].toko.jakarta.sotrudnik);
//   return pekerjaPakYucup;
// }
// const dapatHasil = tambahSotrudnik(
//   [
//     {
//       nama: "Yucup",
//       istri: "Anwar",
//       anak: ["Ahay", "Goks"],
//       toko: {
//         jakarta: {
//           alamat: "Jalan bima",
//           nomor: 25,
//           sotrudnik: ["Amar", "Jaka"],
//         },
//         malang: {
//           alamat: "Jalan sorong",
//           nomor: 23,
//           sotrudnik: ["Mar", "aka"],
//         },
//       },
//     },
//     {
//       nama: "Makar",
//       istri: "Olaf",
//       anak: ["aw", "asd", "Saol"],
//       toko: {
//         surabaya: {
//           alamat: "Jalan kalas",
//           nomor: 295,
//           sotrudnik: ["Assar", "Yaka"],
//         },
//         london: {
//           alamat: "Jalan soki",
//           nomor: 123,
//           sotrudnik: ["asd", "Yaka"],
//         },
//       },
//     },
//   ],
//   "Alpin",
//   "Cokin"
// );
// // console.log(dapatHasil);
// s

// const dataCapil = [
//   {
//     nama: "Yucup",
//     istri: "Anwar",
//     anak: ["Ahay", "Goks"],
//     toko: {
//       jakarta: {
//         alamat: "Jalan bima",
//         nomor: 25,
//         sotrudnik: [
//           {
//             nama: "Anwar",
//             umur: 12,
//           },
//           {
//             nama: "Mak",
//             umur: 21,
//           },
//         ],
//       },
//       malang: {
//         alamat: "Jalan sorong",
//         nomor: 23,
//         sotrudnik: [
//           {
//             nama: "Rita",
//             umur: 56,
//           },
//           {
//             nama: "Oke",
//             umur: 87,
//           },
//         ],
//       },
//     },
//   },
//   {
//     nama: "Makar",
//     istri: "Olaf",
//     anak: ["aw", "asd", "Saol"],
//     toko: {
//       surabaya: {
//         alamat: "Jalan kalas",
//         nomor: 295,
//         sotrudnik: [
//           {
//             nama: "Mko",
//             umur: 42,
//           },
//           {
//             nama: "Alim",
//             umur: 12,
//           },
//         ],
//       },
//       london: {
//         alamat: "Jalan soki",
//         nomor: 123,
//         sotrudnik: [
//           {
//             nama: "Ako",
//             umur: 12,
//           },
//           {
//             nama: "Lama",
//             umur: 12,
//           },
//         ],
//       },
//     },
//   },
// ];
// // buat function bernama ubahDataDukCapil yang meneripa parameter yaitu
// // 1) dataCapil
// // 2) umur

// const umur = 25;
// function ubahDataDukCapil(parameter1, parameter2) {
//   parameter1[1].toko.london.sotrudnik[0].umur = parameter2; /////// mengganti umur ako menjadi par ke 2
//   // parameter1[1].toko.surabaya.sotrudnik[0].shift();
//   // console.log(parameter1[1].toko.london.sotrudnik[0]);
//   let terhapus = "";
//   terhapus = parameter1[1].toko.surabaya.sotrudnik.shift(); ////// mengghapus sotrudnik pertama makar di cabang surabaya
//   // console.log(parameter1[1].toko.surabaya.sotrudnik);
//   parameter1[0].toko.malang.sotrudnik.push(terhapus);
//   console.log(parameter1[0].toko.malang.sotrudnik);
//   ///// tambah sotrudnik pak yusuf cabang malang menjadi sotrudnik di toko pakk makar yang di hapus
//   return parameter1;
// }

// const dapatHasil = ubahDataDukCapil(dataCapil, umur);
// // // console.log(dapatHasil);

// ///////// excersice baru 26/sept
// const rumahSusun = [
//   {
//     blok: [
//       {
//         blokMawar: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "mahmud",
//                 istri: "maimunah",
//                 anak: ["messi", "ronaldo", "dembaba"],
//                 kendaraan: true,
//               },
//               {
//                 kepalaKeluarga: "mbappe",
//                 istri: "tejo",
//                 anak: "tesi",
//                 kendaraan: false,
//               },
//               {
//                 kepalaKeluarga: "diggea",
//                 istri: "lukas",
//                 anak: null,
//                 kendaraan: true,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         blokMelati: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "amir",
//                 istri: ["julaeha"],
//                 anak: ["bimbim", "iwan", "matdog"],
//                 kendaraan: true,
//               },
//               {
//                 kepalaKeluarga: "firly",
//                 istri: "lizabon",
//                 anak: ["ryan", "fao", "ilham"],
//                 kendaraan: true,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         blokButlerova: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "siska",
//                 istri: ["natasha"],
//                 anak: ["ilnaz"],
//                 kendaraan: false,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const transport = ["minicuper", "lada", "gelik", "devyatka"];
// const anakAsuh = [
//   {
//     pria: ["raffi", "marwan"],
//   },
//   {
//     wanita: ["bety", "jaenab", "berbi"],
//   },
// ];
///////=======> soal:
//// 1. terjadi insiden bahwa pak amir bercerai dengan istrinya dan menikah dengan istri bu siska
//// 2. keluarga diggea pindah ke blokButlerova
//// 3. pak mahmud mengadopsi 2 anak laki2 baru
//// 4. kelurag butlerova membeli mobil gelik

// function penghuniBlok(par1, par2, par3) {
//   //2
//   // let keluar = "";
//   // keluar = par1[0].blok[0].blokMawar[0].namaPenghuni.pop();
//   // par1[0].blok[2].blokButlerova[0].namaPenghuni.push(keluar);
//   // console.log(par1[0].blok[2].blokButlerova[0].namaPenghuni);
//   // //3
//   // par1[0].blok[0].blokMawar[0].namaPenghuni[0].anak = par3[0];
//   // console.log(par1[0].blok[0].blokMawar[0].namaPenghuni[0].anak);
//   // //4
//   // par1[0].blok[2].blokButlerova[0].namaPenghuni[0].kendaraan = par2[2];
//   // console.log(par1[0].blok[2].blokButlerova[0].namaPenghuni[0].kendaraan);
//   //1
//   par1[0].blok[1].blokMelati[0].namaPenghuni[0].istri.pop();
//   console.log(par1[0].blok[1].blokMelati[0].namaPenghuni[0].istri);
//   let nampung = "";
//   nampung = par1[0].blok[2].blokButlerova[0].namaPenghuni[0].istri.pop();
//   console.log(par1[0].blok[2].blokButlerova[0].namaPenghuni[0].istri);
//   // console.log(nampung);
//   par1[0].blok[1].blokMelati[0].namaPenghuni[0].istri.push(nampung);
//   console.log(par1[0].blok[1].blokMelati[0].namaPenghuni[0].istri);
//   return par1;
// }

// const totalPenghuni = penghuniBlok(rumahSusun, transport, anakAsuh);
// console.log(totalPenghuni);

/////// new excersice 1
// const
// if (fakhrul === "pindahan") {
//   console.log("kita bantu")
//  } else {
//   console.log("stay d merediyana 3")
//  }
// const alamatRumah = "Butlerova";
// const nomorRumah = 6;

// if (alamatRumah === "Butlerova" || nomorRumah === 12) {
//   console.log("komplek gue tuh");
// } else {
//   console.log("rumah sopo itu");
// }
// const makanan = ["plov", "bakso", "mie ayam"];
// const minuman = ["kompot", "pop ice", "latte"];
// const harga = [2400, 2500, 3000];
// // console.log("makanan.minuman.harga");

// if (makanan[0] === "plov" && minuman[0] === "kompot" && harga[2] === 3000) {
//   console.log("hemat banget");
// } else {
//   console.log("mahal ah");
//}
// const makanan = "plov";
// const minuman = "koimpot";
// let harga = 250;
// if (makanan && minuman && harga) {
//   console.log("hemat banget");
// } else {
//   console.log("mahal ah");
// }

/////////////// 28/sept
// const percobaan = "belum";
// console.log(`mau dilihat dulu ${percobaan}`);

// const namaMakan = ["ayam", "ikan", "tempe"];
// console.log(`menu warteg ${namaMakan}`);

//. percobaan dengan if else
//  harga
//  jika harga antara 12.000 dan 15.000 akan mendapat paket hemat 1
//  jika harga antara 16.000 dan 19.000 akan mendapat paket hemat 2
// jika harga lebih dari 19.000 dan seterusnya kan mendapat paket 3

// const harga = 22.0;
// if (harga >= 12.0 && harga < 15.0) {
// }
// console.log("paket hemat 1");
// else (harga >= 16.0 && harga > 19.0) {
// }
// console.log("paket hemat 2");
// else (harga >= 19.0);{
// }
//   console.log("paket hemat 3");

// console.log("paket hemat 3");

// const hargaBaru = 12.000;
// if (jika harga ==== 10.000) {
//   console.log("murah banget");

// //// 30 sept
// const harga = 100000;
// if (harga < 1100) {
//   console.log("murah");
// } else {
//   console.log("mahal");
// }

// // Soal SUSAH
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
// // -FUNCTION 0) Buat sebuah function dimana saat function tsb dicall, mengirimkan 2 argguments:
// // 1) variabel dataDiri diatas
// // 2) satu buah angka antara 1-3
// // -FUNCTION 1)buat sebuah function yang menerima data diri, dimana di function tersebut akan menghpaus value terakhir di riwayat kerja dari dataDiri tsb,
// // -FUNCTION 2)buat sebuah function yang menerima data diri, dimana di function tersebut merubah lama kerja di riwayat kerja ke-1 ke angka 5
// // -FUNCTION 3)buat sebuah function yang menerima data diri, dimana di function tsb menambahkan anak dari orang terseut,valuenya bebas
// function perenol (parameter1, parameter2) {

// }
// function pertama(namaDiri) {
//   namaDiri.riwayatKerja.pop();
//   return namaDiri;
// }
// function kedua(namaDiri) {
//   namaDiri.riwayatKerja[0].lamaKerja = 5;
//   return namaDiri;
// }
// function ketiga(namaDiri) {
//   namaDiri.anak.push("lutung");
//   return namaDiri;
// }
// console.log(namaDiri), ;

///// 2 okt
// let hour = 8;
// if (hour > 6) {
//   console.log("good morning");
// } else {
//   console.log("good evening");
// }

// const namaGuru = {
//   nama: "Anton",
//   gaji: 5000,
//   listSiswa: [
//     {
//       nama: "Beko",
//       umur: 20,
//     },
//     {
//       nama: "Alik",
//       umur: 23,
//     },
//   ],
// };
// // Buatlah sebuah function ke-0 bernama ubahDataDiri yang mengirimkan argumen namaGuru dan angka antara 1-10 (bebas angka berapa aja)
// // buatlah sebuah function ke-1 tambahSiswa yang mengirimkan argumen dari PARAMETER PERTAMA function ke 0, dimana di function tsb kita harus menambahkan listSiswa dengan nama dan umur apapun
// // buatlah sebuah function ke-2 kurangSiswa yang mengirimkan argumen dari PARAMETER PERTAMA function ke-0, dimana di fnct tsb kita harus menghapus siswa pertama dari listSiswa
// // lalu di function ke-0 buat jika parameter ke duanya adalah 1, maka call function ke-1, dan jika parameter ke duanya lebih besar dari 1 maka call function ke 2
// // CALL FUNCTION 0 tsb dengan 2 arguments

// function ubahDataDiri(parameter1, parameter2) {
//   if (parameter2 === 1) {
//     return tambahSiswa(parameter1);
//   } else if (parameter2 > 1) {
//     return kurangSiswa(parameter1);
//   }
//   return namaGuru;
// }
// function tambahSiswa(parameter1) {
//   parameter1.listSiswa.push({
//     nama: "meki",
//     umur: 6,
//   });
//   return parameter1;
// }
// function kurangSiswa(parameter1) {
//   parameter1.listSiswa.shift();
//   return parameter1;
// }

// const kenol = ubahDataDiri(namaGuru, 3);
// console.log(kenol);
/////////// ======== baru
// const namaGuru = {
//   nama: "Anton",
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
// // Buatlah sebuah function, dimana function tersebut menerima tiga parameter, pertama adalah namaGuru, kedua adalah angka 1-2 (bebas berapa aja), ketiga adalah angka 1-5 (bebas berapa aja)
// // jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan lamaMengajar PERTAMA di riwayatKerja dengan param yang dikirimkan, misal param ke-3 adalah 5 dan lamaMengajar pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10
// // jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan umur KEDUA di listSiswa dengan param yang dikirimkan, misal param ke-3 adalah 2 dan umur KEDUA di listSiswa adalah 20, maka umur KEDUA di listSiswa menjadi 22
// function dataData(par1, par2, par3) {
//   if (par2 === 1) {
//     return pertama(par1, par3);
//   } else if (par2 === 2) {
//     return kedua(par1, par3);
//   }
//   return namaGuru;
// }
// function pertama(a, b) {
//   let tambahan = a.riwayatKerja[0].lamaMengajar + b;
//   a.riwayatKerja[0].lamaMengajar = tambahan;
//   return a;
// }
// function kedua(x, y) {
//   let penambahan = x.listSiswa[1].umur + y;
//   x.listSiswa[1].umur = penambahan;
//   return x;
// }
// // console.log(par1.listSiswa[1].umur + par3);

// const total = dataData(namaGuru, 2, 5);
// console.log(total);
//////////// variabel
// const dataGuru = [
//   {
//     nama: "Anton",
//     riwayatKerja: [
//       {
//         sekolah: "SMA 4 Pekabanrau",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "SMA Penabur",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//       },
//       {
//         nama: "Alik",
//         umur: 20,
//       },
//     ],
//   },
//   {
//     nama: "Marsel",
//     riwayatKerja: [
//       {
//         sekolah: "GImnaziya 12 Kajan",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "Shkola 2 Bishkek",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//       },
//       {
//         nama: "Alik",
//         umur: 15,
//       },
//     ],
//   },
// ];

// // buatlah sebuah function bernama "app" dimana menerima parameter dataGuru dan true/false.
// // kedua,buat  function bernama switchStudents yang mengirimkan dataGuru, dimana di function tersebut kita menukar listSiswa 2 guru tsb, listSiswa Marsel menjadi listSiswa si Anton, dan sebaliknya, panggil dataGuru di function app
// // lalu jika parameter ke-2 dari function app adalah true maka return list siswa anton setelah diupdate di function switchStudents , dan jika parameter ke-2 dari function app adlaha false maka return list siswa Marsel setelah diupdate di function switchStudents

// function switchStudents(par1) {
//   const penampungan = par1[0].listSiswa; ///anton
//   const penampunganDua = par1[1].listSiswa; /// marsel
//   par1[1].listSiswa = penampungan;
//   par1[0].listSiswa = penampunganDua;
//   return par1;
// }
// function app(x, y) {
//   const penampunganSwitch = switchStudents(x);
//   if (y === true) {
//     return penampunganSwitch(0).listSiswa;
//   } else if (y === false) {
//     return penampunganSwitch(1).listSiswa;
//   }
// }

// // const total = app(dataGuru, true);
// console.log(dataGuru, true);

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
// // BUATLAH 4 FUNCTIONS BLYAAAAAAAAAAA
// // FUNCTION 0) Buat sebuah function dimana saat function tsb dicall, mengirimkan 2 argguments:
// // 1) variabel dataDiri diatas
// // 2) satu buah angka antara 1-3
// // FUNCTION 1)buat sebuah function yang menerima data diri, dimana di function tersebut akan menghpaus value terakhir di riwayat kerja dari dataDiri tsb,
// // FUNCTION 2)buat sebuah function yang menerima data diri, dimana di function tersebut merubah lama kerja di riwayat kerja ke-1 ke angka 5
// // FUNCTION 3)buat sebuah function yang menerima data diri, dimana di function tsb menambahkan anak dari orang terseut,valuenya bebas
// // dalam FUNCTION KE 0 NIH YAAAAA , JIKAAAAAAAAAAA param ke-2 sama dengan 1, panggil function ke 1 dan kirim dataDiri, DAN JIKAAAAAAAAAA param ke-2 sama dengan 2, panggil function ke 2 dan kirim dataDiri, DAN JIKAAAAA  param ke-2 sama dengan 3 maka panggil function ke 3 dan kirim dataDiri

// function kenol(par1, par2) {
//   if (par2 === 1) {
//     return pertama(par1);
//   } else if (par2 === 2) {
//     return kedua(par1);
//   } else {
//     return ketiga(par1);
//   }
// }
// function pertama(dataDiri) {
//   x.riwayatKerja.pop();
//   return dataDiri;
// }
// function kedua(dataDiri) {
//   dataDiri.riwayatKerja[0].lamaKerja = 5;
//   return dataDiri;
// }
// function ketiga(dataDiri) {
//   dataDiri.anak.push("penjul");
//   return dataDiri;
// }
// console.log(kenol(namaDiri, 3));
/////////// 3 oct
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

/// Buatlah sebuah function, dimana function tersebut menerima dua  parameter, pertama adalah namaDiri, kedua adalah angka 1-2 (bebas berapa aja)
// // jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1, dimana di function tsb akan menambahkan lamaKerja PERTAMA di riwayatKerja dengan param yang dikirimkan, misal param ke-2 adalah 5 dan lamaKerja pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10
// // jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 , dimana di function tsb akan menambahkan umur  di namaDiri dengan param yang dikirimkan, misal param ke-2 adalah 2 dan umur adalah 20, maka umur menjadi 22
// function pertama(par1, par2) {
//   if (par2 === 1) {
//     return kedua(par1, par2);
//   } else if (par2 === 2) {
//     return ketiga(par1, par2);
//   }
// }
// function kedua(namaDiri, p2) {
//   var save = namaDiri.riwayatKerja.lamaKerja + p2;
//   namaDiri.riwayatKerja[0].lamaKerja = save;
//   return namaDiri;
// }
// function ketiga(namaDiri, p2) {
//   var simpan = namaDiri.umur + p2;
//   namaDiri.umur = simpan;
//   return namaDiri;
// }
// console.log(pertama(namaDiri, 2));

///////// ======== baru
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
// // // Buatlah sebuah function, dimana function tersebut menerima tiga parameter, pertama adalah namaGuru, kedua adalah angka 1-2 (bebas berapa aja), ketiga adalah angka 1-5 (bebas berapa aja)
// // // jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan lamaMengajar kedua di riwayatKerja dengan param yang dikirimkan, misal param ke-3 adalah 5 dan lamaMengajar pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10
// // // jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan umur pertama di listSiswa dengan param yang dikirimkan, misal param ke-3 adalah 2 dan umur KEDUA di listSiswa adalah 20, maka umur KEDUA di listSiswa menjadi 22

// function semua(par1, par2, par3) {
//   if (par2 === 1) {
//     return pertama(par1, par3);
//   } else if (par2 === 2) {
//     return kedua(par1, par3);
//   }
// }
// function pertama(namaGuru, par2) {
//   // console.log(namaGuru);
//   // console.log(namaGuru.riwayatKerja[0].lamaMengajar);
//   let save = namaGuru.riwayatKerja[0].lamaMengajar + par2;
//   namaGuru.riwayatKerja[0].lamaMengajar = save;
//   // console.log(par2);
//   return namaGuru;
// // }
// function kedua(p1, p2) {
//   let simpan = p1.listSiswa[1].umur + p2;
//   p1.listSiswa[1].umur = simpan;
//   return p1;
// }
// const total = semua(namaGuru, 2, 10);
// console.log(total);

///////// soal ualngan
// const dataGuru = [
//   {
//     nama: "Anton",
//     riwayatKerja: [
//       {
//         sekolah: "SMA 4 Pekabanrau",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "SMA Penabur",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//       },
//       {
//         nama: "Alik",
//         umur: 20,
//       },
//     ],
//   },
//   {
//     nama: "Marsel",
//     riwayatKerja: [
//       {
//         sekolah: "GImnaziya 12 Kajan",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "Shkola 2 Bishkek",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//       },
//       {
//         nama: "Alik",
//         umur: 15,
//       },
//     ],
//   },
// ];
// // // buatlah sebuah function bernama "app" dimana menerima parameter dataGuru dan true/false.
// // // kedua,buat  function bernama switchStudents yang mengirimkan dataGuru, dimana di function tersebut kita menukar listSiswa 2 guru tsb, listSiswa Marsel menjadi listSiswa si Anton, dan sebaliknya, panggil dataGuru di function app
// // // lalu jika parameter ke-2 dari function app adalah true maka return list siswa anton setelah diupdate di function switchStudents , dan jika parameter ke-2 dari function app adlaha false maka return list siswa Marsel setelah diupdate di function switchStudents

// function app(p1, p2) {
//   if (p2 === true) {
//     return switchStudents(dataGuru);
//   } else if (p2 === false) {
//     return switchStudents(dataGuru);
//   }
//   return p1;
// }
// function switchStudents(par1, par2) {
//   const tukar = par1[0].listSiswa;
//   const tukar1 = par1[1].listSiswa;
//   par1[1].listSiswa = tukar;
//   par1[0].listSiswa = tukar1;
//   return par1;
// }
// // function tambahSiswa(par1, par)
// const total = app(dataGuru, true);
// console.log(app(dataGuru, true));
// console.log(app(dataGuru, true));

// function naonSihMemek() {
//   console.log("tai");
//   return "taiUcing";
// }
// naonSihMemek();

// function makan() {
//   console.log("berak");
//   return "tai";
// }
// makan();
// /////// soal baru
// const pondokKopi = [
//   {
//     namaJalan: "jalan Kenangan",
//     nomerRt: 10,
//     namaPenduduk: {
//       penghuni: [
//         {
//           kepalaKeluarga: "bejo",
//           istri: "tukinah",
//           anak: ["wawan", "jalal", "beni"],
//         },
//         {
//           kepalaKeluarga: "beni",
//           istri: "jelaueha",
//           anak: ["gusdur", "gusmifta"],
//         },
//       ],
//     },
//   },
//   {
//     namaJalan: "jalan purnawirawan",
//     nomerRt: 12,
//     namaPenduduk: {
//       penghuni: [
//         {
//           kepalaKeluarga: "dai",
//           istri: "tati",
//           anak: ["tatu", "teki", "teka"],
//         },
//         {
//           kepalaKeluarga: "daeng",
//           istri: "tuti",
//           anak: ["beni", "salih"],
//         },
//         {
//           kepalaKeluarga: "tajik",
//           istri: "uzbek",
//           anak: ["yakseme", "chedo", "altengsem"],
//         },
//       ],
//     },
//   },
// ];
// /////// soal!!
// ////// buat function yang bernama keluarga mempunyai 2 parameter, menerima pondokKopi dan 1-3 (bebas)
// ///// buat function yang bernama tukarNasib yang mana jika parameter ke 2 sama dengan 1 function tersebut mengirimkan pondokKopi, di function tersebut kita menukar anak dr bapak bejo dengan anak dr bapak tajik dan sebaliknya
// ///// buat function bernama tukarAnak yang mana jika parametr ke 2 sama dengan 2 maka, tambahkan jumlah anak terakhir dr bapak dai (terserah), dan anak pertama dari bapak daeng memisahkan diri.
// ///// kemudian buat function bernama pindahRumah jika parameter ke 2 sama dengan 3 maka, bapak tajik pindah ke jalan kenangan menggantikan pak beni
// function keluarga(par1, par2) {
//   if (par2 === 1) {
//     return tukarNasib(par1, par2);
//   } else if (par2 === 2) {
//     return tukarAnak(par1, par2);
//   } else if (par2 === 3) {
//     return pindahRumah(par1, par2);
//   }
//   return par1;
// }
// function tukarNasib(p1) {
//   const tukar = p1[0].namaPenduduk.penghuni[0].anak;
//   const tukarDua = p1[1].namaPenduduk.penghuni[2].anak;
//   p1[0].namaPenduduk.penghuni[0].anak = tukarDua;
//   p1[1].namaPenduduk.penghuni[2].anak = tukar;
//   return p1;
// }
// function tukarAnak(p1) {
//   p1[1].namaPenduduk.penghuni[0].anak.push("warno");
//   p1[1].namaPenduduk.penghuni[1].anak.shift();
//   //   console.log(p1[1].namaPenduduk.penghuni[0].anak);
//   //   console.log(p1[1].namaPenduduk.penghuni[0].anak);
//   //   return p1;
// }
// function pindahRumah(p1) {
//   const pindah = p1[1].namaPenduduk.penghuni[2];
//   const pindahDua = p1[0].namaPenduduk.penghuni[1];
//   p1[1].namaPenduduk.penghuni[2] = pindahDua;
//   p1[0].namaPenduduk.penghuni[1] = pindah;
//   //   console.log(pindah);
//   return p1;
// }
// const akhir = keluarga(pondokKopi, 2);
// console.log(akhir);
// console.log(pondokKopi[0].namaPenduduk.penghuni[0].anak);

/////// soal baru
// const dataGuru = [
//   {
//     nama: "Anton",
//     riwayatKerja: [
//       {
//         sekolah: "SMA 4 Pekabanrau",
//         lamaMengajar: 5,
//         jabatan: "honorer",
//       },
//       {
//         sekolah: "SMA Penabur",
//         lamaMengajar: 10,
//         jabatan: "honorer",
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//         angkatan: 2019,
//       },
//       {
//         nama: "Alik",
//         umur: 20,
//         angkatan: 2019,
//       },
//     ],
//   },
//   {
//     nama: "Marsel",
//     riwayatKerja: [
//       {
//         sekolah: "GImnaziya 12 Kajan",
//         lamaMengajar: 5,
//         jabatan: "tetap",
//       },
//       {
//         sekolah: "Shkola 2 Bishkek",
//         lamaMengajar: 10,
//         jabatan: "tetap",
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Beko",
//         umur: 20,
//         angkatan: 2018,
//       },
//       {
//         nama: "Alik",
//         umur: 15,
//         angkatan: 2018,
//       },
//     ],
//   },
// ];
// Buatlah sebuah function, dimana function tersebut menerima dua  parameter, pertama adalah namaDiri, kedua adalah angka 1-2 (bebas berapa aja)
// // jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1, dimana di function tsb akan menambahkan lamaKerja PERTAMA di riwayatKerja dengan param yang dikirimkan, misal param ke-2 adalah 5 dan lamaKerja pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10, dan mengubah status guru dersebut menjdi tetap
// // jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 , dimana di function tsb akan menambahkan umur  di namaDiri dengan param yang dikirimkan, misal param ke-2 adalah 2 dan umur adalah 20, maka umur menjadi 22
// function awal(par1, par2) {
//   if (par2 === 1) {
//     return pertama(par1, par2);
//   } else if (par2 === 2) {
//     return kedua(par1, par2);
//   }
//   return par1;
// }
// function pertama(p1, p2) {
//   var tambah = p1[0].riwayatKerja[0].lamaMengajar + p2;
//   p1[0].riwayatKerja[0].lamaMengajar = tambah;
//   p1[0].riwayatKerja[1].jabatan = "tetap";
//   //   console.log(p1[0].riwayatKerja[0].lamaMengajar);
//   return p1;
// }
// function kedua(p1, p2) {
//   var tambahan = p1[1].listSiswa[1].umur + p2;
//   p1[1].listSiswa[1].umur = tambahan;
//   p1[1].listSiswa[0].angkatan = 2020;
//   console.log(p1[1].listSiswa[0].angkatan);
//   return p1;
// }

// const total = awal(dataGuru, 2);
// console.log(total);
// const dataSiswa = {
//   nama: "rahmat",
//   kelas: 12,
//   negara: "indonesia",
//   sekoalh: "Sd Negri serang 2",
//   beasiswa: true,
//   penghargaan: ["american award", "cerdas tatrstan", "makan kerupuk"],
// };
// ////  buat function tentang analisPelajar, dengan 2 parameter dataSiswa dan kedua bentuk boeelean,
// ////  buat  function selanjutnya yang mana mengirimkan parameter 1, dmann merubah kelas anak itu menjadi 10 jika memang parameter keduanya adalah truee
// //// buat function selanjutnya yang mengirim parameter 1, yang mana merubah penghargaan anak itu dan bertambah penghargaan kampng jiak par2 nya adalah false
// function analisPelajar(par1, par2) {
//   if (par2 === true) {
//     return satu(par1, par2);
//   } else if (par2 === false) {
//     return dua(par1, par2);
//   }
//   return par1;
// }
// function satu(par1, par2) {
//   par1.kelas = 10;
//   console.log("hello world");
//   //   console.log(par1.kelas);
//   return par1;
// }
// function dua(p1, p2) {
//   p1.penghargaan.push("penghargaan kampung");
//   console.log("memek");
//   //   console.log(p1.penghargaan);
//   return p1;
// }
// const total = analisPelajar(dataSiswa, false);
// console.log(total);
// ///////// ssoal baru
// const dataAnak = {
//     nama: "muhamad",
//     tahunLahir: 2000,
//     asal:"surabaya",
//     umur: 22,

// }
// const nama = "hello world";
// console.log("hello world");
//////// soal baru 7 oktober
// const dataSiswa = [
//   {
//     nama: "Anjul",
//     alamat: "Bekasi",
//     mapel: [
//       {
//         namaMapel: "Math",
//         nilai: 5,
//       },
//       {
//         namaMapel: "Science",
//         nilai: 9,
//       },
//     ],
//   },
//   {
//     nama: "Aksam",
//     alamat: "Jakarta",
//     mapel: [
//       {
//         namaMapel: "Math",
//         nilai: 1,
//       },
//       {
//         namaMapel: "Science",
//         nilai: 7,
//       },
//     ],
//   },
// ];

//   Buatlah sebuah function bernama getScore dimana menerima 3 parameter,pertama adalah dataSiswa dan kedua, adalah "Eropa/Rusia", dan ketiga adalah angka 1-3
//   Jika parameter kedua adalah Eropa, maka akan memanggil function bernama getScoreEurope yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama getScore, dan argumen keduanya adalah parameter ke 3 dari getScore|, di function tsb jika parameter ke-2 nya adalah 1, maka akan membandingkan nilai dari mapel pertama setiap siswa|, jika parameter ke-2 nya adlah 2, maka akan memandingkan nilai dari mapel kedua setiap siswa|, dan jika nilai pertama dari murid pertama tersebut lebih besar maka return "Nilai murid pertama adalah 1"|, dan jika nilai pertama dari murid kedua tersebut lebih besar maka return "Nilai murid kedua adalah 1"|
//   Jika parameter kedua adalah Rusia, maka akan memanggil function bernama getScoreRussia yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama getScore, dan argumen keduanya adalah parameter ke-3 dari getScore, di function tsb jika parameter ke-2 nya adalah 1, maka akan membandingkan nilai dari mapel pertama setiap siswa, jika parameter ke-2 nya adlah 2, maka akan memandingkan nilai dari mapel kedua setiap siswa, dan jika nilai pertama dari murid pertama tersebut lebih besar maka return "Nilai murid pertama adalah 5", dan jika nilai pertama dari murid kedua tersebut lebih besar maka return "Nilai murid kedua adalah 5"
// function getScore(dataSiswa, param2, param3) {
//   if (param2 === "Eropa") {
//     return getScoreEurope(dataSiswa, param3);
//   } else if (param2 === "Russia") {
//     return getScoreRussia(dataSiswa, param3);
//   }
// }
// console.log(getScore(dataSiswa, "Russia", 2));

// function getScoreEurope(param1, param2) {
//   if (param2 === 1) {
//     // console.log(param1[0].mapel[0].nilai, "this is line 1628");
//     // console.log(param1[1].mapel[0].nilai, "this is line 1629");
//     if (param1[0].mapel[0].nilai > param1[1].mapel[0].nilai) {
//       //   console.log(param1[0].Mapel[0].nilai, "this is line 1626");
//       return "Nilai murid pertama adalah 1";
//     } else {
//       return "Nilai murid kedua adalah 1";
//     }
//   } else if (param2 === 2) {
//     if (param1[0].mapel[1].nilai > param1[1].mapel[1].nilai) {
//       return "Nilai murid kedua adalah 1";
//     } else {
//       return "Nilai murid pertama adalah 1";
//     }
//   }
// }
// function getScoreRussia(p1, p2) {
//   if (p2 === 1) {
//     console.log(p1[0].mapel[0].nilai, "this is line 1646");
//     console.log(p1[1].mapel[0].nilai, "this is line 1647");
//     if (p1[0].mapel[0].nilai > p1[1].mapel[0].nilai) {
//       return "Nilai murid pertama adalah 5";
//     } else {
//       return "Nilai murid kedua adalah 5";
//     }
//   } else if (p2 === 2) {
//     if (p1[0].mapel[1].nilai > p1[1].mapel[1].nilai) {
//       return "Nilai murid kedua adalah 5";
//     } else {
//       return "Nilai murid pertama adalah 5";
//     }
//   }
// }
//////// soal baru 8 okt
// const dataSiswa = [
//   {
//     nama: "amir",
//     alamat: "jalan bintara",
//     prestasi: {
//       namaPrestasi: "aikido",
//       jumlah: 22,
//     },
//   },
//   {
//     nama: "juan",
//     alamat: "jalan pangaribuan",
//     prestasi: {
//       namaPrestasi: "karate",
//       jumlah: 12,
//     },
//   },
// ];
//   Buatlah sebuah function bernama atlit dimana menerima 3 parameter,pertama adalah dataSiswa dan kedua, adalah "nasional/inter", dan ketiga adalah angka 1 atau 2
//   Jika parameter kedua adalah nasional, maka akan memanggil function bernama atlitNasional yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama atlit, dan argumen keduanya adalah parameter ke 3 dari atlit|, di function tsb jika parameter ke-2 nya adalah 1, maka akan membandingkan jumalh dari prestasi  siswa|, jika parameter ke-2 nya adlah 2, maka akan memandingkan jumalh prestasi siswa , dan jika jumalh prestasi dr atlit pertama lebih besar dari jumlah atlit ke 2  return "Nilai siswa pertama adalah 1"|, dan jika jumalah prestasi  lebih besar maka return "Nilai siswa kedua adalah 1"|
//   Jika parameter kedua adalah Rusia, maka akan memanggil function bernama getScoreRussia yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama getScore, dan argumen keduanya adalah parameter ke-3 dari getScore, di function tsb jika parameter ke-2 nya adalah 1, maka akan membandingkan nilai dari mapel pertama setiap siswa, jika parameter ke-2 nya adlah 2, maka akan memandingkan nilai dari mapel kedua setiap siswa, dan jika nilai pertama dari murid pertama tersebut lebih besar maka return "Nilai murid pertama adalah 5", dan jika nilai pertama dari murid kedua tersebut lebih besar maka return "Nilai murid kedua adalah 5"
// function atlit(dataSiswa, param2, param3) {
//   if (param2 === "nasional") {
//     return atlitNasional(dataSiswa, param3);
//   } else {
//   }
// }
// console.log(atlit(dataSiswa, "nasional", 1));
// function atlitNasional(param1, param2) {
//   if (param2 === 1) {
//     console.log(param1[0].prestasi.jumlah, "this is for line 1692");
//     console.log(param1[1].prestasi.jumlah, "thsi is for line 1693");
//     if (param1[0].prestasi.jumlah > param1[1].prestasi.jumlah) {
//       return "Nilai siswa pertama adalah 1";
//     } else {
//       return "Nilai siswa kedua adalah 1";
//     }
//   } else if (param2 === 2) {
//     if (param[0].prestasi.jumlah > param1[1].prestasi.jumlah) {
//       return "Nilai siswa kedua adalah 1";
//     } else {
//       return "Nilai siswa pertama adalah 1";
//     }
//   }
// }
/* <button onclick="displayDate()">The time is?</button>; */
// buat sebulah function bernama oddOrEven dimana menerima 1 parameter berjenis number, dimana di function tersebut akan mendeteksi apakah number itu adalah genap apa ganjil, jika genap, makan akan me-return tulisan "Angka n adalah genap" jika ganjil, makan angakn me-return tulisan "Angka n adalah ganjil", dimana n adalah parameter tsb

// function oddOrEven(alvin) {
//   //   var n = 100;
//   //   console.log(`angka ${n} adalah genap `);
//   console.log(alvin, "<=====1");
//   if (alvin % 2 == 0) {
//     // console.log(alvin, "<=====2"); ////// bukan masuk dalam kondisi, makanya ga muncul di terminal.
//     return `angka ${alvin} adalah genap `;
//   } else {
//     // console.log(alvin, "<=====3"); ///// karena dia mau ga mau akan memunculkan kondisi lawan/tektokan
//     return `angka ${alvin} adalah ganjil `;
//   }
// }
// // oddOrEven(2);
// console.log(oddOrEven(3));
// let waktu = 18;
// let greeting = ""; /// di buat kosong agar di dalam kondisi di masukin value baru
// if (waktu > 10) {
//   greeting = "selamat pagi"; //// value baru di greeting
// } else {
//   greeting = "selamat malam";
// }
// console.log(greeting);
////////========>
// const dataSensus = [
//   {
//     nama: "Untung",
//     listAnak: ["Koali", "Panci"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay", "Bacu", "Lanjay"],
//   },
// ];
//   buat sebuat function dimana menerima 2 buat parameter, parameter pertama adalah dataSensus, kedua adalah angka 0-2, dimana parameter ke dua tsb adalah urutan dataSensus

//   jika listAnak urutan dataSensus tsb adalah 1, maka kita return 'anak sedikit', jika listAnak urutan dataSensus tsb adalah 2, maka return 'sudah mengikuti program KB', jika listAnak urutan dataSensus tsb adalah 3 maka return 'kelebihan anak'
// function dataData(dataSensus, param2) {
//   //   console.log(dataSensus, "ini param1");
//   //   console.log(param2, "ini param 2");
//   //   console.log(dataSensus[0].listAnak.length, "ini adalah length");
//   //   console.log(dataSensus[1].listAnak);
//   //   console.log(dataSensus[2].listAnak);
//   if (dataSensus[param2].listAnak.length === 1) {
//     return "anak sedikit";
//   } else if (dataSensus[param2].listAnak.length === 2) {
//     return "sudah mengikuti program KB";
//   } else if (dataSensus[param2].listAnak.length === 3) {
//     return "kelebihan anak";
//   }
// }
// console.log(dataData(dataSensus, 0));
////////=======>
// buat sebuah function yang menerima 3 parameter, angka1, angka2 dan op, dimana op (add,subtract,multiply)
// jika op adalah add, maka return "Sum of  angka1 and angka2 is hasilPenambahan"
// jika op adalah subtract, maka return "Difference of  angka1 and angka2 is hasilPengurangan"
// // jika op adalah multiply, maka return "Product of  angka1 and angka2 is hasilPerkalian"
// function lolo(param1, param2, param3) {
//   //   add = param1 + param2;
//   var x = param1 + param2;
//   var y = param1 - param2;
//   var z = param1 * param2;

//   if (param3 === "add") {
//     return `Sum of  ${param1} and ${param2} is ${x}`;
//   } else if (param3 === "subtract") {
//     return `Difference of   ${param1} and ${param2} is ${y}`;
//   } else if (param3 === "multiply") {
//     return `Product of  ${param1} and ${param2} is ${z}`;
//   }
// }
// // console.log(lolo(6, 4, "add"));
// // console.log(lolo(6, 4, "subtract"));
// console.log(lolo(6, 4, "multiply"));

// function add(par1, par2, par3) {
//   var x = par1 + par2;
//   var y = par1 / par2;
//   var z = par1 * par2;
//   if (par3 === "add") {
//     return `it will be ${par1} and ${par2} equals ${x}`;
//   } else if (par3 === "division") {
//     return `it will be ${par1} and ${par2} equals ${y}`;
//   } else if (par3 === "Multiplication") {
//     return `it will be ${par1} and ${par2} equals ${z}`;
//   }
// }
// console.log(add(3, 5, "Multiplication"));
// function nambahTambah(dataSensus, par2) {
//   //   console.log(dataSensus);
//   //   console.log(par2);
//   //   console.log(dataSensus[0].listAnak);
//   if (dataSensus[par2].listAnak.length === 0) {
//     return "anak sedikit";
//   } else if (dataSensus[par2].listAnak.length === 1) {
//     return "sudah mengikuti program KB";
//   } else if (dataSensus[par2].listAnak.length === 2) {
//     // console.log(dataSensus[par2].listAnak.length);
//     return "kelebihan anak";
//   }
// }
// console.log(nambahTambah(dataSensus, 2));
// Setup
// function testEqual(val) {
//   if (val === "10") {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testEqual(10));
// function testEquality(par1, par2) {
//   if (par1 === 3 && par2 === 2) {
//     return `angka ${par1} adalah ganjil dan ${par2} adalah genap`;
//   } else {
//     return `angka ${par1} adalah genap dan ${par2} adalah ganjil`;
//   }
// }
// console.log(testEquality(5, 2));
///////======>
// function test(memek) {
//   if (memek >= 2 && memek <= 2) {
//     return "yes";
//   } else {
//     return "no";
//   }
// }
// console.log(test(2));
// function cobaSatu(p1, p2) {
//   if (p1 === 2 || p1 === 3) {
//     return "benar";
//   } else {
//     return "salah";
//   }
// }
// console.log(cobaSatu(2));
// function tebak(par1, par2, par3) {
//   if (par2 === 2) {
//     return par3;
//   } else if (par2 === 3) {
//     return par1;
//   } else if (par2 === 4) {
//     return par3 + par1;
//   }
// }
// console.log(tebak(2, 4, 5));
// const buah = ["nanas", "anggur", "melon", "apel", "semangka"];
// // buah.shift();
// // buah.pop();
// // buah[2] = "pear";
// // console.log(buah);
// buah.fill("durian");
// console.log(buah);
// let secretMessage = [
//   "Learning",
//   "is",
//   "not",
//   "about",
//   "what",
//   "you",
//   "get",
//   "easily",
//   "the",
//   "first",
//   "time,",
//   "it",
//   "is",
//   "about",
//   "what",
//   "you",
//   "can",
//   "figure",
//   "out.",
//   "-2015,",
//   "Chris",
//   "Pine,",
//   "Learn",
//   "JavaScript",
// ];
// secretMessage.fill("error");
// console.log(secretMessage);

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val > 20 || val < 10) {
//     return "Outside";
//   }

//   // Only change code above this line
//   else return "Inside";
// }

// console.log(testLogicalOr());

// function testElse(val) {
//   let result = "";
//   if (val > 5 || val > 10) {
//     result = "Bigger than 5";
//     return result;
//   } else {
//     result = "5 or Smaller";
//     return result;
//   }
//   // Only change code above this line
// }
// console.log(testElse(4));
// const namaPengasuh = [
//   {
//     orangTua: "bejo",
//     istri: "beni",
//     alamat: "Jl Jati Bening 13",
//     anak: ["sama", "sami", "joni", "bejul"],
//   },
//   {
//     orangTua: "samsul",
//     istri: "yusup",
//     alamat: "Jl Babakan 21",
//     anak: ["salsa", "asu", "asi", "beti"],
//   },
// ];
// const simpanan = namaPengasuh[0].anak.pop();
// namaPengasuh[1].anak.push(simpanan);
// namaPengasuh[0].anak.fill("error");
// console.log(namaPengasuh);

// function acakKadul(param1, param2, param3) {
//   console.log(param1);
//   console.log(param2);
//   console.log(param3);
//   if ((param3 = 2)) {
//     return param1;
//   } else if ((param3 = 4)) {
//     return param2;
//   }
// }
// console.log(acakKadul(namaPengasuh, dataSensus, 2));
// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 15) {
//     return "Less than 15";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }

// console.log(orderMyLogic(7));
// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return "Tinnyy";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Big";
//   } else {
//     return "Huge";
//   }

//   return "Change Me";
//   // Only change code above this line
// }
// console.log(testSize(221));
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// function golfScore(param2, param3) {
//   var edit = param2.pop();
//   //   console.log(edit);
//   var editTwo = param2.shift();
//   //   console.log(editTwo);
//   if (param3 === 1) {
//     return edit;
//   } else if (param3 === 2) {
//     return editTwo;
//   }
// }
// console.log(golfScore(names, 1));
// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes === 1) {
//     return "Hole-in-one!";
//   } else if (strokes <= par - 2) {
//     return "Eagle";
//   } else if ((strokes, par - 1)) {
//     return "Birdie";
//   } else if (strokes == par) {
//     return "Par";
//   } else if (strokes == par + 1) {
//     return "Bogey";
//   } else if (strokes == par + 2) {
//     return "Double Bogey";
//   } else if (strokes >= par + 3) {
//     return "Go Home!";
//   }

//   return "Change Me";
//   // Only change code above this line
// }

// console.log(golfScore(6, 8));
// const namaKendaraan = [
//   {
//     asalNegar: "jepang",
//     jenis: "sedan",
//     tahun: "2018 - 2020",
//     namaProduk: ["yaris", "jazz", "civic", "kijang"],
//   },
//   {
//     asalNegar: "jerman",
//     jenis: "jeep",
//     tahun: "2010 - 2019",
//     namaProduk: ["gelik", "bwm lama", "bwm kotak", "mersi pak harto"],
//   },
//   {
//     asalNegar: "asia tenggara",
//     jenis: "campur",
//     tahun: "2019 - 2022",
//     namaProduk: ["smk", "proton", "mobil listrik"],
//   },
// ];
// function perubahanMobil(param1) {
//   const save = param1[0].namaProduk.pop();
//   // console.log(save);
//   param1[1].namaProduk.unshift(save);
//   // console.log(param1[1].namaProduk);
//   // console.log(param1[0].namaProduk);
//   //   const saveDua = "futura";
//   //   param1[1].namaProduk.push(saveDua);
//   //   console.log(saveDua);
//   //   console.log(param1[1].namaProduk);
//   //   param1[2].namaProduk.fill("error");
//   //   console.log(param1[2].namaProduk);
// }
// perubahanMobil(namaKendaraan);
// const grocery1 = ["blueberries", "eggs", "artichoke"];
// const grocery2 = ["milk", "cookies"];

// const grocery = grocery1.concat(grocery2);

// //
// const namaPemainUtama = ["mahmud", "nail", "maul", "recup", "ilmir"];
// const namaPemainCadangan = ["dewa", "iil", "itok", "firly"];
// const pertandingan = namaPemainUtama.concat(namaPemainCadangan);
// // console.log(pertandingan);
// const kickballPlayers = [
//   { name: "Jim", team: "Red" },
//   { name: "Bob", team: "Red" },
//   { name: "Sarah", team: "Blue" },
//   { name: "Alex", team: "Red" },
//   { name: "James", team: "Blue" },
//   { name: "Sam", team: "Blue" },
//   { name: "Peter", team: "Red" },
//   { name: "Michael", team: "Red" },
//   { name: "Kenny", team: "Blue" },
//   { name: "Matt", team: "Blue" },
// ];

// const redTeam = kickballPlayers.filter((player) => player.team === "Red");

// //
// // const valuees = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const valuees = values.filter((elemen) => elemen % 2 === 0);
// // console.log(value); // [ 2, 4, 6, 8 ]
// const anakKos = [
//   /////// array filter
//   {
//     namaPenghuni: "Afrwan",
//     alamat: "jalan malioboro 22",
//     status: "lajang",
//   },
//   {
//     namaPenghuni: "valdo",
//     alamat: "jalan maliobro 23",
//     status: "nikah",
//   },
//   {
//     namaPenghuni: "jajang",
//     alamat: "jalan malioboro 24",
//     status: "nikah",
//   },
// ];
// const sudahNikah = anakKos.filter((anakKos) => anakKos.status === "nikah"); ///// dalam kasus ini kita mengeluarkan hanya yg sudah menikah
// // console.log(sudahNikah);
// const shipingBox = [2011, 2012, 2013, 2014, 2015, 2010];
// // console.log(shipingBox);
// const firstLevel = shipingBox.find((element) => element < 2011);
// // console.log(firstLevel);
// const namaPemain = [
//   {
//     team: "kriket india",
//     anggota: ["raju", "suresh", "kumar", "zaebal"],
//     win: 13,
//   },
//   {
//     team: "kriket pakistan",
//     anggota: ["damir", "santop", "klewang", "samu"],
//     win: 8,
//   },
//   {
//     team: "kriket bangladesh",
//     anggota: ["kiril", "kuresh", "ilmir", "susu"],
//     win: 2,
//   },
// ];
// const winerThisYear = namaPemain.filter(
//   (namaPemain) => namaPemain.team === "kriket india"
// );
// // console.log(winerThisYear);
// const namaMakanan = ["pizza", "pasta", "burger", "donat", "kebab"];
// const favouriteFood = namaMakanan.findIndex((makanan) => {
//   return makanan === "kebab";
// });
// // console.log(favouriteFood);
// const jumlah = [7, 17, 34, 41, 22, 5]; ////// aray forEach
// let sumOfValues = 5;
// jumlah.forEach((jumlah) => (sumOfValues += jumlah));
// // console.log(sumOfValues);
// const number = [2, 3, 4, 5, 6, 7];
// number.forEach((element, index, array) => {
//   // console.log("awalan:", element, "tenggah:", index, "akhir:", array);
// });
// const jumlahJumlah = [1, 2, 3, 4, 5, 6];
// jumlahJumlah.forEach((element, index) => {
//   jumlahJumlah[index] = element * 2;
// });
// // console.log(jumlahJumlah);
// const tumbuhan = ["kaktus", "jambu", "lidah buaya", "lidah mertua", "lavender"];
// const adaJambu = tumbuhan.includes("jambu");
// // console.log(adaJambu);
// const adaJembut = tumbuhan.includes("jembut");
// // console.log(adaJembut);
// const mukbang = [1, 2, 3, 4, 5];
// const mukbangBang = mukbang.indexOf();
// // console.log(mukbangBang);
// ////// ======>
// const gameObjects = ["rock", "paper", "scissors"];
// const joinNoSeparator = gameObjects.join();
// const joinWithSeparator = gameObjects.join(" + ");

// // console.log("Separator: ", joinNoSeparator);
// // // program to display text 5 times
// // const n = 40;

// ================================================================> looping for start

// // // looping from i = 1 to 5
// // for (let i = 1; i <= n; i++) {
// //   console.log(`Saya suka meki.`);
// // }
// ////// =====> need
// // const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// // let text = "";
// // for (let x = 0; x > cars.length; x--) {
// //   text += cars[x] + "<br>";
// // }
// // // console.log(cars);
// // let tulisan = [1, 2, 3, 4, 5];
// // for (let x = 0; x > 0; x--) {
// //   tulisan += cars[x] + "<br>";
// // }
// // for (counter = 10; counter > 0; counter--) {
// //   cars.tulisan("<p>Perulangan ke " + counter + "</p>");
// // }

// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
//     case 1:
//       answer = "pertama";
//   }

//   // Only change code above this line
//   return answer;
// }

// console.log(caseInSwitch(1));
// s
// let tambah = "+";
// for (let i = 5; i > 0; i--) {
//   console.log(tambah);
// }
// let tambah = "++++++";
// let lain = "+++++++";
// for (let i = 0; i < 5; i++) {
//   tambah = tambah.slice(0, -1);
//   // console.log(tambah);
//   if (i === lain) {
//     for (let j = i - 1; 0 < j; j--) {
//       tambah = tambah.slice(0, 1);
//       // console.log(tambah);
//     }
//   }
//   tambah = tambah.slice(0, -1);
//   // console.log(tambah);
//   let plus = "";
//   plus += "++++++";
//   // console.log(tambah);
// }
// console.log(tambah);
// let plus = "++++++";
// for (let i = 1; i < 5; i++) {
//   plus = plus.slice(0, -1);
//   // console.log(i);
//   if (i === "+++++") {
//     for (let j = i - 1; 0 < j; j--) {
//       plus = plus.slice(0, -1);
//       // console.log(j);
//     }
//   }
// }
// let segitiga = "++++++";
// for (let i = 1 + 5; i < 5 + 5; i++) {
//   segitiga = segitiga.slice(0, -1);
//   // console.log(segitiga);
// }
// // console.log(segitiga);
// let pengurangan = "------";
// for (let i = 0 + 5; i < 5 + 5; i++) {
//   pengurangan = pengurangan.slice(0, -1);
//   // console.log(pengurangan);
// }
// // For Loop =========>
// // for ( //kondisi ){

// // }
// for (let i = 10; i > 0; i--) {
//   // console.log(i);
// }
// // ======>
// for (let x = 0; x < 10; x++) {
//   // console.log(x);
// }
// // ======>
// function loop(param1) {
//   for (let x = param1; x > 0; x--) {
//     console.log(x);
//     // return param1;
//   }
// }
// loop("makan");

////////============> 16 oct fao camp
// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];
// // buat return nya sebuah array, yang isinya object berisi hanya id dan email setiap orang
// let newArry = [];
// for (let i = 0; i < users.length; i++) {
//   let x = {
//     first_name: users[i].first_name,
//     last_name: users[i].last_name,
//     // id: users[i].id,
//     // email: users[i].email,
//   };
//   newArry.push(x); /////disini tekhniknya kita buat var yg isinya array, terus buat lopnya dan buat didalamnya sebuah new var yang mengandung objek lalu di akhir kita push jke dalam var objek yg dibuat
// }
// console.log(newArry);

/// ======>
// halo2
// halo4
// halo6
// for (let i = 2; i < 7; i = i + 2) {
//   console.log("hello" + i);
// }
// i = 2, i < 7,
// hello2, i = i + 1
// i = 3 , i < 7
// hello3

///////// 16 fao bootcamp
// buat sebuah loop dimana mulainya dari 0 sampai 10 dimana, penambahannya 1
// ekspektasi:
// jika angka itu adalah genap, maka tampilan ke terminal, jika ganjil, abaikan
// for (let i = 0; i < 11; i = i + 1) {
//   if (i % 2 === 1) { //////%habis di bagi jd 20 % 2 artinya 20 dibagi2 terus sampai habis
//     console.log("angka genap" + i);
//   }
// }

////=========>
// balik 8
// balik 4
// // balik 0
// var i = 12;
// for (let i = 12; i >= 0; i = i - 4) {
//   console.log(`balik ${i}`);
// }
// /// i = 8, 8 > 0, balik8, 8=8-4
// /// 1 = 4, 4 > 0, balik4 4=4-4
// /// i = 0, 0>0,

///// =======>
// const namaMurid = ["Adam", "Levigne", "Angka", "Jado"];
// console.log(namaMurid.length);
// Adam Genap
// Levigne Ganjil
// Angka Genap
// Jado Ganjil
// for (let i = 0; i < namaMurid.length; i = i + 1) {
//   if (i % 2) {
//     console.log(namaMurid[i], "ganjil");
//   } else {
//     console.log(namaMurid[i], "genap");
//   }
// }
//// i = 0, i < 4,  i = i + 1
//// i = 1, i < 4, else , i = i + 1
//// i = 2, i < 4,

/////=====>
// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];
// const urutan = [1, 4]; //// 0,1 (nomor indexs/urutan array)
// // var x = "drop out";
// // buat sebuah loop yang menentukan kalau urutan users tersebut 2/3, maka first_name nya jadi "acislit"
// for (let i = 0; i < users.length; i++) {
//   if (i === urutan[0] || i === urutan[1]) {
//     users[i].first_name = "drop out";
//   }
// }
// console.log(users);

////// ======>
// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];
// bikin sebuah function dimana menerima 2 parametes, parameter pertama adalah array users diatas, sedangkan paremeter ke-2 adalah angka antara 4-6
// parameter ke dua adalah panjang first_name yang harus kita return dalam bentuk ARRAY
// contoh:
// parameter1: users
// parameter2: 4
// function x(param1, param2) {
//   console.log(param1);
//   console.log(param2);
//   var x = param1[1];
//   var y = param1[2];
//   if (param2 === param1) {
//     console.log(param2);
//     return param1;
//   }
// }
// console.log(x(users, 4));

//////// ========> harus ulang
// const cariAngka = [2, 35, 3, 107, 34, 467, 34, 345, 223];
// buat sebuah fungction yang menerima 2 parameter,
// parameter pertama adalah cariAngka, parameter ke dua adalah angka 1 atau 2
// jika parameter ke-2 adalah 1 maka akan mereturn angka terkecil di sebuah parameter 1, berarti akan keluar 2
// jika parameter ke-2 adalah 2 maka akan mereturn angka terbesar di sebuah parameter 1, berarti akan keluar 467
// var x = cariAngka[0];
// function nama(par1, par2) {
//   console.log(par1);
//   console.log(par2);
//   for (let i = 0; 1 < cariAngka.length; i++) {
//     if (par1[i] < par1) {
//       console.log(par1);
//     }
//   }
// }
// nama(cariAngka, 1);
// const nilaiTengah = [2, 35, 3]; // 35
// var x = nilaiTengah[2];
// // const nilaiTengah = [6, 8, 3, 6, 1, 8];  // 4.5
// for (let i = 0; i < nilaiTengah.length; i++) {
//   if () {

//   }
// }
// pelajarFaoCamp = ["firli", "ryan", "ilham"];
// function nama(par1, par2) {
//   // console.log(par1);
//   for (let i = 0; i < pelajarFaoCamp.length; i++) {
//     if (par2 === 1) {
//       ("kang coli");
//     } else {
//       ("mesum");
//     }
//   }
// }
// console.log(nama(pelajarFaoCamp, 1));

////========> tampungan soal sebelumnya
// var x = [];
// for (let i = 0; i < users.length; i++) {
//   let tampung = {
//     id: users[i].id,
//     first_name: users[i].first_name,
//   };
//   x.push(tampung);
// }
// console.log(x);

////========>
// const cariAngka = [2, 35, 3, 107, 34, 467, 34, 345, 223, 1234];
// function app(param1, param2) {
//   // console.log(param1);
//   // console.log(param2);
//   if (param2 === 1) {
//     ////cari angka terkecil
//     let x = 1000000;
//     for (let i = 0; i < param1.length; i++) {
//       // console.log(i);
//       // console.log(x);
//       if (param1[i] < x) {
//         x = param1[i];
//       }
//     }
//     return x;
//   } else {
//     //// caria angka terbesar
//     let y = 12;
//     for (let j = 0; j < param1.length; j++) {
//       // console.log(j);
//       if (param1[j] > y) {
//         y = param1[j];
//       }
//     }
//     return y;
//   }
// }
// // console.log(app(cariAngka, 2));

// //////=====> cari nilai tengah
// // const nilaiTengah = [1, 2, 3, 4, 5, 5, 5, 4, 3, 3];
// // for (let i = 0; i < nilaiTengah.length; i++) {
// //   const mid = Math.floor(nilaiTengah.length / 2);
// //   nums = [i].sort()
// // }
// const nilaiTengah = [1, 2, 3, 4, 9, 5, 5, 4, 3];
// // const nilaiTengah = [1, 2, 3, 4, 5, 5, 5, 4, 3, 3];
// // Array.sort((a, b) => a - b); ////zalupa
// let median;
// for (let i = 0; i < nilaiTengah.length; i++) {
//   if (nilaiTengah.length % 2 != 0) {
//     let middleIndex = Math.floor(nilaiTengah.length / 2);
//     median = nilaiTengah[middleIndex];
//   } else {
//     let middleIndex = Math.floor(nilaiTengah.length / 2);
//     median = (nilaiTengah[middleIndex] + nilaiTengah[middleIndex + 1]) / 2;
//   }
// }
// if (nilaiTengah.length % 2 != 0) {
//   let middleIndex = Math.floor(nilaiTengah.length / 2);
//   median = nilaiTengah[middleIndex];
// } else {
//   let middleIndex = Math.floor(nilaiTengah.length / 2);
//   median = (nilaiTengah[middleIndex] + nilaiTengah[middleIndex + 1]) / 2;
// }
// console.log(median);

// array = ["fao", "alvin", "ryan"];
// /*
// fao
// alvin
// ryan
// */

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// i = 0,i < array.length, cl(array[0]), fao
// i = 1, 1 < array.lenth, cl(array[1]), alvin
// i = 2, 2 < array.length, cl (array[2]), ryan
// i = 3 , 3 <3

// array = [1, 2, 3, 4, 5, 6, 7, 8];
// var x = array;
// for (let i = 0; i < array.length; i++) {
//   console.log(`ini adalah ${array[i]}`);
// }
///// ini untuk memunculkan loopnya dengan menggunakan batic
// const sebuahArray = [
//   {
//     nama: "alvin",
//     umur: 22,
//     alamat: "jalan bintara jaya",
//   },
//   {
//     nama: "ryan",
//     umur: 21,
//     alamat: "jalan rangkas bitung",
//   },
//   {
//     nama: "fao",
//     umur: 20,
//     alamat: "jalan raya galaxy",
//   },
// ];

// let x = [];
// for (let i = 0; i < sebuahArray.length; i++) {
//   sebuahArray[i].alamat = "tergoesoer";
//   let y = {
//     alamat: sebuahArray[i].alamat,
//   };
//   // y = "tergusur";
//   x.push(y);
// }
// console.log(x);

// let array = "*******";
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// array = [1, 2, 3, 4, 5, 6, 8, 9, 10]; ///// mengeluarkan ganjil
// function printNumbers(params) {
//   for (let i = 0; i < params.length; i = i + 1) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }
// printNumbers(array);

// array = [1, 22, 33, 44, 55, 66, 77, 89];
// function dataDeleted(par1, par2) {
//   for (let i = 0; i < par1.length; i++) {
//     // console.log(par1.length);
//     if (par1[i] === par2) {
//       par1.splice(i, 1); ////deleted elemnt frm array
//     } ///// so actually 1 is the means of deletion
//   }
//   return par1;
// }
// console.log(dataDeleted(array, 33));

// function printPatter(param1) {
//   for (let i = 10; i > param1; i--) { /// membuat urutan dari beasr kebwah
//     var x = "";
//     for (let j = 1; j <= i; j++) {
//       x += j + "";
//     }
//     console.log(x);
//   }
// }
// printPatter(0);
// array = [1, 22, 33, 44, 55, 66, 77, 89]; /// memcari terbesar dengan ternary op
// var largest = array[0];
// for (let i = 0; i < array.length; i++) {
//   largest = array[i] > largest ? array[i] : largest;
//   // if (array[i] > largest) {
//   //   largest = array[i];
//   // }
// }
// console.log(largest);

// array = [1, 22, 33, 44, 55, 66, 77, 89];   //// untuk mencari terkecil dengan ternary op
// var smalest = array[7];
// for (let i = 0; i < array.length; i++) {
//   smalest = array[i] < smalest ? array[i] : smalest;
// }
// console.log(smalest);
// array = [1, 22, 33, 44, 55, 66, 77, 89];
// for (let i = 0; i < array.length; i++) {
// if (condition) {
//   index
// } else {
// }
// }

// var x = "****";
// for (i = 0; i < 10; i++) {
//   var y = x;
//   for (let j = 0; j <= i; j++) {
//     y += j + x;
//   }
//   console.log(y);
// }

// const nama = [
//   {
//     nama: "alvin",
//     umur: 22,
//     alamat: "jalan bintara jaya",
//   },
//   {
//     nama: "ryan",
//     umur: 21,
//     alamat: "jalan rangkas bitung",
//   },
//   {
//     nama: "fao",
//     umur: 20,
//     alamat: "jalan raya galaxy",
//   },
// ];
// const nomer = 2;
// var x = [];
// // function pertama(param1, param2) {
// // console.log(param2);
// for (let i = 0; i < nama.length; i++) {
//   // console.log(nama);
//   // console.log(param1[i]);
//   var y = nama[i].length;
//   // console.log(y);
//   // console.log(`ini adalah panjang ${x}`);
//   var z = {
//     alamat: nama[i].alamat,
//   };
//   // console.log(z);
//   x.push(z);
//   // console.log(`ini adalah alamat mereka ${z}`);
//   // console.log(x);
// }
// }
// pertama(nama);

//////======>
// const cekgu = [
//   {
//     nama: "alvin",
//     umur: 22,
//     alamat: "jalan bintara jaya",
//   },
//   {
//     nama: "ryan",
//     umur: 21,
//     alamat: "jalan rangkas bitung",
//   },
//   {
//     nama: "fao",
//     umur: 20,
//     alamat: "jalan raya galaxy",
//   },
// ];
// const nomer = [1, 2]; //// ini untuk urutan  index
// // console.log(nomer);
// for (let i = 0; i < cekgu.length; i++) {
//   // console.log(cekgu);
//   // console.log(i);
//   var x = cekgu.length;
//   if (i === nomer[0] || i === nomer[1]) {
//     cekgu[i].umur = x;
//     console.log(`ini adalah nomor alamat baru ${x}`);
//   }
// }
// console.log(cekgu);
// // console.log(nomer);

/// =======>
// const array = [4, 3, 2, 4, 5, 6, 7]; /// ambil nilai tengah
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
/// №1
// let arrSatu = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // 276
// let arrDua = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // 351
// // Example output:
// // 276 + 351 = 627
// let x = 0;
// let y = 0;
// for (let i = 0; i < arr.length; i++) {
//   x += arr[i];
// }
// for (let j = 0; j < arrDua.length; j++) {
//   y += arrDua[j];
// }
// // console.log(x + y);

// // №2
// let pertama = 22;
// // Example output:
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
// for (let i = 0; i <= pertama; i = i = i + 2) {
//   if (i % 2 === 0) {
//   }
// //   console.log(i);
// }

// // №3 ga selesai!!!!
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// // Example output:
// // true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
// for (let i = 0; i < arr.length; i++) {
//  var x =
// }

// // №4
// let arr = [4, 6, 7];
// let arrLain = [8, 1, 9];
// // let total = arr + arrLain;
// // console.log(total);
// // // Example output:
// // [12, 7, 16]
// var sum = [];
// for (let i = 0; i < arr.length; i++) {
//   sum.push(arr[i] + arrLain[i]);
// }
// // console.log(sum); //// kenapa clg harus di lurar loop karena kl di dlm loop bakal ngikutin jumlah lopingnya

// // №5
// let str1 = "javascript"; ///// harus dibahas ulang
// // Example output:
// // jZvZsZrZpZ OR each letter on a new line
// // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
// let strArr = 1;
// for (let i = 0; i <= str1; i++) {
//   strArr = strArr * (str1 - i);
//   // console.log(str1[i]);
//   // strArr.push(str1);
//   // console.log(strArr);
//   if ((i + 1) % 2 === 0) {
//     // str1[i].push(z);
//   }
// }
// // console.log(str1 + "!=" + strArr);

// // №6
// let str2 = "dont know why"; //// lanjut bsk
// // Example output:
// // “yes”
// for (let i = 0; i < str2.length; i++) {
//   // console.log(str2[i]);
//   if (str2 === "y") {
//     // console.log("yes");
//   }
// }
// // Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// //№7
// let array = 4; //  4 * 3 * 2 * 1 = 24   /// sama harus di ulang jg
// // Example output:
// // 24
// let x = [];
// for (let i = 0; i <= array; i++) {
//   console.log(i);
//   let com = i * i;
//   // array[i].push(x);
//   // array *= i;
//   // var x = array[i]
//   // if (i % 2 === 0) {
//   // }
//   // console.log(i);
// }
// console.log(array);

////=====> for...of loop
// const player = ["dilan", "nichi", "evan"];
// for (let kickballPlayers of player) {
//   console.log(`welcome ${player}`);
// }

// latihan baru for loop
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < array.length; i++) {
//   let x = array[i];
//   console.log(`ini adalah panjang array ${x}`);
//   // console.log(array[i]);
//   // if (x === array.length) {
//   //   console.log(`maka ini adalah nomor nya ${x}`);
//   // } else if (x === 2) {
//   //   console.log(`ini adalah hasil x`);
//   // }
// }

// latihan №2 for loop
// const daftar = [
//   {
//     nama: "alvin",
//     umur: 22,
//     alamat: "jalan bintara jaya",
//   },
//   {
//     nama: "ryan",
//     umur: 21,
//     alamat: "jalan rangkas bitung",
//   },
//   {
//     nama: "fao",
//     umur: 20,
//     alamat: "jalan raya galaxy",
//   },
// ];
// const nomer = [0, 2, 1];
// for (let i = 0; i < daftar.length; i++) {
//   if (i === nomer[0] || i === nomer[2] || i === nomer[1]) {
//     daftar[i].umur = "tua";
//   }
// }
// console.log(daftar);

// latihan №3 for loop
// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// function array(par1) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//       console.log(par1[i][j]);
//     }
//   }
// }
// array(arr);
// const array = [
//   {
//     nama: "jhon",
//     umur: 12,
//   },
//   {
//     nama: "vito",
//     umur: 13,
//   },
//   {
//     nama: "ilham",
//     umur: 22,
//   },
// ];
// function arr(array) {
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     for (let j = 0; j < array[0].length; j++) {
//       // console.log(array[j]);
//       // console.log(array[i][j]);
//     }
//   }
// }
// arr(array);

// //
// let arr = [13, 23, 12, 45, 22, 48, 66, 100];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     // console.log(arr[i]);
//   }
// }

// //// latihan №4 utk menghapus array using loop
// let arry = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// function array(param1, param2) {
//   for (let i = 0; i < param1.length; i++) {
//     if (param1[i] === param2) {
//       param1.splice(i, 1);
//     }
//   }
//   return param1;
// }
// console.log(array(arry, 210));

/// latihan №5 untuk menambahkan array using loop
// let x = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// function contoh(param1, param2) {
//   for (let j = 0; j < param1.length; j++) {
//     // param1.push(param2);
//     if (param1[j] === param2) {
//       param1.push(i, 1);
//     }
//   }
//   return param1;
// }
// console.log(contoh(x, 123));
// let arr = [1, 2, 3, 4, 5];
// function add(x, y) {
//   console.log(x);
//   console.log(y);
//   for (let i = 0; i < x.length; i++) {
//     x.push(y);
//   }
//   return par1;
// }
// console.log(add(arr, 6));

// const nama = [
//   {
//     nama: "ben",
//     group: 910,
//     country: "mexico",
//   },
//   {
//     nama: "fitra",
//     group: 910,
//     country: "india",
//   },
//   {
//     nama: "dewa",
//     group: 001,
//     country: "indonesia",
//   },
//   {
//     nama: "putra",
//     group: 702,
//     country: "sinaloa",
//   },
// ];
// let x = [];
// for (let i = 0; i < nama.length; i++) {
//   let y = {
//     nama: nama[i].nama,
//     group: nama[i].group,
//   };
//   x.push(y);
//   console.log(x);
// }
// console.log(nama);

//latihan №6 untuk menambahkan array using loop
// function perkalian(param1, param2) {
//   let x = 1; // return 1 for param 2 = 0, ini untuk 6 x 6 makusdnya pangkat
//   for (let i = 0; i < param2; i++) {
//     x = x * param1;
//   }
//   return x;
// }
// console.log(perkalian(6, 2));

// latihan №6 untuk memprint patern using for loop
// function patern(param1) {
//   for (let j = 1; j < param1; j++) {
//     let x = "";
//     for (let i = 1; i < j; i++) {
//       x += i + "";
//     }
//     console.log(x);
//   }
// }
// patern(12); // jika sampe 12 bakal terkurang angkanya 2 jd smpe 10 aja

// latihan №7 untuk memprint patern using for loop
// const myFish = ["angel", "clown", "mandarin"];
// let x = [];
// // const removed = myFish.splice(0, 0, "drumn"); /// 0 di pertama merupakan tempat ditaruhnya splice
// // console.log(myFish);
// for (let i = 0; i < myFish.length; i++) {
//   x.splice(2);
//   // if (myFish === 0) {
//   //   // console.log(`ini adalah array baru ${x}`);
//   //   // let x = myFish[i].splice(0, 2, "drum");
//   // }
//   // console.log(myFish);
// }
// console.log(`ini adalah array baru ${x}`);

// const mahasiswaBootcamp = ["firli", "ryan", "ilham"];
// for (let i = 0; i < mahasiswaBootcamp.length; i++) {
//   if (mahasiswaBootcamp[i]) {
//     console.log(mahasiswaBootcamp[i], "tukang coli");
//   }
// }
// console.log(mahasiswaBootcamp);

// const array = [1, 256, 13, 20];
// let sum = 0;
// for (let j = 0; j < array.length; j++) {
//   sum += array[j]; // pertamgahan semua array
// }
// console.log(sum);

// const arrae = [1, 256, 13, 20];
// let suma = 0;
// for (let i = 0; i < arrae.length; i++) {
//   suma -= arrae[i];
// }
// console.log(suma);

// const x = [1, 2, 2, 3, 4, 56];
// const boeelean = true;
// function name(param1, param2) {
//   let sum = 0;
//   for (let i = 0; i < param1.length; i++) {
//     if (param2 === true) {
//       sum += param1[i];
//       // console.log(sum);
//     } else {
//       sum -= param1[i];
//       // console.log(sum);
//     }
//   }
//   console.log(sum);
//   return param1;
// }
// name(x, boeelean);

// const array = [1, 2, 2, 3, 4, 56];
// let y = 1; /////// variabel baru yang di pake buat menjalanjak operasinya
// for (let i = 0; i < array.length; i++) {
//   y *= array[i]; /// x *= y
// }
// console.log(x);

// let arrae = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arrae.length; i++) {
//   console.log(arrae[i]);
// }

///
// const arrayPelajar = [
//   {
//     nama: "fajar",
//     kelas: "12 mipa 2",
//     negara: "indonesia",
//     umur: 21,
//   },
//   {
//     nama: "andres",
//     kelas: "12 iis 1",
//     negara: "spain",
//     umur: 22,
//   },
//   {
//     nama: "wahid",
//     kelas: "12 ipa 2",
//     negara: "indonesia",
//     umur: 23,
//   },
//   {
//     nama: "sances",
//     kelas: "12 ipa 2",
//     negara: "spain",
//     umur: 24,
//   },
// ];
// let y = [];
// const boolean = true;
// function listSiswa(param1, param2) {
//   for (let i = 0; i < param1.length; i++) {
//     // console.log(arrayPelajar);
//     // console.log(arrayPelajar[i]);
//     let z = {
//       nama: param1[i].nama,
//       negara: param1[i].negara,
//     };
//     y.push(z);
//     // let p = {
//     //   nama: "cahaya",
//     //   kelas: "12 iis 1",
//     //   negara: "spain",
//     //   umur: 21,
//     // };
//     // param1.push(p);
//     if (param2 === true) {
//       let w = y[i].negara;
//       //     // console.log(y[([i], 3)]);
//       // console.log(`ini adalah negara-negara murid kita berasal ${w}`);
//       //   }
//       //   // console.log(y[0]);
//       // }
//     }
//   }
// }
// listSiswa(arrayPelajar, boolean);
// console.log(y[0]);

// const listSiswa2 = (param1) => {
//   for (let i = 0; i < param1.length; i++) {
//     let newData = {
//       nama: param1[i].nama,
//       negara: param1[i].negara,
//     };

//     y.push(newData);

//     if (y[i].negara === "indonesia") {
//       console.log(y[i] );
//     }
//   }
// };

// listSiswa2(arrayPelajar);

// for (let i = 0; i <= 15; i++) {
//   // console.log(i);
// }

// // #2 — Print the numbers from 12 to 24
// for (let i = 12; i <= 24; i++) {
//   // if (i % 12 === 0) {
//   // console.log(i);
//   //}
// }

// //#3 — Print the ODD numbers from 2 to 35
// for (let i = 2; i <= 35; i++) {
//   if (i % 2 !== 0) {
//     // console.log(`this is the ODD number ${i}`);
//   }
// }

// //#4 — Print the EVEN numbers from 11 to -21
// for (let i = 11; i >= -20; i--) {
//   if (i % 2 === 0) {
//     // console.log(`this is the EVEN number ${i}`);
//   }
// }

// //#5 — Iterate through all numbers from 1 to 45. Print the following:
// // For multiples of 3 print “Fizz”
// // For multiples of 5 print “Buzz”
// // For multiples of 3 and 5 print “FizzBuzz”
// for (let i = 1; i <= 45; i++) {
//   // if (i % 3 === 0 && i % 5 === 0) {
//   //   console.log("FizzBuzz");
//   // } else if (i % 3 === 0) {
//   //   console.log("Fizz");
//   // } else if (i % 5 === 0) {
//   //   console.log("Buzz");
//   // }
// }

// //#6 — Print all the elements of the following array
// const elements = ["array 1", "array 2", "array 3"];
// for (let j = 0; j < elements.length; j++) {
//   // console.log(elements[j]);
// }

// //#7 — Calculate the sum of all the numbers in the following array
// let numbersArray = [1, 13, 22, 123, 49];
// let sum = 0;
// for (let i = 0; i < numbersArray.length; i++) {
//   sum += numbersArray[i];
// }
// // console.log(`the result is ${sum}`);

// for (let i = 0; i <= 15; i++) {
//   // if (i === 0) {
//   //   console.log(i + "even");
//   // } else if (i % 2 === 0) {
//   //   console.log(i + "even");
//   // } else {
//   //   console.log(i + "odd");
//   // }
// }

//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// for (let j = 1; j <= 100; j++) {
//   if (j % 3 === 0 && j % 5 === 0) {
//     console.log("FizzBuz");
//   } else if (j % 3 === 0) {
//     console.log("Fizz");
//   } else if (j % 5 === 0) {
//     console.log("Buz");
//   }
// }

//12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// let p = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     p += i;
//   }
// }
// console.log(p);

/////// loop baru 21/2
// const dataAlamatGuru = [
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
// ];
// for (let i = 0; i < dataAlamatGuru.length; i++) {
//   console.log(dataAlamatGuru[i]);
//   console.log(i);
// }

// let x = "*****";
// let p = "";
// for (let i = 0; i <= 10; i += "*") {
//   console.log(
// }

//16. Write a JS code to find duplicate values in a given array
// Function findDup() to returns all the elements that are repeated more than once in a given array.
// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// let x = [];
// function findDup(parameter) {
//   for (let i = 0; i < parameter.length; i++) {
//     if (
//       parameter.indexOf(
//         parameter[i] != i && parameter.indexOf(parameter[i]) === -1
//       )
//     ) {
//       x.push(parameter[i]);
//     }
//   }
//   return x;
// }
// console.log(findDup(arr));

//// made an christmast tree
// *
// ***
// *****
// *******
// let number = 6;
// let string = "";
// for (let i = 0; i <= number.length; i++) {
//   for (let j = 0; j <= number - i; j++) {
//     string += "";
//   }
//   console.log(string);
// }
// // console.log();

// merubah status guru ke 2 dan ke 4 menjadi pensiun
// const dataAlamatGuru = [
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
// ];
// const urutan = [1, 3];
// for (let i = 0; i < dataAlamatGuru.length; i++) {
//   if (i === urutan[0] || i === urutan[1]) {
//     dataAlamatGuru[i].status = "pensiun";
//   }
// }
// console.log(dataAlamatGuru);

//// 10. Use for loop to iterate from 0 to 55 and print the sum of all numbers.
// expected output : 55
// let number = 0;
// // let numberSa = 0;
// for (let i = 0; i <= 10; i++) {
//   number += i;
//   // if (condition) {
// }
// }

// console.log(number);
// // 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// expected output :  [2550, 2500]
// let sum = 0;
// let suma = 0;
// let array = [];
// // let total = 0;
// for (let i = 0; i <= 100; i++) {
//   // sum += i;
//   if (i % 2 === 0) {
//     sum += i;
//     // console.log(sum);
//   } else if (i % 2 !== 0) {
//     // } else if (i % 2 === 0) {
//     suma += i;
//     //   // console.log(sum);
//     //   // console.log(i);
//   }
//   // let total = (sum, suma);
//   // array.push(sum, suma);
//   // console.log(array);
// }
// array.push(sum, suma);
// console.log(sum);
// console.log(suma);
// console.log(array);

// const dataAlamatGuru = [
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
//   {
//     nama: "selamet",
//     mapel: "seejarah peminatan",
//     lamaMengajar: "12 tahun ",
//     status: "aktiv",
//   },
// ];
// const urutan = [1, 3];
// for (let i = 0; i < dataAlamatGuru.length; i++) {
//   if (i === urutan[0]) {
//     dataAlamatGuru[i].status = "pensiun";
//   } else if (i === urutan[1]) {
//     dataAlamatGuru[i].lamaMengajar = "di non aktivkan";
//   }
// }
// console.log(dataAlamatGuru);

// let ganjil = 0;
// let genap = 0;
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     genap += i;
//   } else if (i % 2 === 1) {
//     ganjil += i
// }
// console.log(genap);
// console.log(ganjil);
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log("hello");
//   }
// }

// for (let i = 1; i < 6; i = i + 2) {
//   let w = 0;
//   for (let j = 0; j < 2; j++) {
//     w = w + i;
//     console.log(w);
//   }
// }

// for (let i = 0; i < 2; i++) {
//   let w = "";
//   for (let j = i; j < 2; j++) {
//     w += "*";
//   }
//   console.log(w);
// }

// for (let i = 2; i < 6; i = i + 2) {
//   let t = 0;
//   for (let j = 0; j < i; j++) {
//     t += j;
//   }
//   console.log(t);
// }

// for (let i = 1; i <= 2; i++) {
//   let w = 0;
//   for (let j = 0; j < 2; j++) {
//     let t = 1;
//     t = t + i + w;
//     w = t;
//     console.log(t);
//   }
//   console.log(w);
// }

// let tampung = ''
// for (let i = 0; i < 4; i++) {
//   tampung += '+'
//   console.log('halo')
//   for (let j = 0; j < i; j += 1) {
//     console.log(tampung, i)
//   }
//   tampung = ''
// }
// 'halo'
// 'halo'
// '+', 1
// 'halo'
// '+', 2
// '+', 2
// 'halo'
// '+', 3
// '+', 3
// '+', 3
// '+', 3
// '+', 3

// Dikasih
// const antri = ["1", "2", "3", "4", "5", "6", "7"];
// let w = "";
// for (let i = 0; i < antri.length; i++) {
//   w = "";
//   for (let j = 0; j < 1 + i; j++) {
//     // console.log(j);
//     w += antri[i];
//     // console.log(w);
//   }
//   console.log(w);
// }
// DI CONSOLE LOG
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777

// // Dikasih;
// const antri = ["1", "2", "3", "4", "5", "6"];
// let array = [];
// let str = "";
// for (let i = 0; i < antri.length; i += 2) {
//   // array = [];
//   // console.log(antri[i]);
//   for (let j = 0; j < i; j++) {
//     array += antri[i];
//   }
//   console.log(array);
// }

// DI CONSOLE LOG
// 1
// 23
// 456

// const nominal = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// let str = "";
// for (let i = 0; i < nominal.length; i += 2) {
//   str = "";
//   for (let j = 0; j < i + 1; j++) {
//     str += nominal[i];
//   }
//   console.log(str);
// }
// // console.log(nominal);

// let bobsFollowers = ["Ash", "Barry", "Calum", "Denny"];
// let tinasFollowers = ["Ash", "Denny", "Rob"];
// let mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   let mutualFollowers = [];
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
//   // console.log(mutualFollowers[i]);
// }
// console.log(mutualFollowers);

// const antri = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// let array = "";
// for (let i = 0; i < antri.length; i++) {
//   let array = "";
//   for (let j = 0; j < 1 + i; j++) {
//     array += antri[i];
//   }
//   console.log(array);
// }

//using .join()
// const gameObjects = ["rock", "paper", "scissors"];
// const joinWithEmptyString = gameObjects.join("");
// console.log(joinWithEmptyString);

/// nested looop
// const anggota = [
//   {
//     nama: "ben",
//     group: 910,
//     country: "mexico",
//   },
//   {
//     nama: "fitra",
//     group: 910,
//     country: "india",
//   },
//   {
//     nama: "dewa",
//     group: 001,
//     country: "indonesia",
//   },
//   {
//     nama: "putra",
//     group: 702,
//     country: "sinaloa",
//   },
// ];
// let singn = true;
// let array = [];
// for (let i = 0; i < anggota.length; i++) {
//   console.log(anggota[i].nama);
// }

///loop repeat 22/2
// let arrSatu = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arrDua = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// let sum = 0;
// let suma = 0;
// for (let i = 0; i < arrSatu.length; i++) {
//   sum += arrSatu[i];
//   for (let j = 0; j < arrDua.length; j++) {
//     suma += arrDua[j];
//   }
//   // console.log(`this is the result ${sum + suma}`);
// }

// ///ekspetasi halo 3 halo 5 halo 7
// for (let i = 3; i < 9; i += 2) {
//   // console.log(`halo ${i}`);
// }

// // ekspetasi halo 5, halo 3, halo -1
// for (let j = 5; j >= -1; j = j - 2) {
//   // console.log(`halo ${j}`);
// }

// // kebalikan 12 -- -2
// for (let i = 12; i >= -2; i = i - 2) {
//   // console.log(`kebalikan ${i}`);
// }

// const namaMurid = ["Adam", "Levigne", "Angka", "Jado"];
// // pada array ini tunjukan mana ganjil mana genap
// for (let i = 0; i < namaMurid.length; i++) {
//   if (i % 2 === 0) {
//     console.log(`${namaMurid[i]} ini adalah genap`);
//   } else {
//     console.log(`${namaMurid[i]} ini adalah ganjil`);
//   }
// }

// let n1 = 22;
// for (let j = 2; j <= n1; j = j + 2) {
//   // console.log(j);
// }

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// let hasil = [];
// for (let i = 0; i < arr_3.length; i++) {
//   hasil.push(arr_3[i] + arr_4[i]);
// }
// // console.log(hasil);

// let arrPertama = [2, 35, 6];
// let arrKedua = [65, 3, 6];
// let array = [];
// for (let i = 0; i < arrPertama.length; i++) {
//   array.push(arrPertama[i] + arrKedua[i]);
// }
// // console.log(array);

// let string = "javascript";
// for (let i = 0; i < string.length; i = i + 2) {
//   // console.log(i);
//   // console.log(string[i]);
//   // if (i % 2 === 0) {
//   //   console.log("y");
//   // } else if (i % 2 === 1) {
//   //   console.log("z");
//   // }
//   // console.log(string[i]);
// }
// console.log(string);

//soal baru №1 excpect 4*3*2*1 = 24
// let angka = 4;
// let z = 1;
// for (let j = 1; j <= angka; j++) {
//   z *= j;
//   // console.log(z);
// }

// №2
// let pin = 0704;

// const antri = ["1", "2", "3", "4", "5", "6", "7"];
// let w = "";
// for (let k = 0; k < antri.length; k++) {
//   let w = "";
//   for (let z = 0; z < 1 + k; z++) {
//     w += antri[k];
//   }
//   // console.log(w);
// }

// nested looop find the same value bteween 2 arrays
let bobsFollowers2 = ["Ash", "Barry", "Calum", "Denny"];
let tinasFollowers2 = ["Ash", "Denny", "Rob"];
let mutualFollowers2 = [];
for (let i = 0; i < bobsFollowers2.length; i++) {
  // console.log(bobsFollowers[i]);
  for (let k = 0; k < tinasFollowers2.length; k++) {
    // console.log(tinasFollowers[k]);
    if (bobsFollowers2[i] === tinasFollowers2[k]) {
      mutualFollowers2.push(tinasFollowers2[k]);
    }
  }
}
// console.log(mutualFollowers);

//№2 same as over head
let bobsFollowers1 = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers1 = ["Sam", "Marta", "Elle"];
let mutualFollowers1 = [];
for (let k = 0; k < bobsFollowers1.length; k++) {
  // console.log(bobsFollowers[k]);
  for (let i = 0; i < tinasFollowers1.length; i++) {
    // console.log(tinasFollowers[i]);
    if (bobsFollowers1[k] === tinasFollowers1[i])
      mutualFollowers1.push(tinasFollowers1[i]);
  }
}
// console.log(mutualFollowers);

// for (let i = 0; i < 6 ; i = ++){
//   console.log(object);
// }

////// using nested loop toady 23/2
// №1
// const angka = [
//   [1, 2, 3],
//   [3, 2, 3],
//   [6, 7, 4],
// ];
// // KELUAR
// // [[1,9,3],[3,9,3],[9,7,9]]
// for (let k = 0; k < angka.length; k++) {
//   for (let i = 0; i < angka[k].length; i++) {
//     if (angka[k][i] % 2 === 0) {
//       angka[k][i] = 9;
//     }
//   }
// }
// console.log(angka);

// №2 !!!! ga selesai
// s

//№3 !!! selesai !!!!
// const angka = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// const newArr1 = [];
// // yang keluar
// //  [[1,2,3,4,5],[2,*,*,*,*],[3,*,*,*,*],[4,*,*,*,*]]
// for (let i = 0; i < angka.length; i++) {
//   if (i === 0) {
//     newArr1.push(angka[i]);
//     // console.log(newArr1[i]);
//   } else {
//     const newArr2 = [];
//     for (let j = 0; j < angka.length; j++) {
//       if (j === 0) {
//         newArr2.push([i][j]);
//       } else {
//         newArr2.push("*");
//       }
//     }
//     newArr1.push(newArr2);
//   }
// }
// console.log(newArr1);

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
// }
// // console.log(newArr);

// const angka = [10, 20, 30, 40];
// const array = [];
// for (let z = 0; z < angka.length; z++) {
//   array.push(angka[z] / 2);
// }
// console.log(array);

// const urutan = ["nadia", "soleh", "nadifa"];
// // KELUAR
// // [[1,9,3],[3,9,3],[9,7,9]]
// for (let k = 0; k < urutan.length; k++) {
//   // console.log(urutan[k]);
//   for (let i = 1; i < urutan[k].length; i++) {
//     console.log(i + " " + urutan[k]);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   // console.log(i);
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i * i} ${i ** i} `);
// }

//Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// // Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 0; i <= 100; i = i + 2) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// const angka5 = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// hasil
// ["", 2, 3, 4, 5],
// [2, "", 5, 8, 5],
// [3, 3, "", 4, 2],
// [4, 5, 4, "", 9],

// const tamp1 = [];
// for (let i = 0; i < angka5.length; i++) {
//   // console.log(angka[i]);
//   if (i === 0) {
//     tamp1.push(angka5[i]);
//   } else {
//     const tamp2 = [];
//     for (let j = 0; j < angka5.length; j++) {
//       if (j === 0) {
//         tamp2.push([i][j]);
//       } else {
//         tamp2.push("");
//       }
//     }
//     tamp1.push(tamp2);
//   }
// }
// console.log(tamp1);

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// // console.log(sum);

// //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let suma = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     suma += i;
//     // console.log(suma);
//   } else if (i % 2 === 1) {
//     suma += i;
//     // console.log(suma);
//   }
// }
// // console.log(suma);

// //Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let x = 0;
// let y = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     x += i;
//   } else if (i % 2 === 1) {
//     y += i;
//   }
// }
// console.log([x, y]);

// const countries1 = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];
// const angkaAngka2 = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
// // for (let i = 0; i < countries.length; i++) {
// //   console.log(countries[i], countries[i], angkaAngka[i]);
// // }
// // console.log(countries);

// ///ulangan
// const angkaSatu = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// // yang keluar
// // [[3,2,1],[5,2,3],[4,7,6]]
// for (let i = 0; i < angkaSatu.length; i++) {
//   angkaSatu[i].reverse();
// }
// // console.log(angkaSatu);

// // using loop
// function replaceWithString(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i][i] = "";
//   }
//   return arr;
// }

// const arrays = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];

// console.log(replaceWithString(arrays));

// const arrays = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// for (let i = 0; i < arrays.length; i++) {
//   console.log(i);
//   for (let j = i; j === i; j++) {
//     // console.log(j);
//     // console.log(i === j);
//   }
// }

// const array = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// for (let i = 0; i < array.length; i++) {
//   // length = 3, i = 0, 1, 2
//   for (let j = 0; j <= array.length; j++) {
//     // i = 0, 1, 2, j = 0, 1, 2
//     if (angka[i][j] % 2 === 0) {
//       angka[i][j] = 9;
//     }
//   }
// }
// // console.log(array);

//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp.push(reverse(arr[i]));
//   }
//   return temp;
// }
// console.log(reverse2DArray(reverse));

// const array = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// let newArr2 = [];
// for (let i = 0; i < array.length; i++) {
//   // console.log(i);
//   let newArr = [];
//   for (let j = array.length - 1; j >= 0; j--) {
//     // console.log(j);
//     newArr.push(array[i][j]);
//   }
//   newArr2.push(newArr);
// }
// console.log(newArr2);

/// this is for chnage only even/odd array
// const arrays = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// for (let i = 0; i < arrays.length; i++) {
//   // console.log(i);
//   for (let j = 0; j < arrays.length; j++) {
//     // console.log(j);
//     if (arrays[i][j] % 2 === 0) {
//       arrays[i][j] = 10;
//     }
//   }
// }
// console.log(arrays);

// this is for chnage the position  of index / reversed
// const arrays = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// let newArray = [];
// for (let i = 0; i < arrays.length; i++) {
//   // console.log(i);
//   let newArr = [];
//   for (let j = arrays.length; j >= 0; j--) {
//     newArr.push(arrays[i][j]);
//   }
//   newArray.push(newArr);
// }
// console.log(newArray);

// const angkaAngka = [
//   [1, 2, 3],
//   [3, 2, 3],
//   [6, 7, 4],
// ];
// // KELUAR
// // [[1,9,3],[3,9,3],[9,7,9]]
// for (let i = 0; i < angkaAngka.length; i++) {
//   // console.log(i);
//   for (let j = 0; j < angkaAngka.length; j++) {
//     // console.log(j);
//     if (angkaAngka[i][j] % 2 === 1) {
//       angkaAngka[i][j] = "*";
//     }
//   }
// }
// // console.log(angka);

// const summa = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// let tampungArray = [];
// // yang keluar
// // [[3,2,1],[5,2,3],[4,7,6]]
// for (let j = 0; j < summa.length; j++) {
//   // console.log(j);
//   let tampungan = [];
//   for (let k = summa.length - 1; k >= 0; k--) {
//     // console.log(k);
//     tampungan.push(summa[j][k]);
//   }
//   tampungArray.push(tampungan);
// }
// // console.log(tampungArray);

// const angka = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// for (let i = 0; i < angka.length; i++) {
//   for (let k = i; k === i; k++) {
//     angka[i][k] = "";
//   }
// }
// // console.log(angka);
// const summu = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// newArray = [];
// for (let i = 0; i < summu.length; i++) {
//   // console.log(i);
//   if (i === 0) {
//     newArray.push(summu[i]);
//   } else {
//     const newArrayDua = [];
//     for (let j = 0; j < summu.length; j++) {
//       if (j === 0) {
//         newArrayDua.push([i][j]);
//       } else {
//         newArrayDua.push("*");
//       }
//     }
//     newArray.push(newArrayDua);
//   }
// }
// // console.log(newArray);

// const twoSum = (array, target) => {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]); // 2,7,11,15
//     for (let j = 0; j < array.length; j++) {
//       // console.log(array[j]); // 2,7,11,15 sebnayak 3 kali ulang
//       if (array[i] + array[j] == target && i) {
//         // console.log(j); //1
//         // console.log(array[i] + array[j]); // 9
//         // console.log(i); // 1
//         // console.log(target); //9
//         arr.push(j, i);
//         // console.log(arr);
//         break;
//       }
//     }
//   }
//   return arr;
// };
// twoSum([2, 7, 11, 15], 13);

// const arr = [
//   [1, 2, 3],
//   [2, 3, 1, 6, 7],
//   [3, 4, 7, 2],
// ];
// let su = 0;
// let x = [];
// const totalRow = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(i);
//     su = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       su += arr[i][j];
//     }
//     if (su % 2 === 0 && i) {
//       // console.log(i);
//       console.log(`ini suma memek ${su}`);
//     }
//   }
// };
// totalRow(arr);

// const hasil = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// const x = 0;
// for (let i = 0; i < hasil.length; i++) {
//   x = 0;
//   for (let j = 0; j < hasil.length; j++) {
//     x += hasil[i][j];
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [7, 69, 2, 221, 8974];
// let total = 0;
// let total2 = 0;
// let terbesar = 100000;
// const miniMax = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     total2 += arr2[i];
//     if (total < terbesar) {
//       terbesar = total;
//     }
//     console.log(terbesar);
//   }
//   // console.log(total);
//   // console.log(total2);
// };
// miniMax(arr);

// // let arrGabung = [];
// // arrGabung.push(arr + arr2);
// // console.log(arrGabung);

// let candles = [2, 4, 1, 4, 6];
// // let lower = 0;
// const birthdayCandles = (candles) => {
//   let max = candles[0];
//   let unit = 0;
//   for (let i = 0; i < candles.length; i++) {
//     // console.log(candles[i]);
//     if (candles[i] > max) {
//       max = candles[i]; // max 6
//       // console.log(max);
//     }
//   }
//   for (let j = 0; j < candles.length; j++) {
//     if (candles[j] === max) {
//       unit++;
//     }
//   }
//   return unit;
// };
// console.log(birthdayCandles(candles));

// const antri = ["1", "2", "3", "4", "5", "6", "7"];
// for (let i = 0; i < antri.length; i++) {
//   w = "";
//   for (let k = 0; k < i; k++) {
//     w += antri[i - k - 1];
//   }
//   console.log(w);
// }
//hasill
// 1
// 21
// 321
// 4321
// 54321
// 654321

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [7, 69, 2, 221, 8974];
// const minMax = (arr) => {
// let sortedArr = arr.sort(function (a, b) {
//   return a - b;
// }); // ini sudah tersortir, ascending
// let max = 0;
// let min = 0;
// for (let i = 0; i < sortedArr.length; i++) {
//   //length = 4, i = 0, 1, 2, 3, 4. stops at 4.
//   if (i !== 0) {
//     // berarti itu i = 1, 2, 3, 4.
//     max += sortedArr[i];
//   }
//   if (sortedArr.length - 1 !== i) {
//     // length = 4, i = 0, 1, 2, 3, 4.
//     // berarti tereksekusi yang 0, 1, 2, 3.
//     min += sortedArr[i];
//   }
// }
// return `The max is: ${max}, the min is: ${min}`;
// };

// console.log(minMax(arr));
// console.log(minMax(arr2));

// let candles = [8, 4, 6, 4, 6, 7, 2, 7, 9];

// const birthdayCakeCandles = (candles) => {
//   let max = 0;
//   let units = 0;
//   for (i = 0; i < candles.length; i++) {
//     if (candles[i] > max) {
//       max = candles[i]; // max = 8
//     }
//   }
//   for (let j = 0; j < candles.length; j++) {
//     if (candles[j] === max) {
//       units++; // setiap (candles[j] === 6), maka units += 1
//     }
//   }
//   return units; // output = 1
// };
// console.log(birthdayCakeCandles(candles));

// TUGAS: return jumlah unit value terbesar
// const antri = ["1", "2", "3", "4", "5", "6", "7"];
// for (let i = 0; i < antri.length; i++) {
//   // console.log(antri[i]);
//   w = "";
//   for (let k = 0; k < i + 1; k++) {
//     // console.log(antri[i], "ini adalah i");
//     // console.log(antri[k]);
//     if (antri[i]) {
//       w += antri[];
//     }
//     // console.log(w);
//   }
//   console.log(w);
// }
// console.log(w);
// i = 0, 0 < 7
// k = 0 < 1

//find the lower tower on the array and return
// let tower = [8, 4, 6, 4, 6, 7, 2, 7, 2, 9, 2, 2];
// function lowerTower(tower) {
//   let min = tower[0];
//   let units = 0;
//   for (let i = 0; i < tower.length; i++) {
//     if (tower[i] < min) {
//       min = tower[i];
//       // console.log(min);
//     }
//   }
//   for (let j = 0; j < tower.length; j++) {
//     if (tower[j] === min) {
//       units++;
//     }
//   }
//   return units;
// }
// console.log(lowerTower(tower));

// for (let i = 1; i <= 5; i++) {
//   // console.log(i); /// 7
//   w = "";
//   for (let j = 1; j <= i; j++) {
//     w += j;
//   }
//   console.log(w);
// }

// for (let i = 1; i <= 5; i++) {
//   y = "";
//   for (let j = 1; j <= i; j++) {
//     y += i;
//   }
//   console.log(y);
// }

// for (let pertama = 1; pertama <= 7; pertama++) {
//   let strings = "";
//   for (let kedua = 1; kedua <= pertama; kedua++) {
//     strings += pertama - kedua + 1;
//   }
//   console.log(strings);
// }

// var arr = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];
// let zeroCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   // console.log(i);
//   // console.log(arr[i]);
//   for (let j = 0; j < arr[0].length; j++) {
//     if (arr[i][j] === 0) {
//       zeroCount++;
//     }
//   }
// }
// console.log(zeroCount); //5

// const hasil = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// let hitungan = 0;
// for (let i = 0; i < hasil.length; i++) {
//   for (let k = 0; k < hasil[0].length; k++) {
//     if (hasil[i][k] === 0) {
//       hitungan++;
//     }
//   }
// }
// console.log(hitungan);

// let arr = [3, 5, 7, 9, 10];
// let arr2 = [7, 96, 2, 321, 7456];
// const minMax = (arr) => {
//   let sortir = arr.sort(function (a, b) {
//     return a - b;
//   }); // ini harus di sortir using .sort
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < sortir.length; i++) {
//     // console.log(sortir[i]); // 4 length
//     if (i !== 0) {
//       max += sortir[i];
//     }
//     if (i !== sortir.length - 1) {
//       min += sortir[i];
//     }
//   }
//   return `the max is ${max} and min is ${min}`;
// };
// console.log(minMax(arr));
// console.log(minMax(arr2));

// const hasil = [
//   [1, 2, 3],
//   [3, 2, 5],
//   [6, 7, 4],
// ];
// // let tampung = 0;
// const fungsi = (hasil) => {
//   for (let i = 0; i < hasil.length; i++) {
//     // console.log(i);
//     tampung = 0;
//     for (let j = 0; j < hasil[i].length; j++) {
//       tampung += hasil[i][j];
//     }
//     if (tampung % 2 === 0 && i) {
//       console.log(`thia is the total ${tampung}`);
//     }
//   }
// };
// fungsi(hasil);

// for (let i = 0; i <= 8; i++) {
//   // want = "*";
//   console.log("*".repeat(i));
// }

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j].toUpperCase());
//   }
// }
//keluar
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j].toLocaleLowerCase());
//   }
// }
// keluar
// html
// css
// js
// react
// node
// express
// mongodb

// const gameObjects = [
//   ["rock", "paper", "scissors"],
//   ["cutter", "coodle", "spoon"],
// ];
// // for (let i = 0; i < gameObjects.length; i++) {
// //   for (let j = 0; j < gameObjects[i].length; j++) {
// //     console.log(gameObjects[i][j].toUpperCase());
// //   }
// // }

// for (let x = 0; x < gameObjects.length; x++) {
//   for (let y = 0; y < gameObjects[i].length; y++) {
//     console.log(gameObjects[i][y].toLocaleUpperCase());
//   }
// }

// nooo selesai
// const grades = [73, 67, 38, 331];
// const gradingStudent = (grades) => {
//   for (let i = 0; i < grades.length; i++) {
//     // if (grades[i] === grades[i + 1]) {
//     //   grades.splice(i, 1);
//     //   i--;
//   }
// };
// gradingStudent(grades);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [7, 69, 2, 221, 8974];
// const minMax = (arr) => {
//   let sortedArr = arr.sort(function (a, b) {
//     return a - b;
//   }); // ini sudah tersortir, ascending
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < sortedArr.length; i++) {
//     //length = 4, i = 0, 1, 2, 3, 4. stops at 4.
//     if (i !== 0) {
//       // berarti itu i = 1, 2, 3, 4.
//       max += sortedArr[i];
//     }
//     if (sortedArr.length - 1 !== i) {
//       // length = 4, i = 0, 1, 2, 3, 4.
//       // berarti tereksekusi yang 0, 1, 2, 3.
//       min += sortedArr[i];
//     }
//   }
//   return `The max is: ${max}, the min is: ${min}`;
// };

// // console.log(minMax(arr));
// // console.log(minMax(arr2));

// let n2 = 8; //  7 * 6 * 5 * 4 * 3 * 2 * 1 = 77
// // Example output:
// // // 77
// // for (let i = 0; i < n2; i++) {
// //   // console.log(n2);
// //   w = 0;
// //   w *= n2;
// // }
// // // console.log(w);

// // for (let u = 1; u <= 3; u++) {
// //   for (let j = 1; j <= 3; j++) {
// //     let string = "";
// //     string += u;
// //     // console.log(u);
// //   }
// // }

// // for (let i = 1; i <= 3; i++) {
// //   for (let j = 1; j <= 3; j++) {
// //     let string = "";
// //     string += j;
// //     // console.log(j);
// //   }
// // }

// // for (let i = 1; i <= 3; i++) {
// //   let string = "";
// //   for (let j = 1; j <= i * 3; j++) {
// //     string += j;
// //   }
// //   console.log(string);
// // }
// // 123;
// // 123456;
// // 123456789;

// // var nums = ["100", "300", "400", "60", "40"];
// // let sum = 0;
// // // for (let i = 0; i < nums.length; i++) {
// // //   sum += parseInt(nums[i]);
// // //   console.log(sum);
// // // }
// // for (let j = 0; j < nums.length; j++) {
// //   // console.log(nums[j]);
// // }

// // let number = [7, 96, 2, 321, 7456];
// // const theSmalest = (number) => {
// //   let dif = 10000;
// //   for (let i = 0; i < number.length; i++) {
// //     // console.log(number[i]);
// //     if (i !== 0) {
// //       dif += number[i];
// //     }
// //     // console.log(dif);
// //   }
// // };
// // theSmalest(number);

// // for (let i = 5; i <= 10; i++) {
// //   for (let j = 5; j <= 10; j++) {
// //     string = "";
// //     string += i;
// //     // string += j;
// //     // console.log(string);
// //   }
// // }

// // firtsSum = 1;
// // for (let i = 0; i <= 10; i++) {
// //   firtsSum += i;
// //   // console.log(`zaebal ${firtsSum}`);
// // }

// // let string = "";
// // for (let i = 0; i <= 3; i++) {
// //   string += "*";
// //   // console.log("blya");
// //   for (let j = 0; j < i; j++) {
// //     // console.log(string, i);
// //   }
// // }

// // // ================================================================> loop for and netsed repeat

// // for (let i = 0; i <= 6; i++) {
// //   console.log("this is the loop" + i);
// // }

// for (var i = 1; i <= 4; i++) {
//   // console.log("* ".repeat(i));
// }

// let n1 = 22;
// for (let i = 2; i <= n1; i = i + 2) {
//   if (i % 2 === 0) {
//     // console.log(i);
//   }
// }
// for (let i = 0; i < n1; i++) {
//   if (i % 2 === 1) {
//     // console.log(i);
//   }
// }

// for (let i = 0; i < n1; i++) {
//   if (i === 0) {
//     // console.log("even" + i);
//   } else if (i % 2 === 0) {
//     // console.log("even" + i);
//   } else {
//     // console.log("odd" + i);
//   }
// }

// // 123
// // 123456
// // 123456789

// // 124
// // 7 11 16
// // 22 29 371

// let number = [7, 96, 2, 321, 7456];
// let numberDua = [118, 9, 2, 5, 33456];
// let x = 0;
// let y = 0;
// for (let i = 0; i < number.length; i++) {
//   x += number[i];
// }
// for (let j = 0; j < numberDua.length; j++) {
//   y += numberDua[j];
// }
// // console.log(x + y);

// let pertama = 44;
// function fungsi(pertama, jumlah) {
//   for (let i = 0; i <= pertama; i++) {
//     if (i % 2 === jumlah) {
//       // console.log(i);
//     } else {
//       //   console.log(i);s
//     }
//   }
// }
// fungsi(pertama, 0);

// let sum = [1, 2, 3, 3, 44];
// let suma = [2, 3, 4, 5, 6];
// for (let i = 0; i < sum.length; i++) {
//   // console.log(sum);
// }

// let limit = 4;
// for (let i = 0; i < 4; i++) {
//   let show = "";
//   for (let j = 0; j < limit; j++) {
//     show += `${j + 1}`;
//   }
//   limit += 4;
//   // console.log(show);
// }

// let angka = 1;
// let indikator = 1;
// for (let i = 0; i < 3; i++) {
//   let array = [];
//   for (let j = 0; j < 3; j++) {
//     array.push(angka);
//     angka += indikator;
//     indikator++;
//   }
//   // console.log(array);
// }

// // harus keluar di console angka 8,
// // angka 8 tersebut di dapatkan dari jumlah 0
// const arr6 = [
//   [0, 1, 1],
//   [1, 1, 0],
//   [1, 0, 0],
//   [1, 1, 0],
//   [0, 0, 0],
// ];
// let india = 1;
// for (let i = 0; i < arr6.length; i++) {
//   // console.log(i);
//   for (let j = 0; j < 4; j++) {}
// }
// // clg

// const arr = [
//   [0, 1, 1],
//   [1, 1, 0],
//   [1, 0, 0],
//   [1, 1, 0],
//   [0, 0, 0],
// ];
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   for (let j = 0; j < arr[i].length; j++) {
//     // console.log(arr[i].length);
//     if (arr[i][j] === 0) {
//       // console.log(arr[i][j]);
//       total++;
//       // console.log(total);
//     }
//   }
//   // console.log(total);
// }
// // console.log(total);

// // soal 2

// const arr1 = [7, 2, 26, 22, 34];
// const arr2 = [10, 22, 23, 42, 12];
// let tmpung = [];
// // buat function yang menretrun [17,24,49,64,46]
// function tunjukan(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     // console.log(arr1);
//     // console.log(arr2);
//     tmpung.push(arr1[i] + arr2[i]);
//   }
//   return tmpung;
// }
// // console.log(tunjukan(arr1, arr2));

// const summa = [
//   [
//     [1, 2, 4],
//     [2, 5, 6],
//     [5, 4, 3],
//   ],
//   [
//     [2, 4, 5],
//     [1, 2, 3],
//     [5, 4, 3],
//   ],
//   [
//     [1, 2, 4],
//     [2, 5, 6],
//     [2, 4, 3],
//   ],
// ];

// // membuat fungsi yang mereturn
// // [
// //   [7, 13, 12],
// //   [11, 6, 12],
// //   [7, 12, 9],
// // ];
// let tampang = [];
// function tunReturn(summa) {
//   for (let i = 0; i < summa.length; i++) {
//     tampang2 = [];
//     for (let x = 0; x < summa[i].length; x++) {
//       let count = 0;
//       for (let j = 0; j < summa[x].length; j++) {
//         count += summa[i][x][j];
//       }
//       tampang2.push(count);
//     }
//     tampang.push(tampang2);
//   }
//   return tampang;
// }
// // console.log(tunReturn(summa));

// for (let i = 1; i <= 7; i++) {
//   let tam = "";
//   for (let j = 0; j < i; j++) {
//     tam += [i - j];
//   }
//   // console.log(tam);
// }
// // 1
// // 21
// // 321
// // 4321
// // 54321
// // 654321
// // 7654321

// for (let i = 1; i <= 7; i++) {
//   let x = "";
//   for (let j = 0; j < i; j++) {
//     x += j;
//     // console.log(j);
//   }
//   // console.log(j);
// }
// // console.log(i);

// const angka2 = [2, 2, 2, 5, 6, 8, 5, 9, 9, 3, 2, 1, 4, 7];
// const str = [];
// for (let i = 0; i < angka2.length; i++) {
//   let boolean = true;
//   for (let j = 0; j < str.length; j++) {
//     if (angka2[i] === str[j]) {
//       boolean = false;
//     }
//   }
//   if (boolean === true) {
//     str.push(angka2[i]);
//   }
// }
// // console.log(str);

// let followerJaka = ["Malika", "Sani", "Jes", "Logan"];
// let followerAnton = ["Jes", "Loi", "Logan", "Jes", "Sani", "Loi"];
// let tampungan = [];
// // let strn = "";
// const appenedArray = (param1, param2) => {
//   for (let i = 0; i < param1.length; i++) {
//     let kondisi = true;
//     for (let j = 0; j < tampungan.length; j++) {
//       if (param1[i] === tampungan[j]) {
//         kondisi = false;
//       }
//     }
//     if (kondisi === true) {
//       tampungan.push(param1[i]);
//     }
//   }
//   for (let x = 0; x < param2.length; x++) {
//     let kondisi = true;
//     for (let y = 0; y < tampungan.length; y++) {
//       if (param2[x] === tampungan[y]) {
//         kondisi = false;
//       }
//     }
//     if (kondisi === true) {
//       tampungan.push(param2[x]);
//     }
//   }
//   return tampungan;
// };
// // console.log(appenedArray(followerJaka, followerAnton));

// const tanggal = ["Ash", "Barry", "Calum", "Denny"];
// const tanggalSama = ["Ash", "Denny", "Rob"];
// let save = [];
// const gabungan = (par1, par2) => {
//   for (let i = 0; i < par1.length; i++) {
//     let kondisii = true;
//     for (let j = 0; j < save.length; j++) {
//       if (par1[i] === save[j]) {
//         kondisii = false;
//       }
//     }
//     if (kondisii === true) {
//       save.push(par1[i]);
//     }
//   }
//   for (let y = 0; y < par2.length; y++) {
//     let kondisii = true;
//     for (let z = 0; z < save.length; z++) {
//       if (par2[y] === save[z]) {
//         kondisii = false;
//       }
//     }
//     if (kondisii === true) {
//       save.push(par2[y]);
//     }
//   }
//   return save;
// };
// // console.log(gabungan(tanggal, tanggalSama));

// // nested looop find the same value bteween 2 arrays
// let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
// let tinasFollowers = ["Sam", "Marta", "Elle"];
// let mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   // console.log(bobsFollowers[i]);
//   for (let k = 0; k < tinasFollowers.length; k++) {
//     // console.log(tinasFollowers[k]);
//     if (bobsFollowers[i] === tinasFollowers[k]) {
//       mutualFollowers.push(tinasFollowers[k]);
//     }
//   }
// }
// // console.log(mutualFollowers);

// //nested loop make it be duplicate only 1 data
// const flowers = (parametr1, parametr2) => {
//   for (let i = 0; i < parametr1.length; i++) {
//     let bulian = true;
//     for (let j = 0; j < mutualFollowers.length; j++) {
//       if (parametr1[i] === mutualFollowers[j]) {
//         bulian = false;
//       }
//     }
//     if (bulian === true) {
//       mutualFollowers.push(parametr1[i]);
//     }
//   }
//   for (let x = 0; x < parametr2.length; x++) {
//     let bulian = true;
//     for (let y = 0; y < mutualFollowers.length; y++) {
//       if (parametr2[x] === mutualFollowers[y]) {
//         bulian = false;
//       }
//     }
//     if (bulian === true) {
//       mutualFollowers.push(parametr2[x]);
//     }
//   }
//   return mutualFollowers;
// };
// // console.log(flowers(bobsFollowers, tinasFollowers));

// let bobsFollowers3 = ["Ash", "Barry", "Calum", "Denny"];
// let tinasFollowers3 = ["Ash", "Denny", "Rob"];
// let mutual = [];
// for (let i = 0; i < bobsFollowers3.length; i++) {
//   for (let j = 0; j < tinasFollowers3.length; j++) {
//     if (bobsFollowers3[i] === tinasFollowers3[j]) {
//       mutual.push(tinasFollowers3[j]);
//     }
//   }
// }
// // console.log(mutual);

// const angka1 = [
//   [1, 2, 3],
//   [3, 2, 3],
//   [6, 7, 4],
// ];
// const newArr2 = [];
// for (let i = 0; i < angka1.length; i++) {
//   if (i === 0) {
//     newArr2.push(angka1[i]);
//   } else {
//     const newArr3 = [];
//     for (let j = 0; j < angka1.length; j++) {
//       if (j === 0) {
//         newArr3.push([i][j]);
//       } else {
//         newArr3.push("+");
//       }
//     }
//     newArr2.push(newArr3);
//   }
// }
// // console.log(newArr2);

// const angka3 = [
//   [1, 2, 3],
//   [3, 2, 3],
//   [6, 7, 4],
// ];
// const newArray = [];
// for (let i = 0; i < angka3.length; i++) {
//   if (i === 0) {
//     newArray.push(angka3[i]);
//   } else {
//     const newArray1 = [];
//     for (let j = 0; j < angka3.length; j++) {
//       if (j === 0) {
//         newArray1.push([i][j]);
//       } else {
//         newArray1.push("+");
//       }
//     }
//     newArray.push(newArray1);
//   }
// }
// // console.log(newArray);

// const angka4 = [
//   [1, 2, 3],
//   [3, 2, 3],
//   [6, 7, 4],
// ];
// // const p = 0
// // for (let i = 0; i < angka4.length; i++) {
// //   let p = 0;
// //   for (let j = 0; j < angka4.length; j++) {
// //     p += angka4[i][j];
// //   }
// // console.log(p);
// // }

// const countries = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];
// const angkaAngka = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
// for (let i = 0; i < countries.length; i++) {
//   // console.log(countries[i]);
//   for (let j = 0; j < angkaAngka.length; j++) {
//     // console.log(angkaAngka[j]);
//   }
// }
// // console.log(countries);

// let z = 3;
// let strong = "";
// // for (let i = 0; i < n; i++) {
// //   // console.log(n);
// //   for (let j = 0; j < n; j++) {
// //     strang += "*";
// //   }
// //   strang += "\n";
// // }
// // console.log(strang);
// // *****
// // *****
// // *****
// // *****
// // *****

// for (let i = 0; i <= z; i++) {
//   for (let j = 0; j < i; j++) {
//     // console.log(j);
//     strong += "*";
//   }
//   strong += "\n";
// }
// // console.log(strong);

// // for (let i = 0; i < n; i++) {
// //   for (let j = 0; j < n - i; j++) {
// //     strang += "*";
// //   }
// //   strang += "\n";
// // }
// // console.log(strang);
// // *****
// // ****
// // ***
// // **
// // *

// // s
// // console.log(strang);

// // tanpa deklasi
// for (let i = 0; i < 5; i++) {
//   let strew = "";
//   for (let j = 0; j < 5; j++) {
//     strew += "*";
//   }
//   // console.log(strew);
// }

// for (let i = 0; i <= 5; i++) {
//   let strang = "";
//   for (let j = 0; j < 5 - i; j++) {
//     strang += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     strang += "*";
//   }
//   // console.log(strang);
// }

// for (let i = 0; i <= 5; i++) {
//   let s = "";
//   for (let j = 0; j <= i; j++) {
//     s += "+";
//   }
//   s += "+";
//   // console.log(s);
// }
// // console.log(s);

// let n = 5;
// let strang = "";
// for (let i = 0; i < n; i++) {
//   // let str3 = "";
//   for (let j = 0; j < n; j++) {
//     // let str3 = "";
//     if (i === 0 || i === n - 1) {
//       strang += "+";
//     } else {
//       if (j === 0 || j === n - 1) {
//         strang += "+";
//       } else {
//         strang += " ";
//       }
//     }
//   }
//   strang += "\n";
// }
// // console.log(strang);
// // +++++
// // +   +
// // +   +
// // +   +
// // +++++

// //without var
// for (let i = 0; i < 5; i++) {
//   let strung = "";
//   for (let j = 0; j < 5; j++) {
//     if (i === 0 || i === 5 - 1) {
//       strung += "*";
//     } else {
//       if (j === 0 || j === 5 - 1) {
//         strung += "*";
//       } else {
//         strung += " ";
//       }
//     }
//   }
//   // console.log(strung);
// }

// let m = 6;
// let string = "";

// for (let i = 1; i <= m; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if (i === m) {
//       string += "*";
//     } else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// // console.log(string);
// // *
// // **
// // * *
// // *  *
// // *   *
// // ******

// //without var
// for (let i = 0; i <= 5; i++) {
//   let strang = "";
//   for (let j = 0; j < i; j++) {
//     if (i === 5) {
//       strang += "*";
//     } else {
//       if (j === 0 || j === i - 1) {
//         strang += "*";
//       } else {
//         strang += " ";
//       }
//     }
//   }
//   // console.log(strang);
// }
// // console.log(strang);

// const countriess = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
// const newArr = [];
// for (let i = 0; i < countriess.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// // console.log(newArr);

// const num = 5;
// const fungsiBaru = (param1) => {
//   for (let i = 0; i <= param1; i++) {
//     let tampung = "";
//     for (let j = 0; j < param1 - i; j++) {
//       tampung += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       tampung += "*";
//     }
//     // console.log(tampung);
//   }
// };
// fungsiBaru(num);

// for (let i = 0; i <= 3; i++) {
//   let santuy = "";
//   for (let j = 0; j < i; j++) {
//     santuy += "*";
//   }
//   // console.log(santuy);
// }

// for (let i = 0; i <= 4; i++) {
//   let tampung = "";
//   for (let j = 0; j < 4 - i; j++) {
//     tampung += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     tampung += "+";
//   }
//   // console.log(tampung);
// }

// const doubleAray = [2, 3, 4, 5, 2, 3, 4, 7];
// let doubleAray1 = [7, 3, 2, 21, 33, 44];
// let allArray = [];
// // const inputArray = (parameter1, parameter2) => {
// //   for (let i = 0; i < parameter1.length; i++) {
// //     let kondisi = true;
// //     for (let j = 0; j < parameter2.length; j++) {
// //       if (parameter1[i] === parameter2[j]) {
// //         kondisi = false;
// //       }
// //       if (kondisi === true) {
// //         allArray.push(parameter1[i]);
// //       }
// //     }
// //   }
// // };

// let strings = "";
// for (let i = 0; i < 10; i++) {
//   // console.log((strings += "*"));
// }

// for (let i = 0; i < 22; i = i + 2) {
//   // console.log(i);
//   for (let j = 0; j < i; j++) {
//     if (i % 2 === 0) {
//     }
//   }
//   // console.log(i);
// }

// // for (let index = 0; index < array.length; index++) {
// //   const element = array[index];
// // }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     if (i === 0 || i === 5 - 1) {
//       str += "*";
//     } else {
//       if (j === 0 || j === 5 - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   // console.log(str);
// }

// for (let i = 0; i <= 5; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     if (i === 5) {
//       str += "*";
//     } else {
//       if (j === 0 || j === 5 - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   // console.log(str);
// }

// for (let i = 0; i <= 5; i++) {
//   // console.log(i);
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     // console.log(j);
//     str += "*";
//   }
//   // console.log(str);
// }

// for (let i = 0; i <= 5; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     if (i === 5) {
//       str += "*";
//     } else {
//       if (j === 0 || j === i - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   // console.log(str);
// }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     if (i === 0 || i === 5 - 1) {
//       str += "*";
//     } else {
//       if (j === 0 || j === 5 - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   // console.log(str);
// }

// for (let i = 1; i < 6; i++) {
//   let str = "";
//   for (let j = 0; j < 6 - i; j++) {
//     str += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     str += "*";
//   }
//   // console.log(str);
// }

// let n3 = 22;
// let string1 = "";
// for (let i = 0; i < n3.length; i++) {
//   string1 += n3;
// }
// console.log(string1);

// const angkaPecah = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 5, 8, 5],
//   [3, 3, 5, 4, 2],
//   [4, 5, 4, 8, 9],
// ];
// // expect
// // ["", 2, 3, 4, 5],
// // [2, "", 5, 8, 5],
// // [3, 3, "", 4, 2],
// // [4, 5, 4, "", 9],
// let store = [];
// // const functionOfNumber = (angkaPecah) => {
// //   for (let i = 0; i < angkaPecah.length; i++) {
// //     if (i === 0) {
// //       store.push(angkaPecah[i]);
// //     } else {
// //       let store2 = [];
// //       for (let j = 0; j < angkaPecah.length; j++) {
// //         if (j === 0) {
// //           store2.push([i][j]);
// //         } else {
// //           store2.push("");
// //         }
// //       }
// //       store.push(store2);
// //     }
// //   }
// //   return store;
// // };
// // //

// // cara benar
// for (let i = 0; i < angkaPecah.length; i++) {
//   for (let j = i; j === i; j++) {
//     angkaPecah[i][j] = "*";
//   }
// }
// // console.log(angkaPecah);

// for (let i = 1; i <= 7; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += [i - j];
//   }
//   // console.log(str);
// }

// for (let i = 0; i < 6; i++) {
//   let str = "";
//   for (let j = 0; j < 6; j++) {
//     str += "*";
//   }
//   // console.log(str);
// }

// let followerNina = ["Malika", "Sani", "Jes", "Logan"];
// let followerJessy = ["Jes", "Loi", "Logan", "Jes", "Sani", "Loi"];
// let storing = [];
// const storingFollower = (param1, param2) => {
//   for (let i = 0; i < param1.length; i++) {
//     let condition = true;
//     for (let j = 0; j < storing.length; j++) {
//       if (param1[i] === storing[j]) {
//         condition = false;
//       }
//     }
//     if (condition === true) {
//       storing.push(param1[i]);
//     }
//   }
//   for (let x = 0; x < param2.length; x++) {
//     let condition = true;
//     for (let y = 0; y < condition.length; y++) {
//       if (param2[x] === condition[y]) {
//         condition = false;
//       }
//     }
//     if (condition === true) {
//       storing.push(param2[x]);
//     }
//   }
//   return storing;
// };
// // console.log(storingFollower(followerNina, followerJessy));

// const arr4 = ["Malika", "Sani", "Jes", "Logan"];
// const arr25 = ["Jes", "Loi", "Logan", "Jes", "Sani", "Loi"];
// let storing1 = [];
// const mixedArray = (param1, param2) => {
//   for (let i = 0; i < param1.length; i++) {
//     let condition = true;
//     for (let j = 0; j < storing1; j++) {
//       if (param1[i] === storing1[j]) {
//         condition = false;
//       }
//     }
//     if (condition === true) {
//       storing1.push(param1[i]);
//     }
//   }
//   for (let x = 0; x < param2.length; x++) {
//     condition = true;
//     for (let y = 0; y < storing1.length; y++) {
//       if (param2[x] === storing1[y]) {
//         condition = false;
//       }
//     }
//     if (condition === true) {
//       storing1.push(param2[x]);
//     }
//   }
//   return storing1;
// };
// // console.log(mixedArray(arr4, arr25));

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let stor = [];
// const gabungArray = (parametr1, parametr2) => {
//   for (let i = 0; i < parametr1.length; i++) {
//     kondisi = true;
//     for (let j = 0; j < kondisi.length; j++) {
//       if (parametr1[i] === kondisi[j]) {
//         kondisi === false;
//       }
//     }
//     if (kondisi === true) {
//       stor.push(parametr1[i]);
//     }
//   }
//   for (let x = 0; x < parametr2.length; x++) {
//     kondisi = true;
//     for (let y = 0; y < kondisi.length; y++) {
//       if (parametr2[x] === kondisi[y]) {
//         kondisi === false;
//       }
//     }
//     if (kondisi === true) {
//       stor.push(parametr2[x]);
//     }
//   }
//   return stor;
// };
// // console.log(gabungArray(array1, array2));

// //christmast tree
// for (let i = 0; i <= 7; i++) {
//   let str = "";
//   for (let j = 0; j <= 7 - i; j++) {
//     str += " ";
//   }
//   for (let x = 0; x < 2 * i - 1; x++) {
//     str += "*";
//   }
//   // console.log(str);
// }

// //reversed christmas tree
// for (let i = 0; i < 7; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += " ";
//   }
//   for (let x = 0; x < 2 * (7 - i) - 1; x++) {
//     str += "*";
//   }
//   // console.log(str);
// }

// let str1 = "javascript";
// // Example output:
// // jZvZsZrZpZ OR each letter on a new line
// for (let i = 1; i < str1.length; i += 2) {
//   str1 = str1.split("");
//   str1[i] = "Z";
//   str1 = str1.join("");
// }
// // console.log(str1);

// const string2 = "all your base are belong to us";
// const regex = /base/;
// const isExciting = regex.test(string2);
// // console.log(isExciting);

// //// using array builtin function
// const ari = ["ari", "like", "to", "hiking"];
// const ariWhere = ["in", "tijuana"];
// let allOfAri = [];
// for (let i = 0; i < ari.length; i++) {
//   allOfAri = ari.concat(ariWhere);
// }
// // console.log(allOfAri);

// let age = "sudah tua";
// for (let i = 1; i < age.length; i += 2) {
//   age = age.split("");
//   age[i] = "TUA";
//   age = age.join("");
// }
// // console.log(age);

// for (let i = 0; i <= 7; i++) {
//   let str = "";
//   for (let j = 0; j <= 7 - i; j++) {
//     str += " ";
//   }
//   for (let x = 0; x < 2 * i - 1; x++) {
//     str += "*";
//   }
//   // console.log(str);
// }

// for (let i = 0; i < 7; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += "*";
//   }
//   // console.log(str);
// }
// // console.log("hello world");

// const findnum = [1, 2, 3, 4, 5, 6, 7];
// let resnum = [];
// for (let i = 0; i < findnum.length; i++) {}

// // const nilaiTengah = [1, 2, 3, 4, 5, 5, 5, 4, 3, 3];
// const medianSum = (parameter) => {
//   for (let i = 0; i < parameter.length; i++) {
//     let mid = Math.floor(parameter.length / 2);
//     // nums = [i].sort();
//   }
//   return mid;
// };
// console.log(medianSum(nilaiTengah));

// const nilaiTengah = [1, 2, 3, 4, 5, 5, 5, 4, 3, 3];
// for (let i = 0; i < nilaiTengah.length; i++) {
//   // console.log(nilaiTengah);
// }

//awal baru semoga aja!
// function myFunc(theObject) {
//   theObject.model = "Toyota";
// }

// const mycar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(mycar.year);
// myFunc(mycar);
// const newArr = (array) => {
//   array.push(2);
//   return array;
// };

// // variabel
// const arrayFunc = [1, 2, 3, 4, 5];

// //calling function dengan storing
// // const res = newArr(arrayFunc);
// // console.log(res);

// //calling tanpa storing
// console.log(newArr(arrayFunc));

//q1
// Write a JavaScript function that reverses a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

//solution
// const reverse = (param) => {
//   param.reverse();
//   return param;
// };
// const number = [3, 2, 2, 4, 3];
// console.log(reverse(number));

//q2
// Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

//solution
// const combination = (params) => {
//   return params;
// };
// const string = "dog";
// console.log(string);

// function
// const makanPadang = true;

// if (makanPadang === false) {
//   return "makan";
// }
// console.log(makanPadang);

// const nowAge = 2022;
// const ageJonas = nowAge - 2000;
// const ageMike = nowAge - 1999;
// // console.log(ageJonas, ageMike);

// // console.log(ageJonas < ageMike);
// console.log(ageMike - 2 > ageJonas - 1);

//========>
// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

//mark
// const massMark = 78;
// const heighMArk = 1.69;
// const totalBmiMark = massMark / heighMArk ** 2;

// //Jhon
// const massJhon = 92;
// const heighJhon = 1.95;
// const totalBmiJhon = massJhon / heighJhon ** 2;

// const totalOfThem = totalBmiMark > totalBmiJhon;

// console.log(totalBmiMark, totalBmiJhon, totalOfThem);

// const name = "jonas";
// const city = "kazan";
// const old = "12";
// const job = "programmer";

// const whoIs = `Im  ${name}, from ${city}, im ${old} years old, my job is ${job}`;
// console.log(whoIs);

// const age = 10;

// if (age >= 20) {
//   console.log("sarah can driving");
// } else {
//   const status = 18 - age;
//   console.log(`sarah can't driving, wait for ${status} year`);
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

// mark
// const massMark = 78;
// const heighMArk = 1.69;
// const totalBmiMark = massMark / heighMArk ** 2;

// //Jhon
// const massJhon = 92;
// const heighJhon = 1.95;
// const totalBmiJhon = massJhon / heighJhon ** 2;

// const totalOfThem = totalBmiMark > totalBmiJhon;

// console.log(totalBmiMark, totalBmiJhon, totalOfThem);

// console.log(`massJhon ${massJhon}, massMark ${massMark}`);

// const inputYear = "2000";

// console.log(inputYear + 19);
// console.log(Number(inputYear) + 19);

// type coercion
//
// let n = "2" + 1;
// n = n - 1;
// console.log(n);

// console.log("15" - "4" - "3" - 2 + "5");

// const money = 0;

// if (money) {
//   console.log("go to club");
// } else {
//   console.log("dont go!");
// }

// const age = 11;

// if (age === 19) {
//   console.log("u r adult");
// } else {
//   console.log("u r young");
// }

// const callAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = callAge(birthYear);
//   const retirememnt = 65 - age;

//   if (retirememnt > 0) {
//     console.log(`${firstName} retires is ${retirememnt} years`);
//     return retirememnt;
//   } else {
//     console.log(`${firstName} has already entired`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(1991, "mahdi"));
// console.log(yearUntilRetirement(1950, "mahdi"));

//aaray

// const friends = ["mike", "jonny", "teripang"];

// console.log(friends);
// console.log(friends[friends.length - 1]);

// friends[2] = "memek";
// console.log(friends);

// const firstName = "joan";
// const joan = [firstName, "svhemer", 2022 - 2000, "programmer", friends];
// console.log(joan);

// const callAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const year = [1990, 1991, 1992, 1993];

// // console.log(callAge(year[2]));
// const age = [callAge(year[0]), callAge(year[1]), callAge(year[2])];
// console.log(age);

// fizzbuz
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 7 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 7 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const functionTest = (makan, minum) => {
//   return `saya makan ${makan} dan juga minum ${minum}`;
// };

// console.log(functionTest("nasgor", "fanta"));

// const tesFunction2 = () => {};
