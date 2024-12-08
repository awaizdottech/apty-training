document
  .getElementById("areaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    calculateRectangleArea();
  });

function rectangleArea(length = 5, width = 3) {
  return length * width;
}

function calculateRectangleArea() {
  const lengthInput = document.getElementById("length").value;
  const widthInput = document.getElementById("width").value;

  const length = lengthInput ? parseFloat(lengthInput) : undefined;
  const width = widthInput ? parseFloat(widthInput) : undefined;

  const area = rectangleArea(length, width);

  document.getElementById(
    "result"
  ).textContent = `the area of the rectangle is: ${area}`;
}
