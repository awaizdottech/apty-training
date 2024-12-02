// data types variables are automatically imported

// Type Conversion
// string to other data types
console.log("----------------------------------");
const string_converted_to_num = Number(string);
const string_converted_to_boolean = Boolean(string);
const string_converted_to_symbol = Symbol(string);
const string_converted_to_bigInt = BigInt(string);
const string_converted_to_object = Object(string);
console.log("string_converted_to_num", string_converted_to_num);
console.log("string_converted_to_boolean", string_converted_to_boolean);
console.log("string_converted_to_symbol", string_converted_to_symbol);
console.log("string_converted_to_bigInt", string_converted_to_bigInt);
console.log("string_converted_to_object", string_converted_to_object);

// number to other data types
console.log("----------------------------------");
const number_converted_to_string = String(number);
const number_converted_to_boolean = Boolean(number);
const number_converted_to_symbol = Symbol(number);
const number_converted_to_bigInt = BigInt(number);
const number_converted_to_object = Object(number);
console.log("number_converted_to_string", number_converted_to_string);
console.log("number_converted_to_boolean", number_converted_to_boolean);
console.log("number_converted_to_symbol", number_converted_to_symbol);
console.log("number_converted_to_bigInt", number_converted_to_bigInt);
console.log("number_converted_to_object", number_converted_to_object);

// boolean to other data types
console.log("----------------------------------");
const boolean_converted_to_string = String(boolean);
const boolean_converted_to_number = Number(boolean);
const boolean_converted_to_symbol = Symbol(boolean);
const boolean_converted_to_bigInt = BigInt(boolean);
const boolean_converted_to_object = Object(boolean);
console.log("boolean_converted_to_string", boolean_converted_to_string);
console.log("boolean_converted_to_number", boolean_converted_to_number);
console.log("boolean_converted_to_symbol", boolean_converted_to_symbol);
console.log("boolean_converted_to_bigInt", boolean_converted_to_bigInt);
console.log("boolean_converted_to_object", boolean_converted_to_object);

// symbol to other data types
console.log("----------------------------------");
const symbol_converted_to_string = String(symbol);
// const symbol_converted_to_number = Number(symbol); not possible
const symbol_converted_to_boolean = Boolean(symbol);
// const symbol_converted_to_bigInt = BigInt(symbol); not possible
const symbol_converted_to_object = Object(symbol);
console.log("symbol_converted_to_string", symbol_converted_to_string);
console.log("symbol_converted_to_boolean", symbol_converted_to_boolean);
console.log("symbol_converted_to_object", symbol_converted_to_object);

// bigInt to other data types
console.log("----------------------------------");
const bigInt_converted_to_string = String(bigInt);
const bigInt_converted_to_number = Number(bigInt);
const bigInt_converted_to_symbol = Symbol(bigInt);
const bigInt_converted_to_boolean = Boolean(bigInt);
const bigInt_converted_to_object = Object(bigInt);
console.log("bigInt_converted_to_string", bigInt_converted_to_string);
console.log("bigInt_converted_to_number", bigInt_converted_to_number);
console.log("bigInt_converted_to_symbol", bigInt_converted_to_symbol);
console.log("bigInt_converted_to_boolean", bigInt_converted_to_boolean);
console.log("bigInt_converted_to_object", bigInt_converted_to_object);

// object to other data types
console.log("----------------------------------");
const object_converted_to_string = String(object);
const object_converted_to_number = Number(object);
const object_converted_to_symbol = Symbol(object);
const object_converted_to_boolean = Boolean(object);
// const object_converted_to_bigInt = BigInt(object); not possible
console.log("object_converted_to_string", object_converted_to_string);
console.log("object_converted_to_number", object_converted_to_number);
console.log("object_converted_to_symbol", object_converted_to_symbol);
console.log("object_converted_to_boolean", object_converted_to_boolean);
