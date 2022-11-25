$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $("header").addClass("sticky")
      }else{
        $("header").removeClass("sticky")
      }
    });
  });

//Javascript for toggle dropdown menus
$(document).ready(function(){
//toggle sub-menus
$(".sub-btn").click(function(){
  $(this).next(".sub-menu").slideToggle();
});

//Show Menu toggle data
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".navbar");

//toggle menu data Show
 menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
 });


});

//Clint Carousel Slider
$(document).ready(function(){
  $(".clint-slider").owlCarousel({
      items:3,
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
      autoplayTimeout:5000,
  });
});
//Test Monial Carousel Slider
$(document).ready(function(){
  $(".testmonial").owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
      autoplayTimeout:5000,
  });
});




new WOW().init();