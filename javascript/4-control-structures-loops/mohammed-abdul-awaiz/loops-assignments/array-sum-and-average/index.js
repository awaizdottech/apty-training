function calculate() {
  let number_string = document.getElementById("number_string").value;
  let answer_p = document.getElementById("answer");

  if (number_string.trim() == "")
    return (answer_p.innerHTML = "please enter a comma separated number list");
  let number_array = number_string.split(",");

  let sum = 0;

  for (const v of number_array) sum += Number(v);

  let average = sum / number_array.length;

  answer_p.innerHTML = `sum:${sum} average:${average}`;
}
