//operators
//Arithmetic operators

let a = 24;
let b = 15;

console.log(a + b); // Sum
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division

console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

a++; // Increment
console.log(a);

b--; // Decrement
console.log(b);

//Assignment operators
let myVariable = 2;
console.log(myVariable);
myVariable += 2; // Addition assignment
console.log(myVariable);
myVariable -= 3; // Subtraction assignment

myVariable *= 2; // Multiplication assignment
myVariable /= 2; // Division assignment
myVariable %= 2; // Modulus assignment
myVariable **= 2; // Exponentiation assignment

//Comparison operators
console.log(a);

console.log(a > b); // Greater than
console.log(a < b); //less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
console.log(a == b); // Equality by value
console.log(a == 25); // Equality by value
console.log(a == "25"); // Equality by value
console.log(a === a); // Equality by identity (by type and value) or strict equality
console.log(a === 25); // Equality by identity (by type and value) or strict equality
console.log(a === "25"); // Equality by identity (by type and value) or strict equality
console.log(a != 25); // Inequality by value
console.log(a !== "25"); // Inequality by identity (by type and value) or strict inequality
console.log(0 == false); // Equality by value
console.log(1 == false); // Equality by value
console.log(2 == false); // Equality by value
console.log(0 == ""); // Equality by value
console.log(0 == " "); // Equality by value
console.log(0 == ''); // Equality by value
console.log(0 == "Hello"); // Equality by value
console.log(0 === ""); // Equality by identity (by type and value) or strict equality
console.log(0 === false); // Equality by identity (by type and value) or strict equality
console.log(undefined == null); // Equality by value
console.log(undefined === null); // Equality by identity (by type and value) or strict equality



//Logical operators

// And &&
console.log(a > b && a < 50);
console.log(a > b && a < 20); //if one of the conditions is false, the result is false
console.log(a > b && a < 20 && a == 25);

// or ||
console.log(a > b || a < 20); //if one of the conditions is true, the result is true
console.log(a > b || a < 20 || a == 25);

// not !
console.log(!true); //if the condition is true, the result is false
console.log(!false); //if the condition is false, the result is true
console.log(!(a > b)); //if the condition is true, the result is false
console.log(!(a < b)); //if the condition is false, the result is true
console.log(!(a > b && a < 50)); //if the condition is true, the result is false

//ternary operator

const isRaining = true;
const umbrella = isRaining ? "Take an umbrella" : "No need for an umbrella";
console.log(umbrella);

// The ternary operator is a shorthand for an if-else statement


