// 1. Crea un array que almacene cinco animales

let animals = ['dog', 'cat', 'tiger', 'bear', 'lion'];
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('elephant'); // Añade 'elephant' al principio
animals.push('giraffe'); // Añade 'giraffe' al final
console.log(animals);


// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1); // Elimina el elemento en la posición 2 (tercera posición)
console.log(animals)


// 4. Crea un set que almacene cinco libros

let books = new Set(['1984', 'Brave New World', 'Fahrenheit 451', 'The Great Gatsbby', 'To Kill a Mockingbird']);
console.log(books);

// 5. Añade dos más. Uno de ellos repetido

books.add('mobydick', 'The Great Gatsbby'); // Añade 'mobydick' y 'The great gatsby' (repetido)
console.log(books);
// books.add('The Great Gatsbby'); // No se añade porque ya existe

// 6. Elimina uno concreto a tu elección

books.delete('1984'); // Elimina '1984'
console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December']
])

console.log(months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (months.has(5)) {
    console.log(`El mes número 5 es: ${months.get(5)}`);
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set('summer', ['June', 'July', 'August']);
console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = ['apple', 'banana', 'orange', 'apple', 'banana'];
let setFromArray = new Set(array);
let mapFromSet = new Map();
setFromArray.forEach((value, index) => {
    mapFromSet.set(index, value);
});
console.log(mapFromSet);