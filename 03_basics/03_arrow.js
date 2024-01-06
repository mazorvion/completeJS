const user = {
    username: "john doe",
    price: "9999",

    welcomeMessage: function(){
        console.log(`Welcome! Welcome! ${this.username}`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // OUTPUT: {}
// if i'll check value of this in browser it'll say window is the value of this because then in browser window  is the global thing

// this js me ek special keyword hai jiska matlab different
// context me different hota hai
// node ke global me this ki value hoti hai empty object
// global me this ki value hoti hai window
// function me this ki value hoti hai window
// method me this ki value hoti hai object
// es5 func inside method me this ki value hoti hai window
// es6 func inside method me this ki value hoti hai object
// eventlistener me this ki value hoti hai nearest element


// function checkingValueofThis(){
//     let username = "johndoe"
//     console.log(this.username) // here it'll say the value of this is undefined because because this context can be only used with objects
// }

// checkingValueofThis()



const func = function(){
    let username ="harry"
    console.log(this.username)
}
// func()


const func2 = () => {
    let username ="harry"
    console.log(this) //EMPTY OBJECT
    console.log(this.username) //UNDEFINED BECAUSE THIS IS EMPTY OBJECT INSIDE A FUNC EXPRESSION
}
// func2()

function JASON(){
    console.log(this)
}

// jason()

// BASIC ARROW FUNCTIOn
const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3
}

console.log(addThree(2,2,2))

// IMPLICIT RETURN
// An implicit return is a way of returning a value from a function without explicitly using the return keyword
//way 1
// const addTwo = (num1, num2) => num1 + num2
//way2  - using perenthesis instead of return  keyword
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({
    calculated: num1 + num2
})
console.log(addTwo(2, 3))


