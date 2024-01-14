class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(newUsername) {
    this._username = newUsername;
  }
}

const fitzkee = new User("fitzkee", "fitzkee@mbm.com");

fitzkee.username = "susan";
console.log(fitzkee.username);
