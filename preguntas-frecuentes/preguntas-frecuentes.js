// Selecciona todos los botones de preguntas
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        // Cierra las demás respuestas
        questions.forEach((item) => {
        if (item !== question) {
            item.classList.remove("active");
            item.nextElementSibling.style.maxHeight = null;
        }
        });

        // Alterna la respuesta seleccionada
        question.classList.toggle("active");
        const answer = question.nextElementSibling;

        if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
        answer.style.maxHeight = null;
        }
    });
});