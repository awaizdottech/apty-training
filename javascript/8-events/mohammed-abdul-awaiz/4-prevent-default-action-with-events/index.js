const form = document.getElementById("myForm");
const errorMessages = document.getElementById("errorMessages");

form.addEventListener("submit", function (event) {
  errorMessages.innerHTML = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }

  if (email === "") {
    errors.push("Email is required.");
  } else if (!validateEmail(email)) {
    errors.push("Invalid email format.");
  }

  if (errors.length > 0) {
    event.preventDefault();

    errorMessages.innerHTML = errors.join("<br>");
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
