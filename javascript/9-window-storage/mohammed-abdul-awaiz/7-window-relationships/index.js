const iframe = document.getElementById("childIframe");
let iframeDoc;
iframe.addEventListener("load", () => {
  iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
});

function sendMessageToIframe() {
  const message = document.getElementById("parentMessage").value;
  postMessage(message, "*");
}

window.addEventListener("message", (event) => {
  document.getElementById("iframeMessage").textContent = event.data;
  iframeDoc.getElementById("parentMessage").textContent = event.data;
});

function sendMessageToParent() {
  const message = iframeDoc.getElementById("iframeMessage").value;
  window.parent.postMessage(message, "*");
}
