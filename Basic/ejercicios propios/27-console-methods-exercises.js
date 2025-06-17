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



// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear