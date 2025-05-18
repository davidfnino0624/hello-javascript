// 1. Concatena dos cadenas de texto
let str1 = "Hola";
let myName = "David";
let str2 = "¿Cómo estás?";
let greeting = str1 + " " + myName + " " + str2;
console.log(greeting);

// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length);

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0]+greeting[22]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let pharagraph = `Hola, soy David
y estoy aprendiendo 
JavaScript.`;

console.log(pharagraph);

// 6. Interpola el valor de una variable en un string

let variable1 = 24;
let variable2 = 12;

console.log(`La suma de ${variable1} y ${variable2} es ${variable1 + variable2}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("David"));
console.log(greeting.includes("Dav"));
console.log(greeting.includes("PGL"));

// 9. Comprueba si dos strings son iguales

console.log(str1 !== str2);
console.log(str1 === 'Hola');

// 10. Comprueba si dos strings tienen la misma longitud

console.log(str1.length == str2.length);

