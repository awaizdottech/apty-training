function padStringWithZeros(inputString) {
  return inputString.padStart(10, "0");
}

function displayPaddedString() {
  const inputString = document.getElementById("inputString").value;

  if (!inputString) {
    document.getElementById("result").innerText = "please enter a string.";
    return;
  }

  const paddedString = padStringWithZeros(inputString);
  document.getElementById(
    "result"
  ).innerText = `padded string: ${paddedString}`;
}
