// cube.js
const cubo = document.getElementById('cubo');
const container = document.querySelector('.cubo-container');

let isDragging = false;
let startX, startY;
let currentX = -15; // rotación inicial
let currentY = 20;

// Solo detecta movimiento dentro del contenedor del cubo
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;

    currentY += deltaX * 0.5;
    currentX -= deltaY * 0.5;

    cubo.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
});

// Compatibilidad táctil (móvil)
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

window.addEventListener('touchend', () => {
    isDragging = false;
});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    startX = touch.clientX;
    startY = touch.clientY;

    currentY += deltaX * 0.5;
    currentX -= deltaY * 0.5;

    cubo.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
});