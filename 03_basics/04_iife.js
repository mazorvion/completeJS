// Immediately invoked function expression (IIFE)
// iife helps you create private variables in js
// that helps in not polluting the global
// because iife invoked immedieatly after definition by iteself it is often used in configuration such as connect to db or something so that jaise hi koi site pe aaye ye code chal jaye 

let a = 200;

(function abc(){
    // named iife
    console.log('db connected ', a)
    var b = "23423423"
    console.log(b)
})();


// console.log(b) // ERROR BECAUSE B IS NOW PRIVATE VARIABLE


((name) => {
    // unnnamed ifee with parameters
   console.log(`db_connected_two ${name}`) 
})(5000)

