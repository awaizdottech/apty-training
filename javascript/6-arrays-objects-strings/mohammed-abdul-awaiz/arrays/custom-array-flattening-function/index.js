function customFlatten() {
  let input = document.querySelector("input").value.trim();
  let output_div = document.getElementById("output");

  if (input == "")
    return (output_div.innerHTML = "enter a nested array please");

  try {
    input = JSON.parse(input);
  } catch (error) {
    return (output_div.innerHTML = "please enter valid nested array");
  }

  let result = [];
  function flatten(item) {
    if (Array.isArray(item)) {
      item.forEach(flatten);
    } else {
      result.push(item);
      console.log(item);
    }
  }
  flatten(input);

  output_div.innerHTML = result;
}
