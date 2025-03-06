var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // 🔥 Muestra 3 tarjetas por defecto
    spaceBetween: 5, // 🔥 Espacio entre tarjetas (ajústalo si lo ves muy separado)
    loop: true, // 🔥 Carrusel infinito
    navigation: {
        nextEl: '.noticias-next', // Flecha derecha
        prevEl: '.noticias-prev'  // Flecha izquierda
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1200: { slidesPerView: 3 }, // 🔥 En pantallas grandes, mostrar 3
        992: { slidesPerView: 3 },  // 🔥 En pantallas medianas, también 3
        768: { slidesPerView: 2 },  // 🔥 En pantallas más pequeñas, 2
        480: { slidesPerView: 1 }   // 🔥 En móviles, solo 1
    }
});

// Función para hacer scroll hasta arriba
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
}