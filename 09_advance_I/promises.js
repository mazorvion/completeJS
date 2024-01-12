const { rejects } = require("assert")
const { set } = require("mongoose")
const { resolve } = require("path")

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB CALLS, Cryptography, network calls, 

    setTimeout(function(){
        console.log("ASYNC TASK IS COMPLETE")
        resolve()
        
    },1000)
})

promiseOne.then(function(result){
    console.log(result)
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async Task 2 Executed")
        resolve()
    }, 1000)

}).then(function(result){
    console.log("ASYNC 2 RESOLVED")
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "asynccode", email: "asynccode@js.com"})    
    }, 1000)
})

// promise3.then(function(result){
//     console.log(result)
// })


const promise4 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "asynccode", email: "asynccode@js.com"})
        }else{
            reject("DATA HAS NOT BEEN RECIEVED")
        }

    }, 1000)
    
})

promise4.then(function(result){
    console.log(result)
    return result.username
}).then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "javascript", email: "javascript@ecmascript.com"})
        }else{
            reject("Error js went wrong")
        }
    }, 1000)
})

async function consumePromise5(){

    try{
        const response = await promise5
        console.log(response)
    }

   catch (error){
    console.log(error)
   }
}

consumePromise5()