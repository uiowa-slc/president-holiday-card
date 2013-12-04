$( document ).ready(function() {

     $('.carousel').carousel({
		interval: 1500,
		pause: true,
		wrap: false
	 });
	 $("#audio-player").jPlayer({
		   ready: function () {
		    $(this).jPlayer("setMedia", {
		     mp3: "themes/card2013/media/holiday.mp3"
		    }).jPlayer("play");
		   },
		   swfPath: "themes/card2013/vendor/jplayer/",
		   supplied: "mp3",

	});

});

$(window).load(function() {

});



 			/**/