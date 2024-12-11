function getFirstAndLastCharacters(inputString) {
  if (inputString.length === 0) {
    return null;
  }
  const firstChar = inputString[0];
  const lastChar = inputString[inputString.length - 1];
  return `${firstChar} ${lastChar}`;
}

function displayFirstAndLast() {
  const inputString = document.getElementById("inputString").value;
  const result = getFirstAndLastCharacters(inputString);
  document.getElementById("result").innerText =
    result === null
      ? "Result: null (string is empty)"
      : `First and Last Characters: ${result}`;
}
