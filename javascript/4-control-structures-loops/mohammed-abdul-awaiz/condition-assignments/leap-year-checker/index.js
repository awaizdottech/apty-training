function decide() {
  let age = document.getElementById("age").value;

  let answer_p = document.getElementById("result");
  if (age === "") return (answer_p.innerHTML = "enter a year");

  age = Number(age);

  return (answer_p.innerHTML =
    age % 4 == 0 && age % 100 !== 0
      ? "leap year"
      : age % 100 == 0 && age % 400 == 0
      ? "leap year"
      : "not a leap year");
}
