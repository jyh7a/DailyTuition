$(document).ready(function(){

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse')

  // click evnet on toggle menu
  $toggleCollapse.click(function(){
    $nav.toggleClass('collapse');

  })

});