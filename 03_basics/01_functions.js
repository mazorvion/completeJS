
function sayName(){ // function definition
    console.log("J")
    console.log("O")
    console.log("H")
    console.log("N")
    console.log("D")
    console.log("O")
    console.log("E")
}

// sayName()

// function addTwoNumbers(num1, num2){ // these are parameters
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(2, 3) // 2,3 these are arguments

// console.log(result)

// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2
//     return num1 + num2
// }

// const result = addTwoNumbers(2, 4)
// console.log("result: ", result)


function loginUserMessage(username = "user"){
    // username = "username" will have default value as user but if someone passed anything then that will be the name

    if(!username){
        return 'Please enter a username'
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage())

// function basicFunction(num1){
//     return num1
// }
// console.log(basicFunction(100, 200, 399)) // OUTPUT: 100

function calculateCartPrice(...num1){
    // here ... means rest operator which helps you pass multiple arguments right now which means that whenever someone will pass values more than 1 it'll return it in array, basically it'll consolidate all arguments into 1 array so that people will be able to pass multiple values and not just 1
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 800))


function calculateCartPrice2(val1, val2, ...num1){
    return {"val1": val1, "val2": val2, "num1": num1}
}

// console.log(calculateCartPrice2(100, 500, 400, 300, 200))
// OUTPUT: { val1: 100, val2: 500, num1: [ 400, 300, 200 ] }
// because 100 was assinged as val1, val 2 was assinged as 400 hence num1 holded rest of the arguments


const user = {
    username: "john",
    price: 299,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

const myNewArray = [100 ,200 ,300, 400]

function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([900, 123, 123, 4250])) // OUTPUT: 123

