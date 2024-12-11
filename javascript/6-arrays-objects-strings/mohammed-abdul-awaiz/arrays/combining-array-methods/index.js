function processArray(numbers) {
  const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((sum, num) => sum + num, 0);

  return result;
}

function displayResult() {
  const inputNumbers = document.getElementById("inputArray").value;

  try {
    const numbers = JSON.parse(inputNumbers);

    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
      throw new Error("please enter a valid array of numbers.");
    }

    const result = processArray(numbers);

    document.getElementById(
      "output"
    ).innerText = `result:(even numbers summed & multiplied by 2) ${result}`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
