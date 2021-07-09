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


// APP JS//

$(function() {
    let header=$("#header");
    let intro=$("#intro");
    let introH=intro.innerHeight();
    let scrollPos=$(window).scrollTop();

    $(window).on("scroll load resize",function() {
        introH=intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    });

    header.addClass("fixed");
});