function prompt_on_load() {
  const string = prompt("enter a string");
  let answer_p = document.getElementById("answer");
  let sum = 0;

  console.log("nice");
  while (string.trim() == "") {
    string = prompt("u cant skip entering a number, please do enter a number");
  }

  for (const i in string) sum++;

  answer_p.innerHTML = `number of words: ${sum}`;
}
