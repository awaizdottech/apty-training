function generate() {
  let number = document.getElementById("number").value;
  let answer_p = document.getElementById("answer");
  let i = 1;
  let sum = 0;

  if (number == "") return (answer_p.innerHTML = "please enter a number");

  number = Number(number);

  while (i <= number) {
    sum += i;
    i++;
  }

  answer_p.innerHTML = `${sum}`;
}
