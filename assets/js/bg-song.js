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

// --- MEDIA SESSION (Controles nativos) ---
if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: "AM CAIPIN GT",
        artist: "Puro AM CAIPIN alv!",
        album: "AM CAIPIN GT Collection",
        artwork: [
            { src: "./assets/bg-song/images/Logo_96x96.jpg",  sizes: "96x96",   type: "image/jpeg" },
            { src: "./assets/bg-song/images/Logo_96x96.webp", sizes: "96x96",   type: "image/webp" },
            { src: "./assets/bg-song/images/Logo_128x128.jpg",  sizes: "128x128", type: "image/jpeg" },
            { src: "./assets/bg-song/images/Logo_128x128.webp", sizes: "128x128", type: "image/webp" },
            { src: "./assets/bg-song/images/Logo_256x256.jpg",  sizes: "256x256", type: "image/jpeg" },
            { src: "./assets/bg-song/images/Logo_256x256.webp", sizes: "256x256", type: "image/webp" },
            { src: "./assets/bg-song/images/Logo_512x512.jpg",  sizes: "512x512", type: "image/jpeg" },
            { src: "./assets/bg-song/images/Logo_512x512.webp", sizes: "512x512", type: "image/webp" }
        ]
    });

    navigator.mediaSession.setActionHandler("play", () => {
        audio.play();
        icon.textContent = "🔊";
        btn.classList.remove("paused");
    });

    navigator.mediaSession.setActionHandler("pause", () => {
        audio.pause();
        icon.textContent = "🔇";
        btn.classList.add("paused");
    });

    navigator.mediaSession.setActionHandler("stop", () => {
        audio.pause();
        audio.currentTime = 0;
        icon.textContent = "🔇";
        btn.classList.add("paused");
    });
}