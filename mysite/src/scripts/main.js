// http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Modified to only fire on body class (not body class + ID, working off strictly WordPress body_class)

Roots = {
  // all pages
  'common': {
    init: function(){
       $(document).foundation();
       addthis.init();
    },
    finalize: function(){ }
  },
  // Home page
  'HomePage': {
    init: function(){

      var snowElement; 

      $('.scroll-indicator').click(function(){
        $(window).scrollTo('#main', 2000);
      });

      $('#body').imagesLoaded( function() {
        var platform = navigator.platform.toLowerCase();
        var userAgent = navigator.userAgent.toLowerCase();
       
        if ( userAgent.indexOf('ipad') != -1  ||  userAgent.indexOf('iphone') != -1 ) 
        {
          snowElement = $('#parallax__container--static');
          $('#body').on('scrollme.zf.trigger', handleNonParallaxScroll);
        }
        else{
          $('#body').on('scrollme.zf.trigger', handleScroll);
          useParallax();
          snowElement = $('#card');
        }
        
        snowInit(snowElement);
        $('#body').on('resizeme.zf.trigger', function(){handleResize(snowElement)});
      });

    }
  },
  //Building Page:
  'BuildingPage': {
    init: function(){
      var snowElement = $("#card");
      $('#body').imagesLoaded( function() {
        snowInit(snowElement);
        $('#body').on('resizeme.zf.trigger', function(){handleResize(snowElement)});
      });
    },
    finalize: function(){ }
  },
}

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


function useParallax(){
  $("#parallax__container--static").css('display','none');
  $("#parallax__container").css('display','block');
}

function handleNonParallaxScroll(){
  $('.scroll-indicator').addClass('scroll-indicator--scrolled');
}

function handleScroll(){
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

};







/**
Copyright (c)2010-2011, Seb Lee-Delisle, sebleedelisle.com
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

-------------------------------------------------------

* Extremely minor changes to snow behavior by Dustin Quam. 


 **/


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
  var interval;

function snowInit(element) {
  
  var container = element;
  //console.log(container);
  
  cardWidth = container.width();
  cardHeight = container.height();
  
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

  
  container.prepend( renderer.domElement );
  //container.insertBefore(renderer.domElement,container.firstChild);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  /*document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );*/
  
  setInterval( loop, 1000 / 60 );

  
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

function handleResize(element){
  
  cardWidth = $(element).width();
  cardHeight = $(element).height();
  console.log(cardWidth);
  SCREEN_WIDTH = cardWidth;
  SCREEN_HEIGHT = cardHeight;
  
  windowHalfX = cardWidth / 2;
  windowHalfY = cardHeight / 2; 

  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
}


// function doResize() {
//   alert(cardWidth);
//   SCREEN_WIDTH = cardWidth;
//   SCREEN_HEIGHT = cardHeight;
  
//   windowHalfX = cardWidth / 2;
//   windowHalfY = cardHeight / 2; 

//   renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  
// };

// var resizeTimer;
// $(window).resize(function() {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(doResize, 100);
// });
