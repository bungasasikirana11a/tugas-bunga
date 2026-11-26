const daftarNama = [
  "Ashley Aurelia Nomi Putri",
  "Alyani Rifiah",
  "Anisa Istiqoma",
  "Bunga Sasi Kirana",
  "Bunia Asyirotul Karimah",
  "Dewi Afifatu Zuhro",
  "Dini Febtia Murbi",
  "Della Agustina Widiyani",
  "Diandra Kayla Aramita",
  "Muhammad Zainul Haqi",
  "Lucky Adi Irawan",
  "Ihzan Gubawan"
];

console.log(`Total nama: ${daftarNama.length}\n`);

daftarNama.forEach((nama, index) => {
  console.log(`${index + 1}. ${nama}`);
});