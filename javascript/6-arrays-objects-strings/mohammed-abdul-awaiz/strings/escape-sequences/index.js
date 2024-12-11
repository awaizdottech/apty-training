function displayReplacedString() {
  const inputString = document.getElementById("inputString").value;
  const result = inputString.replace(/\n/g, "\\\\n").replace(/\t/g, "\\\\t");
  document.getElementById("result").innerText = `replaced string: ${result}`;
}

document
  .getElementById("inputString")
  .addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = this;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      textarea.value =
        textarea.value.substring(0, start) +
        "\t" +
        textarea.value.substring(end);

      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  });
