function displayUnicodeValues() {
  const inputString = document.getElementById("inputString").value;

  if (!inputString) {
    document.getElementById("result").innerText = "please enter a string.";
    return;
  }

  const unicodeValues = inputString.split("").map((char) => char.charCodeAt(0));
  document.getElementById(
    "result"
  ).innerText = `unicode values: ${JSON.stringify(unicodeValues)}`;
}
