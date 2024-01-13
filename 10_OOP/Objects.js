function multiply(num1, num2) {
  return num1 * num2;
}

multiply.power = 2;

// console.log(multiply.power);
// console.log(multiply.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(this.score);
};

createUser.prototype.printScore = function () {
  console.log(this.score);
};

// console.log(createUser.prototype);

const user1 = new createUser("vikas", 8);
const user2 = new createUser("milk", 10);

user1.printScore();
