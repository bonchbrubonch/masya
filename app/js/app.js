$(function () {

  $(".header__menu-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".form__watch").on("click", function () {
    $(this).toggleClass("show");
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

  $('.productt__inner-tab').each(function() {
    let ths = $(this);
    ths.find('.productt__item').not(':first').hide();
    ths.find('.productt__btn').click(function() {
      ths.find('.productt__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.productt__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.modal__tab-wrap').each(function() {
    let ths = $(this);
    ths.find('.modal__item').not(':first').hide();
    ths.find('.modal__btn').click(function() {
      ths.find('.modal__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.modal__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });



  $(".rateYo").rateYo({
    starWidth: "25px",
    ratedFill: "#FFEFA7",
    spacing: "5px",
    rating: 5,
    readOnly: true
  });

  $(".rateYo-choice").rateYo({
    starWidth: "40px",
    ratedFill: "#FFEFA7",
    spacing: "15px",
    rating: 0,
    fullStar: true
  });

});


var swiper = new Swiper('.type-slider', {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});

var swiper = new Swiper('.shop-intro__slider', {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
window.addEventListener('resize', function () {
  initSwiper();
});

var swiper = new Swiper('.productt__slider', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper('.productt__slider-two', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});

var swiper = new Swiper('.recomendation__slider', {
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper('.review__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});