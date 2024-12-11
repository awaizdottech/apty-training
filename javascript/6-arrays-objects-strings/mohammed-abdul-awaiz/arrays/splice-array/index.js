function modifyColors(colors = ["Red", "Blue", "Green", "Yellow"]) {
  if (!Array.isArray(colors) || colors.length === 0) {
    return { error: "please provide a valid array of colors." };
  }

  const blueIndex = colors.indexOf("Blue");
  if (blueIndex !== -1) {
    colors.splice(blueIndex, 1, "Purple");
  }

  const yellowIndex = colors.indexOf("Yellow");
  if (yellowIndex !== -1) {
    colors.splice(yellowIndex + 1, 0, "Orange");
  }

  const greenIndex = colors.indexOf("Green");
  if (greenIndex !== -1) {
    colors.splice(greenIndex, 1);
  }

  return { modifiedColors: colors };
}

function displayModifiedColors() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    let colors;
    if (inputArray) colors = JSON.parse(inputArray);

    const { modifiedColors, error } = modifyColors(colors);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `modified colors: ${JSON.stringify(modifiedColors)}`;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
}
