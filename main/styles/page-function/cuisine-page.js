const cuisineTitle = document.getElementById("cuisine-title");
const titles = document.querySelector("title");

if (localStorage.getItem("exploreTitle")) {
    cuisineTitle.textContent = localStorage.getItem("exploreTitle");
    titles.textContent = `Borneo | ${localStorage.getItem("exploreTitle")}`
} 


// Isi Cuisine Page
const titleBorneo = document.getElementById("title-borneo");

const penjelasan = document.getElementById("penjelasan");
const penjelasan2 = document.getElementById("penjelasan-2");
const penjelasan3 = document.getElementById("penjelasan-3");
const penjelasan4 = document.getElementById("penjelasan-4");

const background = document.getElementById("cuisine-img");
const photo2 = document.getElementById("cuisine-img-2");
const photo3 = document.getElementById("cuisine-img-3");
const photo4 = document.getElementById("cuisine-img-4");
const photo5 = document.getElementById("cuisine-img-5");
const photo6 = document.getElementById("cuisine-img-6");
const photo7 = document.getElementById("cuisine-img-7");
const photo8 = document.getElementById("cuisine-img-8");

const videos = document.getElementById("link-video");


if (localStorage.getItem("exploreTitle") === "Sate Lilit") {
    titleBorneo.innerText = "-Bali-"

    penjelasan.innerText = "Sate lilit adalah salah satu makanan khas Bali. Sate lilit awalnya adalah makanan khas Klungkung dan hanya dihidangkan saat ada upacara keagamaan saja. Namun saat ini sate lilit bisa ditemukan di seluruh wilayah di Bali."
    // Style tambahan penjelasan
    penjelasan.style.fontSize = "2.2rem";
    penjelasan.style.letterSpacing = "1px";
    penjelasan.style.width = "85%"
    penjelasan.style.flex = "1"

    penjelasan2.innerText = "Sate lilit berasal dari kata 'lilit' yang artinya 'dibelit'. Sesuai namanya, hidangan yang satu ini berbeda dengan sate pada umumnya yang ditusuk ke bambu. Sate lilit direkatkan ke tusuk bambu berbentuk pipih ataupun sereh."
    penjelasan3.innerText = "Sate lilit memiliki tampilan yang khas yakni berwarna kuning yang menggugah selera. Warna tersebut berasal kunyit dari bumbu basa genep"
    penjelasan4.innerText = "Sate lilit memiliki filosofi yakni menyimbolkan masyarakat Bali yang selalu bersatu. Selain itu, sate lilit juga menjadi simbol kejantanan pria. Sebab sate lilit sejak dulu hanya boleh dikerjakan oleh para kaum pria. Mulai dari meracik adonan hingga proses membakar juga hanya boleh dilakukan kaum pria. Jika seorang pria tidak bisa membuat sate lilit, maka akan dipertanyakan kejantanannya."

    background.src = "../main/styles/assets/learnmore/susan-gracia-7ad96addf8db8f432e4c4bd3b32726dd_600x400.jpg"
    photo2.src = "../main/styles/assets/learnmore/63-removebg-preview.png"
    photo3.src = "styles/assets/learnmore/62-removebg-preview.png"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "230px";
     photo3.style.width = "230px";


    photo4.src = "styles/assets/learnmore/61.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/sate lilit bali 7a.JPG"
    photo6.src = "./styles/assets/learnmore/sate lilit bali 7a.JPG"
    photo7.src = "./styles/assets/learnmore/ilustrasi-kelapa-parut-1_169.jpeg"
    photo8.src = "./styles/assets/learnmore/resep-sate-lilit-ikan-bali_43.jpeg"

    videos.src = "https://www.youtube.com/embed/NU8Ta6zADAc"
} 

else if (localStorage.getItem("exploreTitle") === "Soto Banjar") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");

    titleBorneo.innerText = "-Kalimantan Selatan-"

    cuisineBackground1.style.background = "none"

    penjelasan.innerText = " Soto Banjar merupakan kuliner berkuah yang berasal dari daerah Banjarmasin, Kalimantan Selatan. Nama kuliner ini diambil dari suku mayoritas yang mendiami wilayah Kalsel, yakni suku Banjar."
    // Style tambahan penjelasan
    penjelasan.style.color = "#000"
    penjelasan.style.textAlign = "center"  
    penjelasan.style.width = "75%"
    penjelasan.style.marginTop = "40px"

    penjelasan2.innerText = "Soto Banjar ini menggunakan daging ayam kampung sebagai primadona utama dalam hidangannya."
    penjelasan3.innerText = " Soto Banjar biasa dihidangkan dengan perkedel kentang."
    penjelasan4.innerText = "Soto Banjar, hidangan ikonik dari Kalimantan Selatan, menyimpan filosofi yang mencerminkan kekayaan budaya dan nilai-nilai luhur masyarakat Banjar. Perpaduan berbagai elemen dalam semangkuk soto ini bukan hanya memanjakan lidah, tetapi juga melambangkan harmoni, kesederhanaan, dan kearifan lokal."

    background.src = "../main/styles/assets/learnmore/soto-banjar-kuliner-ikonik-kalimantan-selatan-yang-berkuah-gurih-creamy-2.jpeg"
    photo2.remove();
    photo3.src = "styles/assets/learnmore/65.png"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "230px";
     photo3.style.width = "230px";


    photo4.src = "styles/assets/learnmore/64.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/banjar1.webp"
    photo6.src = "./styles/assets/learnmore/banjar1.webp"
    photo7.src = "./styles/assets/learnmore/telur.JPG"
    photo8.src = "./styles/assets/learnmore/64.png"

    videos.src = "https://www.youtube.com/embed/_bqjUsDmeWE?si=ous5ew51t9IhvZn7"
}

else if (localStorage.getItem("exploreTitle")=== "Empek Empek") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");
    const minitext = document.querySelector("#mini-text");
    const cuisineminitext = document.querySelector(".cuisine-mini-text");

    cuisineBackground1.style.background = "#9c8d46"
    // cuisineBackground1.style.marginTop = "120px"

    titleBorneo.innerText = "-Sumatera Selatan-"

    minitext.innerText = "Pempek adalah salah satu makanan tradisional khas Palembang. Makanan yang diolah dari Ikan dan Sagu ini bisa dengan sangat mudah ditemukan di Kota Palembang."
    cuisineminitext.style.display = "block"

    penjelasan.innerText = "Pada awalnya Pempek dikenal dengan nama ‘Kelesan’. Awalnya, pempek dibuat oleh orang asli Palembang yang kemudian dititipkan ke orang Tionghoa untuk dijual. Penamaan nama pempek berasal dari nama panggilan oleh pembeli kepada si penjual kelesan yang dipanggil dengan 'empek' atau 'apek' yang dalam bahasa China berarti 'paman' sehingga lama-kelamaan kata ‘pek’ berubah menjadi ‘pempek’."
    // Style tambahan penjelasan 
    penjelasan.style.textAlign = "cen"

    penjelasan2.innerText = "Bahan dasar yang digunakan untuk membuat Pempek adalah ikan. Awalnya ikan Belida, ikan ini mengalami kelangkaan sehingga kini bisa menggunakan ikan lain seperti tenggiri, dll"
    penjelasan3.innerText = "Pempek dimakan dengan kuah atau saus cair yang oleh masyarakat Palembang disebut ‘cuko’. Cuko terbuat dari campuran air gula merah/gula batok, asam jawa, bawang putih dan cabe rawit."
    penjelasan4.innerText = "Pempek, hidangan ikonik dari Palembang, Sumatera Selatan, tak hanya memanjakan lidah dengan kelezatannya yang tiada tara, tetapi juga menyimpan filosofi mendalam yang mencerminkan nilai-nilai luhur kehidupan. Teksturnya yang kenyal dan padat bagaikan semangat pantang menyerah dalam menghadapi berbagai rintangan. Ia melambangkan ketangguhan jiwa manusia yang mampu bangkit kembali setelah terjatuh, seperti adonan pempek yang diuleni dan dibentuk berkali-kali hingga mencapai tekstur yang sempurna."

    background.src = "../main/styles/assets/learnmore/Pempek Palembang.jpg"
    photo2.src = "../main/styles/assets/learnmore/Resep-Dan-Cara-Membuat-Pempek-Sederhana-Bonus-2-Tips-Dan-Trik.webp"
    // Style tambahan photo2
    photo2.style.width = "50%"

    photo3.src = "styles/assets/learnmore/32.png"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "230px";
     photo3.style.width = "230px";


    photo4.src = "styles/assets/learnmore/31.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/pempek1.webp"
    photo6.src = "./styles/assets/learnmore/pempek_mamak_pempek_kapal_selam_jumbo_full02_b9275673.webp"
    photo7.src = "./styles/assets/learnmore/4d270f5c13217122be0a6124359245dd.jpg"
    photo8.src = "./styles/assets/learnmore/05c42588-8c79-410e-99eb-0e3a2ca66c18.jpg"

    videos.src = "https://www.youtube.com/embed/c9jqyIIB4XQ?si=eT6oQ6Uep_vhrnyK"
}

else if (localStorage.getItem("exploreTitle")=== "Bubur Pedas") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");

    titleBorneo.innerText = "-Kalimantan Barat-"

    cuisineBackground1.style.background = "none"

    penjelasan.innerText = "Bubur Pedas atau Bubbor Paddas adalah makanan tradisional khas orang Melayu Sambas dari Kalimantan Barat. dahulu bubur pedas ini disajikan di kerajaan, dan merupakan cerminan budaya yang kental di kerajaan Melayu Deli. Walaupun namanya bubur pedas, tetapi sebenarnya rasa asli bubur ini tidaklah peda"
    // Style tambahan penjelasan
    penjelasan.style.color = "#000"
    penjelasan.style.textAlign = "center"  
    penjelasan.style.width = "75%"
    penjelasan.style.marginTop = "40px"

    penjelasan2.innerText = "Berbahan dasar beras yang telah ditumbuk halus dan disangrai,"
    penjelasan3.innerText = "Ditambah taburan kacang tanah dan  ikan teri goreng membuat cita rasa semakin komplit."
    penjelasan4.innerText = "Bubur pedas memadukan kelembutan dan rasa pedas yang menyengat, seperti kehidupan yang penuh dengan kontras. Tantangan adalah katalis pertumbuhan, seperti rasa pedas yang meningkatkan cita rasa. Bubur pedas mengajarkan penerimaan perbedaan dan keberagaman, serta menghargai dinamika kehidupan. Dalam pahitnya kehidupan, kita mencari kelembutan dan kehangatan. Filosofi ini mengajarkan menghargai kontras dan menemukan keseimbangan."

    background.src = "../main/styles/assets/learnmore/bubbor-pedas-3886766589.webp"
    photo2.remove();
    photo3.src = "styles/assets/learnmore/69.png"
     // Style tambahan photo3
     photo3.style.marginTop = "-1.5rem";
     photo3.style.marginLeft = "-1.5rem";
     photo3.style.height = "250px";
     photo3.style.width = "250px";


    photo4.src = "styles/assets/learnmore/70.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/68s.webp"
    photo6.src = "./styles/assets/learnmore/68s.webp"
    photo7.src = "./styles/assets/learnmore/68ss.jpeg"
    photo8.src = "./styles/assets/learnmore/69s.webp"

    videos.src = "https://www.youtube.com/embed/wdSofgJfQBc?si=eshPhRIcqfknXegM"
}

else if (localStorage.getItem("exploreTitle")=== "Mie Aceh") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");
    const wrapperFirst = document.querySelector(".cuisine-wrapper-first");
    const wrapperSecond = document.querySelector(".cuisine-wrapper-second");

    titleBorneo.innerText = "-Aceh-"

    cuisineBackground1.style.background = "none"
    cuisineBackground1.style.marginBottom = "-4rem"

    wrapperFirst.style.display = "none"
    wrapperSecond.style.display = "none"

    penjelasan.innerText = "Mie Aceh adalah satu dari kuliner khas yang berasal dari Nanggroe Aceh Darussalam. Ciri khas dari kuliner yang satu ini ialah mie yang disiram kuah kari kental yang bercita rasa rempah-rempah, ditambah aneka lauk didalamnya."
    // Style tambahan penjelasan
    penjelasan.style.color = "#000"
    penjelasan.style.textAlign = "center"  
    penjelasan.style.width = "75%"
    penjelasan.style.marginTop = "40px"

    penjelasan2.innerText = "Berbahan dasar beras yang telah ditumbuk halus dan disangrai,"
    penjelasan3.innerText = "Ditambah taburan kacang tanah dan  ikan teri goreng membuat cita rasa semakin komplit."
    penjelasan4.innerText = " Perpaduan budaya-budaya ini akhirnya melahirkan Mie Aceh sebagai kuliner khas ibu kota Banda Aceh. kaldu kental dalam mie Aceh merupakan pengaruh dari masakan India. Sementara mie sendiri berasal dari masakan Tiongkok. Penggunaan daging kambing dan sapi, tidak lepas dari pengaruh nilai-nilai Islam di tanah Aceh. Sedangkan penambahan aneka hewan laut atau seafood di dalam Mie Aceh dipengaruhi terletak geografis Aceh."

    background.src = "../main/styles/assets/learnmore/051727900_1565158502-shutterstock_275725211.jpg"
    photo2.remove();
    // photo3.src = "styles/assets/learnmore/69.png"
     // Style tambahan photo3
     photo3.style.marginTop = "-1.5rem";
     photo3.style.marginLeft = "-1.5rem";
     photo3.style.height = "250px";
     photo3.style.width = "250px";


    // photo4.src = "styles/assets/learnmore/70.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/Resep-Mie-Aceh-Goreng-Simpel-Untuk-Masak-di-Rumah.jpg"
    photo6.src = "./styles/assets/learnmore/Resep-Mie-Aceh-Goreng-Simpel-Untuk-Masak-di-Rumah.jpg"
    photo7.src = "./styles/assets/learnmore/FotoJet-2023-05-10T141644726-2287506710.webp"
    photo8.src = "./styles/assets/learnmore/sluuurp-5-mie-aceh-pedas-berempah-bisa-dinikmati-di-sini-2.jpeg"

    videos.src = "https://www.youtube.com/embed/OGtn3u23Yjw?si=EJY0LG-iMyws07ry"
}

else if (localStorage.getItem("exploreTitle")=== "Gudeg") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");

    titleBorneo.innerText = "-Jawa Tengah-"

    cuisineBackground1.style.background = "none"

    penjelasan.innerText = "Gudeg merupakan makanan asal Jogja yang bahan baku utamanya berasal dari nangka muda dan kemudian dimasak dengan santan."
    // Style tambahan penjelasan
    penjelasan.style.color = "#000"
    penjelasan.style.textAlign = "center"  
    penjelasan.style.width = "75%"
    penjelasan.style.marginTop = "40px"

    penjelasan2.innerText = "Biasanya gudeg menggunakan bahan utama nangka muda atau oleh warga lokal disebut gori."
    penjelasan3.innerText = "Umumnya, gudeg disajikan bersama nasi, areh, ayam, telur, tahu, dan juga sambal krecek."
    penjelasan4.innerText = "Seblak, makanan khas Bandung, lebih dari sekadar kuliner yang menggugah selera; ia mencerminkan filosofi masyarakat Sunda yang kaya rasa dan kebersamaan. Terbuat dari bahan sederhana seperti kerupuk dan kencur yang diolah dengan cinta, seblak menunjukkan bagaimana yang biasa bisa menjadi luar biasa dengan kreativitas dan kehangatan. Kuah pedasnya mengingatkan pentingnya kehangatan sosial, sementara topping seperti sayuran, telur, dan sosis mencerminkan keragaman budaya yang saling melengkapi. Seblak adalah simbol inklusivitas, di mana elemen berbeda bersatu dalam harmoni, menciptakan hidangan yang memanjakan lidah dan menghangatkan hati."

    background.src = "../main/styles/assets/learnmore/WhatsApp-Image-2023-05-01-at-210245-3742408587.webp"
    photo2.remove();
    photo3.src = "styles/assets/learnmore/gudeg-jogja.jpg"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "220px";
     photo3.style.width = "220px";


    photo4.src = "styles/assets/learnmore/1200px-Nasi_Gudeg.jpg"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/012158200_1417956101-gudeg (1).webp"
    photo6.src = "./styles/assets/learnmore/012158200_1417956101-gudeg (1).webp"
    photo7.src = "./styles/assets/learnmore/gudeg-yogyakarta-cita-rasa-kuliner-indonesia.jpg"
    photo8.src = "./styles/assets/learnmore/gudeg-1_43.jpeg"

    videos.src = "https://www.youtube.com/embed/ApLNIWYZXdw?si=WlDP5fouIeYP6rr3"
}

else if (localStorage.getItem("exploreTitle")=== "Seblak") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");
    const minitext = document.querySelector("#mini-text");
    const cuisineminitext = document.querySelector(".cuisine-mini-text");

    cuisineBackground1.style.background = "#9c8d46"
    cuisineBackground1.style.flexDirection = "row-reverse";
    // cuisineBackground1.style.marginTop = "120px"

    titleBorneo.innerText = "-Sunda-"

    minitext.innerText = "Seblak memiliki paduan cita rasa pedas dan gurih. Makanan yang identik dengan kuah ini dibuat dari kerupuk dan beberapa jenis makanan lainnya, yaitu ada bawang putih dan kencur."
    cuisineminitext.style.display = "block"

    penjelasan.innerText = "Seblak, makanan khas Indonesia, berasal dari Bandung, Jawa Barat. Awalnya terbuat dari kerupuk direbus dengan tambahan bumbu, sayuran, daging, atau seafood. Populer di kalangan anak muda sebagai makanan pinggir jalan, sekarang telah menjadi favorit banyak orang di seluruh Indonesia karena keunikan rasanya yang pedas dan gurih."
    // Style tambahan penjelasan 
    penjelasan.style.textAlign = "center"

    penjelasan2.innerText = "Kerupuk yang digunakan biasanya adalah kerupuk aci atau kerupuk kanji yang direndam terlebih dahulu hingga lembek sebelum dimasak."
    penjelasan3.innerText = "Bumbu Kencur adalah rempah yang memberikan rasa khas pada seblak. Bumbu ini biasanya dihaluskan bersama dengan bawang putih, cabai, dan bumbu lainnya untuk menghasilkan rasa pedas dan gurih yang khas."
    penjelasan4.innerText = "Seblak, makanan khas Bandung, lebih dari sekadar kuliner yang menggugah selera; ia mencerminkan filosofi masyarakat Sunda yang kaya rasa dan kebersamaan. Terbuat dari bahan sederhana seperti kerupuk dan kencur yang diolah dengan cinta, seblak menunjukkan bagaimana yang biasa bisa menjadi luar biasa dengan kreativitas dan kehangatan. Kuah pedasnya mengingatkan pentingnya kehangatan sosial, sementara topping seperti sayuran, telur, dan sosis mencerminkan keragaman budaya yang saling melengkapi. Seblak adalah simbol inklusivitas, di mana elemen berbeda bersatu dalam harmoni, menciptakan hidangan yang memanjakan lidah dan menghangatkan hati."

    background.src = "../main/styles/assets/learnmore/download (5).jpg"
    photo2.src = "../main/styles/assets/learnmore/Daftar-Resep-Seblak-yang-Bikin-Ketagihan.jpg"
    // Style tambahan photo2
    photo2.style.width = "50%"

    photo3.src = "styles/assets/learnmore/276a15ddfe31c3b5f6312c31f63e52a7__50195.jpg"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "230px";
     photo3.style.width = "230px";


    photo4.src = "styles/assets/learnmore/images (2).jpg"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/b849eeb5d40e4893d6164e4bacbcbbc7.webp"
    photo6.src = "./styles/assets/learnmore/b849eeb5d40e4893d6164e4bacbcbbc7.webp"
    photo7.src = "./styles/assets/learnmore/Daftar-Resep-Seblak-yang-Bikin-Ketagihan.jpg"
    photo8.src = "./styles/assets/learnmore/92662989_2642247046101392_8120274959053645404_n1-951x1024-1.jpeg"

    videos.src = "https://www.youtube.com/embed/bF7xKUEurms?si=dwGftm1VPgQm6huY"
}

else if (localStorage.getItem("exploreTitle") === "Rawon") {
    const cuisineBackground1 = document.querySelector(".cuisine-synopsis");

    titleBorneo.innerText = "-Jawa Timur-"

    cuisineBackground1.style.background = "none"

    penjelasan.innerText = "Rawon sebagai salah satu makanan khas asal Jawa Timur ternyata telah berusia lebih dari 1000 tahun. Hal ini terungkap dari Prasasti Taji yang dikeluarkan pada tahun 901 Masehi oleh Rakryan I Watu Tihang Pu Sanggramadurandara yang ditemukan di Ponorogo, tertulis dengan nama Rarawwan."
    // Style tambahan penjelasan
    penjelasan.style.color = "#000"
    penjelasan.style.textAlign = "center"  
    penjelasan.style.width = "75%"
    penjelasan.style.marginTop = "40px"

    penjelasan2.innerText = "Daging sapi dipotong-potong dan dimasak bersama dengan bumbu-bumbu seperti bawang merah, bawang putih, jahe, lengkuas, dan kluwek."
    penjelasan3.innerText = "Kluwek adalah biji buah dari pohon keluak yang memberikan rasa khas dan warna gelap pada rawon. kombinasi ini memberikan cita rasa kaya dan gurih pada hidangan rawon yang lezat."
    penjelasan4.innerText = "Rawon bukan hanya hidangan lezat, tapi juga mengandung filosofi mendalam. Warna hitamnya mencerminkan keindahan kesederhanaan dan keunikan. Dalam setiap sendokannya, rawon menyajikan harmoni antara kepedasan, kehangatan, dan kelembutan, mencerminkan kompleksitas kehidupan yang tak terpisahkan dari keberagaman. Kesabaran dan perawatan dalam memasaknya mencerminkan nilai kesungguhan dan dedikasi dalam mencapai cita-cita. Jadi, rawon tidak hanya tentang rasa, tapi juga pesan yang dalam."

    background.src = "../main/styles/assets/learnmore/resep-rawon-daging-surabaya_43.jpeg"
    photo2.remove();
    photo3.src = "styles/assets/learnmore/60a38ec2222f0.jpg"
     // Style tambahan photo3
     photo3.style.marginTop = "-1rem";
     photo3.style.marginLeft = "-1rem";
     photo3.style.height = "230px";
     photo3.style.width = "230px";


    photo4.src = "styles/assets/learnmore/f386fb07b1e04f85ad870471f0cf4a20_4adcf97abb1841e1bd531bdee6ffdb3c.png_720x720q80.png"
       // Style tambahan photo4
       photo4.style.marginTop = "-1.7rem";
       photo4.style.marginLeft = "-1.7rem";
       photo4.style.height = "262px";
       photo4.style.width = "262px";
    
    photo5.src = "./styles/assets/learnmore/Bagaimana-Cara-Membuat-Rawon-Daging-Sederhana-819x1024.jpg"
    photo6.src = "./styles/assets/learnmore/Bagaimana-Cara-Membuat-Rawon-Daging-Sederhana-819x1024.jpg"
    photo7.src = "./styles/assets/learnmore/081090300_1623815166-shutterstock_1961342572.jpg"
    photo8.src = "./styles/assets/learnmore/Rawon_Setan.jpg"

    videos.src = "https://www.youtube.com/embed/oelyJM0Whv4?si=Z0M5k_fViY3D4Y6d"
}


/* 

Rawon sebagai salah satu makanan khas asal Jawa Timur ternyata telah berusia lebih dari 1000 tahun. Hal ini terungkap dari Prasasti Taji yang dikeluarkan pada tahun 901 Masehi oleh Rakryan I Watu Tihang Pu Sanggramadurandara yang ditemukan di Ponorogo, tertulis dengan nama Rarawwan.

Daging sapi dipotong-potong dan dimasak bersama dengan bumbu-bumbu seperti bawang merah, bawang putih, jahe, lengkuas, dan kluwek.
Kluwek adalah biji buah dari pohon keluak yang memberikan rasa khas dan warna gelap pada rawon. kombinasi ini memberikan cita rasa kaya dan gurih pada hidangan rawon yang lezat.

Rawon bukan hanya hidangan lezat, tapi juga mengandung filosofi mendalam. Warna hitamnya mencerminkan keindahan kesederhanaan dan keunikan. Dalam setiap sendokannya, rawon menyajikan harmoni antara kepedasan, kehangatan, dan kelembutan, mencerminkan kompleksitas kehidupan yang tak terpisahkan dari keberagaman. Kesabaran dan perawatan dalam memasaknya mencerminkan nilai kesungguhan dan dedikasi dalam mencapai cita-cita. Jadi, rawon tidak hanya tentang rasa, tapi juga pesan yang dalam.

*/

