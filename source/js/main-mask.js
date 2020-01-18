/*eslint-disable*/

'use strict';

(function () {
  var maskedInputs = document.querySelectorAll('input[mask-pattern]');

  var setMask = function (input) {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('mask-pattern')
      };
      IMask(input, maskOption);
    });
  }

  setMask();
})();