<% if not $usingIE8OrLess %>
<section class="send-your-own">
	<hr />
<h1>Send Your Own Greeting</h1>
<% include Steps %>
<ul class="card-list">
	<li class="card-form">$CardForm</li>
	<% if not $ClassName == 'HomePage' %><li class="sally-ken"><a href="{$BaseHref}"><img src="{$ThemeDir}/images/alluncovered-card.png" /></a></li><% end_if %>
	<% loop CustomCards.Limit(5) %>
		<li style="background-image: url('{$Image.URL}');"><a href="{$Link}"><img src="{$ThemeDir}/images/previewmask.png" /></a></li>
	<% end_loop %>
	<% if $CustomCards.Count > "5" %><li class="see-all"><a href="cards/">See All Cards</a></li><% end_if %>
	<li class="filler"></li>
    <li class="filler"></li>
</ul>
</section>
<% else %>
	<% include IE8Message %>
<% end_if %>