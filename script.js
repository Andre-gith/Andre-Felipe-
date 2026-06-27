// ===== MOBILE NAVBAR =====
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Fechar navbar ao clicar em um link
document.querySelectorAll(".navlinks li a").forEach(function (link) {
    link.addEventListener("click", function () {
        togglebtn.classList.remove("click");
        nav.classList.remove("open");
    });
});

// ===== TYPED.JS =====
var typed = new Typed(".input", {
    strings: [
        "Desenvolvedor Full Stack",
        
    ],
    typeSpeed: 70,
    backSpeed: 95,
    backDelay: 1800,
    loop: true
});

// ===== ACTIVE NAV ON SCROLL =====
window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll("section, .hero-header");
    var navLinks = document.querySelectorAll(".navlinks li a");

    sections.forEach(function (section) {
        var top = window.scrollY;
        var offset = section.offsetTop - 100;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(function (link) {
                link.style.color = "#aaa";
                if (link.getAttribute("href") === "#" + id) {
                    link.style.color = "#007ced";
                }
            });
        }
    });
});
