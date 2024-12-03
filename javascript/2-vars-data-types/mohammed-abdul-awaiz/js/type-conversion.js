// data types variables are automatically imported
const type_conversion_p = document.createElement("p");

// Type Conversion
// string to other data types
const string_converted_to_num = Number(string);
const string_converted_to_boolean = Boolean(string);
const string_converted_to_symbol = Symbol(string);
console.log(string_converted_to_symbol);

const string_converted_to_bigint = BigInt(string);
const string_converted_to_object = Object(string);
type_conversion_p.innerHTML += `string_converted_to_num: ${string_converted_to_num} <br/>`;
type_conversion_p.innerHTML += `string_converted_to_boolean: ${string_converted_to_boolean} <br/>`;
// type_conversion_p.innerHTML += `"string_converted_to_symbol", ${string_converted_to_symbol} <br/>`;
type_conversion_p.innerHTML += `string_converted_to_bigInt: ${string_converted_to_bigint} <br/>`;
type_conversion_p.innerHTML += `string_converted_to_object: ${string_converted_to_object} <br/>`;

// number to other data types
const number_converted_to_string = String(number);
const number_converted_to_boolean = Boolean(number);
const number_converted_to_symbol = Symbol(number);
const number_converted_to_bigint = BigInt(number);
const number_converted_to_object = Object(number);
type_conversion_p.innerHTML += ` <br/>number_converted_to_string: ${number_converted_to_string} <br/>`;
type_conversion_p.innerHTML += `number_converted_to_boolean: ${number_converted_to_boolean} <br/>`;
// type_conversion_p.innerHTML += `number_converted_to_symbol: ${number_converted_to_symbol} <br/>`;
type_conversion_p.innerHTML += `number_converted_to_bigInt: ${number_converted_to_bigint} <br/>`;
type_conversion_p.innerHTML += `number_converted_to_object: ${number_converted_to_object} <br/>`;

// boolean to other data types
const boolean_converted_to_string = String(boolean);
const boolean_converted_to_number = Number(boolean);
const boolean_converted_to_symbol = Symbol(boolean);
const boolean_converted_to_bigint = BigInt(boolean);
const boolean_converted_to_object = Object(boolean);
type_conversion_p.innerHTML += `<br/>boolean_converted_to_string: ${boolean_converted_to_string} <br/>`;
type_conversion_p.innerHTML += `boolean_converted_to_number: ${boolean_converted_to_number} <br/>`;
// type_conversion_p.innerHTML += `boolean_converted_to_symbol: ${boolean_converted_to_symbol} <br/>`;
type_conversion_p.innerHTML += `boolean_converted_to_bigInt: ${boolean_converted_to_bigint} <br/>`;
type_conversion_p.innerHTML += `boolean_converted_to_object: ${boolean_converted_to_object} <br/>`;

// undefined to other data types
const undefined_converted_to_number = Number(undefined);
const undefined_converted_to_string = String(undefined);
const undefined_converted_to_boolean = Boolean(undefined);
const undefined_converted_to_symbol = Symbol(undefined);
// const undefined_converted_to_bigint = BigInt(undefined);
const undefined_converted_to_object = Object(undefined);
type_conversion_p.innerHTML += `<br/>undefined_converted_to_string: ${undefined_converted_to_string} <br/>`;
type_conversion_p.innerHTML += `undefined_converted_to_number: ${undefined_converted_to_number} <br/>`;
type_conversion_p.innerHTML += `undefined_converted_to_boolean: ${undefined_converted_to_boolean} <br/>`;
// type_conversion_p.innerHTML += `"undefined_converted_to_symbol", ${undefined_converted_to_symbol} <br/>`;
// type_conversion_p.innerHTML += `undefined_converted_to_bigInt: ${undefined_converted_to_bigint} <br/>`;
type_conversion_p.innerHTML += `undefined_converted_to_object: ${undefined_converted_to_object} <br/>`;

// null to other data types
const null_converted_to_number = Number(null);
const null_converted_to_string = String(null);
const null_converted_to_boolean = Boolean(null);
const null_converted_to_symbol = Symbol(null);
// const null_converted_to_bigint = BigInt(null);
const null_converted_to_object = Object(null);
type_conversion_p.innerHTML += `<br/>null_converted_to_string: ${null_converted_to_string} <br/>`;
type_conversion_p.innerHTML += `null_converted_to_number: ${null_converted_to_number} <br/>`;
type_conversion_p.innerHTML += `null_converted_to_boolean: ${null_converted_to_boolean} <br/>`;
// type_conversion_p.innerHTML += `"null_converted_to_symbol", ${null_converted_to_symbol} <br/>`;
// type_conversion_p.innerHTML += `null_converted_to_bigInt: ${null_converted_to_bigint} <br/>`;
type_conversion_p.innerHTML += `null_converted_to_object: ${null_converted_to_object} <br/>`;

// symbol to other data types
const symbol_converted_to_string = String(symbol);
// const symbol_converted_to_number = Number(symbol); not possible
const symbol_converted_to_boolean = Boolean(symbol);
// const symbol_converted_to_bigInt = BigInt(symbol); not possible
const symbol_converted_to_object = Object(symbol);
type_conversion_p.innerHTML += `<br/>symbol_converted_to_string: ${symbol_converted_to_string} <br/>`;
type_conversion_p.innerHTML += `symbol_converted_to_boolean: ${symbol_converted_to_boolean} <br/>`;
// type_conversion_p.innerHTML += `symbol_converted_to_object: ${symbol_converted_to_object} <br/>`;

// bigint to other data types
const bigInt_converted_to_string = String(bigint);
const bigInt_converted_to_number = Number(bigint);
const bigInt_converted_to_symbol = Symbol(bigint);
const bigInt_converted_to_boolean = Boolean(bigint);
const bigInt_converted_to_object = Object(bigint);
type_conversion_p.innerHTML += `<br/>bigInt_converted_to_string: ${bigInt_converted_to_string}<br/>`;
type_conversion_p.innerHTML += `bigInt_converted_to_number: ${bigInt_converted_to_number}<br/>`;
// type_conversion_p.innerHTML += `bigInt_converted_to_symbol: ${bigInt_converted_to_symbol}<br/>`;
type_conversion_p.innerHTML += `bigInt_converted_to_boolean: ${bigInt_converted_to_boolean}<br/>`;
type_conversion_p.innerHTML += `bigInt_converted_to_object: ${bigInt_converted_to_object}<br/>`;

// object to other data types
const object_converted_to_string = String(object);
const object_converted_to_number = Number(object);
const object_converted_to_symbol = Symbol(object);
const object_converted_to_boolean = Boolean(object);
// const object_converted_to_bigInt = BigInt(object); not possible
type_conversion_p.innerHTML += `<br/>object_converted_to_string: ${object_converted_to_string}<br/>`;
type_conversion_p.innerHTML += `object_converted_to_number: ${object_converted_to_number}<br/>`;
// type_conversion_p.innerHTML += `object_converted_to_symbol: ${object_converted_to_symbol}<br/>`;
type_conversion_p.innerHTML += `object_converted_to_boolean: ${object_converted_to_boolean}<br/>`;

document.getElementById("type_conversion").appendChild(type_conversion_p);
