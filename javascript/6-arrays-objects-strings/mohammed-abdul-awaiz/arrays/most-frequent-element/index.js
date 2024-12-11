function mostFrequent(arr) {
  if (!Array.isArray(arr)) {
    return { error: "input must be an array." };
  }

  const frequencyMap = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  let maxCount = 0;
  let mostFrequentElement = null;

  for (const [key, value] of Object.entries(frequencyMap)) {
    if (value > maxCount) {
      maxCount = value;
      mostFrequentElement = Number(key);
    }
  }

  return { mostFrequentElement };
}

function displayMostFrequent() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const array = JSON.parse(inputArray);

    if (!Array.isArray(array)) {
      throw new Error("input must be a valid array.");
    }

    const { mostFrequentElement, error } = mostFrequent(array);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `most frequent element: ${mostFrequentElement}`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
