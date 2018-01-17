<article>
  <div class="image-header__container card" id="card" >
    <a href="{$BaseURL}" class="button button--nav"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a>
    <img src="{$Image.Fill(1520,720).URL}" width="1520" height="720" class="image-header" alt="" role="presentation" />
  </div>
  <div class="main">
    <div class="main-content__container">
      <article class="main-content main-content--building" role="main">
        <h1 class="main-content__header">$Title</h1>

          <div class="main-content__body">
          $Content
          </div>

          <% include AddThis %>
      </article>
    </div>

    <div class="building-grid building-grid--padding row expanded medium-up-2"  id="building-grid">
      <h2 class="heading heading--small heading--centered">View and share our campus this holiday season:</h2>
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
    <div class="building-grid row expanded">
      <div class="large-12 columns">
        <a href="{$BaseURL}" class="building-grid__link">
          <div class="image-screen image-screen--darker">
            <h2 class="building-grid__header">Our Campus</h2>
          </div>
          <img src="mysite/dist/images/card-main-nav.jpg" class="building-grid__image" alt="Sprawling view of our campus" />
         </a>
      </div>
    </div>
  </div>
    <% include Footer %>
</article>