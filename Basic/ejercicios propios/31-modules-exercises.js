// 1. Exporta una función

 export function factorialNumberOf(x) {
    let total = 1
    for (let r = x ; r > 0; r--){
        total *= r
    }
    console.log(`el factorial del numero ${x} es: ${total}`)
}

// 2. Exporta una constante

export const goldenRatio = 1.6180

// 3. Exporta una clase

export class Vape {
    constructor(model, battery, size, ovenCapacity, temperatureControl) {
        this.model = model
        this.battery = battery
        this.size = size
        this.ovenCapacity = ovenCapacity
        this.temperatureControl = temperatureControl
    }

}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
 /*
export default function plusEvenNumbers(array){
    let suma = 0
    for (value4 of array){
        if (value4 % 2 == 0) {
            suma += value4
        }
    }
    console.log(`la suma de los numeros pares es: ${suma}`)
}


const theConst = 24
export default theConst; // a module cannot have multiple default exports
*/ // Solo permite un default por modulo o archivo

export default class PortableVape extends Vape {
    constructor(model, battery, size, ovenCapacity, temperatureControl, maxSize){
        super(model, battery, size, ovenCapacity, temperatureControl);
        this.maxSize = maxSize
    }
}

// 9. Exporta una función, una constante y una clase desde una carpeta

