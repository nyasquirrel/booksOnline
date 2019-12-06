$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<img src="./img/nav-prev.png" alt="Левая стрелка">','<img src="./img/nav-next.png" alt="Правая стрелка">']
    });
});


let productItems = document.querySelectorAll('.production__item')
