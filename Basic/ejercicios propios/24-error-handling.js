//exeption

/*
let myObject

console.log(myObject.name) // TypeError: Cannot read properties of undefined (reading 'name')
*/

//tratamiento de errores

// try...catch
try {
    let myObject = undefined;
    console.log(myObject.name); // TypeError: Cannot read properties of undefined (reading 'name')
}catch (error){
    console.log("An error occurred:", error.message);
    // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario
}

// finally
try {
    let myObject = undefined;
    console.log(myObject.name); // TypeError: Cannot read properties of undefined (reading 'name')
}catch (error) {
    console.log("An error occurred:", error.message);
}finally {
    console.log("This will always run, regardless of whether an error occurred or not.");
}

// throw

function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Arguments cannot be NaN.");
    }
    if (a < 0 || b < 0) {
        throw new Error("Arguments must be non-negative.");
    }
    if (a === 0 || b === 0) {
        throw new Error("Arguments must be non-zero.");
    }
    return a + b;
}

try {
    console.log(sumar(5, '10')); // Error: Both arguments must be numbers.
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This will always run, regardless of whether an error occurred or not.");
}
// Custom error class
/*class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}*/

// capture several errors

try {
    let myObject = undefined;
    console.log(myObject.name); // TypeError: Cannot read properties of undefined (reading 'name')
    console.log(sumar(5, '10')); // Error: Both arguments must be numbers.
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError occurred:", error.message);
    } else if (error instanceof Error) {
        console.log("General Error occurred:", error.message);
    } else {
        console.log("An unexpected error occurred:", error);
    }
}

//crear exerpción personalizada

class CustomError extends Error {
    constructor(a, b, message) {
        super(message);
        this.name = "CustomError";
        this.a = a;
        this.b = b;
    }
    printNumbers() {
        console.log(this.a, '+', this.b);
    }
}


try {
    console.log(sumar(0, 10));
}
catch (error) {
    if (error instanceof CustomError) {
        console.log("CustomError occurred:", error.message);
        error.printNumbers();
    } else {
        console.log("An unexpected error occurred:", error);
    }
}