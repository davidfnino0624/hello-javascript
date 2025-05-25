//loops or iterations

// for loop

let myName = 'David'

for (let i = 0; i < 2; i++){
    console.log(`Hi there,
Glad to have
you here, ${myName}!`)
}

const myArray1 = [145, 565, 354, 544 , 545 , 846, 547, 844, 169, 101] 

for (let i = 0; i < myArray1.length; i++) {
    console.log(`En la posicion ` + i + ` esta el elemento: ${myArray1[i]}`)
}

// while

let i = 0

while(i < myArray1.length) {
    console.log(`En la posicion ` + i + ` esta el elemento: ${myArray1[i]}`)
    i++
}

//while(true) bucle infinito por que siempre sera true

// do while 
let j = 0

do {
    console.log(`En la posicion ` + j + ` esta el elemento: ${myArray1[j]}`)
    j++
}while(j < myArray1.length)


//for of 

let myArray = ['David', 'Niño', 'pipe', 24, true];

let mySet = new Set(["david", "felipe", "nino", 24, false, 'davidnino0624@gmail.com']);

let myMap = new Map([
    ["name", "David"],
    ["email", "davidnino0624@gmail.com"],
    ["age", 24]
]);


for (let value of myArray) {
    console.log(`El valor es: ${value}`)
}
for (let value of mySet) {
    console.log(`El valor es: ${value}`)
}
for (let value of myMap) {
    console.log(`El valor es: ${value}`)
}

let myString = "Hola javaScript"
for (let char of myString) {
    console.log(`${char}`)
}

//goods behaviors

//break and continue

for (let i = 0; i < myArray1.length; i++) {
    if (myArray1[i] === 545) {
        console.log(`El elemento es: ${myArray1[i]}`)
        continue
    } else if (myArray1[i] === 169) {
        console.log(`El elemento es: ${myArray1[i]}`)
        break
    }
    console.log(`El elemento es: ${myArray1[i]}`)
}
//break: termina el bucle
//continue: salta la iteracion actual y continua con la siguiente