// back to top
$(document).ready(function(){
// Check distance to top and display back-to-top.
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 800 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 800 );
	return false;
});
// load more
  $(".loading-more").slice(0,3).show();
  $(".hide-load").click(function(e){
    e.preventDefault();
    $(".loading-more:hidden").slice(0,2).fadeIn("slow");
    
    if($(".loading-more:hidden").length == 0){
       $(".hide-load").fadeOut("slow");
      }
  });
  });
// menu active
$(document).ready(function(){
  $('.menu-list-bottom .for-active a').click(function(){
    $('.for-active a').removeClass("active");
    $(this).addClass("active");
});
$('.thumbnails li a').click(function(){
    $('.thumbnails li a').removeClass("active");
    $(this).addClass("active");
});
// owl carousel
$('.owl-carousel-one').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    nav: true,
    navText: [
        '<img src="../img/icon/left-arrow.png">',
        '<img src="../img/icon/right-arrow.png">'
    ],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3,
            nav: true
        },
        1400:{
            items:4,
            nav: true
        }
    }
})
// carosel 2
$('.owl-carousel-two').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    autoplay: true,
    navText: [
        '<img src="../img/icon/left-arrow.png">',
        '<img src="../img/icon/right-arrow.png">'
    ],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4,
            nav: true
        },
        1200:{
            items:4,
            nav: true
        },
        1400:{
            items:4,
            nav: true
        }
    }
})
// carosel 3
$('.owl-carousel-three').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    autoplay: true,
    navText: [
        '<img src="../img/icon/left-arrow.png">',
        '<img src="../img/icon/right-arrow.png">'
    ],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        768:{
            items:3,
            nav: true
        },
        992:{
            items:3,
            nav: true
        },
        1200:{
            items:3,
            nav: true
        },
        1400:{
            items:3,
            nav: true
        }
    }
})
// carosel 4
$('.owl-carousel-four').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    autoplay: true,
    navText: [
        '<img src="../img/icon/left-arrow.png">',
        '<img src="../img/icon/right-arrow.png">'
    ],
	dots: false,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        768:{
            items:4,
            nav: true
        },
        992:{
            items:5,
            nav: true
        },
        1200:{
            items:5,
            nav: true
        },
        1400:{
            items:6,
            nav: true
        }
    }
})
// dropdown animation
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });
  
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });
  // bx slider
  $('.slider').bxSlider({
    auto: true,
    pager: false,

});
});

  $(function() {
  //toggle class open on button
  $('#exCollapsingNavbar').on('hide.bs.collapse', function () {
    $('.navbar-toggler').removeClass('open');
  })
  $('#exCollapsingNavbar').on('show.bs.collapse', function () {
    $('.navbar-toggler').addClass('open');
  });
}); 


// avatar upload preview
$(document).ready(function() {
	
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
       $(".profile-pic").css({
        'z-index' : '99',
     });
       
    });
});



