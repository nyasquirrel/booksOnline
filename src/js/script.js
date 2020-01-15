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

// Nav Menu
let navBurger = document.querySelector('.nav__burger');
let navMenu = document.querySelector('.nav__menu');
let nav = document.querySelector('.nav');

navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('nav__burger--active');
    navMenu.classList.toggle('nav__menu--active');
    nav.classList.toggle('nav--active');
})

// fixed to top nav menu and hide user panel 

let userPanel = document.querySelector('.user-panel');
let infoPanel = document.querySelector('.info-panel');
let production = document.querySelector('.production');

window.addEventListener('scroll', () => {
    if (pageYOffset > infoPanel.offsetHeight) {
        nav.classList.add('nav--fixed');
    }
    else nav.classList.remove('nav--fixed');
    if (document.documentElement.scrollTop > production.offsetTop) {
        userPanel.classList.add('user-panel--disappear');
        nav.classList.add('nav--to-top');
    }
    else {
        userPanel.classList.remove('user-panel--disappear');
        nav.classList.remove('nav--to-top');
    }

})


// sign in link opening modal 

let linkToSign = document.querySelector('a[href="/sign-in"]');
let modal = document.querySelector('.modal');
let modalSignIn = document.querySelector('.modal__sign-in');



linkToSign.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('modal--active');
    modalSignIn.classList.add('modal__sign-in--active');
    document.body.style.overflow = "hidden";
})


// opening reg modal 

let linkSignUp = document.querySelector('#sign-up');
let modalSignUp = document.querySelector('.modal__sign-up');

linkSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    modalSignUp.classList.add('modal__sign-up--active');
    modalSignUp.classList.remove('modal__sign-up--disappear');
    modalSignIn.classList.remove('modal__sign-in--active');
    modalSignIn.classList.add('modal__sign-in--disappear');
})

// opening forgot pass modal 

let linkForgPass = document.querySelector('#forgot-pass');
let modalForgPass = document.querySelector('.modal__forgot-pass');


linkForgPass.addEventListener('click', (e) => {
    e.preventDefault();
    modalForgPass.classList.add('modal__forgot-pass--active');
    modalForgPass.classList.remove('modal__forgot-pass--disappear');
    modalSignIn.classList.remove('modal__sign-in--active');
    modalSignIn.classList.add('modal__sign-in--disappear');
})


// close modals
let modalClose = document.querySelectorAll('.modal__close');


function closeModal() {
    modal.classList.remove('modal--active');
    modalSignIn.className = 'modal__sign-in';
    modalSignUp.className = 'modal__sign-up';
    modalForgPass.className = 'modal__forgot-pass';
    document.body.style.overflow = "";
}

modalSignIn.addEventListener('click', (e) => {
    e.stopPropagation();
})
modalSignUp.addEventListener('click', (e) => {
    e.stopPropagation();
})
modalForgPass.addEventListener('click', (e) => {
    e.stopPropagation();
})

modalClose.forEach(item => {
    item.addEventListener('click', () => {
        if (item.closest('.modal__forgot-pass')) {
            modalForgPass.classList.remove('modal__forgot-pass--active');
            modalForgPass.classList.add('modal__forgot-pass--disappear');
            modalSignIn.classList.remove('modal__sign-in--disappear');
            modalSignIn.classList.add('modal__sign-in--active');
        }
        else if (item.closest('.modal__sign-up')) {
            modalSignUp.classList.remove('modal__sign-up--active');
            modalSignUp.classList.add('modal__sign-up--disappear');
            modalSignIn.classList.remove('modal__sign-in--disappear');
            modalSignIn.classList.add('modal__sign-in--active');
        }
        else closeModal();
    });
});

modal.addEventListener('click', closeModal);


// storage input's data from reg form

let userList = [];
let inputLoginUp = document.querySelector('#login-to-up');
let inputNameUp = document.querySelector('#name-to-up');
let inputEmailUp = document.querySelector('#email-to-up');
let inputPassUp = document.querySelector('#pass-to-up');
let inputPassUpAgain = document.querySelector('#pass-to-up-again');
let signUpBtn = document.querySelector('.modal__sign-up button');
let user = {};

function addNewUser(event) {
    event.preventDefault();
    if (!(inputLoginUp.value.trim() == '')) {
        for (let item of userList) {
            if (!(inputLoginUp.value == item.login)) {
                user = new UserObj(inputLoginUp.value);
                userList.push(user);
                console.log(userList);
                inputLoginUp.parentNode.className = 'label__status--accept';
                inputLoginUp.style = '';

            }
        }
    }
     else {
        inputLoginUp.parentNode.className = 'label__status--retry';
        inputLoginUp.style.border = '1px solid red';
    }
    console.log(userList);
}

function UserObj(login) {
    this.login = login;
    this.name = inputNameUp.value;
    this.email = inputEmailUp.value;
    this.pass = inputPassUp.value;
}
signUpBtn.addEventListener('click', addNewUser);

// inputLoginUp.addEventListener('change', () => {
//     if (!(userList.find(item => item == inputLoginUp.value))) {
        
//     }
// })


for (let item of userList) {
    inputLoginUp.value == UserObj.login;
}


