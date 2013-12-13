<% if not $usingIE8OrLess %>
<section>
  <h1>Send Your Own Greeting</h1>
  <% include Steps %>
  <ul class="card-list">
    <li>$CardForm</li>
    <li class="sally-ken"><a href="{$BaseHref}"><img src="{$ThemeDir}/images/alluncovered-card.png" /></a></li>
    <% loop CustomCards %>
      <li style="background-image: url('{$Image.URL}');"><a href="{$Link}"><img src="{$ThemeDir}/images/previewmask.png" /></a></li>
    <% end_loop %>
    <li class="filler"></li>
      <li class="filler"></li>
  </ul>
</section>
<% else %>
  <% include IE8Message %>
<% end_if %>