function grade() {
  let marks = document.getElementById("marks").value;

  let answer_p = document.getElementById("result");
  if (marks === "") return (answer_p.innerHTML = "enter something");

  marks = Number(marks);
  return (answer_p.innerHTML =
    marks >= 90
      ? "Grade A"
      : marks >= 75
      ? "Grade B"
      : marks >= 50
      ? "Grade C"
      : "Grade F");
}
