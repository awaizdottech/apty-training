function decide() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;

  let answer_p = document.getElementById("answer");
  if (number1 === "" || number2 === "" || number3 === "")
    return (answer_p.innerHTML = "enter all the numbers please!");

  number1 = Number(number1);
  number2 = Number(number2);
  number3 = Number(number3);

  if (number1 > number2) {
    if (number1 > number3) answer_p.innerHTML = `${number1} is greatest`;
  } else if (number2 > number3) answer_p.innerHTML = `${number2} is greatest`;
  else answer_p.innerHTML = `${number3} is greatest`;
}
