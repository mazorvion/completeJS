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