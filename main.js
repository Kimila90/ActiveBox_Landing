let scrollUpButton = document.querySelector(".scroll-up-button");

scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollUpButton.classList.remove("is-active");
});

window.addEventListener("mousewheel", () => {
    if(window.scrollY > 500) {
        scrollUpButton.classList.add("is-active");
    } else {
        scrollUpButton.classList.remove("is-active");
    }
});