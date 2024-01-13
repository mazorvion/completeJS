// const user = {
//   username: "james",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log(this.username);
//   },
// };

// console.log(user["loginCount"]);
// user.getUserDetails();

//  ************* CONSTRUCTOR FUNCTION ***************

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log("Hi", this.username);
  };
  return this;
}

const userOne = new user("vikas", 8, "yes");
console.log(userOne.constructor);
