document.addEventListener("DOMContentLoaded", () => {
    const slideshows = document.querySelectorAll(".card-slideshow");

    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll(".card-slideshow__img");
        if (images.length === 0) return;

        let index = 0;
        setInterval(() => {
        images[index].classList.remove("card-slideshow__img--active");
        index = (index + 1) % images.length;
        images[index].classList.add("card-slideshow__img--active");
        }, 2000); // Cambia cada 2 segundos
    });
});

