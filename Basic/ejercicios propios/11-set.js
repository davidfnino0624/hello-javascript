//set

//declare

let mySet = new Set();
let mySet2 = {}; // ojito ojito oooojito
// {} es un objeto, no un set

console.log(mySet);
console.log(mySet2);


//initialize

//mySet = new Set('david', 'felipe', 'nino', 24, false); // no se puede inicializar así
mySet = new Set(["david", "felipe", "nino", 24, false, 'davidnino0624@gmail.com']); // se inicializa así

console.log(mySet);

//common methods
// add y delete

mySet.add("https://Pglobal.com");

console.log(mySet);

mySet.delete(false);
console.log(mySet);

console.log(mySet.delete("https://Pglobal.com"));
console.log(mySet);

console.log(mySet.delete("david"));
console.log(mySet.delete(4)); // no existe el 4, devuelve false
console.log(mySet);

// has

console.log(mySet.has("felipe"));
console.log(mySet.has("david"));

// size

console.log(mySet.size);

// Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set
mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados
mySet.add(24);
console.log(mySet);