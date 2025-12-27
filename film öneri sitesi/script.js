document.getElementById("iletisimForm").addEventListener

("submit", function(e) 

{ e.preventDefault();

    const ad = document.getElementById("ad").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("mesaj").value;

    console.log("İletişim Formu Verileri:");
    console.log("Ad Soyad:", ad);
    console.log("E-posta:", email);
    console.log("Mesaj:", mesaj);
}

);
