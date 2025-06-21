// Importacion de modulos

//"type": "module", va en un archivo .json e indica que el código es un módulo ES6, esto permite usar la sintaxis de importación y exportación.

import { primeNumbersBeetewnAFrame, primeNumbers, PI, name, Cubo } from './28-export-modules.js';
import fun from './28-export-modules.js';
import {Employee } from './23-classes-exercises.js';
import R from './23-classes-exercises.js';

// Funciones

primeNumbersBeetewnAFrame(30, 75);

console.log(`El valor de PI es: ${PI}.`);
console.log(`El nombre es: ${name}.`);

console.log(fun())

// clases
//primero de debe instanciar un nuevo objeto

let cubo1 = new Cubo(7)

console.log(cubo1.area())
console.log(cubo1.volumen()/*esto ayuda a definir la cantidad de decimales que se quieren imprimir en consola*/.toFixed(1))

let personX = new R('David', 24)

console.log(personX)

let employeeX = new Employee('Mc Greoger', 36, 'Operation Manager', 5000, 785456982)

console.log(employeeX);
employeeX.introduce();

// proyecto modular

// import { MyImport } from  './directory/file.js'

// modulos externos 

//const os = require('os')