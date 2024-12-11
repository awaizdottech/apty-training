function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return { error: "input must be an array." };
  }

  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return { uniqueArray };
}

function displayUniqueArray() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const array = JSON.parse(inputArray);

    if (!Array.isArray(array)) {
      throw new Error("input must be a valid array.");
    }

    const { uniqueArray, error } = removeDuplicates(array);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `unique array: ${JSON.stringify(uniqueArray)}`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
