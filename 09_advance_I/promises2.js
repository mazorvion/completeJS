// const promiseOne = new Promise(function(resolve, reject){

//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("ASYNC TASK IS COMPLETE")
//         resolve("PROMISE 1 RESOLVED")
//     }, 4000)
// })

// promiseOne.then(function(result){
//     console.log(result)
// })

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("ASYNC TASK: 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("ASYNC 2 RESOLVED");
});

// const thirdPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log()
//         const username = ""
//         if(username){
//             resolve({username:"superman", email: "superman@dc.com"})
//         }else{
//             reject("user not found")
//         }
//     }, 1000)
// })

// thirdPromise.then(function(result){
//     console.log(result.email)
// }).catch(function(err){
//     console.log(err)
// })

const fourthPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "harvey", password: "suits" });
    } else {
      reject("harvy cannot fight this case");
    }
  }, 1000);
});

fourthPromise
  .then(function (result) {
    return result.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("request complete");
  });

const fifthPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve({ username: "petertheil", book: "zero to one" });
    } else {
      reject("author not found");
    }
  }, 2000);
});

async function consumePromise5() {
  try {
    const response = await fifthPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// async function getAllUsers(){
//     try {

//         console.log("INSIDE GET ALL USERS")
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log("E: ",error)
//     }

// }

// getAllUsers()

fetch("https://api.github.com/users/mazorvion")
  // when calling fetch it adds itself in microtask which is executed as priority
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
