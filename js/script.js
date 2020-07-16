window.addEventListener('load', start);

var txtRed = null;
var txtGreen = null;
var txtBlue = null;

function start() {
  preventFormSubmit();

  // obter os objetos e criar os eventlisteners dos input:ranges

  var rangeR = document.querySelector('#rngRed');
  rangeR.addEventListener('change', changeRedRange);

  var rangeG = document.querySelector('#rngGreen');
  rangeG.addEventListener('change', changeGreenRange);

  var rangeB = document.querySelector('#rngBlue');
  rangeB.addEventListener('change', changeBlueRange);

  txtRed = document.querySelector('#txtRed');
  txtGreen = document.querySelector('#txtGreen');
  txtBlue = document.querySelector('#txtBlue');
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

// Retorna o elemento referente ao div que exibirá a cor RGB
function getRgbSquare() {
  var rgbSquare = document.querySelector('#rgbSquare');
  return rgbSquare;
}

function getRedValue() {
  return txtRed.value;
}

function getGreenValue() {
  return txtGreen.value;
}

function getBlueValue() {
  return txtBlue.value;
}

function changeRedRange(event) {
  txtRed.value = event.target.value;
  changeBGColor();
}

function changeGreenRange(event) {
  txtGreen.value = event.target.value;
  changeBGColor();
}

function changeBlueRange(event) {
  txtBlue.value = event.target.value;
  changeBGColor();
}

function changeBGColor() {
  var redValue = getRedValue();
  var greenValue = getGreenValue();
  var blueValue = getBlueValue();

  var rgbString = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
  // console.log(redValue + ' ' + greenValue + ' ' + blueValue + ' ' + rgbString);
  var rgbSquare = getRgbSquare();
  rgbSquare.style.backgroundColor = rgbString;
}
