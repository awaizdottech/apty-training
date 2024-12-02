// data types variables are automatically imported

// Type Coercion
// string added with other data types
console.log("----------------------------------");
const string_added_with_number = string + number;
const string_added_with_boolean = string + boolean;
const string_added_with_undefined = string + undefined;
const string_added_with_null = string + null_variable;
// const string_added_with_symbol = string + symbol; not possible
const string_added_with_bigInt = string + bigInt;
const string_added_with_object = string + object;
console.log(
  `string_added_with_number: ${string_added_with_number}, type: ${typeof string_added_with_number}`
);
console.log(
  `string_added_with_boolean: ${string_added_with_boolean}, type: ${typeof string_added_with_boolean}`
);
console.log(
  `string_added_with_undefined: ${string_added_with_undefined}, type: ${typeof string_added_with_undefined}`
);
console.log(
  `string_added_with_null: ${string_added_with_null}, type: ${typeof string_added_with_null}`
);
console.log(
  `string_added_with_bigInt: ${string_added_with_bigInt}, type: ${typeof string_added_with_bigInt}`
);
console.log(
  `string_added_with_object: ${string_added_with_object}, type: ${typeof string_added_with_object}`
);

// string added with other data types
console.log("----------------------------------");
const number_added_with_string = number + string;
const number_added_with_boolean = number + boolean;
const number_added_with_undefined = number + undefined;
const number_added_with_null = number + null_variable;
// const number_added_with_symbol = number + symbol; not possible
// const number_added_with_bigInt = number + bigInt; not possible
const number_added_with_object = number + object;
console.log(
  `number_added_with_string: ${number_added_with_string}, type: ${typeof number_added_with_string}`
);
console.log(
  `number_added_with_boolean: ${number_added_with_boolean}, type: ${typeof number_added_with_boolean}`
);
console.log(
  `number_added_with_undefined: ${number_added_with_undefined}, type: ${typeof number_added_with_undefined}`
);
console.log(
  `number_added_with_null: ${number_added_with_null}, type: ${typeof number_added_with_null}`
);
console.log(
  `number_added_with_object: ${number_added_with_object}, type: ${typeof number_added_with_object}`
);

// boolean added with other data types
console.log("----------------------------------");
const boolean_added_with_number = boolean + number;
const boolean_added_with_string = boolean + string;
const boolean_added_with_undefined = boolean + undefined;
const boolean_added_with_null = boolean + null_variable;
// const boolean_added_with_symbol = boolean + symbol;
// const boolean_added_with_bigInt = boolean + bigInt;
const boolean_added_with_object = boolean + object;
console.log(
  `boolean_added_with_number: ${boolean_added_with_number}, type: ${typeof boolean_added_with_number}`
);
console.log(
  `boolean_added_with_string: ${boolean_added_with_string}, type: ${typeof boolean_added_with_string}`
);
console.log(
  `boolean_added_with_undefined: ${boolean_added_with_undefined}, type: ${typeof boolean_added_with_undefined}`
);
console.log(
  `boolean_added_with_null: ${boolean_added_with_null}, type: ${typeof boolean_added_with_null}`
);
console.log(
  `boolean_added_with_object: ${boolean_added_with_object}, type: ${typeof boolean_added_with_object}`
);

// undefined added with other data types
console.log("----------------------------------");
const undefined_added_with_number = undefined + number;
const undefined_added_with_boolean = undefined + boolean;
const undefined_added_with_str = undefined + string;
const undefined_added_with_null = undefined + null_variable;
// const undefined_added_with_symbol = undefined + symbol; not possible
// const undefined_added_with_bigInt = undefined + bigInt; not possible
const undefined_added_with_object = undefined + object;
console.log(
  `undefined_added_with_number: ${undefined_added_with_number}, type: ${typeof undefined_added_with_number}`
);
console.log(
  `undefined_added_with_boolean: ${undefined_added_with_boolean}, type: ${typeof undefined_added_with_boolean}`
);
console.log(
  `undefined_added_with_string: ${undefined_added_with_str}, type: ${typeof undefined_added_with_str}`
);
console.log(
  `undefined_added_with_null: ${undefined_added_with_null}, type: ${typeof undefined_added_with_null}`
);
console.log(
  `undefined_added_with_object: ${undefined_added_with_object}, type: ${typeof undefined_added_with_object}`
);

// null added with other data types
console.log("----------------------------------");
const null_added_with_number = null + number;
const null_added_with_boolean = null + boolean;
const null_added_with_undefined = null + undefined;
const null_added_with_string = null + string;
// const null_added_with_symbol =null + symbol; not possible
// const null_added_with_bigInt = null + bigInt;
const null_added_with_object = null + object;
console.log(
  `null_added_with_number: ${null_added_with_number}, type: ${typeof null_added_with_number}`
);
console.log(
  `null_added_with_boolean: ${null_added_with_boolean}, type: ${typeof null_added_with_boolean}`
);
console.log(
  `null_added_with_undefined: ${null_added_with_undefined}, type: ${typeof null_added_with_undefined}`
);
console.log(
  `null_added_with_string: ${null_added_with_string}, type: ${typeof null_added_with_string}`
);
console.log(
  `null_added_with_object: ${null_added_with_object}, type: ${typeof null_added_with_object}`
);

// symbol addition with other data types isnt possible
console.log("----------------------------------");
// const symbol_added_with_number = symbol + number;
// const symbol_added_with_boolean = symbol + boolean;
// const symbol_added_with_undefined = symbol + undefined;
// const symbol_added_with_null = symbol + null_variable;
// const symbol_added_with_string = symbol + string;
// const symbol_added_with_bigInt = symbol + bigInt;
// const symbol_added_with_object = symbol + object;

// bigInt addition with other data types isnt possible
// const bigInt_added_with_number = bigInt + number;
// const bigInt_added_with_boolean = bigInt + boolean;
// const bigInt_added_with_undefined = bigInt + undefined;
// const bigInt_added_with_null = bigInt + null_variable;
// const bigInt_added_with_symbol = bigInt + symbol;
const bigInt_added_with_string = bigInt + string;
const bigInt_added_with_object = bigInt + object;
console.log(
  `bigInt_added_with_string: ${bigInt_added_with_string}, type: ${typeof bigInt_added_with_string}`
);
console.log(
  `bigInt_added_with_object: ${bigInt_added_with_object}, type: ${typeof bigInt_added_with_object}`
);

// object added with other data types
console.log("----------------------------------");
const object_added_with_number = object + number;
const object_added_with_boolean = object + boolean;
const object_added_with_undefined = object + undefined;
const object_added_with_null = object + null_variable;
// const object_added_with_symbol = object + symbol; not possible
const object_added_with_bigInt = object + bigInt;
const object_added_with_string = object + string;
console.log(
  `object_added_with_number: ${object_added_with_number}, type: ${typeof object_added_with_number}`
);
console.log(
  `object_added_with_boolean: ${object_added_with_boolean}, type: ${typeof object_added_with_boolean}`
);
console.log(
  `object_added_with_undefined: ${object_added_with_undefined}, type: ${typeof object_added_with_undefined}`
);
console.log(
  `object_added_with_null: ${object_added_with_null}, type: ${typeof object_added_with_null}`
);
console.log(
  `object_added_with_bigInt: ${object_added_with_bigInt}, type: ${typeof object_added_with_bigInt}`
);
console.log(
  `object_added_with_string: ${object_added_with_string}, type: ${typeof object_added_with_string}`
);
