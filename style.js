
// DIALOG ALERT
function ucapanmerdeka(){
  alert("Selamat Hari Kemerdekaan Indonesia MERDEKAA!")
}

// DIALOG CONFIRM
function Daftar(event) {
  var konfirmasi = confirm("Apakah Kamu yakin ingin mendaftar?");
  if (!konfirmasi) {
    event.preventDefault(); // Menghentikan aksi link jika Cancel
    alert("Pendaftaran dibatalkan.");
  } else {
    alert("Silakan isi formulir pendaftaran.");
    // Tidak pakai preventDefault -> tetap lanjut ke #Pendaftaran
  }
}

// VALIDASI FORM

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah form langsung terkirim

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const message = document.querySelector("textarea").value.trim();

// VALIDASI NAMA
  const namePattern = /^[A-Za-z\s]+$/;
if (name === "") {
  alert("Nama tidak boleh kosong yaaa!");
  return;
}

if (!namePattern.test(name)) {
  alert("Nama hanya boleh berisi huruf dan spasi!");
  return;
}

// VALIDASI EMAIL
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if (email === "") {
        alert("Email tidak boleh kosong!");
        return;
      }

      if (!email.match(emailPattern)) {
        alert("Format email tidak valid! Contoh: nama@gmail.com");
        return;
      }

  // VALIDASI NOMOR
  if (number === "" || isNaN(number)) {
    alert("Nomor harus diisi!");
    return;
  }

  // VALIDASI PESAN
  if (message === "") {
    alert("Tulis lomba yang ingin kamu ikuti, tidak boleh kosong!");
    return;
  }

  alert("Pendaftaran Lomba berhasil dikirim!");
  document.getElementById("form").reset();
});


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  duration: 1000,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".discover__card:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".discover__card__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".discover__card__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".discover__card__content h3", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".discover__card__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".banner__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1000,
});

