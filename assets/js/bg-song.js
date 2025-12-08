// --- REFERENCIAS ---
const audio = document.getElementById("bg-music");
const btn = document.getElementById("musicToggle");
const icon = btn.querySelector(".icon");

// --- VOLUMEN INICIAL ---
audio.volume = 0.5;

// --- ESTADO ---
let isPlaying = false;

// --- INICIA MÚSICA AL HACER SCROLL ---
function startMusic() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        icon.textContent = "🔊";
        btn.classList.remove("paused");
    }
}

//window.addEventListener("scroll", startMusic, { once: true });

// --- ON/OFF MANUAL ---
btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.textContent = "🔊";
        btn.classList.remove("paused");
    } else {
        audio.pause();
        icon.textContent = "🔇";
        btn.classList.add("paused");
    }
});

// --- INICIO EN PAUSA ---
btn.classList.add("paused");