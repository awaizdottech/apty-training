function wordLengths(inputString) {
  const lengths = inputString
    .trim()
    .split(" ")
    .map((word) => word.length);
  return lengths.join(" ");
}

function calculateWordLengths() {
  const inputString = document.getElementById("inputString").value;
  const result = wordLengths(inputString);
  document.getElementById("result").innerText = `word lengths: ${result}`;
}
