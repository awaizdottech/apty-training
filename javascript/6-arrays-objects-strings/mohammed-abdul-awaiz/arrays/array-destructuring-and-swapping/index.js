function swapVariables(a, b) {
  [a, b] = [b, a];
  return { a, b };
}

function displaySwappedVariables() {
  let inputA = parseInt(document.getElementById("inputA").value, 10);
  let inputB = parseInt(document.getElementById("inputB").value, 10);

  if (isNaN(inputA) || isNaN(inputB)) {
    document.getElementById("output").innerText =
      "error: please enter valid numbers for both inputs.";
    return;
  }

  const { a, b } = swapVariables(inputA, inputB);

  document.getElementById("inputA").value = a;
  document.getElementById("inputB").value = b;
}
