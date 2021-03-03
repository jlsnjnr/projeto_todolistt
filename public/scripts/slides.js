$('.projects-flex').slick({
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: false,
  speed: 500,
  slidesToShow: 6.2,
  autoplay: false,
  pauseOnHover:false,
  responsive: [

  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3.2
  }

  },

  {
    breakpoint: 560,
    settings: {
      slidesToShow: 2.2
  }

  },

  {
    breakpoint: 440,
    settings: {
      slidesToShow: 1.2
  }

  }

]

});
