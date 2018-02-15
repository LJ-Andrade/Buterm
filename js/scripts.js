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

// Calculations

// Aislantes M2
$('#AislHigh').keyup(function() {
    var input1 = $(this).val();
    var input2 = $('#AislLong').val();
    var target = $('#AislM2');
    calcM2(input1, input2, target);
});

$('#AislLong').keyup(function() {
    var input1  = $(this).val();
    var input2 = $('#AislHigh').val();
    var target = $('#AislM2');
    calcM2(input1, input2, target);
});

$('#CalcAislante').on('submit', function(e){
    e.preventDefault();
    var m2 = $('#AislM2').val();
    var message = "Consulta sobre AISANTES TÉRMICOS. A cubrir: " + m2 + " metros2";
    $('#GotoContact').click();
    $('#FormMessage').val(message);
});
 
// Cobertores M2
$('#CobertHigh').keyup(function() {
    var input1 = $(this).val();
    var input2 = $('#CobertLong').val();
    var target = $('#CobertM2');
    calcM2(input1, input2, target);
});

$('#CobertLong').keyup(function() {
    var input1  = $(this).val();
    var input2 = $('#CobertHigh').val();
    var target = $('#CobertM2');
    calcM2(input1, input2, target);
});

$('#CalcCobertor').on('submit', function(e){
    e.preventDefault();
    var m2 = $('#CobertM2').val();
    var message = "Consulta sobre COBERTORES PARA PISCINAS. A cubrir: " + m2 + " metros2";
    $('#GotoContact').click();
    $('#FormMessage').val(message);
});

// Malla M2
$('#MallaHigh').keyup(function() {
    var input1 = $(this).val();
    var input2 = $('#MallaLong').val();
    var target = $('#MallaM2');
    calcM2(input1, input2, target);
});

$('#MallaLong').keyup(function() {
    var input1  = $(this).val();
    var input2 = $('#MallaHigh').val();
    var target = $('#MallaM2');
    calcM2(input1, input2, target);
});

$('#CalcMalla').on('submit', function(e){
    e.preventDefault();
    var m2 = $('#MallaM2').val();
    var message = "Consulta sobre MALLA SOSTÉN. A cubrir: " + m2 + " metros2";
    $('#GotoContact').click();
    $('#FormMessage').val(message);
});

function calcM2(input1, input2, target){
    console.log(input1);
    console.log(input2);
    if(input1 == NaN || input1 == ''){ input1 = 0 }
    if(input2 == NaN || input2 == ''){ input2 = 0 }

    var result = parseFloat(input1) * parseFloat(input2);
    var m2     = result.toFixed(2);
    console.log(m2);
    $(target).val(m2);
}

//
//AislM2
