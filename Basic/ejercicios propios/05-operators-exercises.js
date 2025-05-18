// 1. Crea una variable para cada operación aritmética
let Sum = 7 + 8;
console.log(Sum);
let Subtraction = 7 - 8;
console.log(Subtraction);
let Multiplication = 7 * 8;
console.log(Multiplication);
let Division = 7 / 8;
console.log(Division);
let Modulus = 7 % 8;
console.log(Modulus);
let Exponentiation = 7 ** 8;
console.log(Exponentiation);
let myVariable = 4;
console.log(myVariable);
let Increment = myVariable++;
console.log(myVariable);
let Decrement = myVariable--;
console.log(myVariable);
let AdditionAssignment = myVariable += 2;
console.log(myVariable);
let SubtractionAssignment = myVariable -= 3;
console.log(myVariable);
let MultiplicationAssignment = myVariable *= 2;
console.log(myVariable);
let DivisionAssignment = myVariable /= 2;
console.log(myVariable);
let ModulusAssignment = myVariable %= 2;
console.log(myVariable);
let ExponentiationAssignment = myVariable **= 2;
console.log(myVariable);

// 2. Crea una variable para cada tipo de operación de asignación,
//que haga uso de las variables utilizadas para las operaciones aritméticas

let initialValue = 24;

let sumAssignment;
sumAssignment = initialValue;
sumAssignment += Sum; // addition assignment
console.log(sumAssignment);

let subtractionAssignment;
subtractionAssignment = initialValue;
subtractionAssignment -= Subtraction; // subtraction assignment
console.log(subtractionAssignment);

let multiplicationAssignment;
multiplicationAssignment =initialValue;
multiplicationAssignment *= Multiplication; // multiplication assignment
console.log(multiplicationAssignment);

let divisionAssignment;
divisionAssignment = initialValue;
divisionAssignment /= Division; // division assignment
console.log(divisionAssignment);

let modulusAssignment;
modulusAssignment = initialValue;
modulusAssignment %= Modulus; // modulus assignment
console.log(modulusAssignment);

let exponentiationAssignment;
exponentiationAssignment = initialValue
exponentiationAssignment **= Exponentiation; // exponentiation assignment
console.log(exponentiationAssignment);// infinite number

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(multiplicationAssignment > divisionAssignment);
console.log(subtractionAssignment < multiplicationAssignment);
console.log(divisionAssignment >= modulusAssignment);
console.log(divisionAssignment <= exponentiationAssignment);
console.log(subtractionAssignment != multiplicationAssignment);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(multiplicationAssignment < divisionAssignment);
console.log(subtractionAssignment > multiplicationAssignment);
console.log(divisionAssignment <= modulusAssignment);
console.log(divisionAssignment >= exponentiationAssignment);
console.log(subtractionAssignment == multiplicationAssignment);

// 5. Utiliza el operador lógico and

console.log(multiplicationAssignment > divisionAssignment && subtractionAssignment < multiplicationAssignment);
console.log(divisionAssignment >= modulusAssignment && divisionAssignment >= exponentiationAssignment);


// 6. Utiliza el operador lógico or

console.log(multiplicationAssignment > divisionAssignment || subtractionAssignment < multiplicationAssignment);
console.log(divisionAssignment >= modulusAssignment || divisionAssignment >= exponentiationAssignment);
console.log(multiplicationAssignment < divisionAssignment || subtractionAssignment > multiplicationAssignment); 

// 7. Combina ambos operadores lógicos
console.log(multiplicationAssignment > divisionAssignment && (subtractionAssignment > multiplicationAssignment || divisionAssignment == modulusAssignment));
console.log(divisionAssignment <= exponentiationAssignment && (multiplicationAssignment > divisionAssignment || subtractionAssignment > multiplicationAssignment));

// 8. Añade alguna negación

console.log(!(multiplicationAssignment > divisionAssignment && (subtractionAssignment > multiplicationAssignment || divisionAssignment == modulusAssignment)));
console.log(!(divisionAssignment <= exponentiationAssignment && (multiplicationAssignment > divisionAssignment || subtractionAssignment > multiplicationAssignment)));

// 9. Utiliza el operador ternario

let cushion = true
let continuePlaying = cushion ? 'you can continue playing' : 'opponets turn';
console.log(continuePlaying);

let cushion1 = false
let continuePlaying1 = cushion1 ? 'you can continue playing' : 'opponets turn';
console.log(continuePlaying1);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let numero = 12;
let minimo = 10;
let maximo = 20;

let estaEnRangoYEsPar = (numero > minimo && numero < maximo) && (numero % 2 === 0);
console.log("¿Está en el rango y es par?", estaEnRangoYEsPar);