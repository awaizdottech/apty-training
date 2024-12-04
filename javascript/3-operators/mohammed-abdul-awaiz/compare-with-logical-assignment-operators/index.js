document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior (no page refresh)
  event.preventDefault();
  compare();
});

function compare() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let type1 = document.getElementById("type1").value;
  let type2 = document.getElementById("type2").value;
  let operation = document.getElementById("operator").value;
  let converted_value1;
  const answer_p = document.getElementById("answer");

  try {
    converted_value1 = convertor(value1, type1);
    let converted_value2 = convertor(value2, type2);
    switch (operation) {
      case "&&":
        converted_value1 &&= converted_value2;
        break;
      case "||":
        converted_value1 ||= converted_value2;
        break;
      case "??":
        converted_value1 ??= converted_value2;
        break;
      default:
        converted_value1 = "unidentified operation";
        break;
    }
  } catch (error) {
    answer_p.innerHTML = `The following error occured ${error}`;
    return;
  }
  if (typeof converted_value1 == "symbol")
    converted_value1 = String(converted_value1);
  answer_p.innerHTML = converted_value1;
}

function convertor(raw, type) {
  let converted;

  try {
    switch (type) {
      case "string":
        converted = String(raw);
        break;
      case "number":
        converted = Number(raw);
        break;
      case "boolean":
        converted = Boolean(raw);
        break;
      case "symbol":
        converted = Symbol(raw);
        break;
      case "bigint":
        converted = BigInt(raw);
      case "object":
        converted = Object(raw);
        break;
      default:
        converted = Error("unidentfied type conversion");
        break;
    }
  } catch (error) {
    return error;
  }

  return converted;
}
