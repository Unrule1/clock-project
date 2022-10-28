let firstName = prompt("..Lütfen adınızı giriniz..")

let change = document.querySelector("div.text1")
change.innerHTML = `Merhaba <b>${firstName}!</b> Hoş geldin!`

let clock = document.querySelector(div.myClock)

    var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth();
	var gun=tarih.getDay();
    var gun1=tarih.getUTCDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
    

clock.innerHTML = document.write(gun+"/"+ay+"/"+yil+"<br>"+saat+":"+dakika+":"+saniye+"<br>");