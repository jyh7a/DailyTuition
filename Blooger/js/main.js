const responsive = {
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}

$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click evnet on toggle menu
  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });

  // owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next")
    ],
    responsive:responsive
  });

  // click to scroll top
  $(".move-up span").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  // delete collapse class if width more than 750px
  $(window).resize(function() {
    if (window.innerWidth > 750) {
      $nav.removeClass("collapse");
    }
  });
});
