(function () {
  try {
    if (window.matchMedia("(min-width: 768px)").matches) {
      let swiper = new Swiper(".hero-slide__swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: false,
      });
    }
  } catch {
    console.log();
  }
})();

/// tech list swiper

(function () {
  try {
    let swiper = new Swiper(".tech-list__swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1400: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    if (window.matchMedia("(max-width: 767px)").matches) {
      let swiper = new Swiper(".tech-list__swiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }
  } catch {
    console.log();
  }
})();

(function () {
  try {
    let swiper = new Swiper(".scale-slide__swapper", {
      slidesPerView: 5,
      spaceBetween: 0,
      centeredSlides: true,
      centeredSlidesBounds: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          scrollbar: {
            el: ".swiper-scrollbar",
          },
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  } catch {
    console.log();
  }
})();

(function () {
  try {
    if (window.matchMedia("(max-width: 767px)").matches) {
      let swiper = new Swiper(
        ".news-page__swiper-scrollbar, .articles-wrapper__swiper, .our-works__swiper, .specialist__swiper",
        {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: false,
          slidesPerGroupSkip: 1,
          grabCursor: true,
          keyboard: {
            enabled: true,
          },
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        }
      );
    }
  } catch {
    console.log();
  }
})();

(function () {
  try {
    let swiper = new Swiper(".services-slide__swiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: false,
    });
  } catch {
    console.log();
  }
})();

(function () {
  try {
    var splide = new Splide(".splide");
    splide.mount();
  } catch {
    console.log();
  }
})();

(function () {
  $(document).ready(function () {
    $(".catalog-tab__list a").click(function () {
      $(this).tab("show");
    });
    $(".catalog-tab__list a").on("shown.bs.tab", function (event) {
      var x = $(event.target).text(); // active tab
      var y = $(event.relatedTarget).text(); // previous tab
      $(".act span").text(x);
      $(".prev span").text(y);
    });
  });
})();

if (window.matchMedia("(min-width: 768px)").matches) {
  function parallax(selector) {
    var scrolled = $(window).scrollTop();
    $(selector).css("background-position", "0 " + scrolled * 0.7 + "px");
  }

  $(window).scroll(function (e) {
    parallax(".hero-slide .swiper-slide");
  });
}

// swiper

(function () {
  try {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } catch {
    console.log();
  }
})();

(function () {
  try {
    let swiper = new Swiper(".scale-slide__wrapper", {
      slidesPerView: 3,
    });
  } catch {
    console.log();
  }
})();

// counter

$(document).on("click", ".qty__btn_decr, .qty__btn_incr", function (e) {
  e.preventDefault();
  var input = $(this).closest(".qty__inner").find("input");
  if ($(this).hasClass("qty__btn_decr")) {
    var new_val = parseInt(input.val()) - 1;
  } else if ($(this).hasClass("qty__btn_incr")) {
    var new_val = parseInt(input.val()) + 1;
  }

  if (new_val <= 0) new_val = 1;
  $(this).closest(".qty__inner").find("input").val(new_val).trigger("change");
});

// Hamburger active

(function () {
  try {
    const siteHamburger = document.querySelectorAll(".site-hamburger");
    const navbarListMobile = document.querySelector(".navbar-list_mobile");
    const closeBtn = document.querySelector("#close-btn");
    const openPopup = document.querySelectorAll(
      ".header-page__item_open-popup"
    );
    const popupPage = document.querySelector(".popup-page");
    const navOverlay = document.querySelector(".nav-overlay");
    const popupPageClose = document.querySelector(".popup-page__close");

    for (let i = 0; i < siteHamburger.length; i++) {
      siteHamburger[i].addEventListener("click", function () {
        navbarListMobile.classList.add("active");
        document.body.style.position = "fixed";
      });
    }

    for (let i = 0; i < openPopup.length; i++) {
      openPopup[i].addEventListener("click", function () {
        popupPage.classList.add("active");
        navOverlay.style.display = "block";
        navOverlay.style.zIndex = "111";
      });
    }

    closeBtn.addEventListener("click", function () {
      navbarListMobile.classList.remove("active");
      document.body.style.position = "";
    });

    popupPageClose.addEventListener("click", function () {
      popupPage.classList.remove("active");
      navOverlay.style.display = "none";
    });

    navOverlay.addEventListener("click", function () {
      navOverlay.style.display = "none";
      popupPage.classList.remove("active");
    });
  } catch {
    console.log();
  }
})();
