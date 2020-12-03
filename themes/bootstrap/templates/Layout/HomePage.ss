<% include Header %>
<div class="homepage-hero" id="content">
    <div class="container-fluid p-0">
        <div class="row no-gutters justify-content-center">
            <div class="col-md-8 text-center py-3">
                <h1 class="display-1 mb-0"><svg id="Layer_1" class="homepage-hero__calendar-icon mb-1 ml-auto mr-auto d-none d-md-block" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><defs><style>.cls-1{fill:#ffcd00;}.cls-2{fill:#231f20;}</style></defs><title>calendar</title><polygon class="cls-1" points="44.52 9.9 44.52 9.88 6.48 9.88 6.48 9.9 2.97 9.9 2.97 15.74 49.53 15.74 49.53 9.9 44.52 9.9"/><rect class="cls-1" x="7.98" y="21.47" width="36.54" height="20.69"/><path class="cls-2" d="M48.53,7.41H41.37V5.89a2.33,2.33,0,0,0-4.65,0V7.41H13.21V5.89a2.33,2.33,0,0,0-4.65,0V7.41H1a.5.5,0,0,0-.5.5v38a.5.5,0,0,0,.5.5H48.53a.5.5,0,0,0,.5-.5v-38A.5.5,0,0,0,48.53,7.41ZM39.05,4.57a1.32,1.32,0,0,1,1.32,1.32V8.56a1.33,1.33,0,0,1-2.65,0V5.89A1.32,1.32,0,0,1,39.05,4.57Zm-28.16,0a1.32,1.32,0,0,1,1.32,1.32V8.56a1.33,1.33,0,0,1-2.65,0V5.89A1.33,1.33,0,0,1,10.89,4.57ZM8.56,8.41v.15a2.33,2.33,0,0,0,4.65,0V8.41H36.72v.15a2.33,2.33,0,0,0,4.65,0V8.41H48v5.83H1.47V8.41Zm-7.09,37V15.24H48V45.43Z"/><path class="cls-2" d="M43.52,19H6a.5.5,0,0,0-.5.5V41.16a.5.5,0,0,0,.5.5H43.52a.5.5,0,0,0,.5-.5V19.47A.5.5,0,0,0,43.52,19Zm-37,8.34H13v6H6.48Zm7.52,0h6.5v6H14Zm14-1H21.5V20H28ZM29,20h6.5v6.34H29Zm-1,7.34v6H21.5v-6Zm-7.5-1H14V20h6.5Zm0,8v6.34H14V34.32Zm1,0H28v6.34H21.5Zm7.5,0h6.5v6.34H29Zm0-1v-6h6.5v6Zm7.5-6H43v6H36.5Zm6.52-1H36.5V20H43ZM13,20v6.34H6.48V20ZM6.48,34.32H13v6.34H6.48Zm30,6.34V34.32H43v6.34Z"/></svg>Student Space</h1>
                <h2 class=" text-uppercase homepage-hero__subtitle pt-3">Reserve a personal space on campus</h2>
                <p class="mt-5 mb-5">
                    <a href="https://outlook.office.com/owa/?realm=uiowa.edu&path=/calendar" target="_blank" class="homepage-hero__office btn br-0 btn-primary btn-lg">Open Office 365 Calendar <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="homepage-hero__content pt-5">
                    $Content
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="spacesModal" tabindex="-1" role="dialog" aria-labelledby="spacesModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="spacesModalLabel">Available Spaces</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <% with $Page("spaces") %>
            $Content
        <% end_with %>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


