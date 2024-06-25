// Aqui inicia el codigo js del menu desplegable 
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menuNav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// Aqui inicia el codigo del icono del corazon js
function toggleHeart(element) {
    element.classList.toggle('rojo');
}

// Aqui inicia el codigo del carrusel automatico js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carrusel-item');
    let currentIndex = 0;

    function mostrarSiguienteImagen() {
        items[currentIndex].classList.remove('activo');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('activo');
    }

    setInterval(mostrarSiguienteImagen, 5000);
});






