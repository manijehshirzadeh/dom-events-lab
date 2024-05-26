const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.innerText;
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    if (value >= "0" && value <= "9") {
      handleNumber(value);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      handleOperator(value);
    } else if (value === "=") {
      handleEquals();
    } else if (value === "C") {
      handleClear();
    }
  });
});
function handleNumber(number) {
  if (operator === "") {
    firstOperand += number;
    display.innerText = firstOperand;
  } else {
    secondOperand += number;
    display.innerText = secondOperand;
  }
}

function handleOperator(op) {
  if (firstOperand === "") return;
  operator = op;
  display.innerText = operator;
}

function handleEquals() {
  if (firstOperand === "" || operator === "" || secondOperand === "") return;

  let result;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.innerText = result;
  resetCalculator();
}

function handleClear() {
  resetCalculator();
  display.innerText = "";
}

function resetCalculator() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
}
