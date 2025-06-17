// console

// console.log
console.log("Hello, World!");

// console.error

console.error(`This is an error message!`);
console.error(`Error to connect to the server!:`, new Error("Connection failed"));

//console.warn

console.warn(`This is a warning message!`);

// console.info
console.info(`This is an info message!`);

//console.table
let data = [
    ['David', `Niño`, 24],
    ['Alice', `Smith`, 30],
    ['Bob', `Johnson`, 22]
]

console.table(data)

data = [
    { name: 'David', surname: 'Niño', age: 24 },
    { name: 'Alice', surname: 'Smith', age: 30 },
    { name: 'Bob', surname: 'Johnson', age: 22 }
]

console.table(data)

// console.group
console.group('User Information');
console.log('Name: David Niño');    
console.log('Email:dn06@pgl.org');
console.log('Age: 24');
console.group('banking');
console.log('Account Number: 123456789');   
console.log('Balance: $1000');
console.groupEnd();
console.group('Preferences');
console.log('Language: English');
console.log('Theme: Dark');
console.groupEnd();
console.log('Last Login: 2023-10-01');
console.groupEnd();

//console.time

console.time('Loop Time');
for (let i = 0; i < 1000000; i++) {
    // Simulating some work
}

console.timeEnd('Loop Time');

//console.assert

let age = 17;

console.assert(age >= 18, `user age is not valid: `);

//console.count

console.count(`click`);
console.count(`click`);
console.count(`click`);

console.countReset(`click`);

console.count(`click`);

//console.trace

function functionA(){
    functionB();
}

function functionB(){
    console.trace();
}

functionA();

//console.clear();

// console.debug

console.debug(`This is a debug message!`); 