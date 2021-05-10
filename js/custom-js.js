$(document).ready(function(){
    
    $("#tombol").click(function () {
       $("html, body").animate({scrollTop: 0}, 250);
    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          },
          1200:{
              items:4
          },
      }
  })

  AOS.init();

  });