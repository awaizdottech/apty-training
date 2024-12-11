function displayReplacedString() {
  const inputString = document.getElementById("inputString").value;
  const result = inputString.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
  document.getElementById("result").innerText = `replaced string: ${result}`;
}
