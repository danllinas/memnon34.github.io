$(document).ready(function()    {
  $('img#burger').click(function() {
    $('.drop-down').toggle();
  });
  $('.hamburger li').click(function(){
    $('.drop-down').toggle();
  });
});
