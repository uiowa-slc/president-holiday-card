<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <% if $URLSegment == "home" %>
        <title>Wishing you a joyous holiday season, Bruce &amp; Mary Harreld | The University of Iowa</title>
    <% else %>
        <title>$Title | The University of Iowa</title>
    <% end_if %>
    
    <% base_tag %>

    <meta name="title" content="Wishing you a joyous holiday season, Bruce &amp; Mary Harreld | The University of Iowa"/>
    <meta name="description" content="$Content.Summary(50).ATT"/>
    <meta name="author" content="The University of Iowa"/>
    <meta name="copyright" content="The University of Iowa. Copyright 2016"/>


    <meta property="og:title"
    content="$Title.ATT" />
    <meta property="og:description"
    content="$Content.Summary(50).ATT" />
    
    <meta property="og:site_name" content="The University of Iowa - Office of the President"/>
    <meta property="og:url" content="$AbsoluteLink" />
    <% if $Thumbnail %>
    <meta property="og:image" content="{$Thumbnail.Fill(1200,630).AbsoluteURL}" />
    <% else_if $Image %>
    <meta property="og:image" content="{$Image.Fill(1200,630).AbsoluteURL}" />
    <% else %>
    <meta property="og:image" content="{$absoluteBaseURL}mysite/dist/images/og--default.jpg" />
    <% end_if %>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <link rel="apple-touch-icon" sizes="180x180" href="mysite/dist/images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="mysite/dist/images/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="mysite/dist/images/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="mysite/dist/images/favicons/manifest.json">
    <link rel="mask-icon" href="mysite/dist/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="mysite/dist/images/favicons/favicon.ico">
    <meta name="msapplication-config" content="mysite/dist/images/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link href="https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy:400,400i" rel="stylesheet">
    <link rel="stylesheet" href="mysite/dist/styles/main.css?v=2016.1">
  </head>
  <body id="body" data-scroll="body" data-resize="body" class="{$ClassName}">


    $Layout


    <!-- build:js mysite/dist/scripts/main.min.js?v=2016.3 -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/foundation-sites/dist/foundation.js"></script>
    <script src="bower_components/jquery.scrollTo/jquery.scrollTo.js"></script>
    <script src="bower_components/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="./mysite/src/scripts/snow/ThreeCanvas.js"></script>
    <script src="./mysite/src/scripts/snow/Snow.js"></script>
    <script src="./mysite/dist/scripts/main.min.js"></script>
    <!-- endbuild -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52a72bea3c0127e2"></script>
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