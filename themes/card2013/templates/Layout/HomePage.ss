  $Form

  <%--<div id="card" class="flexslider">
    <ul class="slides">
      <li class="alluncovered">
        <img src="{$ThemeDir}/images/allcovered.png" />
      </li>
      <li class="uncovered1">
        <img src="{$ThemeDir}/images/uncovered1.png" />
      </li>
      <li class="uncovered2">
        <img src="{$ThemeDir}/images/uncovered2.png" />
      </li>
      <li class="uncovered3">
        <img src="{$ThemeDir}/images/uncovered3.png" />
      </li>
      <li class="uncovered4">
        <img src="{$ThemeDir}/images/uncovered4.png" />
      </li>    
      <li class="alluncovered">
        <img src="{$ThemeDir}/images/alluncovered.png" />
      </li>
      <li class="alluncovered-card">
        <img src="{$ThemeDir}/images/alluncovered-card.png" />
      </li>
    </ul>
  </div>--%>

<div id="card" class="carousel slide" data-ride="carousel">
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
		  <img src="{$ThemeDir}/images/uncovered4.png" />
    </div><!-- end .item -->
    <div class="item">
      <img src="{$ThemeDir}/images/alluncovered.png" />
    </div><!-- end .item -->
    <div class="item">
		  <img src="{$ThemeDir}/images/alluncovered-card.png" />
    </div><!-- end .item -->
  </div><!-- end .carousel-inner -->
</div> <!-- end #card -->

<h1>Send Your Own Greeting Below</h1>
<p><a href="cards/view/6">Example Card</a></p>
$CardForm
