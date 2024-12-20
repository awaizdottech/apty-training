const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const form = document.getElementById("registrationForm");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    nameError.textContent = "name is required.";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "email is required.";
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "please enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password === "") {
    passwordError.textContent = "password is required.";
    return false;
  } else if (password.length < 6) {
    passwordError.textContent = "password must be at least 6 characters.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

form.addEventListener("submit", function (event) {
  if (!validateName() || !validateEmail() || !validatePassword()) {
    event.preventDefault();
    alert("please fill out the form correctly.");
  } else {
    alert("form submitted successfully!");
  }
});
