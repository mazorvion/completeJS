
let a = 12


if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a)
}

// console.log(a)



// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "johndoe"

    function two(){
        const website = "tinder"
        console.log(username)
    }

    // console.log(website)

    two()
}

// one()

if (true){
    const username = "john"
    if(username == "john"){
        const website = "facebook"
        // console.log(username + website)
        var checkingVarScope = 123
    }
    // console.log(website) // error because it is outside the scope
}

// console.log(username) // error because it's outside the scope

// console.log(checkingVarScope) //123 because it is global scope


//////// +++++++++++++++ QUESTION +++++++++++++++ ///////

// console.log(addOne(5)) // OUTPUT: 6
function addOne(num1){
    return num1 + 1
}



// console.log(addTwo(5)) //OUTPUT: Error because function expressions are not hoisted to the top and the above one ran because function declaration do hoist to the top
const addTwo = function(num){
    return num + 2
}

myVar = 19
console.log(myVar); // Outputs '19' because var variables are hoisted to the top and then initialized undefined by default so when you write myVar = 19 it runs because value was already initialized as undefined so it changed it to 19
var myVar = 10;
console.log(myVar) // OUTPUT 10

myVar2 = 100 // cannot access before initialization because const variables has not been initialized and let and const cannot be accessed before initialization
console.log(myVar2); // Outputs 'undefined'
const myVar2 = 50;

console.log(myLetVar); // This would result in an error as myLetVar is not initialized here
let myLetVar = 20;
