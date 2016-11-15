/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a 'New content is
                // available; please refresh.' message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  window.addEventListener('scroll', function() {
    var top = this.pageYOffset;
    var layers = document.getElementsByClassName('parallax__layer');
    var layer;
    var speed;
    var yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute('data-speed');
      yPos = -(top * speed / 100);
      layer.setAttribute(
        'style',
        'transform: translate3d(0px, ' + yPos + 'px, 0px)'
      );
    }

    var pWin = $('#p-window');
    // var pWinTop = pWin.offset().top;
    var pWinTop = this.pageYOffset;
    var pWinFrontLayers = document.getElementsByClassName('p-window__layer--front');
    var pWinSpeed;
    var pWinY;


    for (var i = 0; i < pWinFrontLayers.length; i++) {
      layer = pWinFrontLayers[i];
      pWinSpeed = layer.getAttribute('data-speed');
      pWinY = (pWinTop * pWinSpeed / 100);
      layer.setAttribute('style', 'background-position-y: ' + pWinY + '%');
    }

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
  container = document.getElementById('card');

  
  /*cardWidth = 596;
  cardHeight = 596;
  */
  var cardWidth;
  var cardHeight;

  cardWidth = $("#card").width();
  cardHeight = $("#card").height();
  
  var SCREEN_WIDTH = cardWidth;
  var SCREEN_HEIGHT = cardHeight;
  
  
  var particle;
  
  var camera;
  var scene;
  var renderer;
  
  var mouseX = 0;
  var mouseY = 0;
  
  var windowHalfX = cardWidth / 2;
  var windowHalfY = cardWidth / 2;
  //alert(windowHalfX);
  var particles = []; 
  var particleImage = new Image();//THREE.ImageUtils.loadTexture( "img/ParticleSmoke.png" );
  particleImage.src = 'mysite/dist/images/snow/particle.png'; 

$(window).load(function() {
  cardWidth = $("#card").width();
  cardHeight = $("#card").height();
  
  SCREEN_WIDTH = cardWidth;
  SCREEN_HEIGHT = cardHeight;
  
  windowHalfX = cardWidth / 2;
  windowHalfY = cardWidth / 2;
  
  
  snowInit();

});

function snowInit() {

  //container = document.createElement('div');
  //document.body.appendChild(container);
  // container = document.getElementById('card');
  camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.add(camera);
    
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


})();
