'use strict';

(function () {
  var accordionElements = document.querySelectorAll('.accordion');

  Array.prototype.forEach.call(accordionElements, function (accordion) {
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
