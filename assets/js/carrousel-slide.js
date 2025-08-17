document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        type: 'loop',           // 🔁 Hace que el slider sea infinito
        autoplay: true,         // ▶️ Activa la reproducción automática
        interval: 3000,         // ⏱️ 3 segundos entre cada slide (en milisegundos)
        pauseOnHover: false,    // 🛑 No se pausa al poner el mouse encima
        pauseOnFocus: false,    // 🛑 No se pausa al enfocar con el teclado
        pagination: true,       // ⚪⚪⚪ Muestra los puntos de paginación
        arrows: false,          // ⬅️➡️ Oculta las flechas de navegación
    })
    splide.mount();
});