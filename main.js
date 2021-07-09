let scrollUpButton = document.querySelector(".scroll-up-button");

// let header = document.querySelector("#header");

scrollUpButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollUpButton.classList.remove("is-active");
});

window.addEventListener("mousewheel", () => {
    if(window.scrollY > 500) {
        scrollUpButton.classList.add("is-active");
        // header.classList.add("fixed");
    } else {
        scrollUpButton.classList.remove("is-active");
        // header.classList.remove("fixed");
    }
    // if(window.scrollY > 500) {
    //     scrollUpButton.classList.add("is-active");
    //     header.classList.add("fixed");
    // } else {
    //     scrollUpButton.classList.remove("is-active");
    //     header.classList.remove("fixed");
    // }
});


// APP JS//

/* Fixed header
__________________________________________________ */

$(function() {
    let header=$("#header");
    let intro=$("#intro");
    let introH=intro.innerHeight();
    let scrollPos=$(window).scrollTop();
    checkScroll(scrollPos, introH);
    let nav=$("#nav");
    let navToggle=$("#navToggle");

    $(window).on("scroll resize",function() {
        introH=intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll*/

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        let elementId=$(this).data("scroll");
        let elementOffset=$(elementId).offset().top;
        // window.scrollTo({ top: elementOffset, behavior: 'smooth' });
        console.log(elementOffset);

        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, );
    });

    /*NavToggle*/
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});
