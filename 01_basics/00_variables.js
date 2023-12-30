const accountId = 144553
let accountEmail = "vikas@gmail.com"
var accountPassword = "1234"
accountCity = "Bhopal" // It will behave similar to var accountCity = "Bhopal";
let accountState;

// var test = 99999
console.dir(typeof(accountCity))
// accountId = 2 // not allowed
accountEmail = "icici@icici.com"
accountPassword = "1111111"
accountCity = "Bengaluru" 

var test = 19;
let test2 = 23


function example() {
   // console.log(b); // ReferenceError: b is not defined
    let b = 5;
    console.log(b); // Outputs 5
  }
  
example();

// console.log(a) // Cannot access 'a' before initialization
const a = 12;
console.log(a)

/*
var: Function-scoped with hoisting, can be problematic due to unexpected behavior.
let: Block-scoped, no hoisting issues, allows reassignment when needed, not accessible before initialization.
const: Block-scoped, constant, cannot be reassigned after declaration, not accessible before initialization.
*/

console.table([accountId, accountEmail,
    accountPassword, accountCity, accountState])