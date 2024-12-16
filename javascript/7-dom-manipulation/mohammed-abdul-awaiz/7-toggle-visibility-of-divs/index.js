const divs = [
  document.getElementById("div1"),
  document.getElementById("div2"),
  document.getElementById("div3"),
];

let currentVisibleIndex = 0;

document.getElementById("toggleButton").addEventListener("click", () => {
  divs[currentVisibleIndex].classList.add("hidden");

  currentVisibleIndex = (currentVisibleIndex + 1) % divs.length;

  divs[currentVisibleIndex].classList.remove("hidden");
});
