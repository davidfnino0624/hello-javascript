// 1. Crea un objeto con 3 propiedades

let vehicle = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

// 2. Accede y muestra su valor
console.log(vehicle);
// 3. Agrega una nueva propiedad

vehicle.engineDisplacement = '1.8L';
console.log(vehicle);

// 4. Elimina una de las 3 primeras propiedades

delete vehicle.year;
console.log(vehicle);

// 5. Agrega una función e invócala

vehicle.playHorn = function() {
    console.log('Beep beep!');
};

vehicle.playHorn();

// 6. Itera las propiedades del objeto

for (let key in vehicle) {
    console.log(`${key}: ${vehicle[key]}`);
} 

// 7. Crea un objeto anidado

vehicle.owner = {
    name: 'David Nino',
    age: 24,
    address: {
        street: 'carrera 14 # 31c - 04 sur',
        city: 'Bogotá',
        country: 'Colombia'
    }
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(vehicle.owner.name); // David Nino
console.log(vehicle.owner.address.city); // Bogotá

// 9. Comprueba si los dos objetos creados son iguales

let anotherVehicle = {
    make: 'Toyota',
    model: 'Corolla',
    engineDisplacement: '1.8L',
    owner: {
        name: 'David Nino',
        age: 24,
        address: {
            street: 'carrera 14 # 31c - 04 sur',
            city: 'Bogotá',
            country: 'Colombia'
        }
    }
};

console.log(JSON.stringify(vehicle) === JSON.stringify(anotherVehicle)); // true
console.log(vehicle === anotherVehicle); // false, porque son referencias diferentes

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(vehicle.make === anotherVehicle.make); // true
console.log(vehicle.owner.name === anotherVehicle.owner.age); // false