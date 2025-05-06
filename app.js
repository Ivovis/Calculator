console.log("I'm here!");

// build string during
function appendValue(value) {
  document.getElementById("output").value += value;
}

function clearOutput() {
  document.getElementById("output").value = "0";
}

function executeResult() {
  inputStr = document.getElementById("output").value;

  result = "to be done!";

  document.getElementById("output").value = result;
}
