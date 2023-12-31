// Primitive 

// 7 types:
        // String,
        // Number,
        // Boolean,
        // null,
        // undefined,
        // Symbol,
        // BigInt,

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(id === anotherId) // false because symbol creates different id's

const bigNumber = 12313124235453423423423424n
console.log(bigNumber)


// Reference(Non Primitive) Type :
        // Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

const villian = {
    name: "thanos",
    age: 223
}

let myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)

// const outsideTemp = null
// console.log(typeof outsideTemp)




//++++++++++++++++++++++++++++++++++++++++++
console.log("MEMORY: ")
// Types of Memories
//Stack (jaha Primitive use hote ho)and Heap (Jaha Non-Primitive use hota ho)


let myPenName = "mzrv";

let anotherName = myPenName
anotherName = "Ryan"

console.log(anotherName)

let userOne = {
    name: "ben",
    email: "ben@ybl"
}

let userTwo = userOne

userTwo.email = "ten@gmail.com"

console.log(userOne)
console.log(userTwo)



