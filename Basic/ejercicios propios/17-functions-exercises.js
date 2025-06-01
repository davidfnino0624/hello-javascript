// 1. Crea una función que reciba dos números y devuelva su suma

function sumaDeDosNumeros (a, b) {
    return a + b
}

console.log(sumaDeDosNumeros(8, 6))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myNumbersArray = [145, 565, 354, 544 , 545 , 846, 547, 844, 169, 101]



function getBackTheHighestNumber(value){
    let hn = myNumbersArray[0]
    for( value of myNumbersArray) {
        if(value > hn) {
            hn = value
        }
    }
    return hn
}

console.log(getBackTheHighestNumber())

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene


function countVowels (string) {
    
    let word = string

    let contador = 0

    let vocales = 'aeiou'

    for(let value of word){
        if (vocales.includes(value)){
        contador ++
        }
    }
    return contador
}

console.log(countVowels('abuelito'))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let myArray3 = ['David', 'Niño', 'pipe'];

let myArray4 = new Array();

function getTheStringToUpperCase (array, newarray) {
    for (let value1 of array) {
        newarray.push(value1.toUpperCase())
    }
    return myArray4
}

getTheStringToUpperCase(myArray3, myArray4)
console.log(myArray4)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primeNumbers (value2){
    let contador2 = 0
    for (let i = 1; i <= value2; i++) {
        if (value2 % i == 0) {
            contador2 ++
        }
    }
    if (contador2 <= 2) {
        return true
    } else {
        return false
    }
}

console.log(primeNumbers(32))

//hallar los numeros primos en determinado rango
let myArray10 = new Array ()

function primeNumbersBeetewnAFrame (number1, number2) {

    for (let y = number1; y <= number2; y++) {
        if (primeNumbers(y)) {
            myArray10.push(y)
        }
    }
    console.log(`La lista de los numeros primos en este rango es: ${myArray10}.`)
}

primeNumbersBeetewnAFrame(30, 75)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let firstArray = ['David', 'Felipe', 'Nino', 'Rodriguez', 24, 'davidnino0624@gmail.com']

let secondArray = ['David', 'Alejandro', 'Nino', 'Cardona', 24, 'danc@gmail.com']

let theThirdArray = new Array ()

function cofirmElements (arrayN, arrayM){
    for (let n = 0; n < arrayN.length || n < arrayM.length; n++) {
        if (arrayN[n] == arrayM[n]) {
            theThirdArray.push(arrayN[n])
        }
    }
    console.log(`los elementos comunes son: ${theThirdArray}`)
}

cofirmElements(firstArray, secondArray)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function plusEvenNumbers(array,value4){
    let suma = 0
    for (value4 of array){
        if (value4 % 2 == 0) {
            suma += value4
        }
    }
    console.log(`la suma de los numeros pares es: ${suma}`)
}

plusEvenNumbers(myNumbersArray)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayNumbers2 = [2, 8, 7, 9, 6, 3, 4, 5]
let potenciatedArray = new Array ()

function potenciaNumeros(arrayEx) {
    for(let indexz of arrayEx){
        indexz *= indexz
        potenciatedArray.push(indexz)
    }
    console.log(`los numeros potenciados son: ${potenciatedArray}`)
} 

potenciaNumeros(arrayNumbers2)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let myString1 = 'Isaac no ronca así'
let newString = ''


function stringinverso(string){
    for (let index1 of string) {
    newString = index1 + newString
    }
    console.log(newString)
}

stringinverso(myString1)

// 10. Crea una función que calcule el factorial de un número dado

function factorialNumberOf(x) {
    let total = 1
    for (let r = x ; r > 0; r--){
        total *= r
    }
    console.log(`el factorial del numero ${x} es: ${total}`)
}

factorialNumberOf(7)