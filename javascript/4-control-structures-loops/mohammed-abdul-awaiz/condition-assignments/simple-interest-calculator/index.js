function interest() {
  let principal_amount = document.getElementById("principal").value;
  let time = document.getElementById("time").value;
  let rate_of_interest = document.getElementById("rate").value;
  let answer_p = document.getElementById("answer");

  if (principal_amount == "" || time == "" || rate_of_interest == "")
    return (answer_p.innerHTML = "enter all the values please!");

  principal_amount = Number(principal_amount);
  time = Number(time);
  rate_of_interest = Number(rate_of_interest);

  answer_p.innerHTML = `${
    (principal_amount * (time / 12) * rate_of_interest) / 100
  }`;
}
