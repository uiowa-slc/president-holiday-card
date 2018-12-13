(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/dots":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvZG90cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7OztBQUVBLENBQUUsVUFBQyxDQUFELEVBQU87QUFDUDs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTixtQkFBRyxVQUFIO0FBQ0QsR0FGRDtBQUlELENBUkQsRUFRRyxNQVJILEUsQ0FQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsYUFEWjs7QUFHQSxTQUFLLElBQUwsQ0FBVSxLQUFWOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBckJNLENBQVQ7O2tCQXdCZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCBERSBmcm9tICcuL21vZHVsZXMvZG90cyc7XG5cbiggKCQpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICQoKCkgPT4ge1xuICAgIERFLmRvdHNFZmZlY3QoKTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbnZhciBERSA9IHtcbiAgZG90c0VmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRjbnQgID0gJCgnI2hvbWUtY2FudmFzJyksXG4gICAgICAgIGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICAgICRjbnQuaHRtbChjZWxscyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICAgIHZhciB3aWR0aCAgPSAxMCxcbiAgICAgICAgICBoZWlnaHQgPSAxMCxcbiAgICAgICAgICBzaXplICAgPSB3aWR0aCAqIGhlaWdodCxcbiAgICAgICAgICBodG1sICAgPSAnPGRpdiBjbGFzcz1cImVudHJ5LWNlbGxzXCI+JztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNlbGwgY2VsbC0nICsgaSArICdcIj48L2Rpdj4nO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8L2Rpdj4nO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFOyJdfQ==
