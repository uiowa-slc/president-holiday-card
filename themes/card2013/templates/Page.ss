<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Seasons Greetings from <% if $SenderName %>$SenderName<% else %>The University of Iowa and Sally & Ken Mason<% end_if %></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <% base_tag %>
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300italic,400italic,700,700italic,300' rel='stylesheet' type='text/css'>    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
      <script src="{$ThemeDir}/vendor/modernizr.js"></script>
      <link rel="image_src" href="{$ThemeDir}/images/allcovered.png" />
  </head>

  <body>

    <!-- AddThis Button BEGIN -->

    <div class="share-links">
      <div class="addthis_toolbox addthis_floating_style addthis_32x32_style" style="left:50px;top:50px;">
        <a class="addthis_button_facebook"></a>
        <a class="addthis_button_twitter"></a>
        <a class="addthis_button_google_plusone_share"></a>
        <a class="addthis_button_email"></a>
        <a class="addthis_button_compact"></a>
      </div>
    </div>
    <!-- AddThis Button END -->
    <div class="container">
    	$Layout

    </div><!-- end container -->

    <% include Footer %>
    
    <div id="audio-player"></div>

	
<script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52a72bea3c0127e2"></script>
  </body>
</html>
