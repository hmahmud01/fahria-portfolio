const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});



window.addEventListener("scroll", () => {
    if (pageYOffset > offset) {
        navbar.classList.add('navbar-active');
    }else{
        navbar.classList.remove('navbar-active');
    }
});


gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
        zIndex: -1,
})