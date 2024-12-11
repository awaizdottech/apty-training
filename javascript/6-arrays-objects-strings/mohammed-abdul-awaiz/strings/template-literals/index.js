function createGreetingMessage(name, age) {
  return `hello, my name is ${name} and I am ${age} years old.`;
}

function displayGreetingMessage() {
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;

  if (!name || !age) {
    document.getElementById("result").innerText =
      "please provide both name and age.";
    return;
  }

  const message = createGreetingMessage(name, age);
  document.getElementById("result").innerText = message;
}
