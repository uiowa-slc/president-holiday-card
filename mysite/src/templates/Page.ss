<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <% if $URLSegment == "home" %>
        <title>Wishing You A Joyous Holiday Season From Bruce And Mary Harreld | The University of Iowa</title>
    <% else %>
        <title>$Title | The University of Iowa</title>
    <% end_if %>
    
    <% base_tag %>

    <meta name="title" content="Wishing You A Joyous Holiday Season From Bruce And Mary Harreld | The University of Iowa"/>
    <meta name="description" content="Wishing You A Joyous Holiday Season From Bruce And Mary Harreld | The University of Iowa"/>
    <meta name="author" content="The University of Iowa"/>
    <meta name="copyright" content="The University of Iowa. Copyright (c) 2016"/>


    <meta property="og:title"
    content="$Title.ATT" />
    <meta property="og:description"
    content="$Content.Summary.ATT" />
    
    <meta property="og:site_name" content="The University of Iowa Office of the President"/>
    <meta property="og:url" content="$AbsoluteLink" />
    <% if $Image %>
    <meta property="og:image" content="{$Image.Fill(1200,630).AbsoluteURL}" />
    <% else %>
    <meta property="og:image" content="{$absoluteBaseURL}mysite/dist/og--default.jpg" />
    <% end_if %>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- Web Application Manifest -->
    <link rel="manifest" href="manifest.json">

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Wishing You A Joyous Holiday Season From Bruce And Mary Harreld | The University of Iowa">
    <link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
    <link rel="apple-touch-icon" href="images/touch/apple-touch-icon.png">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">
    <meta name="msapplication-TileColor" content="#2F3BA2">

    <!-- Color the status bar on mobile devices -->
    <meta name="theme-color" content="#2F3BA2">
    <link href="https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy:400,400i" rel="stylesheet">
    <link rel="stylesheet" href="mysite/dist/styles/main.css">
  </head>
  <body id="body" data-scroll="body">

    <% if not $isAjax %>
        <audio autoplay>
          <source src="mysite/dist/media/song.mp3" type="audio/mpeg">
        </audio>
    <% end_if %>
    $Layout



    <!-- Add your site or app content here -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script type="text/javascript">var addthis_config = {"data_track_clickback":false};</script>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52a72bea3c0127e2"></script>
<!--pubid=ra-52a72bea3c0127e2 -->

    <!-- jQuery ScrollTo Plugin -->
    <script src="//balupton.github.io/jquery-scrollto/lib/jquery-scrollto.js"></script>


    <!-- History.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/history.js/1.8/bundled-uncompressed/html4+html5/jquery.history.js"></script>


    <script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>

    <!-- build:js mysite/dist/scripts/main.min.js -->
    <script src="bower_components/foundation-sites/dist/foundation.js"></script>
    <script src="./mysite/src/scripts/snow/ThreeCanvas.js"></script>
    <script src="./mysite/src/scripts/snow/Snow.js"></script>
    <script src="./mysite/dist/scripts/main.min.js"></script>
    <!-- endbuild -->

    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-426753-60', 'auto');
    ga('send', 'pageview');
    </script>
  </body>
</html>
