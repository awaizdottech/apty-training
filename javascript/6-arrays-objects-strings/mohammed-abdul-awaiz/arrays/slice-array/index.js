function extractNames(names) {
  if (!Array.isArray(names) || names.length === 0) {
    return { error: "Please provide a valid array of names." };
  }

  const firstThree = names.slice(0, 3);
  const lastTwo = names.slice(-2);
  console.log(firstThree, lastTwo);

  return { firstThree, lastTwo };
}

function displayExtraction() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const names = JSON.parse(inputArray);

    if (
      !Array.isArray(names) ||
      !names.every((name) => typeof name === "string")
    ) {
      throw new Error("Input must be an array of strings.");
    }

    const { firstThree, lastTwo, error } = extractNames(names);

    if (error) {
      throw new Error(error);
    }

    document.getElementById("output").innerHTML = `
          First Three Names: ${JSON.stringify(firstThree)}<br>
          Last Two Names: ${JSON.stringify(lastTwo)}
      `;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
}
