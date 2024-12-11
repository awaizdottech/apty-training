function transposeMatrix(matrix) {
  const transposed = [];
  for (const _ of matrix) transposed.push([]);

  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) transposed[j][i] = matrix[i][j];

  return { transposed };
}

function displayTransposedMatrix() {
  const inputMatrix = document.getElementById("inputMatrix").value;

  try {
    const matrix = JSON.parse(inputMatrix);

    if (!Array.isArray(matrix) || !matrix.every((row) => Array.isArray(row))) {
      throw new Error("input must be a valid 2D array.");
    }

    const { transposed, error } = transposeMatrix(matrix);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `Transposed Matrix: ${JSON.stringify(transposed)}`;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
}
