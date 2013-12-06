  $Form
<h1>Seasons Greetings from $SenderName </h1>

<div id="card" class="card-custom carousel slide" data-ride="carousel" >
  <div class="carousel-inner">

    <div class="item active">
		  <img src="{$ThemeDir}/images/allcovered.png" />
    </div><!-- end .item -->

    <div class="item">
		  <img src="{$ThemeDir}/images/uncovered1.png" />
    </div><!-- end .item -->

      <div class="item">
		<img src="{$ThemeDir}/images/uncovered2.png" />
    </div><!-- end .item -->
    <div class="item">
		  <img src="{$ThemeDir}/images/uncovered3.png" />
    </div><!-- end .item -->
    <div class="item">
      <img src="{$ThemeDir}/images/nothing.png" />
    </div><!-- end .item -->
    <div class="item" style="background-image: url('{$Image.URL}') ">
		  <img src="{$ThemeDir}/images/alluncovered-custom-card.png" />
    </div><!-- end .item -->
  </div><!-- end .carousel-inner -->
</div> <!-- end #card -->

<h2>Send Your Own Greeting Below</h2>
$CardForm
