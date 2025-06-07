//clases, tambien es un objeto complejo, pero con una estructura mas definida

class Person {
    constructor(name, surname, alias, age) {
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.age = age;
    }
}

let person1 = new Person('David', 'Nino', 'Davno', 24);
person1.walk = function () {
    console.log('la persona camina');
};
console.log(person1);

let person2 = new Person('John', 'Doe', 'Johnny', 30);
person2.run = function () {
    console.log('la persona corre');
}
console.log(person2);

console.log(typeof person1);

//default values

class PersonWithDefaults {
    constructor(name = 'Default Name', surname = 'Default Surname', alias = 'Default Alias', age = 0) {
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.age = age;
    }
}

let personWithDefaults = new PersonWithDefaults();
console.log(personWithDefaults);

//properties access

console.log(personWithDefaults.name); // Accessing the name property
console.log(personWithDefaults['surname']); // Accessing the surname property using bracket notation

// Modifying properties

personWithDefaults.age = 25; // Changing the age property
console.log(personWithDefaults.age); // Output: 25

//funciones dentro de clases

class PersonWithMethods {
    constructor(name, surname, alias, age) {
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} camina`);
    }

    run() {
        console.log(`${this.name} corre`);
    }
}

let personWithMethods = new PersonWithMethods('Alice', 'Smith', 'Ali', 28);
personWithMethods.walk(); // Output: Alice camina
personWithMethods.run(); // Output: Alice corre

 //private properties and methods

class PersonWithPrivate {
    #bankAccount;
    constructor(name, surname, alias, age, bankAccount) {
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.age = age;
        this.#bankAccount = bankAccount; // Private property
    }
    #privateMethod() {
        console.log('This is a private method');
    }
    publicMethod() {
        console.log(`Public method: ${this.name} has a bank account # ${this.#bankAccount}`);
        this.#privateMethod(); // Calling the private method
    }
}

let personWithPrivate1 = new PersonWithPrivate('Bob', 'Johnson', 'Bobby', 35, '123456789');
personWithPrivate1.publicMethod(); // Output: Public method: Bob has a bank account # 123456789

// personWithPrivate1.#privateMethod(); // This will throw an error because #privateMethod is private

class PersonWithStatic {
    constructor(name, surname, alias, age) {
        this.name = name;
        this.surname = surname;
        this.alias = alias;
        this.age = age;
    }

    static greet() {
        console.log('Hello from the static method!');
    }
}

let personWithStatic = new PersonWithStatic('Charlie', 'Brown', 'Chuck', 22);
PersonWithStatic.greet(); // Output: Hello from the static method!

//personWithStatic.greet(); // This will throw an error because greet is a static method and should be called on the class, not the instance


// getters and setters

class GetSetPerson {
    #name;
    #age;
    #surname;
    #bankAccountNumber
    constructor(name, surname, age, bankAccountNumber) {
        this.#name = name;
        this.#surname = surname;
        this.#age = age;
        this.#bankAccountNumber = bankAccountNumber;
    }
    set bankAccountNumber(value) {
        this.#bankAccountNumber = value;
    }
    get name() {
        return this.#name;
    }
    get bankAccountNumber() {
        return this.#bankAccountNumber;
    }
   
}

let perosna6 = new GetSetPerson('Alice', 'Johnson', 30);
console.log(perosna6);

console.log(perosna6.name); // Output: Alice
console.log(perosna6.surname); // Output: undefined (because surname is private)
//perosna6.name = 'Bob'; // This will throw an error because name is a getter, not a setter

perosna6.bankAccountNumber = '987654321'; // Setting the bank account number
console.log(perosna6.bankAccountNumber); // Output: 987654321 (if you had a getter for bankAccount)

//heritance

class animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} makes this sound: ${this.sound}`);
    }
}

class Dog extends animal {
    constructor(name, breed) {
        super(name, 'Dog', 'Woof');
        this.breed = breed;
    }
    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}

let myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound(); // Output: Buddy makes this sound: Woof
myDog.fetch(); // Output: Buddy is fetching the ball!

class Cat extends animal {
    constructor(name, color) {
        super(name, 'Cat', 'Meow');
        this.color = color;
    }

    scratch() {
        console.log(`${this.name} is scratching the furniture!`);
    }
}

let myCat = new Cat('Whiskers', 'black');
myCat.makeSound(); // Output: Whiskers makes this sound: Meow
myCat.scratch(); // Output: Whiskers is scratching the furniture!

//static methods

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}

// Using the static methods
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(10, 4)); // Output: 6
console.log(MathUtils.multiply(2, 3)); // Output: 6
console.log(MathUtils.divide(12, 4)); // Output: 3
// console.log(MathUtils.divide(12, 0)); // This will throw an error: Cannot divide by zero
// console.log(MathUtils.add(5, '3')); // This will throw an error: Invalid argument type
// console.log(MathUtils.add(5, 3, 2)); // This will throw an error: Invalid number of arguments