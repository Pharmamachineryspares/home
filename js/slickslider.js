
$('.slides').slick({
 dots: true,
 infinite: false,
 speed: 400,
 slidesToShow: 1,
 slidesToScroll: 1,
 autoplay: true,
     autoplaySpeed: 2000,
    arrows : false,
 
 responsive: [
   {
     breakpoint: 992,
     settings: {
       slidesToShow: 1,
       slidesToScroll:1,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 945,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 576,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
 
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});