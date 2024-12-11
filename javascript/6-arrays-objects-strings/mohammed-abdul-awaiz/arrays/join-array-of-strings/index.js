function arrayToSentence(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return Error("please provide a valid array of words.");
  }

  let sentence = words.join(" ");

  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function displaySentence() {
  const inputArray = document.getElementById("inputArray").value;
  if (!inputArray)
    return (document.getElementById("output").innerText =
      "please enter an array of strings");

  try {
    const words = JSON.parse(inputArray);

    if (
      !Array.isArray(words) ||
      !words.every((word) => typeof word === "string")
    ) {
      throw new Error("input must be an array of strings.");
    }

    const sentence = arrayToSentence(words);

    document.getElementById(
      "output"
    ).innerText = `converted sentence: "${sentence}"`;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
