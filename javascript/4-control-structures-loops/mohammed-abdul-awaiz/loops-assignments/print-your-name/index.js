const body = document.getElementById("body");

const pre = document.createElement("pre");
const name_matrix = [
  [" AAA ", "W   W", " AAA ", "IIIII", "ZZZZZ"],
  ["A   A", "W   W", "A   A", "  I  ", "   Z "],
  ["A   A", "W W W", "A   A", "  I  ", "  Z  "],
  ["AAAAA", "WW WW", "AAAAA", "  I  ", " Z   "],
  ["A   A", "W   W", "A   A", "IIIII", "ZZZZZ"],
];

for (const row of name_matrix) {
  let string = "";
  for (const element of row) {
    string = string + " " + element;
  }
  string += " <br/>";
  console.log(string);

  pre.innerHTML += string;
}

body.appendChild(pre);
