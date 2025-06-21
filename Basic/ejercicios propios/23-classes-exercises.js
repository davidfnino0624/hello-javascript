// 1. Crea una clase que reciba dos propiedades

export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // 2. Añade un método a la clase que utilice las propiedades
    introduce() {
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
    } 
    //static greet() {
    //    console.log("¡Hola desde el método estático!"); 
    //}
}

// 3. Muestra los valores de las propiedades e invoca a la función

let person1 = new Person('David', 24, 175);
console.log(person1.name); // Mostrando el nombre
console.log(person1.age); // Mostrando la edad

person1.introduce(); // Invocando el método introduce

// 4. Añade un método estático a la primera clase

function greet(name) {
    console.log(`¡Hola, ${name}!`);
} // Definiendo el método estático

Person.greet = greet; // Añadiendo el método estático a la clase Person

// Invocando el método estático
Person.greet('David'); // Mostrando el saludo

// 5. Haz uso del método estático

// Invocando el método estático directamente desde la clase
Person.greet('David'); // Mostrando el saludo

// 6. Crea una clase que haga uso de herencia

export class Employee extends Person {
    constructor(name, age, position, salary, bankAccount) {
        super(name, age);
        this.position = position;
        this.salary = salary;
        this.bankAccount = bankAccount;
    }

    introduce() {
        super.introduce(); // Llamando al método introduce de la clase padre
        console.log(`Hola, soy ${this.name}, tengo ${this.age} años y trabajo como ${this.position}.`);
    }
}
// 7. Crea una clase que haga uso de getters y setters

class EmployeeWithGettersSetters extends Person {
    // 8. Modifica la clase con getters y setters para que use propiedades privadas
    #bankAccount; // Definiendo una propiedad privada
    #salary; // Definiendo otra propiedad privada
    constructor(name, age, position, salary, bankAccount) {
        super(name, age); // Llamando al constructor de la clase padre
        this._position = position; // Usando una propiedad privada
        this.#bankAccount = bankAccount; // Usando una propiedad privada
        this.#salary = salary; // Usando una propiedad privada
    }
    get position() {
        return this._position; // Getter para la propiedad position
    }
    set position(newPosition) {
        this._position = newPosition; // Setter para la propiedad position
    }
    get bankAccount() {
        return this.#bankAccount; // Getter para la propiedad privada bankAccount
    }
    set bankAccount(newBankAccount) {
        this.#bankAccount = newBankAccount; // Setter para la propiedad privada bankAccount
    }
    set salary(newSalary) {
        this.#salary = newSalary; // Setter para la propiedad privada salary
    }
    get salary() {
        return this.#salary; // Getter para la propiedad privada salary
    }

}

// 9. Utiliza los get y set y muestra sus valores

let employee1 = new EmployeeWithGettersSetters('Ana', 30, 'Developer', 50000, '1234567890');
console.log(employee1.name); // Mostrando el nombre
console.log(employee1.age); // Mostrando la edad
console.log(employee1.position); // Mostrando la posición
console.log(employee1.bankAccount); // Mostrando la cuenta bancaria
console.log(employee1.salary); // Mostrando el salario
employee1.position = 'Senior Developer'; // Usando el setter para cambiar la posición
console.log(employee1.position); // Mostrando la nueva posición
employee1.bankAccount = '0987654321'; // Usando el setter para cambiar la cuenta bancaria
console.log(employee1.bankAccount); // Mostrando la nueva cuenta bancaria
employee1.salary = 60000; // Usando el setter para cambiar el salario
console.log(employee1.salary); // Mostrando el nuevo salario



// 10. Sobrescribe un método de una clase que utilice herencia 

class Manager extends Employee {
    constructor(name, age, position, salary, bankAccount, teamSize) {
        super(name, age, position, salary, bankAccount); // Llamando al constructor de la clase padre
        this.teamSize = teamSize; // Añadiendo una nueva propiedad
    }
    
    introduce() {
        super.introduce(); // Llamando al método introduce de la clase padre
        console.log(`Soy un ${this.position} y lidero un equipo de ${this.teamSize} personas.`);
    }
}

let manager1 = new Manager('Carlos', 40, 'Project Manager', 80000, '1122334455', 5);
manager1.introduce(); // Invocando el método introduce sobrescrito
// Mostrando la introducción del manager
