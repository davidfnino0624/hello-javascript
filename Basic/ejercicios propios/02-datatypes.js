//string (cadena de texto)
let myName = "David nino"
let alias = 'Dave'
let email = `davidnino0624@gmail.com`

//number (número)
let age = 24 // Entero
let height = 1.75 // Decimal

//boolean (booleano)
let isEmployed = true
let isUnemployed = false
let isStudent = true
let isTeacher = false

//undefined (indefinido)
let undefinedValue
console.log(undefinedValue)

// null (nulo)
let nullValue = null

// symbol (símbolo)
let mySymbol = Symbol("mysymbol")

// BigInt (número entero grande)
let myBigInt = BigInt(778754234878453424789756424487896242318489)

let myBigInt2 = 778754234878453424789756424487896242318489n

// Mostramos los tipos de datos
console.log(typeof myName) // string
console.log(typeof alias) // string
console.log(typeof email) // string
console.log(typeof age) // number
console.log(typeof height) // number
console.log(typeof isEmployed) // boolean
console.log(typeof isUnemployed) // boolean
console.log(typeof isStudent) // boolean
console.log(typeof isTeacher) // boolean
console.log(typeof undefinedValue) // undefined
console.log(typeof nullValue) // object (esto es un error de JavaScript, ya que null debería ser de tipo null)
console.log(typeof mySymbol) // symbol
console.log(typeof myBigInt) // bigint
console.log(typeof myBigInt2) // bigint