$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('navbar-shrink');
    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


  $("#back-top").hide();

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.Calc-Presup').click(function(e){
    e.preventDefault();
    var data = $(this).serialize();
    console.log(data);

});