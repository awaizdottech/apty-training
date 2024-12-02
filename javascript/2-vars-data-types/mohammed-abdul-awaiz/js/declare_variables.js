console.log("-------------------------");

let variable1 =
  "redefinable, block scope, function scope and global scope, use olny when cant use const";
variable1 = "new redeclared value";
console.log("redeclared let variable \n", variable1);

const variable2 =
  "block scope, function scope and global scope, use as default";
// variable2 = "new redeclared value";
// console.error("redeclared const variable", variable2);

var variable3 =
  "re-decrable, redefinable ,supports hoisting(not advised), function scope and global scope, use when supporting old browsers";
variable3 = "new redeclared value";
console.log("redeclared var variable", variable3);
