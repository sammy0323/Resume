document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("sakura-container");

    function createPetal() {
        if (!container) return;
        const petal = document.createElement("span");
        petal.className = "sakura";
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${8 + Math.random() * 6}s, ${2 + Math.random() * 3}s`;
        petal.style.opacity = `${0.35 + Math.random() * 0.4}`;
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 16000);
    }

    setInterval(createPetal, 650);

    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) current = section.id;
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});


/* =====================================
   專案成果圖片放大
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-image-modal");
    const modalImage = document.getElementById("project-modal-image");
    const closeButton = document.querySelector(".project-modal-close");
    const imageButtons = document.querySelectorAll(".project-image-button");

    if (!modal || !modalImage || !closeButton) {
        return;
    }

    function closeProjectModal() {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        modalImage.src = "";
        document.body.style.overflow = "";
    }

    imageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modalImage.src = button.dataset.projectImage;
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    closeButton.addEventListener("click", closeProjectModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeProjectModal();
        }
    });
});
