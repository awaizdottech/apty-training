document.getElementById("updateButton").addEventListener("click", function () {
  const listItems = document.querySelectorAll("#myList li");
  if (listItems.length >= 4) {
    listItems[1].textContent = "Updated Item"; // Update second item
    listItems[3].textContent = "Updated Item"; // Update fourth item
  }
});
