function clearDisplay() {
  display.value = "";
}

function deleteLastChar() {
  display.value = display.value.toString().slice(0, -1);
}

function appendDot() {
  display.value += ".";
}

function appendOperator(operator) {
  display.value += operator;
}

function appendNumber(number) {
  display.value += number;
}

function calculateResult() {
  display.value = eval(display.value);
}
