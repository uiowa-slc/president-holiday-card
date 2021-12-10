<!doctype html>
<html lang="en" class="no-js">
    <head>
        $GlobalAnalytics
        <% base_tag %>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        $MetaTags(false)
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <% if $URLSegment = 'home' %>
          <title>$SiteConfig.Title | The University of Iowa</title>
        <% else %>
          <title>$Title - $SiteConfig.Title | The University of Iowa</title>
        <% end_if %>
        $OpenGraph
        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no">
        <% include Favicons %>
        $GoogleFonts
        $TypeKitScript

        <% require css("themes/bootstrap/dist/styles/main.css") %>

    </head>
    <body class="{$ClassName}">

    <a class="sr-only sr-only-focusable" href="{$Link}#content">Skip to main content</a>

<%--     <% if $SiteConfig.EnableUidsIowaBar %>
        <% include IowaBar %>
    <% else %>
        <% include UiowaBar %>
    <% end_if %> --%>
    $Layout


    <% include FooterScripts %>
    <% require javascript("themes/bootstrap/dist/scripts/main.min.js") %>


    $Analytics
  </body>
</html>
