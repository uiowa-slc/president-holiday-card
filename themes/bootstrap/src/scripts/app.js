    HTMLElement.prototype.swapClasses = function (dosclasses) {
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


$(document).ready(function () {
  $('.modal').each(function () {
    var modalId = "#".concat($(this).attr('id'));

    if (window.location.href.indexOf(modalId) !== -1) {
      $(modalId).modal('show');
    }

    $("#".concat($(this).attr('id'))).on('hide.bs.modal', function () {
      history.replaceState(null, null, ' ');
    });
  });
  $('.card-link').click(function () {
    // Clear the hash in the URL
    location.hash = $(this).attr('href');
  });
});
