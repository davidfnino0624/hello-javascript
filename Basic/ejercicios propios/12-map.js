//map

//declaracion

let myMap = new Map();
console.log(myMap);

//inicializacion

myMap = new Map([
    ["name", "David"],
    ["email", "davidnino0624@gmail.com"],
    ["age", 24]
]);
console.log(myMap);

//metodos y propiedades

//set
myMap.set('alias', 'davno');
myMap.set('name', 'David Felipe');

console.log(myMap);

//get

console.log(myMap.get('name'));
console.log(myMap.get('surname')); //undefined

//has
console.log(myMap.has('surname')); //false
console.log(myMap.has('age')); //true

//delete
myMap.delete('email');
console.log(myMap);
//console.log(myMap.delete('email')); //false

//keys, values, entries
console.log(myMap.entries()); // devuelve un iterador
console.log(myMap.keys()); // devuelve un iterador
console.log(myMap.values()); // devuelve un iterador

//size
console.log(myMap.size); // devuelve el tamaño del map

//clear
myMap.clear();
console.log(myMap);