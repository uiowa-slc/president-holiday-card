  $Form
<section>
<h1>PREVIEW: Season's Greetings from $SenderName </h1>
<% if CurrentMember %>
<div id="card" class="card-custom carousel slide" data-ride="carousel" style="background-image: url('{$Image.CroppedFocusedImage(800,510).URL}') ">
  <div class="carousel-inner">
    <div class="item active">
		  <img src="{$ThemeDir}/images/alluncovered-custom-card.png" />
    </div><!-- end .item -->
  </div><!-- end .carousel-inner -->
</div> <!-- end #card -->
<% include SendYourOwnSection %>
<% end_if %>
