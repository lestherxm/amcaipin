/*const pokerCards = document.querySelectorAll(".poker_card");
let pokerIndex = 0;

function updatePokerStack() {
    pokerCards.forEach((pokerCard, index) => {
        pokerCard.classList.remove("poker_card--active");

        const offset =
        (index - pokerIndex + pokerCards.length) % pokerCards.length;

        pokerCard.style.setProperty("--offset", offset);
        pokerCard.style.zIndex = pokerCards.length - offset;
    });

    pokerCards[pokerIndex].classList.add("poker_card--active");
}

pokerCards.forEach(pokerCard => {
    const next = () => {
        pokerIndex = (pokerIndex + 1) % pokerCards.length;
        updatePokerStack();
    };

    pokerCard.addEventListener("click", next);
    pokerCard.addEventListener("touchstart", next, { passive: true });
});

updatePokerStack();*/

/* ================================
    POKER SERVICES – INTERACTION
   ================================ */

/* Seleccionamos todas las cartas */
const pokerCards = document.querySelectorAll(".poker_card");

/* Índice de la carta activa */
let pokerIndex = 0;

/* Variables para detectar swipe */
let touchStartX = 0;
let touchEndX = 0;

/* Distancia mínima para considerar swipe (px) */
const swipeThreshold = 50;

/* -------------------------------
    Actualiza posiciones y estados
-------------------------------- */
function updatePokerStack() {
    pokerCards.forEach((pokerCard, index) => {
        pokerCard.classList.remove("poker_card--active");

        const offset =
            (index - pokerIndex + pokerCards.length) % pokerCards.length;

        pokerCard.style.setProperty("--offset", offset);
        pokerCard.style.zIndex = pokerCards.length - offset;
    });

    pokerCards[pokerIndex].classList.add("poker_card--active");
}

/* -------------------------------
    Desktop: click para avanzar
-------------------------------- */
pokerCards.forEach(pokerCard => {
    pokerCard.addEventListener("click", () => {
        pokerIndex = (pokerIndex + 1) % pokerCards.length;
        updatePokerStack();
    });
});

/* -------------------------------
    Mobile: detección de swipe
-------------------------------- */
pokerCards.forEach(pokerCard => {

    /* Guardamos la posición inicial del toque */
    pokerCard.addEventListener(
        "touchstart",
        e => {
            touchStartX = e.touches[0].clientX;
        },
        { passive: true }
    );

    /* Comparamos al soltar el dedo */
    pokerCard.addEventListener("touchend", e => {
        touchEndX = e.changedTouches[0].clientX;

        const diffX = touchStartX - touchEndX;

        // Swipe hacia la izquierda → siguiente carta
        if (diffX > swipeThreshold) {
            pokerIndex = (pokerIndex + 1) % pokerCards.length;
            updatePokerStack();
        }

        // Swipe hacia la derecha → carta anterior
        if (diffX < -swipeThreshold) {
            pokerIndex =
                (pokerIndex - 1 + pokerCards.length) % pokerCards.length;
            updatePokerStack();
        }
    });
});

/* Inicializamos el estado */
updatePokerStack();