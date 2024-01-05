const marvel_heroes = ["thor", "iron", "spider"]
const anime_chars = ["L", "koko", "tanjiro"]


// marvel_heroes.push(anime_chars) // it wont append the elemnts but insert anime_chars to marvel heroes at last position

// console.log(marvel_heroes) //[ 'thor', 'iron', 'spider', [ 'L', 'koko', 'tanjiro' ] ]
// console.log(marvel_heroes[3][2]) //tanjiro

const allHeroes =  marvel_heroes.concat(anime_chars)
// console.log(allHeroes) // [ 'thor', 'iron', 'spider', 'L', 'koko', 'tanjiro' ]
// this will actually merge the arrays

const all_new_heroes = [...marvel_heroes, ...anime_chars]
// this will also merge the arrays because it'll spread all the elements inside of it to the new array
// [ 'thor', 'iron', 'spider', 'L', 'koko', 'tanjiro' ]
// console.log(all_new_heroes)

const all_new_heroes_in_objects = {...all_new_heroes}
console.log(all_new_heroes_in_objects)
//this will also merge in objects with index values as well
//{
//     '0': 'thor',
//     '1': 'iron',
//     '2': 'spider',
//     '3': 'L',
//     '4': 'koko',
//     '5': 'tanjiro'
//   }
  


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// this basically flat the complete array into an single array
// i.e. it'll spread all the elements inside arrays of arrays in one array
// console.log(real_another_array)



// console.log(Array.isArray("vikas")) // will check if the param is array or not and return boolean value based on that
// console.log(Array.from("asdada")) // will convert the string into array with each letter
// console.log(Array.from({
    // name: "vikas"
// })) /// it'll return empty array because we have not defined how to create an array out of it

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3)) // it'' create array of these elements
// output: [ 100, 200, 300 ]