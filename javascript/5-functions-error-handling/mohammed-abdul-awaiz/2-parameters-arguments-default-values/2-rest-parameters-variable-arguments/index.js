document.getElementById("sumForm").addEventListener("submit", function (event) {
  event.preventDefault();
  calculateSum();
});

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function calculateSum() {
  const numbersInput = document.getElementById("numbers").value;
  const resultDiv = document.getElementById("result");

  const numberArray = numbersInput
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));

  if (numberArray.length === 0) {
    resultDiv.textContent = "please enter a valid list of numbers.";
    return;
  }

  const totalSum = sum(...numberArray);

  resultDiv.textContent = `the sum of the numbers is: ${totalSum}`;
}
