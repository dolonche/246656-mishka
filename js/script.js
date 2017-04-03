    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var popup = document.querySelector('.popup');
    var cart = document.querySelector('.product__cart');
    var productWeek = document.querySelector('.product-week__btn');
    var map = document.getElementById('map');
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
    if (cart) {
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
    }
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


    function init() {
      var myMap = new ymaps.Map('map', {
        center: [59.936365, 30.321668],
        zoom: 16,
        controls: []
      });
      var myPlacemark = new ymaps.Placemark([59.936365, 30.321668], {
        hintContent: 'Мишка',
        balloonContent: 'Интернет-магазин вязаных товаров'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-pin.svg',
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -70]
      });
      myMap.geoObjects.add(myPlacemark);
    }
    ymaps.ready(init);
