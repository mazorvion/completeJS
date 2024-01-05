// const tinderUser2 = {} //non singleton object
const tinderUser = new Object() // singleton object

tinderUser.id = "124abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const hingerUser = {
    email: "johndoe@gmail.com",
    fullName: {
        userFullName: {
            firstName: "john",
            lastName: "doe"
        }
    }
}

// console.log(hingerUser.fullName)


//merging objects together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const mergedObject = Object.assign({}, obj1, obj2, obj3)
// console.log(mergedObject)

// another way to merge objects

const mergedObject = {...obj1, ...obj2, ...obj3}
// console.log(mergedObject)

const users = [
    {
        id: 1,
        email: "1@email.com"
    },
    {
        id: 2,
        email: "2@email.com"
    }
]

console.log(users[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // this will give an array of all keys
console.log(Object.values(tinderUser)) // this will give an array of all values
console.log(Object.entries(tinderUser))// this will return each key value pair in array 

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // this check if tinderuser object has iLoggedIn Property