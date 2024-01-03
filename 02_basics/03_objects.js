// singleton

//******************** SYMBOLS ****************** */
const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

console.log(mySym)

// object literals

const user = {

    // in the objects keys are considered as strings in backend

    name: "John",
    "fullName": "John Doe",
    // this is how to use a symbol as key
    [mySym]: "its a symbol",
    age: 38,
    location: 29,
    32: 21,
    email: "john@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(user.name) // John
// console.log(user["name"]) // John
// console.log(user["fullName"]) // John Doe
// console.log(user[mySym]) // John Doe


// ******** change properties **************//
user.email = "john@yahoo.com"
// console.log(user)

// Object.freeze(user)
// this will freeze the object and then no one will be able to edit the properties
user.email = "john@aol.com"
// console.log(user) // it'll not change anything as well as it won't throw any error

user.newfunc = function(){
    console.log("inside from method")
}
console.log(user.newfunc())


user.greetings = function(){
    console.log("Hello", this.name)
}


console.log(user.greetings())