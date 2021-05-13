/**
* @function      Include
* @description   Includes an external scripts to the page
* @param         {string} scriptUrl
*/
function include(scriptUrl)
{
	document.write('<script src="' + scriptUrl + '"></script>');
}


/**
* @function      isIE
* @description   checks if browser is an IE
* @returns       {number} IE Version
*/
function isIE()
{
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};


/**
* @module       Copyright
* @description  Evaluates the copyright year
*/
;
(function ($) {
	var currentYear = (new Date).getFullYear();
	$(document).ready(function () {
		$("#copyright-year").text((new Date).getFullYear());
	});
})(jQuery);


/**
* @module       IE Fall&Polyfill
* @description  Adds some loosing functionality to old IE browsers
*/
;
(function ($) {
	if (isIE() && isIE() < 11) {
		include('js/pointer-events.min.js');
		$('html').addClass('lt-ie11');
		$(document).ready(function () {
			PointerEventsPolyfill.initialize({});
		});
	}

	if (isIE() && isIE() < 10) {
		$('html').addClass('lt-ie10');
	}
})(jQuery);


/**
* @module       WOW Animation
* @description  Enables scroll animation on the page
*/
;
(function ($) {
	var o = $('html');
	if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
		include('js/wow.min.js');

		$(document).ready(function () {
			new WOW().init();
		});
	}
})(jQuery);


/**
* @module       Smoothscroll
* @description  Enables smooth scrolling on the page
*/
;
(function ($) {
	if ($("html").hasClass("smoothscroll")) {
		include('js/smoothscroll.min.js');
	}

})(jQuery);
$('a.more-scroll').click(function(event) {
	event.preventDefault();
	var link = this;
	$.smoothScroll({
		scrollTarget: link.hash
	});
});
/**
* @module       ToTop
* @description  Enables ToTop Plugin
*/
;
(function ($) {
	var o = $('html');
	if (o.hasClass('desktop')) {
		include('js/jquery.ui.totop.min.js');

		$(document).ready(function () {
			$().UItoTop({
				easingType: 'easeOutQuart',
				containerClass: 'ui-to-top'
			});
		});
	}
})(jQuery);
/**
* @module       RD Navbar
* @description  Enables RD Navbar Plugin
*/
;
(function ($) {
	var o = $('.rd-navbar');
	if (o.length > 0) {
		include('js/jquery.rd-navbar.js');

		$(document).ready(function () {
			o.RDNavbar({
				/*stickUpClone: false,
				stickUpOffset: 46,
				anchorNavOffset: -60*/
			});
		});
		$(window).scroll(function() {
			var docscroll=$(document).scrollTop();
			if (docscroll>$('.rd-navbar-fixed .rd-navbar-panel').height()) {
				$('.rd-navbar-fixed .rd-navbar-panel').addClass('fixed');
			} else {
				$('.rd-navbar-fixed .rd-navbar-panel').removeClass('fixed');
			}
		});
	}
})(jQuery);
/**
* uisearch.js v1.0.0
* http://www.codrops.com
*/
$(document).ready(function () {
	new UISearch( document.getElementById( 'sb-search' ) );
});
/**
* tiny-slider
*/
$(document).ready(function () {
	const slider = tns({
		container: '#slider-categories',
		loop: false,
		autoWidth: true,
		nav: false,
		autoplay: false,
		speed: 400,
		autoplayButtonOutput: false,
		swipeAngle: false,
		mouseDrag: true,
		controlsContainer: "#slider-categories-controls"
	});
	const banner = tns({
		container: '#main-banner',
		loop: true,
	    items: 1,
	    nav: false,    
	    autoplay: true,
	    speed: 400,
	    autoplayButtonOutput: false,
	    mouseDrag: true,
	    controlsContainer: "#main-banner-controls"	   
	});
});
/**
* open-close category-title for desktop-mobile
*/
$(document).ready(function () {
	var win = $(this); 		
 	$(function() {  
        openCategoryTitle();
		window.onload = openCategoryTitle;  
    });
    function openCategoryTitle(){    	
		if (win.width() >= 767) {
	        $('.category-title').next().collapse('show')
	        }
		else {
	         $('.category-title').next().collapse('hide')
	     }	     
	};
});
/**
* slick sliders
*/
$(document).ready(function () {
	$('.our-works-slider').slick({
	    infinite:  true,
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    autoplay: 4,	   
	    speed: 500,
	    autoplaySpeed: 2000,
	    arrows:  true,	    
	    dots: false,
	    pauseOnHover: true,
	    responsive: [
	    {
	        breakpoint: 810,
	        settings: {
	            slidesToShow: 3,
	            autoplay: 3,
	            slidesToScroll: 3
	        }
	    },
	    {
	        breakpoint: 530,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            autoplay: 2,
	        }
	    },
	    {
	        breakpoint: 380,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            autoplay: 1,
	            arrows: false,
	        }
	    }]	 
  });
   $('.our-works__filter span').on('click', function() {
	    var filterClass = $(this).data('value');
	    $('.our-works__filter span.active').removeClass("active");
	    $(this).addClass('active');
	    $('.our-works-slider').slick('slickUnfilter');
	    $('.our-works-slider').slick('slickFilter', filterClass);
  }); 
  $('.doctors-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 400,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:  true,	    
	dots: false,
    autoplay: true,
    speed: 500,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
      	arrows: false,
        slidesToShow: 1
      }
    }]
  }); 
   $('.publications-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:  true,	    
	dots: false,
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 400,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }]
  });
});
/**
* lightGallery
*/
$(document).ready(function() {
	$('#video-about').lightGallery({
    		});
 $("iframe").addClass('embed-responsive-item');
	$("iframe").wrap('<div class="embed-responsive embed-responsive-16by9"/>'); 
});



