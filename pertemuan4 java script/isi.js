function hitungtotal() {
    var nama = (document.form.i_nama.value);
    var asal = (document.form.i_asal.value);
    var tujuan = (document.form.itujuan.value);
    var jalurtravel = asal + "." + tujuan;
    //var jenistravel = (document.ffrom.i_jenistravel.value);
    var travelbybus = (document.form.i_bus.checked);
    var travelbykereta = (document.form.i_kereta.checked);
    var travelbypesawat = (document.form.i_pesawat.checked);
    var jumlahtiket = parseFloat(document.form.i_jumlahtiket.value);
    var member = (document.form.i_member.checked);


    var hargatiket = 0.0;
    var subtotal = 0.0;
    var diskon = 0.0;
    var total = 0.0;

    //harga tiket berdasarkan jenis travel
    if (travelbybus == true){
    var jenistiket = "Bus";
    //harga tiket menggunakan bus
  }if (tujuan == "Palopo")
  {
    hargatiket = 100000; 
  }else if (tujuan == "Makasar")
  {
      hargatiket = 150000;
  }else {
    hargatiket = 200000;
  }
  if (travelbykereta == true){
    var jenistiket = "Kereta";
  }
  //harga tiket menggunakan kereta
  if (tujuan == "palopo")
  {
      hargatiket = 300000;
  }
  else if (tujuan == "Makasar")
  {
      hargaTiket = 350000;
  }
  else{
    hargatiket = 500000;
  }

  if (travelbyPesawat == true){
    var jenistravel = "Pesawat";
  }
  // harga tiket menggunakan pesawat
   if(tujuan == "Palopo"){
    hargatiket = 600000;
   }
   else if (tujuan == "Makasar"){
    hargatiket = 650000;
   }
   else{
    hargatiket = 700000;
   }
   subtotal = jumlahtiket* hargatiket;
   //diskon untuk member
   if(document.form.imember.checked == true){
    diskon = 0.10 * subtotal;
   }
   else{
    diskon = 0.0;
   }
   
//total harga
  total = subtotal-diskon;

  document.from.o_tiket.value = eval(hargatiket);
  document.from.o_travelby.value = eval(jenistiket);
  document.from.o_subtotal.value = eval(subtotal);
  document.from.o_diskon.value = eval(diskon);
  document.from.o_total.value = eval(total);
  
  }
      