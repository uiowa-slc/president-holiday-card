 <div class="main" id="main" role="main">
 	<a href="{$BaseURL}" class="button button--nav"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</a>
    <div class="main-content__screen"></div>
    <div class="main-content__container row column">
      <div class="main-content__media">
      	<img src="$Photo.PaddedImage(1920,1080, 333333).URL" />
      </div>
      <div class="main-content">
        $Form
        <h1 class="main-content__header">Wishing you a sweet and joyful holiday season</h1>
        <p class="text-center main-content__signature">$From</p>
        <% include AddThis %>
      </div>
    </div>
 </div>



<% include Footer %>