document
  .getElementById("repeatForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generateList();
  });

function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function generateList() {
  const itemText = document.getElementById("itemText").value;
  const itemCount = document.getElementById("itemCount").value;
  const itemList = document.getElementById("itemList");

  itemList.innerHTML = "";

  if (!itemText.trim() || isNaN(itemCount) || itemCount <= 0) {
    itemList.innerHTML =
      "<li>Please enter valid text and a positive number.</li>";
    return;
  }

  const count = parseInt(itemCount, 10);

  repeatAction((i) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${itemText} ${i + 1}`;
    itemList.appendChild(listItem);
  }, count);
}
