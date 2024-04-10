$(document).ready(function () {
  if (window.outerWidth > 992) {
    $(document).scroll(() => {
      $(".header-2").toggleClass("position-sticky", $(this).scrollTop() > 100);
    });
  }

  // $(() => {
  //   const height = $(".header-2").outerHeight();
  //   console.log(height);
  //   $(".header-2").css({ "margin-bottom": "40px" });
  // });

  $(() => {
    const swiper = new Swiper(".gallery-swiper", {
      slidesPerView: 4,
      spaceBetween: 0,
      speed: 1500,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      },
    });
  });

  $(() => {
    const swiper = new Swiper(".speaker-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
    });
  });
});
