// Immediately invoked function expression (IIFE)

let a = 200;


(function abc(){
    // named iife
    console.log('db connected ', a)
    var b = "23423423"
    console.log(b)
})();




((name) => {
    // unnnamed ifee with parameters
   console.log(`db_connected_two ${name}`) 
})(5000)

