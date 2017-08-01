  /* BEGIN CSS */
    $('.btn--bd-1, [data-toggle="toggle1"]').hover(function(){
    $('.img-wrap--2').toggleClass('active');
  });
  /* END CSS */

 /* BEGIN scroll */
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
  /* END scroll */

  /* BEGIN btn to top */
$(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.btn-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('btn--is-visible') : $back_to_top.removeClass('btn--is-visible btn--fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('btn--fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
    }, scroll_top_duration
    );
  });
});
  /* END btn to top */


 /* BEGIN menu */
 $('.menu__toggle').click(function(){
  $('.menu--header').slideToggle();
  $(this).toggleClass('menu__toggle--active');
 });
 /* END menu */

 /* BEGIN preloader */
 $(window).on('load', function () {
    var $preloader = $('.preloader'),
        $spinner   = $preloader.find('.preloader-loader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
 /* END preloader */

 /* BEGIN owl */
 $('.owl-carousel.owl--slider1').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoHeight: true,
    items: 1
})
 /* END owl */