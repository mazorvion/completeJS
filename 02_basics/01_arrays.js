// arrays

const myArr = [1, 2, 3, 4, true, "john"]
const myHeros = ["spiderman", "ironman", "loki"]

const myArr2 = new Array("ashlee", "vance", "chris", "voss")
// console.log(myArr[1])
// console.log(myArr2)

// Array Methods

// myArr.push(99) // adds value to the end
// myArr.push(7) // adds value to the end
// myArr.pop() // removes last value
// myArr.unshift(0) // adds value to the begginig of array
// console.log(myArr)
// myArr.shift() // removes value from the begginig of array
// console.log(myArr)


// console.log(myArr.includes(8)) // returns true or false
// console.log(myArr.indexOf(8)) returns index if exists else returns -1

// console.log(myArr) // [ 1, 2, 3, 4, true, 'john' ]  type array
// const newArray = myArr.join()
// console.log(newArray) // 1,2,3,4,true,john converts into string with comma


console.log("A ", myArr)
const arrNum1 = myArr.slice(1, 3)
console.log(arrNum1) // returs value from start to stop which is 1 to 3 index excluding stop point
console.log("B: ", myArr)

const arrNum2 = myArr.splice(1, 3) // changes the array and removes the elems from index start to stop including stop
console.log(arrNum2)

console.log("C: ", myArr)


const arr1 = [1,2,3,4,5,6,7]
const arr2 = arr1
const arr3 = arr2
arr3.push(9)
console.log(arr1)
arr3.pop()
console.log(arr3)
const arr4 = arr3.slice(1, 3)
console.log("arr4 ", arr4)
console.log("arr3", arr3)
const arr5 = arr3.splice(1, 4)
console.log("arr5 ", arr5)
console.log("arr3", arr3)
console.log("arr2", arr2)
console.log("arr1", arr1)