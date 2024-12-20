const keydownBox = document.getElementById("keydownBox");
const keyupBox = document.getElementById("keyupBox");

let pressedKeys = new Set();

window.addEventListener("keydown", (event) => {
  const keyCombination = getKeyCombination(event);
  if (!pressedKeys.has(keyCombination)) {
    pressedKeys.add(keyCombination);
    displayEvent(keyCombination, "keydownBox", "Key Down");
  }
});

window.addEventListener("keyup", (event) => {
  const keyCombination = getKeyCombination(event);
  pressedKeys.delete(keyCombination);
  displayEvent(keyCombination, "keyupBox", "Key Up");
});

function getKeyCombination(event) {
  let keys = [];
  if (event.ctrlKey) keys.push("Ctrl");
  if (event.shiftKey) keys.push("Shift");
  if (event.altKey) keys.push("Alt");
  if (event.metaKey) keys.push("Meta");
  keys.push(event.key);
  return keys.join(" + ");
}

function displayEvent(keyCombination, boxId, eventType) {
  const box = document.getElementById(boxId);
  const p = document.createElement("p");
  p.innerHTML = `<span class="highlight">${keyCombination}</span> - ${eventType}`;
  box.appendChild(p);
}
