document
  .getElementById("nestedForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generateString();
  });

function outerFunction(outerVar = "outer") {
  return function middleFunction(middleVar = "middle") {
    return function innerFunction(innerVar = "inner") {
      return `${outerVar} -> ${middleVar} -> ${innerVar}`;
    };
  };
}

function generateString() {
  const outerInput = document.getElementById("var1").value || undefined;
  const middleInput = document.getElementById("var2").value || undefined;
  const innerInput = document.getElementById("var3").value || undefined;

  // const result = outerFunction(outerInput)(middleInput)(innerInput); possible
  const result = outerFunction(outerInput);
  const result1 = result(middleInput);
  const result2 = result1(innerInput);

  document.getElementById(
    "result"
  ).textContent = `generated string: ${result2}`;
}
