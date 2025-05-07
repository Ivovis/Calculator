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

  // if we get to here we have other key (this will be expanded later)

  switch (value) {
    case "/":
      console.log("we got /");
      break;
    case "*":
      console.log("we got *");
      break;
    case "-":
      console.log("we got -");
      break;
    case "+":
      console.log("we got +");
      break;
    default:
      console.log("we got an unexpected ", value, " it was unhandled");
      break;
  }
}

function clearOutput() {
  document.getElementById("output").value = "0";
}

function executeResult() {
  inputStr = document.getElementById("output").value;

  result = "to be done!";

  document.getElementById("output").value = result;
}
