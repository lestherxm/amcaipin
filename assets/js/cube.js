// cube.js
const cubo = document.getElementById('cubo');
const container = document.querySelector('.cubo-container');

let isDragging = false;
let startX;
let currentY = 20; // rotación inicial

// Detecta movimiento dentro del contenedor
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    startX = e.clientX;

    // Solo rotación horizontal (eje Y)
    currentY += deltaX * 0.5;

    cubo.style.transform = `rotateX(-15deg) rotateY(${currentY}deg)`;
});

// Compatibilidad táctil (móvil)
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
});

window.addEventListener('touchend', () => {
    isDragging = false;
});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    startX = touch.clientX;

    // Solo rotación horizontal (eje Y)
    currentY += deltaX * 0.5;

    cubo.style.transform = `rotateX(-15deg) rotateY(${currentY}deg)`;

    // Evita que el gesto haga scroll en móviles
    e.preventDefault();
}, { passive: false });