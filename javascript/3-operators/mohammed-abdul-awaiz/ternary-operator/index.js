function execute() {
  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const age = document.getElementById("age").value;
  const fullName =
    first_name && last_name ? first_name + " " + last_name : "anonymous";
  console.log("i was called", age);
  const result =
    age >= 18
      ? `Hello ${fullName} welcome to apty`
      : `Hello ${fullName} comeback after (18-number) years`;

  document.getElementById("result").innerHTML = result;
}
