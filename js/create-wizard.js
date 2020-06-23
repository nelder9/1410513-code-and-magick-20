'use strict';
(function () {
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var coatColor = document.querySelector('.wizard-coat');
  var eyesColor = document.querySelector('.wizard-eyes');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');

  var getRandomFireballColor = function () {
    var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    return colors[window.setup.getRandomInteger(0, 4)];
  };

  var getRandomEyesColor = function () {
    var colors = ['black', 'red', 'blue', 'yellow', 'green'];
    return colors[window.setup.getRandomInteger(0, 4)];
  };

  var getRandomCoatColor = function () {
    var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    return colors[window.setup.getRandomInteger(0, 5)];
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
})();
