// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scense of syntactical sugar

function man(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

man.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

man.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new man("robert", "robert@cialdini.com", "chrisvoss");
console.log(user2.encryptPassword());
