// data types variables are automatically imported
const type_coercion_p = document.createElement("p");

// Type Coercion
// string added with other data types
const string_added_with_number = string + number;
const string_added_with_boolean = string + boolean;
const string_added_with_undefined = string + undefined;
const string_added_with_null = string + null;
// const string_added_with_symbol = string + symbol; not possible
const string_added_with_bigInt = string + bigint;
const string_added_with_object = string + object;
type_coercion_p.innerHTML += `string_added_with_number: ${string_added_with_number}, type: ${typeof string_added_with_number} <br/>`;
type_coercion_p.innerHTML += `string_added_with_boolean: ${string_added_with_boolean}, type: ${typeof string_added_with_boolean} <br/>`;
type_coercion_p.innerHTML += `string_added_with_undefined: ${string_added_with_undefined}, type: ${typeof string_added_with_undefined} <br/>`;
type_coercion_p.innerHTML += `string_added_with_null: ${string_added_with_null}, type: ${typeof string_added_with_null} <br/>`;
type_coercion_p.innerHTML += `string_added_with_bigInt: ${string_added_with_bigInt}, type: ${typeof string_added_with_bigInt} <br/>`;
type_coercion_p.innerHTML += `string_added_with_object: ${string_added_with_object}, type: ${typeof string_added_with_object} <br/>`;

// string added with other data types
const number_added_with_string = number + string;
const number_added_with_boolean = number + boolean;
const number_added_with_undefined = number + undefined;
const number_added_with_null = number + null;
// const number_added_with_symbol = number + symbol; not possible
// const number_added_with_bigInt = number + bigint; not possible
const number_added_with_object = number + object;
type_coercion_p.innerHTML += `<br/>number_added_with_string: ${number_added_with_string}, type: ${typeof number_added_with_string}<br/>`;
type_coercion_p.innerHTML += `number_added_with_boolean: ${number_added_with_boolean}, type: ${typeof number_added_with_boolean}<br/>`;
type_coercion_p.innerHTML += `number_added_with_undefined: ${number_added_with_undefined}, type: ${typeof number_added_with_undefined}<br/>`;
type_coercion_p.innerHTML += `number_added_with_null: ${number_added_with_null}, type: ${typeof number_added_with_null}<br/>`;
type_coercion_p.innerHTML += `number_added_with_object: ${number_added_with_object}, type: ${typeof number_added_with_object}<br/>`;

// boolean added with other data types
const boolean_added_with_number = boolean + number;
const boolean_added_with_string = boolean + string;
const boolean_added_with_undefined = boolean + undefined;
const boolean_added_with_null = boolean + null;
// const boolean_added_with_symbol = boolean + symbol;
// const boolean_added_with_bigInt = boolean + bigint;
const boolean_added_with_object = boolean + object;
type_coercion_p.innerHTML += `<br/>boolean_added_with_number: ${boolean_added_with_number}, type: ${typeof boolean_added_with_number}<br/>`;
type_coercion_p.innerHTML += `boolean_added_with_string: ${boolean_added_with_string}, type: ${typeof boolean_added_with_string}<br/>`;
type_coercion_p.innerHTML += `boolean_added_with_undefined: ${boolean_added_with_undefined}, type: ${typeof boolean_added_with_undefined}<br/>`;
type_coercion_p.innerHTML += `boolean_added_with_null: ${boolean_added_with_null}, type: ${typeof boolean_added_with_null}<br/>`;
type_coercion_p.innerHTML += `boolean_added_with_object: ${boolean_added_with_object}, type: ${typeof boolean_added_with_object}<br/>`;

// undefined added with other data types
const undefined_added_with_number = undefined + number;
const undefined_added_with_boolean = undefined + boolean;
const undefined_added_with_str = undefined + string;
const undefined_added_with_null = undefined + null;
// const undefined_added_with_symbol = undefined + symbol; not possible
// const undefined_added_with_bigInt = undefined + bigint; not possible
const undefined_added_with_object = undefined + object;
type_coercion_p.innerHTML += `<br/>undefined_added_with_number: ${undefined_added_with_number}, type: ${typeof undefined_added_with_number}<br/>`;
type_coercion_p.innerHTML += `undefined_added_with_boolean: ${undefined_added_with_boolean}, type: ${typeof undefined_added_with_boolean}<br/>`;
type_coercion_p.innerHTML += `undefined_added_with_string: ${undefined_added_with_str}, type: ${typeof undefined_added_with_str}<br/>`;
type_coercion_p.innerHTML += `undefined_added_with_null: ${undefined_added_with_null}, type: ${typeof undefined_added_with_null}<br/>`;
type_coercion_p.innerHTML += `undefined_added_with_object: ${undefined_added_with_object}, type: ${typeof undefined_added_with_object}<br/>`;

// null added with other data types
const null_added_with_number = null + number;
const null_added_with_boolean = null + boolean;
const null_added_with_undefined = null + undefined;
const null_added_with_string = null + string;
// const null_added_with_symbol =null + symbol; not possible
// const null_added_with_bigInt = null + bigint;
const null_added_with_object = null + object;
type_coercion_p.innerHTML += `<br/>null_added_with_number: ${null_added_with_number}, type: ${typeof null_added_with_number}<br/>`;
type_coercion_p.innerHTML += `null_added_with_boolean: ${null_added_with_boolean}, type: ${typeof null_added_with_boolean}<br/>`;
type_coercion_p.innerHTML += `null_added_with_undefined: ${null_added_with_undefined}, type: ${typeof null_added_with_undefined}<br/>`;
type_coercion_p.innerHTML += `null_added_with_string: ${null_added_with_string}, type: ${typeof null_added_with_string}<br/>`;
type_coercion_p.innerHTML += `null_added_with_object: ${null_added_with_object}, type: ${typeof null_added_with_object}<br/>`;

// symbol addition with other data types isnt possible
// const symbol_added_with_number = symbol + number;
// const symbol_added_with_boolean = symbol + boolean;
// const symbol_added_with_undefined = symbol + undefined;
// const symbol_added_with_null = symbol + null;
// const symbol_added_with_string = symbol + string;
// const symbol_added_with_bigInt = symbol + bigint;
// const symbol_added_with_object = symbol + object;

// bigint addition with other data types
// const bigInt_added_with_number = bigint + number;
// const bigInt_added_with_boolean = bigint + boolean;
// const bigInt_added_with_undefined = bigint + undefined;
// const bigInt_added_with_null = bigint + null;
// const bigInt_added_with_symbol = bigint + symbol;
const bigInt_added_with_string = bigint + string;
const bigInt_added_with_object = bigint + object;
type_coercion_p.innerHTML += `<br/>bigInt_added_with_string: ${bigInt_added_with_string}, type: ${typeof bigInt_added_with_string}<br/>`;
type_coercion_p.innerHTML += `bigInt_added_with_object: ${bigInt_added_with_object}, type: ${typeof bigInt_added_with_object}<br/>`;

// object added with other data types
const object_added_with_number = object + number;
const object_added_with_boolean = object + boolean;
const object_added_with_undefined = object + undefined;
const object_added_with_null = object + null;
// const object_added_with_symbol = object + symbol; not possible
const object_added_with_bigInt = object + bigint;
const object_added_with_string = object + string;
type_coercion_p.innerHTML += `<br/>object_added_with_number: ${object_added_with_number}, type: ${typeof object_added_with_number}<br/>`;
type_coercion_p.innerHTML += `object_added_with_boolean: ${object_added_with_boolean}, type: ${typeof object_added_with_boolean}<br/>`;
type_coercion_p.innerHTML += `object_added_with_undefined: ${object_added_with_undefined}, type: ${typeof object_added_with_undefined}<br/>`;
type_coercion_p.innerHTML += `object_added_with_null: ${object_added_with_null}, type: ${typeof object_added_with_null}<br/>`;
type_coercion_p.innerHTML += `object_added_with_bigInt: ${object_added_with_bigInt}, type: ${typeof object_added_with_bigInt}<br/>`;
type_coercion_p.innerHTML += `object_added_with_string: ${object_added_with_string}, type: ${typeof object_added_with_string}<br/>`;

document.getElementById("type_coercion").appendChild(type_coercion_p);
