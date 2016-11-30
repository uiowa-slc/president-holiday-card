

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

  };

$('#body').on('scrollme.zf.trigger', handleScroll);


function addthisInit() {
  var addthis_config = addthis_config||{};
  addthis_config.pubid = 'ra-52a72bea3c0127e2';
  addthis_config.data_track_clickback = false;
  console.log(addthis_config);
  addthis.init();


}

$(window).load(function() {
  addthisInit();



  $('.scroll-indicator').click(function(){
    $(window).scrollTo('#main', 2000);
  });


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
  var interval;

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
