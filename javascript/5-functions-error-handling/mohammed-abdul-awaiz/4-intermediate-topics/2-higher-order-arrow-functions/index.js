document
  .getElementById("filterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    filterNumbers();
  });

function filterArray(array, callback) {
  return array.filter(callback);
}

function filterNumbers() {
  const numberArrayInput = document.getElementById("numberArray").value;
  const limitInput = document.getElementById("limit").value;
  const resultDiv = document.getElementById("result");

  if (!numberArrayInput.trim() || isNaN(limitInput)) {
    resultDiv.textContent = "Please enter valid numbers and a limit.";
    return;
  }

  let numberArray = numberArrayInput.split(",");
  numberArray.map((num) => parseFloat(num.trim()));
  const limit = parseFloat(limitInput);

  const filteredArray = filterArray(numberArray, (num) => num <= limit);

  resultDiv.textContent = `Filtered Array: [${filteredArray.join(", ")}]`;
}
