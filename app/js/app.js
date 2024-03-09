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
});