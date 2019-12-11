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
let productItemsArray = Array.from(productItems);

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        deleteActiveTab()
        tab.classList.add('production__tabs-link--active');
        let sortName = tab.getAttribute('href');
        switch (sortName) {
            case '#special':
                showSpecialProducts();
                break;
            case '#best':
                showAllProducts();
                break;
            case '#new':
                showNewProducts();
                break;
            case '#used':
                showUsedProducts();
                break;
            default:
                showAllProducts();
        }
    })
})

function showSpecialProducts() {
    let specialItems = productItemsArray.filter(el =>
        el.dataset.item == 'special'
    )
    productsBody.innerHTML = '';
    for (let item of specialItems) {
        productsBody.append(item);
    }
}

function showAllProducts() {
    productsBody.innerHTML = '';
    for (product of productItemsArray) {
        productsBody.append(product);
    }
}

function showNewProducts() {
    let newItems = productItemsArray.filter(el =>
        el.dataset.item == 'new'
    )
    productsBody.innerHTML = '';
    for (let item of newItems) {
        productsBody.append(item);
    }
}

function showUsedProducts() {
    let usedItems = productItemsArray.filter(el =>
        el.dataset.item == 'used'
    )
    productsBody.innerHTML = '';
    for (let item of usedItems) {
        productsBody.append(item);
    }
}

function deleteActiveTab() {
    tabs.forEach(tab => {
        tab.classList.remove('production__tabs-link--active');
    });
}