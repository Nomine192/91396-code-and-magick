'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardYeys = wizard.querySelector('#wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupUserName = document.querySelector('.setup-user-name');


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

var menuOpen = function () {
  setupOpen.addEventListener('click', function () {
    setup.classList.remove('invisible');
  });
};

var menuClose = function () {
  setupClose.addEventListener('click', function () {
    setup.classList.add('invisible');
  });
};

var robaCheck = function () {
  wizardCoat.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * wizardRobeColor.length);
    wizardCoat.style.fill = wizardRobeColor[colorNumber];
  });
};

var yeysCheck = function () {
  wizardYeys.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * wizardEyesColor.length);
    wizardYeys.style.fill = wizardRobeColor[colorNumber];
  });
};

var fireballCheck = function () {
  setupFireballWrap.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * fireballColor.length);
    setupFireballWrap.style.background = wizardRobeColor[colorNumber];
  });
};

setupUserName.required = true;
setupUserName.maxLength = 50;


menuOpen();
menuClose();
robaCheck();
yeysCheck();
fireballCheck();
