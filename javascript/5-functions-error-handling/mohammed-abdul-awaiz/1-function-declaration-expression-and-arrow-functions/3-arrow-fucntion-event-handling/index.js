let count = 0;

const updateCounter = () => {
  count++;
  document.getElementById("counter").textContent = `count: ${count}`;
};

document
  .getElementById("incrementButton")
  .addEventListener("click", updateCounter);
