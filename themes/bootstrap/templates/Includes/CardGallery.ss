    <div class="send text-center" id="send">
        <h1 class="my-5 text-center send-heading">Send your own vintage Iowa greeting:</h1>
        <div class="masonry-grid">
            <% loop $Cards %>
            <div class="masonry-grid-item">
                <a href="#card{$ID}" data-toggle="modal" data-target="#card{$ID}" class="d-block card-link"><img class="lazyload d-block w-100 home-card" data-src="{$Image.ScaleWidth(300).URL}" data-aspectratio="$Image.Ratio" alt="$Image.AltText.ATT" /></a>
            </div>

            <% end_loop %>
        </div>
    </div>
