    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var popUp = document.querySelector('.popup');
    var cart = document.querySelector('.product__cart');
    var productWeek = document.querySelector('.product-week__btn')
    var overLay = document.querySelector('.overlay');
    navMain.classList.remove('main-nav--no-js');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
    cart.addEventListener('click', function () {
      if (popUp.classList.contains('popup--open')) {
        popUp.classList.remove('popup--open');
      } else {
        popUp.classList.add('popup--open');
      }
    });
    cart.addEventListener('click', function () {
      if (overLay.classList.contains('overlay--open')) {
        overLay.classList.remove('overlay--open');
      } else {
        overLay.classList.add('overlay--open');
      }
    });
    productWeek.addEventListener('click', function () {
      if (popUp.classList.contains('popup--open')) {
        popUp.classList.remove('popup--open');
      } else {
        popUp.classList.add('popup--open');
      }
    });
    productWeek.addEventListener('click', function () {
      if (overLay.classList.contains('overlay--open')) {
        overLay.classList.remove('overlay--open');
      } else {
        overLay.classList.add('overlay--open');
      }
    });