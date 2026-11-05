document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) current = section.id;
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
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
