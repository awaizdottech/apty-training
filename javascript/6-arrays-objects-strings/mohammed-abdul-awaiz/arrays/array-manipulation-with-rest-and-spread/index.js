function combineArrays(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  return [...new Set(combined)];
}

function displayCombinedArrays() {
  const inputArray1 = document.getElementById("inputArray1").value;
  const inputArray2 = document.getElementById("inputArray2").value;

  try {
    const arr1 = JSON.parse(inputArray1);
    const arr2 = JSON.parse(inputArray2);

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error("both inputs must be valid arrays.");
    }

    const result = combineArrays(arr1, arr2);

    document.getElementById(
      "output"
    ).innerText = `combined array: [${result.join(", ")}]`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
