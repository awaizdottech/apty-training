console.log(external_p); // outputs different if I append it

const declare_variables_p = document.createElement("p");

try {
  eval("let a = 10; let a = 20;");
} catch (e) {
  declare_variables_p.innerHTML += `let a = 10; let a = 20;<br/>${e}<br/>`;
}

let variable1 =
  "redefinable, block scope, function scope and global scope, use olny when cant use const";
variable1 = "redefined let";
declare_variables_p.innerHTML += `<br/>let variable1 =
  "redefinable, block scope, function scope and global scope, use olny when cant use const"; <br/>
variable1 = "redefined let"; <br/> No Error<br/>`;

try {
  eval("const a = 10; const a = 20;");
} catch (e) {
  declare_variables_p.innerHTML += `<br/>const a = 10; const a = 20;<br/>${e}<br/>`;
}

try {
  const variable2 =
    "block scope, function scope and global scope, use as default";
  variable2 = "redefined const";
} catch (error) {
  declare_variables_p.innerHTML += `<br/> const variable2 =
    "block scope, function scope and global scope, use as default"; <br/>
  variable2 = "redefined const";<br/> ${error}<br/>`;
}

var variable3 =
  "re-decrable, redefinable ,supports hoisting(not advised), function scope and global scope, use when supporting old browsers";
var variable3 = "redeclared var";
variable3 = "redefined var";
declare_variables_p.innerHTML += `<br/>var variable3 =
  "re-decrable, redefinable ,supports hoisting(not advised), function scope and global scope, use when supporting old browsers"; <br/>
var variable3 = "redeclared var";<br/>
variable3 = "redefined var";<br/>No Error<br/>`;

document.getElementById("declare_variables").appendChild(declare_variables_p);
// if I append external_p here it gets removed from wherever it was appended earlier. means it can be appended only at one position
