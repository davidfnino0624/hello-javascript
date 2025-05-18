//strings

//concatenation
let myName = 'Dave';
let greeting = 'Hello, ' + myName + '!';
console.log(greeting);
console.log(typeof greeting);

//length

console.log(greeting.length);

//accessing characters
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[3]);
console.log(greeting[4]);
console.log(greeting[5]);
console.log(greeting[6]);
console.log(greeting[7]);
console.log(greeting[8]);
console.log(greeting[9]);
console.log(greeting[10]);
console.log(greeting[11]);

//string methods
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf('Dave'));
console.log(greeting.indexOf('PGL'));
console.log(greeting.includes('Dave'));
console.log(greeting.includes('PGL'));
console.log(greeting.replace('Dave', 'PGL'));
console.log(greeting.replace('Hello', 'Hi'));
console.log(greeting.slice(7, 12));

//template literals
let message = `hi there, this is my 
javascript course`;
console.log(message);

//interpolation
console.log(`Hello, ${myName}!`);
console.log(`Hello, ${myName.toUpperCase()}!`);
console.log(`Hello, ${myName.length}!`);
console.log(`Hello, ${myName[0]}!`);