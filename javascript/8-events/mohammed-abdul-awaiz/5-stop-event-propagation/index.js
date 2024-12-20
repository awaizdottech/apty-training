document.getElementById("parent").addEventListener("click", function () {
  alert("parent div clicked!");
  console.log("parent div clicked!");
});

document.getElementById("child").addEventListener("click", function (event) {
  alert("child div clicked!");
  console.log("child div clicked!");

  event.stopPropagation();
});
