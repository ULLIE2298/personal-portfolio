$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    mouseDrag: false,
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      674: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: false,
      },
    },
  });
  
  function navAnimation(){
    $('.nav-links').toggleClass('nav-active');
    $('.burger').toggleClass('toggle');
  }

  $('.burger').click('click', () => {
      navAnimation();
  });
  $('.nav-links').click('click', () => {
    navAnimation();
  });
    
});
