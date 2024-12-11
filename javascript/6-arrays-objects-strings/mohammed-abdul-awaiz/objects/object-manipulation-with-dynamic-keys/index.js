let dynamicObject = {};

function addOrUpdateKey() {
  const key = document.getElementById("keyInput").value;
  const value = document.getElementById("valueInput").value;

  if (key === "" || value === "") {
    document.getElementById("result").innerText =
      "error: both key and value must be provided.";
    return;
  }

  dynamicObject[key] = value;

  document.getElementById(
    "result"
  ).innerText = `updated object: ${JSON.stringify(dynamicObject, null, 2)}`;
}
