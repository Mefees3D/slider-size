
  $(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      
      loop:true,
      margin:20,
      
      mouseDrag: true,
      
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:4,
              nav:true,
              
          }
      }
    });

    owl.on('changed.owl.carousel', function(event) {
      var indexmostrar      = event.item.index; 
      console.log(indexmostrar);
      
      $(".rojo").eq(indexmostrar).addClass("grande");
    })



  });
