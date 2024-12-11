function transposeMatrix(matrix) {
  if (!Array.isArray(matrix) || !matrix.every((row) => Array.isArray(row))) {
    return { error: "Input must be a 2D array." };
  }

  const transposed = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );

  return { transposed };
}

function displayTransposedMatrix() {
  const inputMatrix = document.getElementById("inputMatrix").value;

  try {
    const matrix = JSON.parse(inputMatrix);

    if (!Array.isArray(matrix) || !matrix.every((row) => Array.isArray(row))) {
      throw new Error("Input must be a valid 2D array.");
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
