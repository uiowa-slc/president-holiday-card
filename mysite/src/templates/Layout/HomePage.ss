
<audio id="audio" autoplay>
  <source src="mysite/dist/media/song.mp3" type="audio/mpeg">
</audio>
<article>
  <button class="button button--sound"><i class="fa fa-volume-up volume-icon" aria-hidden="true"></i><span class="show-for-sr" id="volume-text">Toggle music</span></button> 
  <div class="parallax__container parallax__container--static" id="parallax__container--static">
      <div class="parallax__layer parallax__layer--greeting parallax__layer--static">
        <p>From our neighborhood to yours...</p>
      </div>        
      <div class="parallax__layer parallax__layer--scroll-indicator parallax" data-speed="99">
        <span class="scroll-indicator"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
  </div>
  <div class="parallax__container" id="parallax__container" style="display: none;">
      
      <div class="parallax__layer parallax__layer--1 parallax" data-speed="2" 
        data-interchange="[mysite/dist/images/parallax/parallax-1--small.png, small], [mysite/dist/images/parallax/parallax-1--large.png, large], [mysite/dist/images/parallax/parallax-1--2x.png, retina]"></div>  
      <div class="parallax__layer parallax__layer--2 parallax" data-speed="11" data-interchange="[mysite/dist/images/parallax/parallax-2--small.png, small],  [mysite/dist/images/parallax/parallax-2--large.png, large], [mysite/dist/images/parallax/parallax-2--2x.png, retina]"></div>  
      <div class="parallax__layer parallax__layer--3 parallax" data-speed="16" data-interchange="[mysite/dist/images/parallax/parallax-3--small.png, small],  [mysite/dist/images/parallax/parallax-3--large.png, large], [mysite/dist/images/parallax/parallax-3--2x.png, retina]"></div> 
      <div class="parallax__layer parallax__layer--4 parallax" data-speed="26"data-interchange="[mysite/dist/images/parallax/parallax-4--small.png, small],  [mysite/dist/images/parallax/parallax-4--large.png, large], [mysite/dist/images/parallax/parallax-4--2x.png, retina]"></div>   
      <div class="parallax__layer parallax__layer--5 parallax" data-speed="40" data-interchange="[mysite/dist/images/parallax/parallax-5--small.png, small], [mysite/dist/images/parallax/parallax-5--large.png, large], [mysite/dist/images/parallax/parallax-5--2x.png, retina]"></div> 
      <div class="parallax__layer parallax__layer--6 parallax card" id="card"  data-speed="65" data-interchange="[mysite/dist/images/parallax/parallax-6--small.png, small], [mysite/dist/images/parallax/parallax-6--large.png, large], [mysite/dist/images/parallax/parallax-6--2x.png, retina]"></div>  
      <div class="parallax__layer parallax__layer--scroll-indicator parallax" data-speed="99">
        <span class="scroll-indicator"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
      <div class="parallax__layer parallax__layer--greeting parallax" data-speed="99">
        <p>From our neighborhood to yours...</p>
      </div>  
  </div>

  <div class="main" id="main">
    <div class="main-content__container">
      <div class="main-content main-content--with-padding">

        $Form
        <h1 class="main-content__header">wishing you a joyous
            <span class="main-content__holiday">holiday season</span>
        </h1>
        <p class="main-content__signature">Bruce &amp; Mary Harreld</p>
      <%-- <a href="http://uiowa.edu/"><img class="footer__logo" src="mysite/dist/images/uiowa.png" alt="The University of Iowa" /></a>
      <p class="footer__credit">Illustrations by University of Iowa alum Austin Smoldt-Sáenz.</p> --%>
      <a href="http://uiowa.edu/"><img class="footer__logo" src="mysite/dist/images/uiowa.png" alt="The University of Iowa" /></a>
      <p class="footer__credit">Illustrations by University of Iowa alum Austin Smoldt-Sáenz.</p>
        <% include AddThis %>
      </div>
    </div>

    <div class="building-grid row expanded medium-up-2">
      <h2 class="heading heading--small heading--centered">View and share our campus this holiday season:</h2>
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
    <%-- <% include Footer %> --%>
  </div>
</article>