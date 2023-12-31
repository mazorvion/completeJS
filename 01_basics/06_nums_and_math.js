const score = 400
// console.log(score)
const balance = new Number(100.256465465)
// console.log(balance)  

// console.log(balance.toString()) // 100.256465465 type of string
// console.log(balance.toFixed(2)) // 100.26

const otherNumber = 223.8966
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000



// ++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-8)) // 8 returns absolute value
// console.log(Math.round(4.6))// 5 round number to nearest integer
// console.log(Math.ceil(4.6)) // 5 return top number
// console.log(Math.ceil(4.9)) // 5 returns floor value

const nums = [2123, 6, 23, 1, 23, 543, 543, 3432]
// console.log(Math.min(...nums))  // returns 1 which is the minimum value
// console.log(Math.max(...nums))  // returns 3432 which is the maximum value

// console.log(Math.random()) //returns value between 0 - 1 
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns in value between 10 to 20