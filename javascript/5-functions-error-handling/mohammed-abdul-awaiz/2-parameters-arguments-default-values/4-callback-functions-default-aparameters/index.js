document
  .getElementById("callbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    processInput();
  });

function handleInput(input, callback) {
  const processedInput = callback(input || "hello apty");
  return processedInput;
}

function toUpperCase(input) {
  console.log(input);

  return input.toUpperCase();
}

function processInput() {
  const userInput = document.getElementById("userInput").value;
  const resultDiv = document.getElementById("result");

  const result = handleInput(userInput, toUpperCase);

  resultDiv.textContent = `processed text: ${result}`;
}
