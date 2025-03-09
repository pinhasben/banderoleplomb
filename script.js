document.addEventListener("DOMContentLoaded", function () {
    const text = "PLOMBIER EN URGENCE 24/7";
    const container = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        container.innerHTML = "";
        index = 0;
        function typing() {
            if (index < text.length) {
                let span = document.createElement("span");
                span.textContent = text.charAt(index);
                span.classList.add("typing-char");
                span.style.animationDelay = `${index * 0.05}s`; // Délais progressif pour effet fluide
                container.appendChild(span);
                index++;
                setTimeout(typing, 150); // Ajustement pour plus de fluidité
            } else {
                setTimeout(() => typeEffect(), 4000); // Pause avant de recommencer
            }
        }
        typing();
    }

    typeEffect();
});
