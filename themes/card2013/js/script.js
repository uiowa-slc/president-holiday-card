$( document ).ready(function() {


     $('.carousel').carousel({
		interval: 1500,
		pause: true,
		wrap: false
	 });

	 /* Uncomment when you're ready for music */
	 $("#audio-player").jPlayer({
		   ready: function () {
		    $(this).jPlayer("setMedia", {
		     mp3: "themes/card2013/media/winterwonder_short.mp3"
		    }).jPlayer("play");
		   },
		   swfPath: "themes/card2013/vendor/jplayer/",
		   supplied: "mp3",

	});

	$('.carousel').on('slid', function () {
	  $('.carousel-inner > .item.active .carousel-caption').fadeIn( "slow" );
	})

	    if(!Modernizr.csstransitions){
            $('.carousel').on('slide.bs.carousel', function(){
            $(this).find('.carousel-inner .active').hide();
        });
        $('.carousel').on('slid', function(){
            $(this).find('.carousel-inner .next').slideDown();
        });
    }


	var slideCount = $('.carousel .item').length;
	$('.carousel').on('slide.bs.carousel', function () {
		slideCount--;
	    if (slideCount == 1) {

	    	var timer = 1500;

	        $('.send-your-own').delay(timer).fadeIn(800);
	        $('footer').delay(timer).fadeIn(800);
	        $('.addthis_floating_style').delay(timer).fadeIn(800);

	    }

	})

});
