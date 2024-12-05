function generate() {
  let number = document.getElementById("number").value;
  let table_list = document.getElementById("table");

  if (number == "") return (table_list.innerHTML = "please enter a number");

  number = Number(number);

  table_list.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${number}x${i}=${number * i}`;
    table_list.appendChild(li);
  }
}
