const userEmail = "sam@openai.com"

if (userEmail){
    console.log("GOT USER EMAIL!")
}else{
    console.log("Don't Have user Email")
}


// falsyValues
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthyValues
// anything inside string
// "0", 'false', " ", [], {}, function(){}


// CHECK IF OBJECTS ARE EMPTY
const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}


