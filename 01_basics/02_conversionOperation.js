let score = "33"
console.log(typeof(score)); // output String

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) //output number

// but what if 
let scoreTwo = "88a"
// and then i perform 
let scoreTwoinNumber = Number(scoreTwo) // this is not possible because
// how can someone turn 33a into a number!
console.log(scoreTwoinNumber)
console.log(typeof scoreTwoinNumber) // it will return in NaN but it's type is number

// and this is why we use parseInt to convert into integer
let scoreTwoinNumber2 = parseInt(scoreTwo)
console.log(scoreTwoinNumber2)
console.log(typeof scoreTwoinNumber2)


//conversion using Number():
// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

//conversion using parseInt()
// "33" => 33 
// "33abc" => 33 
// true, false => NaN
// "okokok" => NaN


console.log("boolean conversion: ")
let isLoggedIn = 1
let isLoggedIn2 = ""
let isLoggedIn3 = "asdas"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

console.log(booleanIsLoggedIn) //true
console.log(booleanIsLoggedIn2) //false
console.log(booleanIsLoggedIn3) //true

console.log("string conversion")

let someNumber = 33
let stringNumber = String(33)
console.log(someNumber) // 33 and type is string


// ********************** Operations ************************
console.log('operations:')

let value = 3;
let negValue = -value
// console.log(negValue) // -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2) //remainder

// let str1 = "Hello"
// let str2 = "Vikas"
// let str3 = str1 + str2
// console.log(str3) // HelloVikas

// console.log("1" + 2) //12 
// console.log("1" + 2 + 5) //12 
// console.log(1 + 2 + "5") //12 

// console.log(+true) //1
// console.log(true+2) //3

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// console.table([num1, num2, num3]) // 4, 4, 4

// let gameCounter = 100
// gameCounter++; // 101
// ++gameCounter; // 101
// console.log(gameCounter) // 101


// let x = 3;
// const y = x++; // it adds + 1 to x after the assignment to y
// // so y will have it's previous value which is 3 and
// // x will have 4
// console.log(x)
// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a; // it adds + 1 before the assignment to b
// // that is why a is 4 as well as b is 4 here

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"


// ******************COMPARISONS******************

// console.log(2>1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

// console.log(undefined > 0) //false
// console.log(undefined == 0) // false
// console.log(undefined >= 0) // false

console.log("2" == 2) // true because it'll convert
console.log("2" === 2) // false because this is strict comparison