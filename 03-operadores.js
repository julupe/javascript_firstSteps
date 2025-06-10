//Operadores

//Operadores Aritméticos
let a = 10;
let b = 5;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División
console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponenciación

a++; // Incremento - aumenta el valor de a en 1
b--; // Decremento - disminuye el valor de b en 1
console.log(a); // Imprime 11
console.log(b); // Imprime 4

//Operadores de Asignación
let c = 20;
c += 5; // c = c + 5
c -= 2; // c = c - 2
c *= 3; // c = c * 3
c /= 4; // c = c / 4
c %= 2; // c = c % 2

console.log(c); // Imprime 1 (20 + 5 - 2 = 23, 23 * 3 = 69, 69 / 4 = 17.25, 17.25 % 2 = 1.25)

//Operadores de Comparación
let d = 5;
let e = 8;
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log(d == e); // Igualdad por valor
console.log(d == "e"); // Igualdad por valor (d es 5, "e" es 8)

// Operadores de Comparación Estricta
console.log(d === e);
console.log(d !== e);

// Operadores Lógicos

// and (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// or (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// not (!) Da sentido contrario a un valor booleano - invierte el valor
console.log(!true); // false
console.log(!false); // true

/* Operadores ternarios: ? y :
Si se cumple, se ejecuta la primera expresión (?), si no, la segunda (:)*/
let edad = 17;
let esMayor = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayor);