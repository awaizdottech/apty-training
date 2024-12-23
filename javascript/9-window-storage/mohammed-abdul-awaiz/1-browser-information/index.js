const iframe = document.getElementById("browserFrame");
const urlInput = document.getElementById("urlInput");
const historyStack = [];
let currentIndex = -1;

function navigate() {
  const url = urlInput.value;
  if (url) {
    const prefixedUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `http://${url}`;
    iframe.src = prefixedUrl;

    historyStack.splice(currentIndex + 1);
    historyStack.push(prefixedUrl);
    currentIndex = historyStack.length - 1;
  }
}

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    iframe.src = historyStack[currentIndex];
    urlInput.value = historyStack[currentIndex];
  }
}

function goForward() {
  if (currentIndex < historyStack.length - 1) {
    currentIndex++;
    iframe.src = historyStack[currentIndex];
    urlInput.value = historyStack[currentIndex];
  }
}

function reloadPage() {
  if (currentIndex >= 0) {
    iframe.src = historyStack[currentIndex];
  }
}
