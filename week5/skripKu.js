// 
//     Nama File : mahasiswa.html
//     NIM       : 11S20040
//     Kelas     : 13 IF 2
// 

function myDom() {
   var inputName = document.getElementById("name").value;
   var inputNama = document.getElementById("nama")
   inputNama.innerHTML = "Nama saya : " + inputName

   var inputPlace = document.getElementById("place").value;
   var inputTempat = document.getElementById("tempat")
   inputTempat.innerHTML = "Tempat Lahir Saya : " + inputPlace

   var inputDate = document.getElementById("date").value;
   var inputTanggal = document.getElementById("tanggal")
   inputTanggal.innerHTML = "Tanggal Lahir Saya : " + inputDate

   var inputGender = document.getElementById("gender").value;
   var inputJenis = document.getElementById("jenis")
   inputJenis.innerHTML = "Jenis Kelamin : " + inputGender

   var inputSchool = document.getElementById("school").value;
   var inputPendidikan = document.getElementById("pendidikan")
   inputPendidikan.innerHTML = "Pendidikan Terkahir Saya : " + inputSchool

   if (inputName.length == 0) {
      alert("Nama harus di isi");
      document.getElementById("name").focus();
   } else
      if (inputName.length < 7) {
         alert("nama harus memiliki panjang minimal 7 karakter");
         document.getElementById("name").focus();

      }

}



