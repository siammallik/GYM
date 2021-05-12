$(function(){

  $('.venobox').venobox();
  //back to top

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 500) {
    $('.navbar').addClass('bg');
  }
  else{
    $('.navbar').removeClass('bg');
  }
});


//smoothe scroll

var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 1500);
            return false;
        }
    }
});
//smoothe scroll ends here
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        dots:true,
        autoplay:false,
        autoplaySpeed: 2000,
      });


    $('.advice-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        dots:true,
        autoplaySpeed: 2000,
        responsive:  [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              dots:false,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              dots:false,
            }
          }
        ]
      });



    $('.team-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
       responsive:  [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      });

    $('.class-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        prevArrow:'.left-logo',
        nextArrow:'.right-logo',
        autoplaySpeed: 2000,
        responsive:  [
          {
            breakpoint: 330,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 490,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            }
          },
           {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
            }
          },
           {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
           {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            }
          }
        ]
      });
});