class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log("NEW COURSE WAS ADDED BY ", this.username);
  }
}

const peter = new Teacher("peter", "peter@mit.com", "123");
peter.logMe();
console.log(peter instanceof Teacher); // true
console.log(peter instanceof User); // true because it is inheriting from User

const parker = new User("parker", "parker@mit.com", "123");

parker.logMe();

console.log(peter === parker); // false
