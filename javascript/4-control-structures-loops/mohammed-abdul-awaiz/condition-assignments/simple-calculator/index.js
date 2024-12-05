function calculate(operator) {
  let value1 = Number(document.getElementById("number1").value);
  let value2 = Number(document.getElementById("number2").value);
  let result;

  switch (operator) {
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
  document.querySelector("p").innerHTML = result;
}
