'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COLOR_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COLOR_EYE = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

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

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [];

for (var j = 0; j < 5; j++) {
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


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var fireballColor = document.querySelector('.setup-fireball-wrap');
var coatColor = document.querySelector('.wizard-coat');
var eyesColor = document.querySelector('.wizard-eyes');
var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');

var getRandomFireballColor = function () {
  var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  return colors[getRandomInteger(0, 4)];
};

var getRandomEyesColor = function () {
  var colors = ['black', 'red', 'blue', 'yellow', 'green'];
  return colors[getRandomInteger(0, 4)];
};

var getRandomCoatColor = function () {
  var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return colors[getRandomInteger(0, 5)];
};

coatColor.addEventListener('click', function () {
  coatColor.style.fill = getRandomCoatColor();
  setupWizardAppearance.children[1].value = coatColor.style.fill;
});

eyesColor.addEventListener('click', function () {
  eyesColor.style.fill = getRandomEyesColor();
  setupWizardAppearance.children[2].value = eyesColor.style.fill;
});

fireballColor.addEventListener('click', function () {
  fireballColor.children[1].value = getRandomFireballColor();
  fireballColor.style.background = fireballColor.children[1].value;
});
