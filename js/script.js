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

// Aqui inicia el codigo del contador nosotros js
document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll('.contador');
    const velocidad = 200; 

    contadores.forEach(contador => {
        const actualizarContador = () => {
            const objetivo = +contador.getAttribute('data-objetivo');
            const contadorActual = +contador.innerText;

            const incremento = objetivo / velocidad;

            if (contadorActual < objetivo) {
                contador.innerText = Math.ceil(contadorActual + incremento);
                setTimeout(actualizarContador, 1);
            } else {
                contador.innerText = objetivo;
            }
        };

        actualizarContador();
    });
});







