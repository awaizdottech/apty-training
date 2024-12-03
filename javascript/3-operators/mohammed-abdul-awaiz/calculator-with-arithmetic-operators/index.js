function calculate() {
  let value1 = document.getElementById("number1").value;
  let value2 = document.getElementById("number2").value;
  const operation = document.getElementById("operator").value;
  let result;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    case "%":
      result = value1 % value2;
      break;
    case "++":
      result = `${++value1}, ${++value2}`;
      break;
    case "--":
      result = `${--value1}, ${--value2}`;
      break;
    default:
      result = value1 + value2;
      break;
  }

  if (result == NaN) result = "not possible";
  document.querySelector("p").innerHTML += result;
}
