(function () {
  let elems = document.getElementsByClassName("splide");

  for (let i = 0; i < elems.length; i++) {
    new Splide(elems[i], {}).mount();
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

function parallax(selector) {
  var scrolled = $(window).scrollTop();
  $(selector).css("background-position", "0 " + scrolled * 0.7 + "px");
}

$(window).scroll(function (e) {
  parallax(".hero-slide .splide__slide");
});

// swiper

(function(){

  try {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }catch {
    console.log()
  }

})();

(function(){

  try {
    let swiper = new Swiper(".scale-slide__wrapper", {
      slidesPerView: 3,
    });
  }catch {
    console.log()
  }

})();

// counter

(function(){

  try {
    let addBtn = document.querySelector('.add');
    let removeBtn = document.querySelector('.add');
  }catch {
    console.log()
  }

})();