document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    findCity();
  });

const users = {
  awaiz: { address: { city: "Hyderabad" } },
  omega: { address: { city: "London" } },
  sigma: { address: { city: "Pune" } },
  prime: { address: { city: "New York" } },
};

function findCity() {
  const userName = document.getElementById("userName").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  if (!userName) return (resultDiv.textContent = "please enter a user name.");

  try {
    const city = users[userName].address.city;

    resultDiv.textContent = `${userName}'s city is ${city}.`;
  } finally {
    const default_city = "Pune";
    resultDiv.textContent = `${userName}'s city is ${default_city}.`;
  }
}
