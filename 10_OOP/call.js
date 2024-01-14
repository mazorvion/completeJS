function setUsername(username) {
  this.username = username;
  //   console.log(this.username);
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const nadella = new createUser("satya", "satya@hitrefresh.com", 1234);

console.log(nadella);
