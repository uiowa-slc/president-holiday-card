<div class="card-body">
    <div class="container-xl">

        <div class="row pt-3 justify-content-center">
            <div class="<% if $Image.Orientation == 1 %>col-lg-6<% else %>col-lg-8<% end_if %>">

                    <img src="$Image.URL" alt="$AltText.ATT" class="card-single-img d-block w-100 card-shadow" <% if $Image.Orientation == 1 %> src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACMCAMAAAC9K/yJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCRTlCMzUzNTYwRDExRUM5REUyRTI3REVEQTc4RjEwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCRTlCMzUyNTYwRDExRUM5REUyRTI3REVEQTc4RjEwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIyIE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJDMDNEMjQ0OTZGMDA1MDEzQUVGNEVENjYxNjRGREZBQiIgc3RSZWY6ZG9jdW1lbnRJRD0iQzAzRDI0NDk2RjAwNTAxM0FFRjRFRDY2MTY0RkRGQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hre+LAAAABlBMVEXt5tkAAADzdXX/AAAAJ0lEQVR42uzBAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAB8mQADADc8AAHRvVhmAAAAAElFTkSuQmCC"<% else %> src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABHCAMAAADGBBL+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCRTlCMzRGNTYwRDExRUM5REUyRTI3REVEQTc4RjEwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCRTlCMzRFNTYwRDExRUM5REUyRTI3REVEQTc4RjEwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDIyIE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJEQ0FGNDgwOEE2NzFGQTM4MkE2RUY1Q0NEOTU1NzFDMCIgc3RSZWY6ZG9jdW1lbnRJRD0iRENBRjQ4MDhBNjcxRkEzODJBNkVGNUNDRDk1NTcxQzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HwERjAAAABlBMVEXt5tkAAADzdXX/AAAAIElEQVR42uzBAQ0AAADCoPdPbQ8HFAAAAAAAAHBkAgwAHAMAAS2i3fEAAAAASUVORK5CYII="<% end_if %> />
            <div class="card-share my-3">
            <p class="text-center">Share:
                <a class="btn btn-primary social-media-btn" href="https://www.facebook.com/sharer/sharer.php?u={$AbsoluteLink}"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-primary social-media-btn" href="https://twitter.com/intent/tweet?url={$AbsoluteLink}"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-primary social-media-btn" href="{$Image.URL}"><i class="fas fa-download"></i> Download image</a>
            </p>
            </div>
            <p class="text-center"><i class="fas fa-link"></i> <a href="{$AbsoluteLink}" target="_blank" rel="noopener">{$AbsoluteLink}</a> </p>

            </div>

        </div>

    </div>
</div>
<div class="bg-white">
<div class="container-xl">

        <% include CardGallery %>

        <% include Footer %>

    </div>
</div>
</div>
<% loop $Cards %>
    <% include CardModal %>
<% end_loop %>
