// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

const subaruWRX2025 = [
    "WRX tS 2025",
    49995,
    "Azul",
    "Subaru Boxer 4 cilindros",
    2387,
    "inyección directa turbo",
    271,
    258,
    "Automática",
    8,
    true
];

const  [model, price] = subaruWRX2025;
console.log(model); // WRX tS 2025
console.log(price); // 49995

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const [model2, price2 = 0, color = "Desconocido"] = subaruWRX2025;
console.log(model2); // WRX tS 2025
console.log(price2); // 49995
console.log(color); // Azul


// 3. Usa desestructuración para extraer dos propiedades de un objeto

 let subaruWRXts2025v1 = {
  modelo: "WRX tS 2025",
  motor: {
    tipo: "Subaru Boxer 4 cilindros",
    cilindrada: 2387, // en cc
    alimentacion: "inyección directa turbo",
    potencia: 271, // hp a 5600 rpm
    torque: 350, // Nm entre 2000-5200 rpm
    transmision: {
      tipo: "Manual", // La versión tS viene con caja manual de 6 velocidades
      velocidades: 6,
      modoManual: true
    }
  }
};

const { modelo, motor: { tipo, potencia } } = subaruWRXts2025v1;
console.log(modelo); // WRX tS 2025
console.log(tipo); // Subaru Boxer 4 cilindros
console.log(potencia); // 271

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const { modelo: modeloWRX, motor: { tipo: tipoMotor } } = subaruWRXts2025v1;
console.log(modeloWRX); // WRX tS 2025
console.log(tipoMotor); // Subaru Boxer 4 cilindros

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const { motor: { transmision: { tipo: tipoTransmision, velocidades } } } = subaruWRXts2025v1;
console.log(tipoTransmision); // Manual
console.log(velocidades); // 6

// 6. Usa propagación para combinar dos arrays en uno nuevo

const  airbags = [
  "conductor",
  "acompañante",
  "cortina delanteros y traseros",
  "rodilla conductor",
  "laterales delanteros",
  "central"
]

let newSubaruWRX2025 = [...subaruWRX2025, ...airbags];
console.log(newSubaruWRX2025);

// 7. Usa propagación para crear una copia de un array

let newSubaruWRX2025Copy = [...newSubaruWRX2025];
console.log(newSubaruWRX2025Copy);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let seguridadSubaruWRX2025 = {
  airbags: 8,
  abs: true,
  controlEstabilidad: true,
  controlTraccion: true,
  camaraReversa: true,
  monitoreoPuntoCiego: true
};

let subaruWRXts2025v3 = { ...subaruWRXts2025v1, ...seguridadSubaruWRX2025 };
console.log(subaruWRXts2025v3);

// 9. Usa propagación para crear una copia de un objeto

let subaruWRXts2025v3Copy = { ...subaruWRXts2025v3 };
console.log(subaruWRXts2025v3Copy);

// 10. Combina desestructuración y propagación
let { modelo: modeloFinal, motor: { tipo: tipoMotorFinal, potencia: potenciaFinal } } = subaruWRXts2025v3;
let subaruWRXFinal = { ...subaruWRXts2025v3, modelo: modeloFinal, tipoMotor: tipoMotorFinal, potencia: potenciaFinal };
console.log(subaruWRXFinal);
// 11. Usa desestructuración para extraer propiedades de un objeto y propagación para crear un nuevo objeto
let { modelo: modeloFinal2, motor: { tipo: tipoMotorFinal2, potencia: potenciaFinal2 } } = subaruWRXts2025v3Copy;
let subaruWRXFinal2 = { ...subaruWRXts2025v3Copy, modelo: modeloFinal2, tipoMotor: tipoMotorFinal2, potencia: potenciaFinal2 };
console.log(subaruWRXFinal2);