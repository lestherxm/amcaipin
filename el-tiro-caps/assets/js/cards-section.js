document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los sliders de tarjetas
    var splides = document.querySelectorAll('.cards-splide');
    
    splides.forEach(function(slider) {
        new Splide(slider, {
        type: 'loop',
        perPage: 1,          // Número de tarjetas visibles en móviles
        gap: '1rem',         // Espacio entre slides
        arrows: false,        // flechas visibles
        drag: true,          // habilitar arrastre
        pagination: false, // paginación visible
        focus: 'center', // centrado del slide activo
        breakpoints: {
            764: { perPage: 2 },
            1024: { perPage: 3 },
            1230: { perPage: 4 },
            1440: { perPage: 5 },
            1920: { perPage: 6 },
            2560: { perPage: 7},
            3840: { perPage: 8 },
            },
        }).mount();
    });
});
