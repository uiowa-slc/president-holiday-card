$( document ).ready(function() {

     $('.carousel').carousel({
		interval: 1500,
		pause: true,
		wrap: false
	 });

	 /* Uncomment when you're ready for music */
	 /*$("#audio-player").jPlayer({
		   ready: function () {
		    $(this).jPlayer("setMedia", {
		     mp3: "themes/card2013/media/holiday.mp3"
		    }).jPlayer("play");
		   },
		   swfPath: "themes/card2013/vendor/jplayer/",
		   supplied: "mp3",

	});*/

	$('.carousel').on('slid', function () {
	  $('.carousel-inner > .item.active .carousel-caption').fadeIn( "slow" );
	})

	var slideCount = $('.carousel .item').length;
	$('.carousel').on('slide.bs.carousel', function () {
		slideCount--;
	    if (slideCount == 1) {

	        $('.send-your-own').delay(1000).fadeIn(800);
	        $('.addthis_floating_style').delay(1000).fadeIn(800);

	    }

	})

});
