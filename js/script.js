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

// Esperar a que el DOM se cargue
document.addEventListener('DOMContentLoaded', function() {
    const usuarioIcono = document.getElementById('usuarioIcono');
    const menuDesplegable = document.getElementById('menuDesplegable');

    // Añadir un evento de clic al ícono de usuario
    usuarioIcono.addEventListener('click', function(event) {
        event.preventDefault();  // Evitar el comportamiento predeterminado del enlace

        // Alternar la visibilidad del menú
        menuDesplegable.style.display = (menuDesplegable.style.display === 'block') ? 'none' : 'block';
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!usuarioIcono.contains(event.target) && !menuDesplegable.contains(event.target)) {
            menuDesplegable.style.display = 'none';
        }
    });
});

// Inicializar contador de reservas
let contadorReservas = 0;

function incrementarReservas() {
    contadorReservas++;
    document.getElementById('contadorReservas').innerText = contadorReservas;
}

// Iniciar el incremento cada 9 segundos
setInterval(incrementarReservas, 10000);

// Aqui inicia el codigo del icono del corazon js
function toggleHeart(element) {
    element.classList.toggle('rojo');
}


document.addEventListener("DOMContentLoaded", function() {
    const carruselInterno = document.querySelector('.carrusel-interno');
    const items = document.querySelectorAll('.carrusel-item');
    let currentIndex = 0;
    const totalItems = items.length;

    function mostrarSiguienteImagen() {
        // Actualizar el índice
        currentIndex = (currentIndex + 1) % totalItems;

        // Deslizar el carrusel a la siguiente imagen
        const translateX = -currentIndex * 100; 
        carruselInterno.style.transform = `translateX(${translateX}%)`;
    }

    // Intervalo para cambiar las imágenes cada 5 segundos
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







