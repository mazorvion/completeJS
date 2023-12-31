// Dates

const { Timestamp } = require("mongodb")

let myDate = new Date()
// console.log(myDate) // 2023-12-31T05:56:11.275Z
// console.log(typeof myDate) // object
// console.log(myDate.toString()) // Sun Dec 31 2023 11:26:47 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Sun Dec 31 2023 
// console.log(myDate.toISOString())  // 2023-12-31T05:59:32.205Z
// console.log(myDate.toJSON()) // 2023-12-31T05:59:32.205Z
// console.log(myDate.toLocaleDateString())// 31/12/2023 returns date only
// console.log(myDate.toLocaleString())// returns date & time 31/12/2023, 11:29:32 am


let myCreatedDate = new Date(2023, 2, 23) // Thu Mar 23 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myCreatedDate.toDateString())
// console.log("my created date " + myCreatedDate)

let newCreatedDate = new Date("2023-01-14")
// console.log(newCreatedDate.toLocaleString()) // 14/1/2023, 5:30:00 am


let timeStamp = Date.now()
console.log(timeStamp) // returns date in mili second from 1970 standard time
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) // date.now in seconds


let newDate = new Date()
console.log(newDate.getMonth()) // returns current month
console.log(newDate.getDay()) // returns current day 
console.log(newDate.getDate()) // returns current day 


console.log(newDate.toLocaleString('default', {
    weekday: "log"
}))