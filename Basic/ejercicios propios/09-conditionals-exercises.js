// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "David";
let anyName = myName;
if (anyName == myName) {
    console.log(myName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'davidnino0624';
let password = 'AdM1df6nr24$$';

if (user == 'davidnino0624' && password == 'AdM1df6nr24$$') {
    console.log('Thanks for autenticate! Welcome!');
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 3;

if (number != 0) {
    console.log(number > 0 ? "El número es positivo" : "El número es negativo");
}else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 12;
if (age < 18) {
    console.log(`No puedes votar, te faltan ${18 - age} años`);
}else {
    console.log("Puedes votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age2 = 24;
console.log(age2 = (age >= 18) ? "adulto" : "menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let Month = 10;
let Season;

const getSeasonFromMonth = (m) => {
    if (m >= 1 && m <= 12) { 
        if (m >= 3 && m <= 5) return "Primavera";
        if (m >= 6 && m <= 8) return "Verano";
        if (m >= 9 && m <= 11) return "Otoño";
        // Si no es ninguna de las anteriores, debe ser invierno (12, 1, 2)
        return "Invierno";
    }
    return "No es una estación válida";
};

season = getSeasonFromMonth(Month);

console.log(`Estamos en ${Season}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let month1 = 10; // Puedes cambiar este valor para probar otros meses
let daysInMonth;

// Creamos un objeto donde las claves son los meses y los valores son los días.
// Incluimos solo los meses con 30 y 28 días, y para el resto, asumimos 31.
const monthDaysMap = {
    2: 28, // Febrero (sin considerar bisiesto aquí para simplicidad)
    4: 30, // Abril
    6: 30, // Junio
    9: 30, // Septiembre
    11: 30 // Noviembre
};

// Obtenemos los días del mapa. Si el mes no está en el mapa,
// significa que tiene 31 días (como Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre).
if (month1 >= 1 && month1 <= 12) {
    daysInMonth = monthDaysMap[month1] || 31;
} else {
    daysInMonth = "Mes inválido";
}

console.log(`El mes ${month1} tiene ${daysInMonth} días.`);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es";
switch (language) {
    case "es":
        console.log("Hola");
        break;
    case "en":
        console.log("Hello");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "de":
        console.log("Hallo");
        break;
    default:
        console.log("Idioma no soportado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let season;
let month = 10;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        season = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        season = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        season= "Otoño";
        break;
    default:
        console.log("No es una estación válida");
}
console.log(`Estamos en ${season}`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let amountOfDays;

switch (month) {
    case 12:
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
        amountOfDays = "31 días";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        amountOfDays = "30 días";
        break;
    case 2:
        amountOfDays= "28 días";
        break;
    default:
        amountOfDays = "No es un mes válido";
}
console.log (`El mes ${month} tiene ${amountOfDays}`);
