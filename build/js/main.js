'use strict';

(function () {
  var accordionElements = document.querySelectorAll('.accordion');

  accordionElements.forEach(function (accordion) {
    var accordionButton = accordion.querySelector('.accordion__button');

    accordion.classList.add('accordion_closed');
    accordionButton.addEventListener('click', function () {
      onAccordionButtonClick(accordion);
    });
  });

  var onAccordionButtonClick = function (accordion) {
    accordion.classList.toggle('accordion_closed');
    accordion.classList.toggle('accordion_opened');
  };
})();

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
