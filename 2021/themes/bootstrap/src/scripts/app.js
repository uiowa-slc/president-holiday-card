if ($(".masonry-grid").length) {
    $('.masonry-grid').isotope({
        "percentPosition": true,
        "layoutMode": "masonry",
        "itemSelector": ".masonry-grid-item",
        "getSortData": {
            "name": ".name",
            "category": "[data-category]"
        },
        "masonry": {
            "gutter": 20
        }
    });
}

document.addEventListener('lazyloaded', function(e) {
    if (e.target.id == "home-card") {
        var timer = setTimeout(function() {
            document.getElementById('flip-container').swapClasses('fronted,backed');
        }, 5000);
        var progress = document.getElementById('progress');
        var front = document.getElementById('front');
        var back = document.getElementById('back');
        var progressContainer = document.getElementById('progress-container');
        progress.style.width = '100%';

        front.classList.add('loaded');
        back.classList.add('loaded');

        HTMLElement.prototype.swapClasses = function(dosclasses) {
            progressContainer.style.display = 'none';
            clearTimeout(timer);
            var clases = dosclasses.split(/\s*\,\s*/);
            var entra = clases[0];
            var sale = clases[1];
            if (this.classList.contains(sale)) {
                this.classList.remove(sale);
                this.classList.add(entra);
            } else {
                this.classList.remove(entra);
                this.classList.add(sale);
            }
            return this;
        };
        matchFrontBackHeights();
    }


});

function matchFrontBackHeights(){
    if (window.innerWidth > 992) {
        $frontWidthResize = $('.flipper .back').outerWidth();
        $frontHeightResize = $('.flipper .back').outerHeight();
        $('.flip-container').css('height', $frontWidthResize + 'px');
        $('.flip-container').css('height', $frontHeightResize + 'px');

    } else {
        $('.flip-container').css('height', '');
        $('.flip-container').css('height', '');
    }
}

//resize grid when images are loaded
$(document).on('lazyloaded', function(e) {
    if ($(".masonry-grid").length) {
        $('.masonry-grid').isotope('layout');
    }
});

$(document).ready(function() {
    matchFrontBackHeights();
});

$(window).resize(function() {
    matchFrontBackHeights();
});