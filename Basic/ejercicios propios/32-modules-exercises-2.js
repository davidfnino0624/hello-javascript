// 4. Importa una función

import xyz, { factorialNumberOf, goldenRatio, Vape } from "./31-modules-exercises.js";

factorialNumberOf(5);
// 5. Importa una constante

console.log(goldenRatio);

// 6. Importa una clase

let vape1 = new Vape (
    "AirVape X",           // model
    "1300mAh",             // battery
    "compact",             // size
    0.5,                   // ovenCapacity (en gramos)
    true  
)

console.log(vape1)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

const xsGo = new xyz(
  "AirVape Xs GO",    // model
  "1200mAh",          // battery
  "ultra-compact",    // size
  0.25,               // ovenCapacity (en gramos)
  false,              // temperatureControl (no es preciso, solo presets)
  "ultra-compact"     // maxSize
);

console.log(xsGo) // se podria usar varios valores de defaul en un solo archivo si todos estos vienen de modulos diferentes

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { countVowels } from "../17-functions-exercises.js";

countVowels(`abuelito`)
