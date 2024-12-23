function saveToLocalStorage() {
  const localValue = document.getElementById("localInput").value;
  localStorage.setItem("localData", localValue);
  displayStorageData();
}

function saveToSessionStorage() {
  const sessionValue = document.getElementById("sessionInput").value;
  sessionStorage.setItem("sessionData", sessionValue);
  displayStorageData();
}

function displayStorageData() {
  const localData = localStorage.getItem("localData") || "-";
  const sessionData = sessionStorage.getItem("sessionData") || "-";

  document.getElementById("localData").textContent = localData;
  document.getElementById("sessionData").textContent = sessionData;
}

window.onload = displayStorageData;
