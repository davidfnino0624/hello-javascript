// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log("La suma de los números del 1 al 100 es: " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let j = 1;
while (j <= 50) {
    if (j % 2 == 0) {
        console.log(`${j}`)
    }
    j++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myNamesArray = ['David','Erik','Rocio','Jobani']

for(let t = 0; t < myNamesArray.length; t++ ){
    console.log(`${myNamesArray[t]}`)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let contador = 0

let vocales = 'aeiou'

let word = 'abuelito'

for(let value of word){
    if (vocales.includes(value)){
        contador ++
    }
}

console.log(`la cantidad de vocales en la palabra que ingresaste es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbersArray = [5, 2, 8, 6, 2, 5, 2];
let k = 0;
let total = 1;
/*
do {
    total *= numbersArray[k]
    k ++
}while(k < numbersArray.length)
*/

for (let index of numbersArray) {
    total *= numbersArray[k]
    k++
}

console.log(`El total de la operacion es ${total}!`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let number = 7;

for (let z = 1; z <= 10; z++) {
    console.log(`${number} x ${z} = ${number*z}`)
}

// 8. Usa un bucle para invertir una cadena de texto


let myString1 = 'Isaac no ronca así'
let y = myString1.length-1;
let newString = ''

/*for(let y = myString1.length - 1; y >= 0; y--){
    newString += myString1[y]
}

*/

for (let index1 of myString1) {
    newString = index1 + newString
}

console.log(newString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;   // Primer número Fibonacci
let b = 1;   // Segundo número Fibonacci
let total1 = 0;

for(let h = 0; h < 10; h++){
    if (h === 0) {
        total1 = a;  // Primer valor: 0
    } else if (h === 1) {
        total1 = b;  // Segundo valor: 1
    } else {
        let temp = a + b;
        a = b;
        b = temp
        total1 = temp;
    }
    
    console.log(total1)
}

let fibonacci = [0, 1]; // Inicializamos el array con los dos primeros números

for (let i = 2; i < 10; i++) {
    // El siguiente número es la suma de los dos anteriores
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci); // Imprime: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let fibonacciMayorDe10 = new Array()
let r = 0;
for(let index2 of fibonacci) {
    if (index2 > 10) {
        fibonacciMayorDe10.push(fibonacci[r])
    }
    r++
}
console.log(fibonacciMayorDe10);