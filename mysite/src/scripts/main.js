

// Ajaxify
// v1.0.1 - 30 September, 2012
// https://github.com/browserstate/ajaxify
(function(window,undefined){
  
  // Prepare our Variables
  var
    History = window.History,
    $ = window.jQuery,
    document = window.document;

  // Check to see if History.js is enabled for our Browser
  if ( !History.enabled ) {
    return false;
  }

  // Wait for Document
  $(function(){
    // Prepare Variables
    var
      /* Application Specific Variables */
      contentSelector = 'article:first'
      $content = $(contentSelector).filter(':first'),
      contentNode = $content.get(0),
      $menu = $('#menu,#nav,nav:first,.nav:first').filter(':first'),
      activeClass = 'active selected current youarehere',
      activeSelector = '.active,.selected,.current,.youarehere',
      menuChildrenSelector = '> li,> ul > li',
      completedEventName = 'statechangecomplete',
      /* Application Generic Variables */
      $window = $(window),
      $body = $(document.body),
      rootUrl = History.getRootUrl(),
      scrollOptions = {
        duration: 800,
        easing:'swing'
      };
    
    // Ensure Content
    if ( $content.length === 0 ) {
      $content = $body;
    }
    
    // Internal Helper
    $.expr[':'].internal = function(obj, index, meta, stack){
      // Prepare
      var
        $this = $(obj),
        url = $this.attr('href')||'',
        isInternalLink;
      
      // Check link
      isInternalLink = url.substring(0,rootUrl.length) === rootUrl || url.indexOf(':') === -1;
      
      // Ignore or Keep
      return isInternalLink;
    };
    
    // HTML Helper
    var documentHtml = function(html){
      // Prepare
      var result = String(html)
        .replace(/<\!DOCTYPE[^>]*>/i, '')
        .replace(/<(html|head|body|title|meta|script)([\s\>])/gi,'<div class="document-$1"$2')
        .replace(/<\/(html|head|body|title|meta|script)\>/gi,'</div>')
      ;
      
      // Return
      return $.trim(result);
    };
    
    // Ajaxify Helper
    $.fn.ajaxify = function(){
      // Prepare
      var $this = $(this);
      
      // Ajaxify
      $this.find('a:internal:not(.no-ajaxy)').click(function(event){
        // Prepare
        var
          $this = $(this),
          url = $this.attr('href'),
          title = $this.attr('title')||null;
        
        // Continue as normal for cmd clicks etc
        if ( event.which == 2 || event.metaKey ) { return true; }
        
        // Ajaxify this link
        History.pushState(null,title,url);
        event.preventDefault();
        return false;
      });
      
      // Chain
      return $this;
    };
    
    // Ajaxify our Internal Links
    $body.ajaxify();
    
    // Hook into State Changes
    $window.bind('statechange',function(){
      // Prepare Variables
      var
        State = History.getState(),
        url = State.url,
        relativeUrl = url.replace(rootUrl,'');

      // Set Loading
      $body.addClass('loading');

      // Start Fade Out
      // Animating to opacity to 0 still keeps the element's height intact
      // Which prevents that annoying pop bang issue when loading in new content
      $content.animate({opacity:0},800);
      
      // Ajax Request the Traditional Page
      $.ajax({
        url: url,
        success: function(data, textStatus, jqXHR){
          // Prepare
          var
            $data = $(documentHtml(data)),
            $dataBody = $data.find('.document-body:first'),
            $dataContent = $dataBody.find(contentSelector).filter(':first'),
            $menuChildren, contentHtml, $scripts;


        
          
          // Fetch the scripts
          $scripts = $dataContent.find('.document-script');
          if ( $scripts.length ) {
            $scripts.detach();
          }

          // Fetch the content
          contentHtml = $dataContent.html()||$data.html();
          if ( !contentHtml ) {
            document.location.href = url;
            return false;
          }
          
          // Update the menu
          $menuChildren = $menu.find(menuChildrenSelector);
          $menuChildren.filter(activeSelector).removeClass(activeClass);
          $menuChildren = $menuChildren.has('a[href^="'+relativeUrl+'"],a[href^="/'+relativeUrl+'"],a[href^="'+url+'"]');
          if ( $menuChildren.length === 1 ) { $menuChildren.addClass(activeClass); }

          // Update the content
          $content.stop(true,true);
          $content.html(contentHtml).ajaxify().css('opacity',100).show().foundation(); /* you could fade in here if you'd like */

          // Update the title
          document.title = $data.find('.document-title:first').text();
          try {
            document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
          }
          catch ( Exception ) { }
          
          // Add the scripts
          $scripts.each(function(){
            var $script = $(this), scriptText = $script.text(), scriptNode = document.createElement('script');
            if ( $script.attr('src') ) {
              if ( !$script[0].async ) { scriptNode.async = false; }
              scriptNode.src = $script.attr('src');
            }
                scriptNode.appendChild(document.createTextNode(scriptText));
            contentNode.appendChild(scriptNode);
          });

          // Complete the change
          // if ( $body.ScrollTo||false ) { $body.ScrollTo(scrollOptions); } /* http://balupton.com/projects/jquery-scrollto */
          
          
          $("html, body").scrollTop(0);
          $('.scroll-indicator').removeClass('scroll-indicator--scrolled');
          $body.removeClass('loading');
          $window.trigger(completedEventName);
  
          // Inform Google Analytics of the change
          if ( typeof window._gaq !== 'undefined' ) {
            window._gaq.push(['_trackPageview', relativeUrl]);
          }

          // Inform ReInvigorate of a state change
          if ( typeof window.reinvigorate !== 'undefined' && typeof window.reinvigorate.ajax_track !== 'undefined' ) {
            reinvigorate.ajax_track(url);
            // ^ we use the full url here as that is what reinvigorate supports
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          document.location.href = url;
          return false;
        }
      }); // end ajax

    }); // end onStateChange

  }); // end onDomLoad

})(window); // end closure

//****** END AJAXIFY ******/




  $(document).foundation();


  

  function handleScroll(){
    //alert('handling scroll');
    var top = $('html').scrollTop() || $('body').scrollTop();
    var layers = $('.parallax__layer');

    var layer;
    var speed;
    var yPos;

    $('.scroll-indicator').addClass('scroll-indicator--scrolled');

    layers.each(function(index, element){
      
      speed = element.getAttribute('data-speed');
      yPos = -(top * speed / 100);
      //console.log(yPos);
      $( element ).css({
        'transform' : 'translate3d(0px, ' + yPos + 'px, 0px)'
      });
    });

    var pWin = $('#p-window');
    var pWinTop = pWin.offset().top;
    var pWinTop = window.pageYOffset;
    var pWinFrontLayers = document.getElementsByClassName('p-window__layer--front');
    var pWinSpeed;
    var pWinY;


    for (var i = 0; i < pWinFrontLayers.length; i++) {
      layer = pWinFrontLayers[i];
      pWinSpeed = layer.getAttribute('data-speed');
      pWinY = (pWinTop * pWinSpeed / 100);
      layer.setAttribute('style', 'background-position-y: ' + pWinY + '%');
    }

  };

$('#body').on('scrollme.zf.trigger', handleScroll);

function addthisInit() {
  var addthis_config = addthis_config||{};
  addthis_config.pubid = 'ra-52a72bea3c0127e2';
  console.log(addthis_config);
  addthis.init();
}

$(window).load(function() {
  addthisInit();

  $('#document-body').imagesLoaded( function() {
    snowInit();
    // alert('images loaded global');
  });
});

$( window ).on( "statechangecomplete", function() {
  // $('#parallax__container').on('scrollme.zf.trigger', handleScroll);
  
  $('#document-body').imagesLoaded( function() {
    // clearInterval(interval);
    // var interval = setInterval( loop, 1000 / 60 );
    snowInit();
    addthis.toolbox('.addthis_toolbox');
  });
});

/**
Copyright (c)2010-2011, Seb Lee-Delisle, sebleedelisle.com
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

-------------------------------------------------------

* Extremely minor changes to snow behavior by Dustin Quam. 


 **/

  var container;

  var cardWidth;
  var cardHeight;

  var SCREEN_WIDTH;
  var SCREEN_HEIGHT;

  var particle;
  
  var camera;
  var scene;
  var renderer;
  
  var mouseX = 0;
  var mouseY = 0;
  
  var windowHalfX;
  var windowHalfY;

  var particles = []; 
  var particleImage = new Image();
  particleImage.src = 'mysite/dist/images/snow/particle.png'; 
  var interval = setInterval( loop, 1000 / 60 );

function snowInit() {
  
  container = document.getElementById('card');

  
  cardWidth = $("#card").width();
  cardHeight = $("#card").height();
  
  SCREEN_WIDTH = cardWidth;
  SCREEN_HEIGHT = cardHeight;

  // alert(cardWidth + ' ' + cardHeight);

  SCREEN_WIDTH = cardWidth;
  SCREEN_HEIGHT = cardHeight;
  
  windowHalfX = cardWidth / 2;
  windowHalfY = cardWidth / 2;

  //container = document.createElement('div');
  //document.body.appendChild(container);
  // container = document.getElementById('card');
  camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.add(camera);

  particles = [];
   
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
    
  for (var i = 0; i < 500; i++) {

    particle = new Particle3D( material);
    particle.position.x = Math.random() * 2000 - 1000;
    particle.position.y = Math.random() * 2000 - 1000;
    particle.position.z = Math.random() * 2000 - 1000;
    particle.scale.x = particle.scale.y =  1;
    scene.add( particle );
    
    particles.push(particle); 
  }

  
  //container.appendChild( renderer.domElement );
  container.insertBefore(renderer.domElement,container.firstChild);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  /*document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );*/
  
  

  
}

function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function loop() {

  for(var i = 0; i < particles.length; i++){

      var particle = particles[i]; 
      particle.updatePhysics(); 

      var particlePos = particle.position;

      if(particlePos.y<-1000) particlePos.y+=2000; 
      if(particlePos.x>1000) particlePos.x-=2000; 
      else if(particlePos.x<-1000) particlePos.x+=2000; 
      if(particlePos.z>1000) particlePos.z-=2000; 
      else if(particlePos.z<-1000) particlePos.z+=2000; 
         
    }
    camera.position.x += ( mouseX - camera.position.x ) * 0.05;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
    camera.lookAt(scene.position); 

    renderer.render( scene, camera );

  
}

function doResize() {

  cardWidth = $("#card").width();
  cardHeight = $("#card").height();
  
  SCREEN_WIDTH = cardWidth;
  SCREEN_HEIGHT = cardHeight;
  
  windowHalfX = cardWidth / 2;
  windowHalfY = cardHeight / 2; 

  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  
};

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doResize, 100);
});
