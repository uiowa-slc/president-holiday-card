<% if not $usingIE8OrLess %>
<section class="send-your-own">
	<hr />
<h1>Send Your Own Greeting</h1>
<ol class="steps">
	<li class="one"><strong>Step One:</strong> Take a photo (make sure you're in the center of the photo).</li>
	<li class="two"><strong>Step Two:</strong> Fill out the form below with your name, email, and photo.</li>
	<li class="three"><strong>Step Three:</strong> We'll send you an email with a link to your card.</li>
</ol>
<% include CardList %>
</section>
<% else %>
	<% include IE8Message %>
<% end_if %>