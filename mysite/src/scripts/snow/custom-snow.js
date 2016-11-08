/**
Copyright (c)2010-2011, Seb Lee-Delisle, sebleedelisle.com
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

-------------------------------------------------------

* Extremely minor changes to snow behavior by Dustin Quam. 


 **/

	//var container;
	container = document.getElementById('card');

	
	/*cardWidth = 596;
	cardHeight = 596;
	*/
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
	particleImage.src = 'themes/holiday2012/js/snow/img/ParticleSmoke.png'; 

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

for(var i = 0; i<particles.length; i++)
	{

		var particle = particles[i]; 
		particle.updatePhysics(); 

		with(particle.position)
		{
			if(y<-1000) y+=2000; 
			if(x>1000) x-=2000; 
			else if(x<-1000) x+=2000; 
			if(z>1000) z-=2000; 
			else if(z<-1000) z+=2000; 
		}				
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
