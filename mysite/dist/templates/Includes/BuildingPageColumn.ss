<div class="building-grid__column column">
  <a class="building-grid__link" href="$Link"><div class="image-screen"><h2 class="building-grid__header">$Title</h2></div>
  <% if $Thumbnail %>
  	<img src="$Thumbnail.Fill(1520,720).URL" class="building-grid__image" alt="$Title" />
  <% else %>
  	<img src="$Image.Fill(1520,720).URL" class="building-grid__image" alt="$Title" />
  <% end_if %>
  </a>
</div>