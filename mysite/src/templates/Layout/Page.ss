
  <div class="parallax__container">
      <!-- "furthest" layer, aka sunset/sky/ backdrop: -->
      <div class="parallax__layer parallax__layer--0 parallax" data-speed="2"></div>    <!-- 00.0 -->

      <div class="parallax__layer parallax__layer--1 parallax" data-speed="5"></div>  <!-- 12.5 -->
      <div class="parallax__layer parallax__layer--2 parallax" data-speed="11"></div>   <!-- 25.0 -->
      <div class="parallax__layer parallax__layer--3 parallax" data-speed="16"></div> <!-- 37.5 -->
      <div class="parallax__layer parallax__layer--4 parallax" data-speed="26"></div>   <!-- 50.0 -->
      <div class="parallax__layer parallax__layer--5 parallax card" id="card" data-speed="40"></div> <!-- 62.5 -->
      <div class="parallax__layer parallax__layer--6 parallax" data-speed="65"></div>   <!-- 75.0 -->
      <%-- <div class="parallax__layer parallax__layer--7" data-speed="69"></div>  --%>  <!-- 87.5 -->

      <!-- closest layer: -->
      <%-- <div class="parallax__layer parallax__layer--8 card" id="card" data-speed="100"></div>  --%>  <!-- 100. -->
  </div>


  <div class="main">
    <div class="main-content__container">
      <div class="main-content">
        
        $Form
        <h1 class="main-content__header">Our New Homes For The Holiday</h1>
          $Content

          <h2>Share:</h2>
          <div class="addthis_inline_share_toolbox"></div>
      </div>
    </div>
    <div class="building-grid building-grid--padding row small-up-2">
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
  </div>