
  <div class="image-header__container card" id="card" >
    <img src="{$Image.Fill(1520,720).URL}" class="image-header" alt="" role="presentation" />
  </div>

  <div class="main">

    <div class="main-content__container">
      <article class="main-content main-content--building" role="main">
        <h1 class="main-content__header">$Title</h1>
          
          <p>Pro posse minim ea, sale detraxit quaerendum ea per, at enim labores vel. Ne mei doctus democritum, mei in aliquam delenit. Ex sea utroque mentitum, lorem dolorum recteque mel ei, utinam dolorum mel ex. Pri ullum dolor nonumes at. Viderer aliquid ocurreret sit ne, quot quodsi eloquentiam at per. Ut verear laoreet nominavi usu, in cum oratio commodo scripta, cu mutat iudico abhorreant vis.</p>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
          $Content
          <div class="addthis_inline_share_toolbox"></div>
      </article>
    </div>

    <div class="building-grid building-grid--padding row small-up-2">
      <h2 class="heading heading--small heading--centered">Share a building below:</h2>
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
    <div class="building-grid row small-12 columns" >
      <a href="$Baseurl" class="building-grid__link">

        <div class="p-window" id="p-window">
          <div class="p-window__layer p-window__layer--small p-window__layer--0 p-window-parallax" data-speed="2">
          </div>    
          <div class="p-window__layer p-window__layer--small p-window__layer--1 p-window__layer--front p-window-parallax" data-speed="4">
          </div>    
          <div class="p-window__layer p-window__layer--small p-window__layer--front p-window__layer--screen p-window-parallax">
          </div>
          <div class="image-screen image-screen--darker"><h2 class="building-grid__header">Share Our Campus</h2></div>
          
  <%--         <div class="p-window__layer p-window__layer--small p-window__layer--2 p-window__layer--front p-window-parallax" data-speed="5">
            <h2>Happy Holidays from Bruce and Mary Herrald</h2>
          </div> --%>   
        </div>

      </a>
    </div>
  </div>