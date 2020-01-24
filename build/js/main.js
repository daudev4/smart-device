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

/*eslint-disable*/

'use strict';

(function () {
  var maskedInputs = document.querySelectorAll('input[data-mask]');

  var setMask = function (input) {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('data-mask')
      };
      IMask(input, maskOption);
    });
  }

  setMask();
})();

'use strict';

(function () {
  var KEYCODE_ESC = 27;

  var modal = document.querySelector('.modal');
  var modalForm = modal.querySelector('.modal__form');
  var modalName = modal.querySelector('#modal-name');
  var modalPhone = modal.querySelector('#modal-phone');
  var modalMessage = modal.querySelector('#modal-question');
  var modalOpenButton = document.querySelector('.page-header__callback-button');
  var modalCloseButton = modal.querySelector('.modal__close');

  var isStorageSupport = true;
  var dataStorage = {};


  var openModal = function () {
    document.body.classList.toggle('no-scroll');
    modal.classList.toggle('modal_show');
    modal.addEventListener('click', onModalClick);
    modalCloseButton.addEventListener('click', onModalCloseButtonClick);
    modalForm.addEventListener('submit', onModalFormSubmit);
    document.addEventListener('keydown', onModalEscPress);
  };

  var closeModal = function () {
    document.body.classList.toggle('no-scroll');
    modal.classList.toggle('modal_show');
    modal.removeEventListener('click', onModalClick);
    modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
    modalForm.removeEventListener('submit', onModalFormSubmit);
    document.removeEventListener('keydown', onModalEscPress);
  };

  var onModalClick = function (evt) {
    if (evt.target === modal) {
      closeModal();
    }
  };

  var onModalCloseButtonClick = function (evt) {
    evt.preventDefault();
    closeModal();
  };

  var onModalEscPress = function (evt) {
    if (evt.keyCode === KEYCODE_ESC) {
      evt.preventDefault();
      closeModal();
    }
  };

  var onModalFormSubmit = function () {
    if (isStorageSupport) {
      localStorage.setItem('name', modalName.value);
      localStorage.setItem('phone', modalPhone.value);
      localStorage.setItem('message', modalMessage.value);
    }
  };

  try {
    dataStorage.name = localStorage.getItem('name');
    dataStorage.phone = localStorage.getItem('phone');
    dataStorage.message = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  modalOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();

    if (dataStorage.name) {
      modalName.value = dataStorage.name;
      modalPhone.value = dataStorage.phone;
      modalMessage.value = dataStorage.message;
      modalMessage.focus();
    } else {
      modalName.focus();
    }
  });

})();
