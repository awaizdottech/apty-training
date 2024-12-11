function sortCharactersAlphabetically(inputString) {
  return inputString.split("").sort().join("");
}

function displaySortedString() {
  const inputString = document.getElementById("inputString").value;
  const result = sortCharactersAlphabetically(inputString);
  document.getElementById("result").innerText = `sorted string: ${result}`;
}
