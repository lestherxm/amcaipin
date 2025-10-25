const messages = [
    "¡Envío gratis a toda Guatemala!",
    "Compra hoy y recibe un descuento exclusivo!",
    "Nuevas gorras disponibles esta semana!"
];

const messageEl = document.getElementById("scrollingMessage");
let currentIndex = 0;

function showMessage() {
messageEl.textContent = messages[currentIndex];
messageEl.classList.remove("scrolling-text__item"); // reinicia animación
void messageEl.offsetWidth; // hack para reiniciar animación en CSS
messageEl.classList.add("scrolling-text__item");

currentIndex = (currentIndex + 1) % messages.length;
}

// Mostrar el primer mensaje al cargar
showMessage();

// Cambiar mensaje cada 12s (igual que la animación CSS)
setInterval(showMessage, 12000);