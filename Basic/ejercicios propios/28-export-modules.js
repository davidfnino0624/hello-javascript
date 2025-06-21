// Exportacion de modulos

//"type": "module", va en un archivo .json e indica que el código es un módulo ES6, esto permite usar la sintaxis de importación y exportación.

// Funciones
export function primeNumbersBeetewnAFrame (number1, number2) {
    let myArray = new Array ()
    for (let y = number1; y <= number2; y++) {
        if (primeNumbers(y)) {
            myArray.push(y)
        }
    }
    console.log(`La lista de los numeros primos en este rango es: ${myArray}.`)
}


export function primeNumbers (value2){
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


// propiedades

export const PI = 3.1416

export const name = `David`

export default function defaultGreet() { // Solo se puede exportar una funcion por defecto, no se puede exportar una propiedad por defecto.
    console.log(`Esto se exporta por defecto si no se especifica el nombre de la funcion o una propiedad.`)
}


// Clases

export class Cubo {
    constructor (lado) {
        this.lado = lado
    }
    volumen(){
        return Math.pow(this.lado, 3) // esta seria mas compatibles con versiones antiguas de Ecma Script 
    }
    area() {
        return 6 * (this.lado ** 2) // esta forma es mas eficiente y compatible con versiones mas recientes de Ecma Script
    }
}

