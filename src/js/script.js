$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<img src="./img/nav-prev.png" alt="Левая стрелка">', '<img src="./img/nav-next.png" alt="Правая стрелка">']
    });
});


let tabs = document.querySelectorAll('.production__tabs-link');
let productItems = document.querySelectorAll('.production__item');
let productsBody = document.querySelector('.production__listing');

for (tab of tabs) {
    tab.addEventListener('click', e => {
        e.preventDefault();
        let sortName = tab.getAttribute('href');
        switch (sortName) {
            case '#special':
                showSpecialProducts();
                break;
            default:
                showAllProducts();
        }
    })
}

function fromArray() {
    let arrlist = Array.from(productItems);
}
function showSpecialProducts() {
    let productItemsArray = Array.from(productItems);
    let specialItems = productItemsArray.filter(el =>
        el.dataset.item == 'special'
    );
    productsBody.innerHTML = '';
    for (item of specialItems)
        productsBody.innerHTML += item;
}
