function generate() {
  let number = document.getElementById("number").value;
  let answer_p = document.getElementById("answer");
  let prim_numbers = [1, 2, 3];

  if (number == "") return (answer_p.innerHTML = "please enter a number");
  if (number == "1") return (answer_p.innerHTML = "1");
  if (number == "2") return (answer_p.innerHTML = "1,2");
  if (number == "3") return (answer_p.innerHTML = "1,2,3");

  number = Number(number);

  for (let i = 4; i <= number; i++) {
    let a = 0;

    for (let j = 2; j <= i / 2; j++) if (i % j == 0) a++;

    if (a == 0) prim_numbers.push(i);
  }

  answer_p.innerHTML = `${String(prim_numbers)}`;
}
