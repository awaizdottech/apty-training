function calculate(operator) {
  let result = Number(document.getElementById("number1").value);
  let value = Number(document.getElementById("number2").value);

  switch (operator) {
    case "+":
      result += value;
      break;
    case "-":
      result -= value;
      break;
    case "*":
      result *= value;
      break;
    case "/":
      result /= value;
      break;
    case "%":
      result %= value;
      break;
    case "++":
      result = `${++result}, ${++value}`;
      break;
    case "--":
      result = `${--result}, ${--value}`;
      break;
    default:
      result += value;
      break;
  }

  if (result == NaN) result = "not possible";
  document.querySelector("p").innerHTML = result;
}
