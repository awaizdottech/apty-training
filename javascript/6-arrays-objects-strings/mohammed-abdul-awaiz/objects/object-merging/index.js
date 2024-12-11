function deepMerge(obj1, obj2) {
  const result = { ...obj1 }; // shallow copy of obj1

  for (const key in obj2) {
    console.log(key);

    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = deepMerge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

function mergeObjects() {
  const obj1Input = document.getElementById("obj1Input").value;
  const obj2Input = document.getElementById("obj2Input").value;

  try {
    const obj1 = JSON.parse(obj1Input);
    const obj2 = JSON.parse(obj2Input);

    const mergedObject = deepMerge(obj1, obj2);

    document.getElementById(
      "result"
    ).innerText = `merged object: ${JSON.stringify(mergedObject, null, 2)}`;
  } catch (error) {
    document.getElementById("result").innerText =
      "error: please enter valid JSON objects.";
  }
}
