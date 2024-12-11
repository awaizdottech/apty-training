function sortByProperty(array, property) {
  if (!Array.isArray(array)) {
    return { error: "input must be an array of objects." };
  }

  const sortedArray = array.sort((a, b) => {
    if (a[property] < b[property]) return 1;
    if (a[property] > b[property]) return -1;
    return 0;
  });

  return { sortedArray };
}

function displaySortedArray() {
  const inputArray = document.getElementById("inputArray").value;
  const sortProperty = document.getElementById("sortProperty").value;

  try {
    const objects = JSON.parse(inputArray);

    if (
      !Array.isArray(objects) ||
      !objects.every((obj) => obj.hasOwnProperty(sortProperty))
    ) {
      throw new Error(
        `input must be an array of objects with the property '${sortProperty}'.`
      );
    }

    const { sortedArray, error } = sortByProperty(objects, sortProperty);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `sorted array: ${JSON.stringify(sortedArray)}`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
