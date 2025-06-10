// Tipos de datos primitivos en JavaScript

//Cadena de texto (string)
let nombre = "Julián"
let apellido = "Clavijo"
let mail = "julian.clavijo@aol.com"
let alias = "clavo"

// Números (number): enteros o decimales
let edad = 40 // Enteros
let altura = 1.80 // Decimales

// Booleanos: true o false (boolean)
let isStudent = true
let isTeacher = false

// Undefined: variable sin valor asignado
let undefinedValue // la variable se puede llamar de cualquier manera, pero no tiene valor asignado
console.log(undefinedValue); // Imprime "undefined"

// Null: variable con valor nulo
let nullValue = null // la variable se puede llamar de cualquier manera, pero tiene valor nulo
console.log(nullValue); // Imprime "null"

// Símbolos: valores únicos e inmutables
let symbol1 = Symbol("descripcion1") // Los símbolos son únicos, incluso si tienen la misma descripción
let symbol2 = Symbol("descripcion1") // Este símbolo es diferente al anterior, aunque tenga la misma descripción

// BigInt: números enteros grandes
let bigIntValue = BigInt(1234567890123456789012345678901234567890) // Números enteros grandes, se pueden crear con el constructor BigInt o añadiendo "n" al final del número
let bigIntValue2 = 1234567890123456789012345678901234567890n // También se puede crear con el sufijo "n"

// Para saber el tipo de dato de una variable, se puede utilizar el operador typeof
console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof undefinedValue); // "undefined"
console.log(typeof nullValue); // "object"
console.log(typeof symbol1); // "symbol"
console.log(typeof bigIntValue); // "bigint"