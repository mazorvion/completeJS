const name = "jeremy"
const repoCount = 15

console.log(typeof newName)
// console.log(name + repoCount + "Value")

console.log(`Hello I am ${name} and my repo count is ${repoCount}`)

const newString = new String('chris-voss')
console.log(newString.split('-')) // [ 'chris', 'voss' ]
console.log(newString[0]) //c
console.log(newString.length) //10
console.log(newString.toUpperCase()) //CHRIS VOSS
console.log(newString) //chris voss original value will not be change because it is primitive type
console.log(newString.charAt(3)) // it will tell you which character is at 3 position

console.log(newString.indexOf('v'))// it will tell at what position v is

const subString = newString.substring(0, 4)
// console.log(subString) //chri which is 0 to 4 but not included 4th

const anotherString = newString.slice(-8, 5)
console.log(anotherString)

const newStringOne = "     James      "
console.log(newStringOne) //      James      
console.log(newStringOne.trim()) // James

const url = "https://sample.com/james%20voss"

console.log(url.replace('%20', '-')) //https://sample.com/james-voss

console.log(url.includes('sample')) // true
console.log(url.includes('intimate')) // false