// Initialize Swiper main

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// function getHeight() {
//     const heightele = document.querySelector(".bottom");
//     let wrapperheight = document.querySelector(".wholewrap");


//     let dynamicHeighter = heightele.offsetHeight;
//     let dynamicHeighter2 = heightele.clientHeight;

//     console.log(dynamicHeighter2);

//     wrapperheight.style.height = `${dynamicHeighter2}px`
// }

// const swiperbtn = document.querySelector(".swip")

// swiperbtn.addEventListener("click", function () {
//     getHeight();
// })

// setInterval(getHeight, 1000)
// getHeight();