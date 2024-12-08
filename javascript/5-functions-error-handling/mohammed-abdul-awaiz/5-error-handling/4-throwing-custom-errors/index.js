document
  .getElementById("calculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    performCalculation();
  });

function calculate(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("invalid number input.");
  }

  const validOperators = ["+", "-", "*", "/"];
  if (!validOperators.includes(operator)) {
    throw new Error("unsupported operator. please use +, -, *, or /");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("division by zero is not allowed.");
      return num1 / num2;
    default:
      throw new Error("unexpected error occurred.");
  }
}

function performCalculation() {
  const num1Input = document.getElementById("num1").value.trim();
  const num2Input = document.getElementById("num2").value.trim();
  const operatorInput = document.getElementById("operator").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  try {
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    const result = calculate(num1, num2, operatorInput);

    resultDiv.textContent = `Result: ${result}`;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}
