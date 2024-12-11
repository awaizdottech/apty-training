function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

function displayResult() {
  const inputObj = document.getElementById("inputObject").value;

  try {
    const obj = JSON.parse(inputObj);
    const clone = deepClone(obj);

    clone.b.c = 3;

    document.getElementById("output").innerHTML = `
<strong>original object:</strong> ${JSON.stringify(obj)}<br>
<strong>cloned object with modification:</strong> ${JSON.stringify(clone)}<br>
<strong>original after modification:</strong> ${JSON.stringify(obj)}<br>
                `;
  } catch (error) {
    document.getElementById(
      "output"
    ).innerText = `error: invalid input. please enter a valid object.`;
  }
}
