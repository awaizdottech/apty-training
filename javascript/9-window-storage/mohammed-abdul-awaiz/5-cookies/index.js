function setCookie() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  if (!name || !value) {
    alert("please enter both cookie name and value.");
    return;
  }
  document.cookie = `${name}=${value}; path=/`;
  document.getElementById(
    "cookieDisplay"
  ).textContent = `cookie Set: ${name}=${value}`;
}

function readCookie() {
  const name = document.getElementById("cookieName").value;
  if (!name) {
    alert("please enter a cookie name to read.");
    return;
  }
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, val] = cookie.split("=");
    acc[key] = val;
    return acc;
  }, {});
  const value = cookies[name] || "not found";
  document.getElementById(
    "cookieDisplay"
  ).textContent = `cookie value: ${value}`;
}

function deleteCookie() {
  const name = document.getElementById("cookieName").value;
  if (!name) {
    alert("please enter a cookie name to delete");
    return;
  }
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  document.getElementById(
    "cookieDisplay"
  ).textContent = `cookie deleted: ${name}`;
}
