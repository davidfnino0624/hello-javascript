// 1. Crea un función que utilice error correctamente

function checkEvenNumber(number) {
    if (number % 2 !== 0) {
        console.error(`Error: ${number} is not an even number.`);
    }else {
        console.log(`good job!, ${number} is an even number.`);
    }
}

checkEvenNumber(3);

// 2. Crea una función que utilice warn correctamente

function sumOneDigitNumbers(a, b) {
    if (a < 0 || a > 9 || b < 0 || b > 9) {
        console.warn(`Advertencia: Esta applicacion solo acepta numeros de un solo digito.`);
    } else {
        console.log(`la suma de ${a} y ${b} es: ${a + b}`);
    }
}

sumOneDigitNumbers(10, 5);

// 3. Crea una función que utilice info correctamente

function displayUserInfo(name, age) {
    if (typeof name !== 'string' || typeof age !== 'number') {
        console.info(`información: El nombre debe ser una cadena y la edad un número.`);
    } else {
        console.info(`Información del usuario: Nombre: ${name}, Edad: ${age}`);
    }
}

displayUserInfo('Alice', 30);

// 4. Utiliza table

let list = [
        { name: 'Laptop', price: 1200, stock: 10 },
        { name: 'Smartphone', price: 800, stock: 25 },
        { name: 'Tablet', price: 500, stock: 15 }
    ];

function displayProducts(products) {
    if (!Array.isArray(products) || products.length === 0) {
        console.error(`Error: No se proporcionaron productos válidos.`);
    } else {
        console.table(products);
    }
}

displayProducts(list);

// 5. Utiliza group

console.group(`car information`);
console.log(`Make: Toyota`);
console.log(`Model: Corolla`);
console.log(`Year: 2023`);
console.group(`Specifications`);
console.log(`Engine: 1.8L`);
console.log(`Transmission: Automatic`);
console.groupEnd();

// 6. Utiliza time
console.time(`time to iterate over array`);

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    // Simulating some work with each number
    console.log(`Processing number: ${numbers[i]}`);
}
console.timeEnd(`time to iterate over array`);

// 7. Valida con assert si un número es positivo

function validatePositiveNumber(number) {
    console.assert(number >= 0, `Error: ${number} is not a positive number.`);
    if (number >= 0) {
        console.log(`Good job! ${number} is a positive number.`);
    }
}

// 8. Utiliza count

console.count(`transaction`);
console.count(`transaction`);
console.count(`transaction`);
console.count(`transaction`);
console.countReset(`transaction`);
console.count(`transaction`);

// 9. Utiliza trace

function traceFunction(functionName) {
    console.trace(functionName)
}

//traceFunction(validatePositiveNumber(15))


// 10. Utiliza clear

//console.clear();

// 11. Utiliza debug

function debugExample() {
    console.debug(`This is a debug message.`);
    let x = 10;
    let y = 20;
    console.debug(`x: ${x}, y: ${y}`);
}

debugExample();