'use strict';
(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  window.setup = {
    getRandomInteger: function (min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  };

  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[window.setup.getRandomInteger(1, 16)]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }, function (onError) {
    var warning = document.createElement('div');
    warning.style = 'width: 150px;';
    var newContent = document.createTextNode(onError);
    warning.appendChild(newContent);
    var overlay = document.querySelector('.overlay');
    overlay.appendChild(warning);
  });

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {

    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, function (onError) {
      var warning = document.createElement('div');
      warning.style = 'width: 150px;';
      var newContent = document.createTextNode(onError);
      warning.appendChild(newContent);
      var overlay = document.querySelector('.overlay');
      overlay.appendChild(warning);
    });

    evt.preventDefault();
  });

})();
