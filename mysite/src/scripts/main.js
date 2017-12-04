// http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Modified to only fire on body class (not body class + ID, working off strictly WordPress body_class)

Roots = {
  // all pages
  'common': {
    init: function(){
      $(document).foundation();

      // $('.submissions-carousel').flickity({
      //   // options
      //   cellAlign: 'left',
      //   contain: true
      // });
      //  // addthis.init();

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });
     
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
      });
      
      var myLazyLoad = new LazyLoad({
          elements_selector: ".lazy"
      });
    },
    finalize: function(){ }
  },
  // Home page
  'HomePage': {
    init: function(){
      $('.scroll-indicator').click(function(){
        $(window).scrollTo('#recipe__container', 1000);
       
      });
      
    }
  },
};

UTIL = {
  fire : function(func,funcname, args){
    var namespace = Roots;  // indicate your obj literal namespace here
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
      namespace[func][funcname](args);
    }
  },
  loadEvents : function(){

    // hit up common first.
    UTIL.fire('common');

    // do all the classes too.
    $.each(document.body.className.split(/\s+/),function(i,classnm){
      UTIL.fire(classnm);
    });

    UTIL.fire('common','finalize');
  }
};

// kick it all off here
$(document).ready(UTIL.loadEvents);


function handleScroll(){
  $('.scroll-indicator').addClass('scroll-indicator--scrolled');
}