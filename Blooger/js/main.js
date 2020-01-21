$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click evnet on toggle menu
  $toggleCollapse.click(function() {
    $nav.toggleClass("collapse");
  });

  // delete collapse class if width more than 750px
  $(window).resize(function() {
    if (window.innerWidth > 750) {
      $nav.removeClass("collapse");
    }
  });
});
