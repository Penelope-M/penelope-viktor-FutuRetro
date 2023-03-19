const swiper = new Swiper('.swiper-screenshots', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    effect: "coverflow",



    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,

        },
    },

});

var swipefilter = new Swiper(".swiper-filter", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swipeartwork = new Swiper(".swiper-featured-artworks", {
    slidesPerView: "auto",
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});