
<article>
  <div class="main">
    <div class="main-content__container">
      <div class="main-content main-content--shift-up">
        <h1>$Title</h1>
        $Content
        $Form
      </div>
    </div>

    <div class="building-grid row expanded small-up-2">
      <h2 class="heading heading--small heading--centered">View and share our campus this holiday season:</h2>
      <% loop $BuildingPages %>
        <% include BuildingPageColumn %>
      <% end_loop %>
    </div>
    <% include Footer %>
  </div>
</article>