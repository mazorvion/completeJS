// if statement

// if (condition){ 
    // the condition shall be TRUE to run the code which is inside the if statement
    
// }

// const isUserLoggedIn = true

// if (isUserLoggedIn){
//     console.log('yep i am running')
// }

// // COMPARISON OPERATORS:
// // <, >, <=, >=, ==, !=, ===, !==, 


// if (3 != 2){
//     console.log('ok')
// }

// // if (2 == "2"){
// //     console.log('executed')
// // }

// if (2 === "2"){
//     console.log('executed')
// }

// if (2 !== "2"){
//     console.log('executed')
// }



// const temp = 14

// if (temp < 50){
//     console.log('less than 50')
// }else{
//     console.log('temperature is greater than 50')
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }


// SHORTHAND NOTATION

// const balance = 1000
// if (balance > 500) console.log("you're rich")

// if (balance < 500){
//     console.log("less than 500")
// }else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2 == 2){
//     console.log("allowed to shop")
// }

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("you can shop buddy")
}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1)

// var var1 = undefined ?? 15
// console.log(var1); // OUTPUT: 15 because it replaces null/ undefined to the right side value of operator

let val2;
val2 = null ?? 10 ?? 20
// console.log(val2) // OUTPUT: 10 becuase it takes the first value after the ?? operator


// ************ TERNIARY OPERATOR *********
const iceTeaPrice = 100

// condition ? true : false
iceTeaPrice >= 110 ? console.log("less than 100") : console.log("more than 100")