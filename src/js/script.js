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
let pagination = document.querySelector('.production__pagination-list')

tabs.forEach(tab => {
    tab.addEventListener('click', sortTabs);
})


function sortTabs(e) {
    e.preventDefault();
    deleteActiveTab();
    let counter = 0;
    this.classList.add('production__tabs-link--active');
    let sortName = this.getAttribute('href');
    switch (sortName) {
        case '#special':
            showSpecialProducts();
            addPagination()
            break;
        case '#best':
            showAllProducts();
            addPagination();
            break;
        case '#new':
            showNewProducts();
            addPagination();
            break;
        case '#used':
            showUsedProducts();
            addPagination();
            break;
        default:
            showAllProducts();
            addPagination();
    }
}



function addPagination() {
    if (counter >= 3) { // добавление пагинации при более 3ех товаров, счетчик в цикле каждой функции
        productsBody.append(pagination)
    } return;
}

function showSpecialProducts() {
    let specialItems = productItemsArray.filter(el =>
        el.dataset.item == 'special'
    )
    productsBody.innerHTML = '';
    counter = 0;
    for (let item of specialItems) {
        productsBody.append(item);
        counter++;
    }
}

function showAllProducts() {
    productsBody.innerHTML = '';
    counter = 0;
    for (product of productItemsArray) {
        productsBody.append(product);
        counter++;
    }
}

function showNewProducts() {
    let newItems = productItemsArray.filter(el =>
        el.dataset.item == 'new'
    )
    productsBody.innerHTML = '';
    counter = 0;
    for (let item of newItems) {
        productsBody.append(item);
        counter++;
    }
}

function showUsedProducts() {
    let usedItems = productItemsArray.filter(el =>
        el.dataset.item == 'used'
    )
    productsBody.innerHTML = '';
    counter = 0;
    for (let item of usedItems) {
        productsBody.append(item);
        counter++;
    }
}

function deleteActiveTab() {
    tabs.forEach(tab => {
        tab.classList.remove('production__tabs-link--active');
    });
}


let tabsProductInfo = Array.from(document.querySelectorAll('.prod-info__tab-link'));
let bodyProductInfo = Array.from(document.querySelectorAll('.prod-info__text-body'));

for (let item of tabsProductInfo) {
    item.addEventListener('click', selectBodyInfo);
}

function selectBodyInfo(e) {
    e.preventDefault();
    tabsProductInfo.forEach(tab => {
        tab.classList.remove("prod-info__tab-link--active");
    });
    bodyProductInfo.forEach(body => {
        body.classList.remove("prod-info__text-body--active");
    });
    this.classList.add("prod-info__tab-link--active")

    let currentInfoBody = document.querySelector(this.getAttribute('href'));
    currentInfoBody.classList.add("prod-info__text-body--active");
}


let navBurger = document.querySelector('.nav__burger');
let navMenu = document.querySelector('.nav__menu');
let nav = document.querySelector('.nav');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('nav__burger--active');
    navMenu.classList.toggle('nav__menu--active');
    nav.classList.toggle('nav--active');
})