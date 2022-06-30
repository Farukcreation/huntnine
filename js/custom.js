$(function(){

  /* ==================
    banner part start
===================== */

    $('.banner-main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prev",
        nextArrow: ".next",
    });

   /* ==================
    banner part end
  ===================== */

    /* ==================
    portfolio part start
    ===================== */

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

    /* ==================
    portfolio part end
    ===================== */  

    /* ==================
    counter part start  
    ===================== */

      jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    /* ==================
    counter part end  
    ===================== */

    /* ==================
    patner part start 
    ===================== */

    $('.patners-main').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerPadding: "0",
      centerMode: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
    });

    /* ==================
    patner part end 
    ===================== */


    /* ==================
    service part start 
    ===================== */
    $('.service-main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      centerMode: true,
      centerPadding: '0',
      nextArrow: ".snext",
      prevArrow: ".sprev",
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
          }
        },
      
      ],
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
          }
        },
      
      ],
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
          }
        },
      
      ],
    });
    /* ==================
    service part end 
    ===================== */


    /* ==================
    feedback part start 
    ===================== */
    $('.feedtext-slic').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.feedimg-slic'
    });
    $('.feedimg-slic').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feedtext-slic',
      vertical: true,
      centerPadding: "0",
      centerMode: true,
      focusOnSelect: true,
      nextArrow: ".fnext",
      prevArrow: ".fprev",
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0",
            centerMode: true,
          }
        },
      ],
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0",
            centerMode: true,
          }
        },
      ],
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0",
            centerMode: true,
          }
        },
      ],

    });
    /* ==================
    feedback part end 
    ===================== */

    /* ==================
    bottom2top start
    ===================== */
    $(window).on('scroll',function(){

      var scrolling = $(this).scrollTop()
      if(scrolling > 50){
        $(".bottom2top").fadeIn(500)
      }else {
        $(".bottom2top").fadeOut(500)
      }
    
    })
    $(".bottom2top").on('click',function(){
      $("html,body").animate({
        scrollTop: 0
      },1000)
    })
    /* ==================
    bottom2top end 
    ===================== */

    new WOW().init();

    var mixer = mixitup('.mixit');
    
})