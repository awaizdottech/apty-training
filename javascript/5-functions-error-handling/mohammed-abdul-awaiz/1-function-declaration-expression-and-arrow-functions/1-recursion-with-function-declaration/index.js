document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const number = Number(document.getElementById("number").value);
  const result_p = document.getElementById("result");
  console.log(fibonacci(number));

  if (isNaN(number) || number < 0) {
    result_p.innerHTML = "please enter a valid non-negative number";
    return;
  }

  const fibonacciSeries = [];
  for (let i = 0; i <= number; i++) {
    fibonacciSeries.push(fibonacci(i));
  }

  result_p.innerHTML = `fibonacci series up to ${number}: ${fibonacciSeries.join(
    ", "
  )}`;
});

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
