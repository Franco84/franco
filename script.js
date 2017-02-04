$(document).ready(function(){
  $(".button-collapse").sideNav();
   $('.parallax').parallax();
   $('.scrollspy').scrollSpy();
   $(window).scroll(function() {
     if ($(document).scrollTop() > 736) {
       $("nav").removeClass("transparent");
     } else {
       $("nav").addClass("transparent");
     }
   });
 });
