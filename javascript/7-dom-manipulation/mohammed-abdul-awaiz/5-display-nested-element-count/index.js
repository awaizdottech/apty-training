document.getElementById("countButton").addEventListener("click", function () {
  const containers = document.querySelectorAll(".container");
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  containers.forEach((container, index) => {
    const nestedElementsCount = container.querySelectorAll("*").length;
    const listItem = document.createElement("li");
    listItem.textContent = `Parent ${index + 1} (ID: ${
      container.id
    }): ${nestedElementsCount} nested elements`;
    resultsList.appendChild(listItem);
  });
});
