function operate(operator) {
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  let result;

  switch (operator) {
    case "and":
      result = value1 & value2;
      break;
    case "or":
      result = value1 | value2;
      break;
    case "xor":
      result = value1 ^ value2;
      break;
    case "not":
      result = `${~value1} ,${~value2}`;
      break;
    case "left-shift":
      result = value1 << value2;
      break;
    case "right-shift":
      result = value1 >> value2;
      break;
    default:
      break;
  }

  document.getElementById("result").innerHTML = result;
}
