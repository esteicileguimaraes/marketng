document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ROLAGEM SUAVE — botão "Descubra como"
    // ==========================================

    const discoverButton = document.getElementById("discoverButton");
    const topicsSection = document.getElementById("topics");

    if (discoverButton && topicsSection) {
        discoverButton.addEventListener("click", () => {
            topicsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    // ==========================================
    // ANIMAÇÃO DOS CARDS AO ENTRAREM NA TELA
    // ==========================================

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach((card) => {
        observer.observe(card);
    });


    // ==========================================
    // APARECIMENTO DOS ELEMENTOS COM .fade-in
    // ==========================================

    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach((element) => {
        fadeObserver.observe(element);
    });


    // ==========================================
    // BOTÃO "VOLTAR AO TOPO"
    // ==========================================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ==========================================
    // INTERAÇÃO "SIM" / "AINDA NÃO"
    // ==========================================

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const interactionMessage = document.getElementById("interactionMessage");


    function showMessage(message) {

        if (!interactionMessage) return;

        interactionMessage.textContent = message;
        interactionMessage.classList.add("show");
    }


    if (yesButton) {
        yesButton.addEventListener("click", () => {
            showMessage(
                "✨ Exatamente! O marketing está presente em muito mais escolhas do que imaginamos."
            );
        });
    }


    if (noButton) {
        noButton.addEventListener("click", () => {
            showMessage(
                "🌷 Talvez agora você comece a perceber essas estratégias em anúncios, redes sociais e até nas suas compras."
            );
        });
    }


    // ==========================================
    // DESTAQUE DOS CARDS AO CLICAR
    // ==========================================

    cards.forEach((card) => {
        card.addEventListener("click", () => {

            cards.forEach((item) => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");
        });
    });


    // ==========================================
    // ACESSIBILIDADE
    // ==========================================

    cards.forEach((card) => {

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                card.classList.toggle("selected");
            }
        });

    });

});

