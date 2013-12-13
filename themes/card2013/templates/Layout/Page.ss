<h1>$Title</h1>
$Content
$Form
<ul class="card-list">
  <li class="sally-ken"><a href="{$BaseHref}"><img src="{$ThemeDir}/images/alluncovered-card.png" /></a></li>
  <% loop CustomCards %>
    <li style="background-image: url('{$Image.URL}');"><a href="{$Link}"><img src="{$ThemeDir}/images/previewmask.png" /></a></li>
  <% end_loop %>
  <li class="filler"></li>
    <li class="filler"></li>
</ul>
