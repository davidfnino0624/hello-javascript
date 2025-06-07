// destructuring

let myArray = [1, 2, 3, 4, 5];


const person = {
  name: 'John',
  age: 30,
  alias: 'Johnny'
};

let myValue = myArray[1];
console.log(myValue); // 2

let myname = person.name;
console.log(myname); // John


// 1. Desestructuración de un array
const [first, second, ...rest] = myArray;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//sintaxis de array con valores por defecto
const [a = 10, b = 20, c = 30] = [1, 2];
console.log(a); // 1    
console.log(b); // 2
console.log(c); // 30

// ignorar valores
const [x, , y] = myArray;
console.log(x); // 1
console.log(y); // 3

// 2. Desestructuración de un objeto
const { name, age, alias } = person;
console.log(name); // John 
console.log(age); // 30
console.log(alias); // Johnny

// sintaxis de objeto con valores por defecto
const { name: personName = 'Default Name', 
        age: personAge = 25, 
        alias: personAlias = 'Default Alias', 
        email: emailPerson = 'email@email.com'
    } = person;

//desestructuración anidada
const nestedObject = {
  user: {
    id: 1,
    details: {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  }
};

const { user: { details: { firstName, lastName } } } = nestedObject;
console.log(firstName); // Jane
console.log(lastName); // Doe

// 3. Desestructuración de parámetros de función
function displayInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayInfo({ name: 'Alice', age: 25 }); // Name: Alice, Age: 25

// 4. Desestructuración de parámetros de función con valores por defecto
function greet({ name = 'Guest', age = 18 } = {}) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet(); // Hello, Guest! You are 18 years old.
greet({ name: 'Bob' }); // Hello, Bob! You are 18 years old.
greet({ age: 30 }); // Hello, Guest! You are 30 years old.

// 5. Desestructuración de parámetros de función con alias
function showDetails({ name: fullName, age: years }) {
  console.log(`Full Name: ${fullName}, Years: ${years}`);
}
showDetails({ name: 'Charlie', age: 28 }); // Full Name: Charlie, Years: 28

//propagación

// 1. Propagación de un array
const newArray = [...myArray, 6, 7, 8];
console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// 2. Propagación de un objeto
const newPerson = { ...person, city: 'New York' };
console.log(newPerson); // { name: 'John', age: 30, alias: 'Johnny', city: 'New York' }

