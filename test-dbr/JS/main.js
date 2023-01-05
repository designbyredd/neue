$(function(){
  function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ) { return true; }
    else { return false; }
  }
  $('#menu-open').click(function(e){
    e.preventDefault();
    $('#nav').addClass('open');
    $('body').addClass('menu-open');
  });
  $('#menu-close').click(function(e){
    e.preventDefault();
    $('#nav').removeClass('open');
    $('body').removeClass('menu-open');
  });
  $('#dp-link').click(function(e){
    e.preventDefault();
    if($('#dp').is(':visible')) {
      $('#dp').fadeOut(200);
    } else {
      $('#dp').fadeIn(200);
    }
  });
  $('#close-dp').click(function(e){
    e.preventDefault();
    if($('#dp').is(':visible')) $('#dp').fadeOut(200);
  });
  $('.lazy').lazy({
    effect: 'fadeIn',
    effectTime: 500,
    threshold: 0
  });
  $('a[href^=\\#]').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  (function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el) {
        function visPx(){
          var H = $(this).height(),
              r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));
  $(".minimove").inViewport(function(px){
    if(px) $(this).addClass("triggered") ;
  });
});

