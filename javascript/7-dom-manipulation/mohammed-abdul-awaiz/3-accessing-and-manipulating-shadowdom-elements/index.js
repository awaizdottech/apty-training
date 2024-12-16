const table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
const no_of_rows = 4;

const columns = ["id", "className", "tag", "name", "attribute"];
const tr = document.createElement("tr");
for (const col_name of columns) {
  let th = document.createElement("th");
  th.innerHTML = col_name;
  th.id = col_name;
  tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);

const colors = [
  "red",
  "blue",
  "brown",
  "yellow",
  "violet",
  "indigo",
  "green",
  "orange",
  "white",
  "aqua",
];

for (let i = 0; i < no_of_rows - 1; i++) {
  let tr = document.createElement("tr");

  const td_id = document.createElement("td");
  const p_id = document.createElement("p");
  const randomIndex = Math.floor(Math.random() * colors.length);
  p_id.style.color = colors[randomIndex];
  p_id.id = i + 1;
  p_id.innerHTML = i + 1;
  td_id.appendChild(p_id);
  tr.appendChild(td_id);

  const td_className = document.createElement("td");
  const p_className = document.createElement("p");
  p_className.className = "bg-color-toggle";
  p_className.innerHTML = "bg-color-toggle";
  td_className.appendChild(p_className);
  tr.appendChild(td_className);

  const td_tag = document.createElement("td");
  const span_tag = document.createElement("span");
  span_tag.innerHTML = "span";
  td_tag.appendChild(span_tag);
  tr.appendChild(td_tag);

  const td_name = document.createElement("td");
  const input_name = document.createElement("input");
  input_name.name = i + 1;
  input_name.placeholder = `row ${i + 1}`;
  td_name.appendChild(input_name);
  tr.appendChild(td_name);

  const td_attribute = document.createElement("td");
  const p_attribute = document.createElement("p");
  p_attribute.setAttribute(`data-custom-${i + 1}`, `row ${i + 1}`);
  p_attribute.innerHTML = `row ${i + 1}`;
  td_attribute.appendChild(p_attribute);
  tr.appendChild(td_attribute);

  tbody.appendChild(tr);
}

const shadow_host = document.getElementById("shadow-host");
const shadow_root = shadow_host.attachShadow({ mode: "open" });

const buttons_div = document.createElement("div");
document.querySelector("body").appendChild(buttons_div);

const button_id = document.createElement("button");
button_id.innerHTML = "change text color";
button_id.addEventListener("click", () => {
  const p1 = shadow_root.getElementById("1");
  const randomIndex1 = Math.floor(Math.random() * colors.length);
  p1.style.color = colors[randomIndex1];

  const p2 = shadow_root.getElementById("2");
  const randomIndex2 = Math.floor(Math.random() * colors.length);
  p2.style.color = colors[randomIndex2];

  const p3 = shadow_root.getElementById("3");
  const randomIndex3 = Math.floor(Math.random() * colors.length);
  p3.style.color = colors[randomIndex3];
});
buttons_div.appendChild(button_id);

const button_className = document.createElement("button");
button_className.innerHTML = "toggle background";
button_className.addEventListener("click", () => {
  let second_column_values = shadow_root.querySelectorAll(".bg-color-toggle");
  second_column_values = Array.from(second_column_values);
  second_column_values.forEach((element) => {
    element.classList.toggle("colored");
  });
});
buttons_div.appendChild(button_className);

const button_tag = document.createElement("button");
button_tag.innerHTML = "change innerHTML";
button_tag.addEventListener("click", () => {
  let third_column_values = shadow_root.querySelectorAll("span");
  third_column_values = Array.from(third_column_values);

  third_column_values.forEach((element) => {
    element.innerHTML = "changed";
  });
});
buttons_div.appendChild(button_tag);

const button_name = document.createElement("button");
button_name.innerHTML = "toggle disable";
button_name.addEventListener("click", () => {
  const input1 = shadow_root.querySelector("[name='1']");
  input1.toggleAttribute("disabled");
  const input2 = shadow_root.querySelector("[name='2']");
  input2.toggleAttribute("disabled");
  const input3 = shadow_root.querySelector("[name='3']");
  input3.toggleAttribute("disabled");
});
buttons_div.appendChild(button_name);

const button_attribute = document.createElement("button");
button_attribute.innerHTML = "add new custom attribute";
button_attribute.addEventListener("click", () => {
  const first_element = shadow_root.querySelector("p[data-custom-1]");
  first_element.setAttribute("data-new", "new");

  const second_element = shadow_root.querySelector("p[data-custom-2]");
  second_element.setAttribute("data-new", "new");

  const third_element = shadow_root.querySelector("p[data-custom-3]");
  third_element.setAttribute("data-new", "new");
});
buttons_div.appendChild(button_attribute);

table.appendChild(tbody);
const shadow_style = document.createElement("style");
shadow_style.innerHTML = ".colored{background-color:purple}";
shadow_root.appendChild(shadow_style);
shadow_root.appendChild(table);
