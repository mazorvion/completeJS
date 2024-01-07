// for of


// ["", "", ""]
// [{}, {}, {}, {}]

const arr = [54, 82, 3, 44, 5]

for (const i of arr) {
    console.log(i)
    
}

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet)
// }

// Maps

const map = new Map()
map.set('state1', 'BHR')
map.set('state2', 'MP')
map.set('state3', 'KRNTK')

// console.log(map) // Map(3) { 'state1' => 'BHR', 'state2' => 'BHR', 'state3' => 'KRNTK' }

for (const i of map){
    console.log(i)
}

for (const [key, value] of map){
    // console.log(key + " and value is " + value)
}


const myObject = {
    'Game1': 'NFS',
    'Game2': 'GTA'
}

// for (const [key, value] of myObject) {
//     console.log(key + " and value is " + value)
// } // ERROR

