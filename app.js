// Globals

// operation flag values; (until I find out about JS enums or equivalent)
//  0 none selected
//  1 addition
//  2 subtraction
//  3 multiplication
//  4 division
let operationFlag = 0;

// button state colors
const buttonNormal = "#000088";
const buttonHover = "#008800";
const buttonBorderNormal = "#444444";
const buttonBorderActive = "#009900";

// build output string during button presses
function appendValue(value) {
  // if value is a number 0 to 9
  //    if the display only holds '0'
  //        and the value is '0'
  //            do nothing -> exit
  //        or the value is '.'
  //            update the display with '0.' -> exit
  //     (its any non zero number)
  //     replace the display value with the number
  //  exit
  // if we get to here we have theres a problem
}

function selectAddition() {
  // if we are the active state clear the state and border colors

  clearBorders();
  document.getElementById("butAdd").style.borderColor = buttonBorderActive;
  operationFlag = 1;
}

function selectSubtraction() {
  // clear the border color of all the other buttons

  clearBorders();
  document.getElementById("butSub").style.borderColor = buttonBorderActive;
  operationFlag = 2;
}

function selectMultiplication() {
  // if we are the active state clear the state and exit

  clearBorders();
  document.getElementById("butMul").style.borderColor = buttonBorderActive;
  operationFlag = 3;
}

function selectDivision() {
  // if we are the active state clear the state and border colors

  clearBorders();
  document.getElementById("butDiv").style.borderColor = buttonBorderActive;
  operationFlag = 4;
}

function clearBorders() {
  // set all the borders to default colors
  document.getElementById("butDiv").style.borderColor = buttonBorderNormal;
  document.getElementById("butMul").style.borderColor = buttonBorderNormal;
  document.getElementById("butAdd").style.borderColor = buttonBorderNormal;
  document.getElementById("butSub").style.borderColor = buttonBorderNormal;
}

function clearOutput() {
  // clear the border color of the buttons
  clearBorders();
  // clear the operation flag
  document.getElementById("output").value = "0";
}

function executeResult() {
  inputStr = document.getElementById("output").value;

  result = "to be done!";

  document.getElementById("output").value = result;
}

// what was I thinking!
