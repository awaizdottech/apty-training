function chunkArray(arr, size) {
  if (!Array.isArray(arr)) {
    return { error: "Input must be an array." };
  }
  if (typeof size !== "number" || size <= 0) {
    return { error: "chunk size must be a positive number." };
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return { chunks: result };
}

function displayChunks() {
  const inputArray = document.getElementById("inputArray").value;
  const chunkSize = parseInt(document.getElementById("chunkSize").value, 10);

  try {
    const array = JSON.parse(inputArray);

    if (!Array.isArray(array)) {
      throw new Error("Input must be a valid array.");
    }

    const { chunks, error } = chunkArray(array, chunkSize);

    if (error) {
      throw new Error(error);
    }

    document.getElementById("output").innerText = `Chunks: ${JSON.stringify(
      chunks
    )}`;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
}
