// 1. Escribir comentarios de línea
// 2. Escribir comentarios de bloque: se abre con /* y se cierra con */
// 3. Declarar variables con valores associciados a todos los datos primitivos e imprimirlos en consola

//string
let hija1 = "Guadalupe";
let hija2 = "Luciana";
console.log(hija1, "&", hija2);

//number
let ano = 2025;
let mes = 10;
let dia = 6;
console.log(ano, mes, dia);

//boolean
let esUsuario = true;
let esAdmin = false;
console.log(esUsuario, esAdmin);

//undefined
let valorIndefinido;
console.log(valorIndefinido);

//null
let valorNulo = null;
console.log(valorNulo);

//symbol
let simbolo1 = Symbol("descripcion1");
let simbolo2 = Symbol("descripcion2");
console.log(simbolo1 === simbolo2); // false

//bigint
let numeroGrande = BigInt(1234567890123456789012345678901234567890);

// 5. Imprimir el tipo de dato de cada variable en consola
console.log(typeof nombre); // "string"
console.log(typeof ano); // "number"
console.log(typeof distancia); // "number"
console.log(typeof esUsuario); // "boolean"
console.log(typeof esAdmin); // "boolean"
console.log(typeof valorIndefinido); // "undefined"
console.log(typeof valorNulo); // "object"
console.log(typeof simbolo1); // "symbol"
console.log(typeof simbolo2); // "symbol"
console.log(typeof numeroGrande); // "bigint"

// 6. Crear una variable para cada operación aritmética básica (suma, resta, multiplicación, división, módulo) y mostrar el resultado en consola

console.log(2010 + 15); // Suma
console.log(2025 - 2015); // Resta
console.log(10 * 5); // Multiplicación
console.log(100 / 4); // División
console.log(10 % 3); // Módulo
console.log(10 ** 10); // Exponenciación

// 7. Crear una variable para cada operador de asignación y mostrar el resultado en consola

let y = 5;
y += 3; // y = y + 3
console.log(y); // 8

y -= 2; // y = y - 2
console.log(y); // 6

y *= 2; // y = y * 2
console.log(y); // 12