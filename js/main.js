$(function(){
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'testimonials-dots',
		variableWidth: true,
		pauseOnFocus: true,
		autoplay: 2000,
		responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
  	}
 ]
	})
});