let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

myArray = [24]; // definición de un array
myArray2 = new Array(24); // estructura de dato 

console.log(myArray);
console.log(myArray2);

let myArray3 = [1, 2, 3, 4];
let myArray4 = new Array(1, 2, 3, 4);

console.log(myArray3);
console.log(myArray4);

let myArray5 = ['David', 'Niño', 'pipe', 24, true];
let myArray6 = new Array('David', 'Niño', 'pipe', 24, true);

console.log(myArray5);
console.log(myArray6);

let myArray7 = new Array(5);

myArray7[0] = 'David';
myArray7[1] = 'Niño';
myArray7[2] = 'pipe';
myArray7[3] = 24;
myArray7[4] = true;

console.log(myArray7);

//metodods comunes

let myArray8 = [];

// push y pop
myArray8.push('David');// añade un elemento al final del array
myArray8.push('Niño');
myArray8.push('pipe');
myArray8.push(24);  
//myArray8.pop(); // elimina el último elemento del array
console.log(myArray8); // imprime el array

console.log(myArray8.pop()); // elimina el último elemento del array y lo imprime

console.log(myArray8);

//shift y unshift

myArray8.shift(); // elimina el primer elemento del array

console.log(myArray8);

myArray8.unshift('David', 'felipe'); // añade un elemento al principio del array
console.log(myArray8);

//length
console.log(myArray8.length); // imprime la longitud del array

//clear
myArray8 = []; // vacía el array
myArray8.length = 0; // vacía el array
console.log(myArray8);
// concat
let myArray9 = [1, 2, 3];
let myArray10 = [4, 5, 6];
let myArray12 = [7, 8, 9];
let myArray13 = [10, 11, 12];
let myArray11 = myArray9.concat(myArray10); // concatena dos arrays
console.log(myArray11); // imprime el array concatenado

myArray11.concat(myArray12, myArray13); // concatena varios arrays
console.log(myArray11); // imprime el array concatenado

myArray11.push(13, 14, 15); // añade elementos al final del array
console.log(myArray11); // imprime el array concatenado

myArray11.unshift(myArray9, myArray10); // añade elementos al principio del array
console.log(myArray11); // imprime el array concatenado

// splice and slice

let myArray14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArray15 = myArray14.slice(2, 5); // devuelve una copia del array desde el índice 2 hasta el índice 5
console.log(myArray14); // imprime el array original
console.log(myArray15); // imprime el array copiado

let myArray16 = myArray14.splice(2, 5); // elimina 5 elementos desde el índice 2
console.log(myArray14); // imprime el array original
console.log(myArray16); // imprime el array eliminado