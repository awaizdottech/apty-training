document
  .getElementById("rectangleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    calculateRectangleProperties();
  });

function calculateRectangle(length = 5, width = 3) {
  const perimeter = 2 * (length + width);

  function area() {
    return length * width;
  }

  return {
    perimeter: perimeter,
    area: area(),
  };
}

function calculateRectangleProperties() {
  const lengthInput = document.getElementById("length").value;
  const widthInput = document.getElementById("width").value;

  const length = lengthInput ? parseFloat(lengthInput) : undefined;
  const width = widthInput ? parseFloat(widthInput) : undefined;

  const { perimeter, area } = calculateRectangle(length, width);

  document.getElementById("result").innerHTML = `
      <p>perimeter of the rectangle: ${perimeter}</p>
      <p>area of the rectangle: ${area}</p>
  `;
}
