document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  displaySortedArray();
});

// function expression
const sortArray = function (arr) {
  return arr.sort((a, b) => a - b);
};

function displaySortedArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");

  let array = arrayInput.split(",");
  array = array.map((num) => parseFloat(num.trim()));

  if (array.some(isNaN)) {
    resultDiv.innerHTML =
      "<p>please enter a valid list of numbers separated by commas</p>";
    return;
  }

  const sortedArray = sortArray(array);

  // Create a table to display the sorted array
  let tableHTML = `
      <table>
          <thead>
              <tr>
                  <th>Index</th>
                  <th>Value</th>
              </tr>
          </thead>
          <tbody>
  `;
  sortedArray.forEach((value, index) => {
    tableHTML += `
          <tr>
              <td>${index}</td>
              <td>${value}</td>
          </tr>
      `;
  });
  tableHTML += `
          </tbody>
      </table>
  `;

  resultDiv.innerHTML = tableHTML;
}
