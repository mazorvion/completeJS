// const tinderUser2 = {} //non singleton object
const tinderUser = new Object() // singleton object

tinderUser.id = "124abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const hingerUser = {
    email: "johndoe@gmail.com",
    fullName: {
        userFullName: {
            firstName: "john",
            lastName: "doe"
        }
    }
}

// console.log(hingerUser.fullName)


//merging objects together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const mergedObject = Object.assign({}, obj1, obj2, obj3)
// console.log(mergedObject)

// another way to merge objects

const mergedObject = {...obj1, ...obj2, ...obj3}
// console.log(mergedObject)

const users = [
    {
        id: 1,
        email: "1@email.com"
    },
    {
        id: 2,
        email: "2@email.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // this will give an array of all keys
// console.log(Object.values(tinderUser)) // this will give an array of all values
// console.log(Object.entries(tinderUser))// this will return each key value pair in array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // this check if tinderuser object has iLoggedIn Property






// ******************* DESTRUCTURING OBJECTS ************************//

const course = {
    coursename: "js mastery",
    price: "999",
    courseInstructor: "satya nadella",
}

const {courseInstructor: instructor} = course
// courseInstructor is the property we are getting from the course object and then we can access it either with the name of property or we can also give it a name of our own after semicolon like i've given it above and i'll be able to access that property with that new name whatever is written after the instructor

console.log(instructor) // OUTPUT: satya nadella
// console.log(courseInstructor) // this will throw an error because name has been changed to instructor

const {price} = course
console.log(price)// OUTPUT: 999


// const myObject = {
//     "name": "John",   // String key
//     42: "Answer",      // Number key
//     "isStudent": true  // String key
//   };
  
//   console.log(myObject.name);    // Outputs: John
//   console.log(myObject[42]);      // Outputs: Answer
//   console.log(myObject.isStudent); // Outputs: true


//   const myObject2 = {
//     true: "It's true!",   // Boolean true is converted to string "true"
//     false: "It's false!"  // Boolean false is converted to string "false"
//   };
  
//   console.log(myObject2.true);   // Outputs: It's true!
//   console.log(myObject2.false);  // Outputs: It's false!

  




