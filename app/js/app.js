$(function () {

  $(".header__menu-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".type-slider .swiper-slide button").on("click", function () {
    $(".type-slider .swiper-slide button").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".info .btn").on("click", function () {
    $(this).prev().addClass("open");
  });


  $(".filter").select2({
    minimumResultsForSearch: -1,
  });

});


var swiper = new Swiper('.type-slider', {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      autoplay: {
        delay: 2000,
      },
    },
    576: {
      spaceBetween: 30,
    },
  }
});



// Ініціалізація Swiper
var mySwiper;

// Функція для перевірки розширення вікна перегляду та ініціалізації Swiper
function initSwiper() {
    if (window.innerWidth <= 576 && !mySwiper) {
        mySwiper = new Swiper('.mySwiper', {
          slidesPerView: 1.1,
          loop: true,
          spaceBetween: 30,
        });
    } else if (window.innerWidth > 576 && mySwiper) {
        mySwiper.destroy();
        mySwiper = undefined;
    }
}

// Виклик функції при завантаженні сторінки
initSwiper();

// Виклик функції при зміні розміру вікна
window.addEventListener('resize', function() {
    initSwiper();
});