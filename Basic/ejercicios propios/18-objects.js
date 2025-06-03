//objets

//sintaxis

let person = {
    name: 'David',
    surname: 'Nino',
    alias: 'Davno',
    age: 24
}

//acceso a propiedades

//notacion por punto

console.log(person.name)

console.log(person['surname'])

//modificacion de propiedades

person.age = 25
console.log(typeof person.age)

person.age = '25'
console.log(typeof person.age)

person.surname = 'Rodriguez'
console.log(person)

//eliminacion de propiedades

delete person.surname
console.log(person)

//nueva propiedad

person.email = 'davidnino0624@gmail.com'
console.log(person)

person['surname'] = 'Nino Rodriguez'
console.log(person)

//Metodos

let person2 = {
    name: 'David',
    surname: 'Nino',
    alias: 'Davno',
    age: 24,
    walk: function () {
        console.log('la persona camina')
    }

}

person2.walk()


//anidacion de objetos

let person3 = {
    name: 'David',
    surname: 'Nino',
    alias: 'Davno',
    age: 24,
    walk: function () {
        console.log('la persona camina')
    },
    job: {
        name: 'programador',
        exp: 2,
        work: function (){
            console.log('la persona trabaja')
        }
    }

}

console.log(person3)
console.log(person3.job)
console.log(person3.walk)
console.log(person3.job.name)
person3.job.work()

//igualdad de objeto

let person4 = {
    name: 'David',
    surname: 'Nino',
    alias: 'Davno',
    age: 24,
    walk: function () {
        console.log('la persona camina')
    },
    job: {
        name: 'programador',
        exp: 2,
        work: function (){
            console.log(`la persona ${this.name} trabaja`)
        }
    }

}

console.log(person3 == person4) //false, porque son objetos diferentes en memoria
console.log(person3.name === person4.name) //true
console.log(person3 === person4) //false
console.log(person3 === person3) //true
console.log(person3.job === person4.job) //true

// iteracion de objetos

for (let key in person3) {
    //console.log(key)
    console.log(key, person3[key])
}

//funciones como objetos

function personOne(name, surname, alias, age) {
    this.name = name;
    this.surname = surname;
    this.alias = alias;
    this.age = age;
}

let person5 = new personOne('David', 'Nino', 'Davno', 24);
console.log(person5)
console.log(typeof person5) //object
console.log(typeof person4) //object