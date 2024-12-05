function generate() {
  let number = document.getElementById("number").value;
  let answer_p = document.getElementById("answer");

  if (number == "") return (answer_p.innerHTML = "please enter a number");

  number = Number(number);

  for (let i = 1; i <= number; i++) {
    let string = "&nbsp";
    console.log(`row:${i}`);

    for (let j = 0; j < number - i + 1; j++) string += " ";
    for (let j = 0; j < i * 2 - 1; j++) string += "*";
    for (let j = 0; j < number - i; j++) string += " ";

    string += "<br/>";

    answer_p.innerHTML += string;
  }
}
