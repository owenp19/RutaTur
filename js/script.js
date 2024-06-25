// Aqui inicia el codigo js
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

// Aqui inicia el codigo js
function mostrarMensaje() {
    // Mostrar el mensaje
    document.querySelector('.mensaje-registro').style.display = 'block';

    // Opcional: Ocultar el mensaje después de unos segundos
    setTimeout(function() {
        document.querySelector('.mensaje-registro').style.display = 'none';
    }, 3000); // 3000 milisegundos = 3 segundos
}


