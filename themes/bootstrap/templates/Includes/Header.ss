<header class="header">
    <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
    <div class="container-xl">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-main navbar-expand px-0 py-0" aria-label="Site Navigation">
                    <a class="navbar-brand" href="{$BaseUrl}" aria-label="{$SiteConfig.Title}">
                        $SiteConfig.Title
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul class="navbar-nav">
                            <% loop $Menu(1) %>
                                <li class="nav-item $LinkingMode <% if $URLSegment == "home" %>d-none d-lg-block <% end_if %><% if $isCurrent || $isSection %>nav-item-active<% end_if %>">
                                    <a class="nav-link" href="$Link">$MenuTitle.XML</a>
                                </li>
                            <% end_loop %>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
