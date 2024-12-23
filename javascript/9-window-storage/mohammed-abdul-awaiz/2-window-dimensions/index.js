function updateScreenProperties() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const pixelRatio = window.devicePixelRatio;

  document.getElementById("width").textContent = width;
  document.getElementById("height").textContent = height;
  document.getElementById("screenWidth").textContent = screenWidth;
  document.getElementById("screenHeight").textContent = screenHeight;
  document.getElementById("pixelRatio").textContent = pixelRatio;
}

updateScreenProperties();

window.addEventListener("resize", updateScreenProperties);
