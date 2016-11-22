
  <div class="parallax__container">
      <!-- "furthest" layer, aka sunset/sky/ backdrop: -->
      <div class="parallax__layer parallax__layer--1 parallax" data-speed="2"></div>  
      <div class="parallax__layer parallax__layer--2 parallax" data-speed="11"></div>  
      <div class="parallax__layer parallax__layer--3 parallax" data-speed="16"></div> 
      <div class="parallax__layer parallax__layer--4 parallax" data-speed="26"></div>   
      <div class="parallax__layer parallax__layer--5 parallax card" id="card" data-speed="40"></div> 
      <div class="parallax__layer parallax__layer--6 parallax" data-speed="65"></div>  
      <%-- <div class="parallax__layer parallax__layer--7" data-speed="69"></div>  --%>  
      <!-- closest layer: -->
      <%-- <div class="parallax__layer parallax__layer--8 card" id="card" data-speed="100"></div>  --%>  <!-- 100. -->
  </div>
  <div class="main">
    <div class="main-content__container">
      <div class="main-content">

        $Form
        <h1 class="main-content__header">Warmest Wishes From Bruce and Mary Harreld</h1>
        <p>Pro posse minim ea, sale detraxit quaerendum ea per, at enim labores vel. Ne mei doctus democritum, mei in aliquam delenit. Ex sea utroque mentitum, lorem dolorum recteque mel ei, utinam dolorum mel ex. Pri ullum dolor nonumes at. Viderer aliquid ocurreret sit ne, quot quodsi eloquentiam at per. Ut verear laoreet nominavi usu, in cum oratio commodo scripta, cu mutat iudico abhorreant vis.</p>
        <h2 class="heading heading--small heading--centered">Share:</h2>
        <div class="addthis_inline_share_toolbox"></div>
      </div>
    </div>

    <div class="building-grid building-grid--padding row small-up-2">
      <h2 class="heading heading--small heading--centered">Share a building below:</h2>
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
  </div>