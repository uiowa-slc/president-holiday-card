<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Wishing you a sweet and joyful holiday season, Mary &amp; Bruce Harreld | The University of Iowa</title>

    <% base_tag %>

    <meta name="title" content="Wishing you a sweet and joyful holiday season, Mary &amp; Bruce Harreld | The University of Iowa"/>
    <meta name="description" content="$Content.Summary(50).ATT"/>
    <meta name="author" content="The University of Iowa"/>
    <meta name="copyright" content="The University of Iowa. Copyright {$Now.Year}"/>


    <meta property="og:title"
    content="Wishing you a sweet and joyful holiday season" />
    <meta property="og:description"
    content="" />
    <meta property="og:type"   content="website" />
    <meta property="fb:app_id" content="127918570561161" />    
    <meta property="og:site_name" content="The University of Iowa - Office of the President"/>
    <% if $FeaturedSubmission %>
    <!--using featured submission -->
    <meta property="og:url" content="$FeaturedSubmission.AbsoluteLink" />
    <meta property="og:image" content="{$FeaturedSubmission.Photo.FocusFill(1200,630).AbsoluteURL}" />
    <% else_if $Photo %>
    <!-- using photo -->
    <meta property="og:image" content="{$Photo.FocusFill(1200,630).AbsoluteURL}" />
    <% else %>
    <meta property="og:url" content="$AbsoluteLink" />
    <!-- using default image -->
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

    <link rel="stylesheet" href="mysite/dist/styles/main.css">
  </head>
  <body id="body" class="{$ClassName}">
    $Layout
    <script src="./mysite/dist/scripts/main.min.js"></script>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52a72bea3c0127e2"></script>
    $Analytics
  </body>
</html>
