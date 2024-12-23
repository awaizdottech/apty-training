const iframe1 = document.getElementById("iframe1");
const iframeDoc1 = iframe1.contentDocument || iframe1.contentWindow.document;

const iframe2 = document.getElementById("iframe2");
const iframeDoc2 = iframe2.contentDocument || iframe2.contentWindow.document;

let receiver;

function sendMessageToOtherIframe(sender) {
  const message =
    sender == "iframe1"
      ? iframeDoc1.getElementById("iframeMessage").value
      : iframeDoc2.getElementById("iframeMessage").value;

  receiver = sender == "iframe1" ? "iframe2" : "iframe1";
  window.parent.postMessage(message, "*");
}

window.addEventListener("message", (event) => {
  receiver == "iframe1"
    ? (iframeDoc1.getElementById("receivedMessage").textContent = event.data)
    : (iframeDoc2.getElementById("receivedMessage").textContent = event.data);
});
