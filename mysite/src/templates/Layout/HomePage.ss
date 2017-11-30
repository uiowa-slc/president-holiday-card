<article>
  <div class="main" id="main" role="main">
    <div class="main-content__screen"></div>
    <div class="main-content__container row column">
      <div class="main-content__media responsive-embed widescreen">
        <iframe width="420" height="315" class="lazy" data-src="https://www.youtube.com/embed/DyE62WYWhss?rel=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="main-content">
        $Form
        <h1 class="main-content__header">Wishing you a sweet and joyful holiday season.</h1>
        <p class="main-content__signature">Mary &amp; Bruce Harreld</p>
        <% if not $FeaturedSubmission %>
          <% include AddThis %>
        <% end_if %>
      </div>
      <div class="recipe__container">
        <div class="recipe">
          <div class="row">
            <div class="medium-12 large-4 large-push-8 columns hc-sticky">
                <img class="recipe__img lazy" data-src="mysite/dist/images/iowa.jpg" alt="Delicious cookies spelling the word 'Iowa'" />
                <p class="recipe__sidebar"><a href="mysite/pdf/chef-barry_s-sugar-cookie-recipe.pdf"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download a PDF version of this recipe</a></p>
            </div>
            <div class="medium-12 large-8 large-pull-4 columns">
                <h2 class="recipe__header">Chef Barry's Sugar Cookie Recipe</h2>
                <ul class="recipe__ingredients">
                  <li>2 sticks Unsalted Butter</li>
                  <li>1<sup>1/2</sup> cups Granulated Sugar</li>
                  <li>2<sup>1/2</sup> tsp Baking Powder</li>
                  <li>1<sup>1/4</sup> tsp Kosher Salt</li>
                  <li>1 Large Egg, Cold</li>
                  <li>1 Tbl Pure Vanilla extract</li>
                  <li>2<sup>1/4</sup> cups All Purpose Flour</li>
                </ul>
                <p class="recipe__body">This is my traditional sugar cookie recipe that we use in our bakery. This version makes a scoop and bake type of cookie that is rolled in sugar to give it texture. To make decorated cookies, roll the dough on a lightly floured surface to your desired thickness and chill the dough 20 mins. before cutting and baking.</p>
                <div class="accordion" data-accordion data-allow-all-closed="true">
                  <div class="accordion-item" data-accordion-item>
                     <a href="#" class="accordion-title">See full recipe</a>
                    <div class="accordion-content" data-tab-content>
                      <p class="recipe__body">This is my traditional sugar cookie recipe that we use in our bakery. This version makes a scoop and bake type of cookie that is rolled in sugar to give it texture. To make decorated cookies, roll the dough on a lightly floured surface to your desired thickness and chill the dough 20 mins. before cutting and baking.</p>
                      <ol class="recipe__body">
                        <li>Adjust oven rack to middle position, preheat to <strong>350&deg; F</strong> and line 2 cookie sheets with parchment paper.</li>
                        <li>Combine butter, sugar, baking powder, kosher salt, and vanilla extract in the bowl of stand mixer fitted with a paddle attachment. Mix on low for 2 mins. to bring the mixture together and then increase to medium and beat until light and fluffy, about 5 mins. Add the egg and continue beating another 2 mins. until smooth. Stop the beater and scrape the bowl. Mix on low, and spoon in the flour one spoonful at a time and continue to mix until the dough is formed.</li>
                        <li>Divide into whatever cookie size you choose, and roll into balls. Dredge cookie balls in granulated sugar and place on prepared cookie sheets, leave some room for the cookies to spread. You do not need to flatten these, the cookies will spread on their own. If cut out cookies are made, arrange onto tray without granulated sugar.</li>
                        <li>Bake until the edges turn golden, about 15 mins. Decorate as desired!</li>
                      </ol>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div><!-- end .recipe__container-->
    </div><!-- end .main-content__container-->
  </div><!-- end .main -->

<div class="row column">
    <h1 class="submissions-carousel__header">Share your Iowa cookie creations:</h1>
    <div class="submissions-carousel__container">
      <div class="flexslider" id="slider" >
        <ul class="slides">
          <% loop $Submissions %>
            <li>
              <a href="$Link"><img data-src="$Photo.PaddedImage(1162,654, 222222).URL" class="lazy submissions-carousel__img" /></a>
            </li>
          <% end_loop %>
        </ul>
      </div>
      <div id="carousel" class="flexslider">
        <ul class="slides">
          <% loop $Submissions %>
          <li>
            <img data-src="$Photo.PaddedImage(210,118, 333333).URL" class="lazy submissions-carousel__img" />
          </li>
          <% end_loop %>
        </ul>
      </div>
    </div>
  <div class="row">
    <div class="medium-8 medium-centered columns">
      
      <div class="submit__container">
        <h2 class="submissions-carousel__header">Step 1: Upload a photo</h2>
        $SubmitForm

        <h2 class="submissions-carousel__header">Step 2:</h2>
        <p class="text-center recipe__body">Check your email: we'll send you a personalized link with your photo front-and-center.</p>
        <h2 class="submissions-carousel__header">Step 3:</h2>
          <p class="recipe__body text-center">Share your Iowa cookie creation with friends and family and friends.</p>
          <% include AddThis %>
      </div>
    </div>
  </div>

</div>
<% include Footer %>
</article>