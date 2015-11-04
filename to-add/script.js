$(document).ready(function() {
  
 function flyPlane(){
   scene.css('left', startPos);
   scene.animate({left: -200}, 7000, 'linear')
 };
 
  var screenWidth = $(document).width();
  var startPos = screenWidth;
  var plane = $('.scene')
  flyPlane();
  setInterval(function() {
    flyPlane();
  }, 9000);
});