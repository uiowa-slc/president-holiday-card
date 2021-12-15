    <div class="send text-center" id="send">
        <h1 class="py-5 mb-0 text-center send-heading">Share your own vintage Iowa greeting:</h1>
        <div class="masonry-grid">
            <% loop $Cards %>
            <div class="masonry-grid-item card-shadow">
                <a href="#card{$ID}" data-toggle="modal" data-target="#card{$ID}" class="d-block card-link"><img class="lazyload d-block w-100 home-card" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{$Image.ScaleWidth(300).URL}" data-aspectratio="$Image.Ratio" alt="$AltText.ATT" /></a>
            </div>

            <% end_loop %>
        </div>
    </div>
