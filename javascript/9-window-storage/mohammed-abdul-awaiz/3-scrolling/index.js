function scrollToPosition() {
  const x = parseInt(document.getElementById("scrollX").value, 10) || 0;
  const y = parseInt(document.getElementById("scrollY").value, 10) || 0;
  window.scrollTo(x, y);
}

function scrollUp() {
  window.scrollBy(0, -10);
}

function scrollDown() {
  window.scrollBy(0, 10);
}
