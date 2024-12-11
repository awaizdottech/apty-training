function displayUserIntroductions() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const users = JSON.parse(inputArray);

    if (
      !Array.isArray(users) ||
      !users.every(
        (user) => typeof user.name === "string" && typeof user.age === "number"
      )
    ) {
      throw new Error(
        "input must be an array of objects with 'name' (string) and 'age' (number) properties."
      );
    }

    const messages = [];
    users.forEach((user) => {
      messages.push(`${user.name} is ${user.age} years old.`);
    });

    document.getElementById("output").innerHTML = messages.join("<br>");
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
