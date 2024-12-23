let controlledWindow;

function openWindow() {
  if (controlledWindow && !controlledWindow.closed) {
    alert("the window is already open!");
    return;
  }

  controlledWindow = window.open(
    "",
    "ControlledWindow",
    "width=400,height=300,left=100,top=100"
  );

  controlledWindow.document.write(
    "<h1>controlled window</h1><p>u can resize or close me using the main page controls!</p>"
  );
  document.getElementById("status").textContent = "window is open";
}

function closeWindow() {
  if (controlledWindow && !controlledWindow.closed) {
    controlledWindow.close();
    document.getElementById("status").textContent = "window is closed";
  } else {
    alert("no window is currently open");
  }
}

function resizeWindow() {
  if (controlledWindow && !controlledWindow.closed) {
    const newWidth = prompt("enter new width:", 500);
    const newHeight = prompt("enter new height:", 400);

    if (
      !isNaN(newWidth) &&
      !isNaN(newHeight) &&
      newWidth > 0 &&
      newHeight > 0
    ) {
      controlledWindow.resizeTo(newWidth, newHeight);
    } else {
      alert("please enter valid positive numbers for width and height");
    }
  } else {
    alert("no window is currently open to resize");
  }
}
