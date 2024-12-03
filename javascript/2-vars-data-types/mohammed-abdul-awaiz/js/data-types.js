const data_types_p = document.createElement("p");
// console.log(data_types_p);

const string = "100";
const number = 100;
const boolean = true;
const symbol = Symbol(123);
const bigint = 1234567891623456n;
const object = { greeting: "hi" };

data_types_p.innerHTML += `const string = "100";<br/>
const number = 100;<br/>
const boolean = true;<br/>
const symbol = Symbol(123);<br/>
const bigint = 1234567891623456n;<br/>
const object = { greeting: "hi" };<br/>`;

data_types_p.innerHTML += `<br/>typeof string: ${typeof string};`;
data_types_p.innerHTML += `<br/>typeof number: ${typeof number};`;
data_types_p.innerHTML += `<br/>typeof boolean: ${typeof boolean};`;
data_types_p.innerHTML += `<br/>typeof undefined: ${typeof undefined};`;
data_types_p.innerHTML += `<br/>typeof null: ${typeof null}`;
data_types_p.innerHTML += `<br/>typeof symbol: ${typeof symbol};`;
data_types_p.innerHTML += `<br/>typeof bigint: ${typeof bigint};`;
data_types_p.innerHTML += `<br/>typeof object: ${typeof object};`;

document.getElementById("data_types").appendChild(data_types_p);
