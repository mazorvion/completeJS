class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const satya = new User("satya");
// console.log(satya.createId()); // 123

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const clear = new Teacher("jamesclear", "james@clear.com");

clear.logMe();
console.log(clear.createId()); // create id not a function
