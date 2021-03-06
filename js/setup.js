'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COLOR_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COLOR_EYE = ['black', 'red', 'blue', 'yellow', 'green'];

var renderName = function () {
  return WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
};

var renderSurName = function () {
  return WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};

var renderCoatColor = function () {
  return WIZARD_COLOR_COATS[Math.floor(Math.random() * WIZARD_COLOR_COATS.length)];
};

var renderEyeColor = function () {
  return WIZARD_COLOR_EYE[Math.floor(Math.random() * WIZARD_COLOR_EYE.length)];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [];

for (var i = 0; i < 5; i++) {
  wizards.push({
    name: renderName() + renderSurName(),
    coatColor: renderCoatColor(),
    eyesColor: renderEyeColor()
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
