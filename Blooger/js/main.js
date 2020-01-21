$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click evnet on toggle menu
  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });

  // owl-carousel for blog
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
  });

  // delete collapse class if width more than 750px
  $(window).resize(function() {
    if (window.innerWidth > 750) {
      $nav.removeClass("collapse");
    }
  });
});
