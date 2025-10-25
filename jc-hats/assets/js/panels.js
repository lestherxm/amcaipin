document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".panelSplide").forEach(panel => {
        const splide = new Splide(panel, {
            type: "loop",
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
        });

        const progressBar = panel.querySelector(".custom-progress-bar");

        splide.on("mounted move", function () {
            progressBar.style.transition = "none";
            progressBar.style.width = "0%";
            setTimeout(() => {
                progressBar.style.transition = `width ${splide.options.interval}ms linear`;
                progressBar.style.width = "100%";
            }, 50);
        });

        splide.mount();
    });
});