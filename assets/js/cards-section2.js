document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los sliders de tarjetas
    var splides = document.querySelectorAll('.cards-splide');
    
    splides.forEach(function(slider) {
        new Splide(slider, {
        type: 'loop',
        perPage: 2,          // Número de tarjetas visibles en móviles
        perMove: 1,
        gap: '1rem',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            764: { perPage: 2 },
            1024: { perPage: 3 },
            1230: { perPage: 4 },
        },
        }).mount();
    });
});