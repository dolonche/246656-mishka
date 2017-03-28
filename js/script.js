    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var popup = document.querySelector('.popup');
    var cart = document.querySelector('.product__cart');
    var productWeek = document.querySelector('.product-week__btn')
    var overlay = document.querySelector('.overlay');
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
      if (popup.classList.contains('popup--open')) {
        popup.classList.remove('popup--open');
      } else {
        popup.classList.add('popup--open');
      }
    });
    cart.addEventListener('click', function () {
      if (overlay.classList.contains('overlay--open')) {
        overlay.classList.remove('overlay--open');
      } else {
        ovelay.classList.add('overlay--open');
      }
    });
    productWeek.addEventListener('click', function () {
      if (popup.classList.contains('popup--open')) {
        popup.classList.remove('popup--open');
      } else {
        popup.classList.add('popup--open');
      }
    });
    productWeek.addEventListener('click', function () {
      if (overlay.classList.contains('overlay--open')) {
        overlay.classList.remove('overlay--open');
      } else {
        overlay.classList.add('overlay--open');
      }
    });