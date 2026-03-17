(function ($) {
    "use strict";
    $(document).ready(function () {
    	$('.thumbs_list').slick({
			nextArrow: '<button class="btn-prev"><i class="fa fa-angle-down" aria-hidden="true"></i></button>',
	  		prevArrow: '<button class="btn-next"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		
		$('.cate-archive').slick({
			prevArrow: '<button class="btn-prev"><i class="ion-ios-arrow-left"></i></button>',
			nextArrow: '<button class="btn-next"><i class="ion-ios-arrow-right"></i></button>', 
			slidesToShow: apr_params.apr_number_cate,
			slidesToScroll: apr_params.apr_number_cate,
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				  }
				}
			]
		});
		
        $('.blog-gallery').slick({         
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1
        });
        $('.blog-gallery2').slick({         
          dots: false,
          prevArrow: '<button class="btn-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	      nextArrow: '<button class="btn-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
				
			  ]
        });
        $('.architects-gallery').slick({         
          dots: true,
          arrows: false,
          infinite: false,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1
        });
        if(apr_params.apr_coming_subcribe_text){
            if(apr_params.apr_coming_subcribe_text.trim() && apr_params.apr_coming_subcribe_text.length > 0){
                $('.page-coming-soon .mc4wp-form input[type="submit"]').attr("value", apr_params.apr_coming_subcribe_text);
            }
        }        
    });
	// Slick slide
	$('.product-image-slider').slick({
	  dots: false,
	  arrows: true,
	  loop: true,
	  nextArrow: '<button class="btn-prev"><i class="ion-ios-arrow-right"></i></button>',
	  prevArrow: '<button class="btn-next"><i class="ion-ios-arrow-left"></i></button>',
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1 
		  }
		}
	  ]
	});
	$('.img-list').slick({
	  dots: false,
	  arrows: true,
	  nextArrow: '<button class="btn-prev"><i class="lnr lnr-arrow-right"></i></button>',
	  prevArrow: '<button class="btn-next"><i class="lnr lnr-arrow-left"></i></button>',
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1 
		  }
		}
	  ]
	});
	
	$('.instagram-slider').slick({
	  centerMode: true,
	  dots: false,
	  arrows: false,
	  centerPadding: '220px',
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			centerPadding: '250px',
			centerMode: true,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			centerPadding: '100px',
			centerMode: true,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			centerPadding: '0px',
			centerMode: true,
			slidesToShow: 1
		  }
		}
	  ]
	});
	$('.instagram-slider-3').slick({
	  centerMode: true,
	  dots: false,
	  arrows: false,
	  centerPadding: '238px',
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 1920,
		  settings: {
			centerPadding: '170px',
			centerMode: true,
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
			centerPadding: '200px',
			centerMode: true,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			centerPadding: '100px',
			centerMode: true,
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			centerPadding: '0px',
			centerMode: true,
			slidesToShow: 1
		  }
		}
	  ]
	});

})(jQuery);
// Active Cart, Search