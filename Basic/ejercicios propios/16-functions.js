//funtion

function firstFunction () {
    console.log('Hola, que bueno verte')
}

//firstFunction()

let myName = 'David'

for (let i = 0; i < 2; i++){
    firstFunction()
}

// with parameters

function funcWithParams (myName){
    console.log(`Hola, ${myName}!`)
}

funcWithParams('David Nino')

//funciones anonimas 

const myFunct2 = function (name) {
    console.log(`Hola, ${name}!`)
}

myFunct2('David F')

//arrow funtions

const myFunct3 = (newName) => {
    console.log(`Hola, ${newName}!`)
} 

myFunct3('plgo so')

// parametros 

function sum (a, b) {
    console.log(a + b)
}

sum (7, 8)
sum (5)
sum ()

function defaultSum (a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(7)
defaultSum(8, 9)
defaultSum(8)
//defaultSum(b = 15)

//retorno de valores 

function multi (x, y){
    return y * x
}

console.log(multi(5, 7))

//funciones anidadas

function extern(){
    console.log('external function')
    function intern(){
        console.log('internal function')
    }
    intern ()
}

extern()
//intern() error: fuera del scope

//funciones de orden superior

function applyFunc (func, param){
    func(param)
}
applyFunc(myFunct3, 'Funcion de orden superior')

//forEach

let myArray1 = [145, 565, 354, 544 , 545 , 846, 547, 844, 169, 101]

myArray1.forEach((value) => console.log(value))

let mySet = new Set(["david", "felipe", "nino", 24, false, 'davidnino0624@gmail.com']);

mySet.forEach((valor) => console.log(valor))

let myMap = new Map([
    ["name", "David"],
    ["email", "davidnino0624@gmail.com"],
    ["age", 24]
]);

myMap.forEach((valor1) => console.log(valor1))
