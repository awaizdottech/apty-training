function calculate() {
  let number = document.getElementById("number").value;
  let answer_p = document.getElementById("answer");
  console.log(number == "", "nice");

  if (number == "") {
    return (answer_p.innerHTML = "enter a number please!");
  }
  number = Number(number);
  answer_p.innerHTML = number % 2 == 0 ? "even" : "odd";
}
