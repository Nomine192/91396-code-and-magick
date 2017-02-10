'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.overlay');
var setupClose = document.querySelector('.setup-close');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardYeys = wizard.querySelector('#wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupUserName = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var wizardRobeColor = [
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

setupOpen.addEventListener('click', function () {
  setupOverlay.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setupOverlay.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardRobeColor.length);
  wizardCoat.style.fill = wizardRobeColor[colorNumber];
});


wizardYeys.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardEyesColor.length);
  wizardYeys.style.fill = wizardRobeColor[colorNumber];
});

setupFireballWrap.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * fireballColor.length);
  setupFireballWrap.style.background = wizardRobeColor[colorNumber];
});

setupUserName.required = true;
setupUserName.maxLength = 50;

// ARIA

var isActivate = function (e) {
  return e.keyCode && e.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (e) {
  if (e.keyCode === ESCAPE_KEY_CODE) {
    setupOverlay.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetupElement = function () {
  setupOverlay.classList.add('invisible');
};

setupOpen.addEventListener('click', function () {
  showSetupElement();
});

setupOpen.addEventListener('keydown', function (e) {
  if (isActivate(e)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', function () {
  hideSetupElement();
});

setupClose.addEventListener('keydown', function (e) {
  if (isActivate(e)) {
    hideSetupElement();
  }
});

setupSubmit.addEventListener('click', function () {
  hideSetupElement();
});

setupSubmit.addEventListener('keydown', function (e) {
  if (isActivate(e)) {
    hideSetupElement();
  }
});
