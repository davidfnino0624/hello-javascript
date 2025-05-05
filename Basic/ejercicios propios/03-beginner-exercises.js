// 1. Escribe un comentario en una línea
// Este es un comentario de una línea


// 2. Escribe un comentario en varias líneas
/* Este es un comentario
en varias líneas
que ocupa más de una línea
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myUserName = "davnio420"
let myPhoneNumber = 3219196170
let freeHours = 2.5
let isMarried = false
let isSingle = true
let betterHalf = undefined
let boss = null
let smokeSymbol = Symbol("smoke")
let Secondsalive = BigInt(1000000000000000000000)
let Secondsalive2 = 1000000000000000000001n


// 4. Imprime por consola el valor de todas las variables
console.log(myUserName) // Davnio420
console.log(myPhoneNumber) // 3219196170
console.log(freeHours) // 2.5
console.log(isMarried) // false
console.log(isSingle) // true
console.log(betterHalf) // undefined
console.log(boss) // null
console.log(smokeSymbol) // Symbol(smoke)
console.log(Secondsalive) // 1000000000000000000000n
console.log(Secondsalive2) // 1000000000000000000001n

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myUserName) // string
console.log(typeof myPhoneNumber)  // number
console.log(typeof freeHours) // number
console.log(typeof isMarried) // boolean
console.log(typeof isSingle) // boolean
console.log(typeof betterHalf) // undefined
console.log(typeof boss) // object (esto es un error de JavaScript, ya que null debería ser de tipo null)
console.log(typeof smokeSymbol) // symbol
console.log(typeof Secondsalive) // bigint
console.log(typeof Secondsalive2) // bigint

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myUserName = "Pgl420"
myPhoneNumber = 3219198752
freeHours = 3.5
isMarried = true
isSingle = false
betterHalf = "Pamela" 
boss = "Daniela"
smokeSymbol = Symbol("notsmoke")
Secondsalive = BigInt(1000000000000000000002)
Secondsalive2 = 1000000000000000000003n

console.log(myUserName)
console.log(myPhoneNumber)
console.log(freeHours) 
console.log(isMarried)
console.log(isSingle)
console.log(betterHalf)
console.log(boss)
console.log(smokeSymbol)
console.log(Secondsalive)
console.log(Secondsalive2)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myUserName = true
myPhoneNumber = Symbol("notsmoke")
freeHours = false
isMarried = "Pgl420"
isSingle = 3.5
betterHalf = 1000000000000005400003n
boss = BigInt(1000000000000000000002)
smokeSymbol = 3219198752
Secondsalive = undefined
Secondsalive2 = null

console.log(myUserName)
console.log(myPhoneNumber)
console.log(freeHours) 
console.log(isMarried)
console.log(isSingle)
console.log(betterHalf)
console.log(boss)
console.log(smokeSymbol)
console.log(Secondsalive)
console.log(Secondsalive2)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const fixedUserName = "davidnino420"
const idNumber = 1010027264 
const canHaveChildren = false
const felings = undefined
const myCar = null
const improve = Symbol("improve")
const myBigInt = BigInt(1000000000000000000000)
const myBigInt2 = 1000000000000000000001n

console.log(fixedUserName) // string
console.log(idNumber) // number
console.log(canHaveChildren) // boolean
console.log(felings) // undefined
console.log(myCar) // object (esto es un error de JavaScript, ya que null debería ser de tipo null)
console.log(improve) // symbol
console.log(myBigInt) // bigint
console.log(myBigInt2) // bigint

// 9. A continuación, modifica los valores de las constantes

fixedUserName = "davidnino4201"
idNumber = 1010027263 
canHaveChildren = true
felings = "happy"
myCar = "BMW"
improve = Symbol("getbetter")
myBigInt = BigInt(1000000000000000007521)
myBigInt2 = 1000000000000000007896n

console.log(fixedUserName) // string
console.log(idNumber) // number
console.log(canHaveChildren) // boolean
console.log(felings) // undefined
console.log(myCar) // object (esto es un error de JavaScript, ya que null debería ser de tipo null)
console.log(improve) // symbol
console.log(myBigInt) // bigint
console.log(myBigInt2) // bigint


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// fixedUserName = "davidnino4201"  no se puede reasignar el valor de una constante
// idNumber = 1010027263  no se puede reasignar el valor de una constante
// canHaveChildren = true  no se puede reasignar el valor de una constante
// felings = "happy"  no se puede reasignar el valor de una constante
// myCar = "BMW"  no se puede reasignar el valor de una constante
// improve = Symbol("getbetter")  no se puede reasignar el valor de una constante
// myBigInt = BigInt(1000000000000000007521)  no se puede reasignar el valor de una constante
// myBigInt2 = 1000000000000000007896n  no se puede reasignar el valor de una constante
