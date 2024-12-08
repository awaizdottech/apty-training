document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    findCity();
  });

const users = {
  awaiz: { address: { city: "Hyderabad" } },
  prime: { address: { city: "New York" } },
  omega: { address: { city: "London" } },
};

function findCity() {
  const userName = document.getElementById("userName").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  try {
    if (!userName) throw new Error("please enter a user name.");

    const city = users[userName].address.city;

    resultDiv.textContent = `${userName}'s city is ${city}.`;
  } catch (error) {
    resultDiv.textContent = error.message || "user not found.";
  }
}
