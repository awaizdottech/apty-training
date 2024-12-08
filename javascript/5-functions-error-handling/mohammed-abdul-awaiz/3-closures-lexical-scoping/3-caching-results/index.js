document
  .getElementById("factorialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    calculateFactorial();
  });

function memoizedFactorial() {
  const cache = {};

  return function factorial(n) {
    if (n in cache) {
      console.log(`Fetching from cache: ${n}! = ${cache[n]}`);
      return cache[n];
    }
    if (n === 0 || n === 1) {
      cache[n] = 1;
    } else {
      cache[n] = n * factorial(n - 1);
    }
    console.log(`Calculating: ${n}! = ${cache[n]}`);

    return cache[n];
  };
}

const factorial = memoizedFactorial();

function calculateFactorial() {
  const numberInput = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  if (numberInput === "" || isNaN(numberInput) || numberInput < 0) {
    resultDiv.textContent = "please enter a valid positive number";
    return;
  }

  const number = parseInt(numberInput, 10);
  const result = factorial(number);

  resultDiv.textContent = `${number}! = ${result}`;
}
