function generate() {
  let number = document.getElementById("number").value;
  let answer_p = document.getElementById("answer");
  let i = 2;
  let factorial = 1;

  if (number == "") return (answer_p.innerHTML = "please enter a number");

  number = Number(number);
  if (number == 0) return (answer_p.innerHTML = "please enter a proper number");
  if (number == 1) return (answer_p.innerHTML = 1);

  do {
    factorial *= i;
    i++;
  } while (i <= number);

  answer_p.innerHTML = `${factorial}`;
}
