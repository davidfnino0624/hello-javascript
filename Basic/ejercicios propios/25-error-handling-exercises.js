class CustomError1 extends Error{
    constructor(message){
        super(message);
        this.name = `Error de logica valor`
    }

}

class CustomError2 extends Error{
    constructor(message){
        super(message);
        this.name = `Error de Maximos valores`
    }

}

// 1. Captura una excepción utilizando try-catch
let banckAccount = 5000
let maxAmountToWithdraw = 10000
let maxAmountToDeposit = 100000

function withdraw(amount) {
    if (amount > banckAccount) {
        throw new CustomError1("Insufficient funds");
    }else if (amount > maxAmountToWithdraw) {
        throw new CustomError2 (`The max amount per withdraw is ${maxAmountToWithdraw}`)
    }
    banckAccount -= amount;
}

function deposit(amount) {
    if (amount <= 0) {
        throw new CustomError1("Deposit amount must be positive");
    }else if (amount > maxAmountToDeposit) {
        throw new CustomError2 (`The max amount per deposit is ${maxAmountToDeposit}`)
    }
    banckAccount += amount;
}

/*try {
    deposit (-100)
} catch (error){
    console.log(`There is an error message: ${error.message}`)
} finally {
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    withdraw (25001)
} catch (error){
    console.log(`There is an error message: ${error.message}`)
} finally {
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

// 3. Lanza una excepción genérica

//throw Error (`Este es un error de prueba generico`);  

// 4. Crea una excepción personalizada

/*class CustomError1 extends Error{
    constructor(message){
        super(message);
        this.name = `CustomErrorMessage:`
    }

}*/

// 5. Lanza una excepción personalizada

try {
    withdraw(10000)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else{
    console.log(`This is other kind of error, ${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

// 6. Lanza varias excepciones según una lógica definida

try {
    deposit(-100)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else{
    console.log(`This is other kind of error, ${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}


try {
    withdraw(10001)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else{
    console.log(`This is other kind of error, ${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

try {
    deposit(100001)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else{
    console.log(`This is other kind of error, ${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    withdraw(10000)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else if (error instanceof CustomError2){
    console.log(`${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

try {
    deposit(-100)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else if (error instanceof CustomError2){
    console.log(`${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

try {
    withdraw(10001)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else if (error instanceof CustomError2){
    console.log(`${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

try {
    deposit(100001)
}catch (error) {
    if (error instanceof CustomError1){
        console.log(`${error.name}: ${error.message}`)
    }else if (error instanceof CustomError2){
    console.log(`${error.name}: ${error.message}`)
    }
}finally{
    console.log(`Thanks for using Fuck Bank, your account balance is: ${banckAccount}`)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let myNumbersArray = ['10.5', 'abc8.2', '7.6']

let floatNumbers = new Array ()

function anyToFloat (array)  {
    for (let index of array) {
        try {
            let floatValue = parseFloat(index);
            if (!isNaN(floatValue)){
                floatNumbers.push(floatValue);
            }else{
                throw new Error (`El valor ${index} debe ser un numero`);
            }   
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
    console.log(`Float numbers: ${floatNumbers}`);
}

anyToFloat(myNumbersArray);

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class CustomError3 extends Error{
    constructor(message){
        super(message);
        this.name = `PropertyNotFoundError`;
    }
}

function checkProperty (property){
    let obj = { 
        name: "John",
        age: 30 
    };
    let propertyToCheck = property;

    try {
        if (!obj.hasOwnProperty(propertyToCheck)) {
            throw new CustomError3(`The property "${propertyToCheck}" does not exist in the object.`);
        } else {
            console.log(`The property "${propertyToCheck}" exists in the object.`);
        }
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }finally {
        console.log("Property check completed.");
    }
}

checkProperty("name");
checkProperty("address");
checkProperty("age");

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(functionUsed, maxRetries = 10) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            functionUsed(); // Replace with the function you want to retry
            console.log("Operation successful.");
            break; // Exit loop if operation is successful
        } catch (error) {
            attempts++;
            console.log(`Attempt ${attempts} failed: ${error.message}`);
            if (attempts === maxRetries) {
                console.log("Max retries reached. Operation failed.");
            }
        }
    }
}

// Example usage of retryOperation
retryOperation(() => deposit(100001)); // This will throw an error and be retried