<div class="modal fade" id="card{$ID}" tabindex="-1" aria-labelledby="#card{$ID}" aria-hidden="true">
  <div class="modal-dialog $Image.Orientation <% if $Image.Orientation == "1" %>modal-md<% else %>modal-lg<% end_if %>">
    <div class="modal-content">
<%--       <div class="modal-header bg-white">
        <h3 class="modal-title">$Title</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> --%>
      <div class="modal-body p-0">
       <a href="$Link" class="d-block"><img data-src="$Image.ScaleWidth(900).URL" alt="$AltText" class="d-block w-100 lazyload" data-aspectratio="$Image.Ratio" /></a>

       <div class="modal-share pt-3">
            <p class="text-center">Share:
                <a class="btn btn-primary social-media-btn" href="https://www.facebook.com/sharer/sharer.php?u={$Link}"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-primary social-media-btn" href="https://twitter.com/intent/tweet?url={$Link}"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-primary social-media-btn" href="{$Image.URL}"><i class="fas fa-download"></i> Download image</a>

            </p>
            <p class="text-center mb-0"><i class="fas fa-link"></i> <a href="{$Link}" target="_blank" rel="noopener">{$Link}</a> </p>
       </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
