// Detecta cuando una sección entra en el viewport
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // se anima una sola vez
        }
    });
}, { threshold: 0.2 }); // 20% visible ya activa la animación

revealElements.forEach(el => observer.observe(el));
