let myName = "simon      ";

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",

  getSpiderPower: function () {
    console.log(`spiderman power is ${this.spiderman}`);
  },
};

Object.prototype.voss = function () {
  console.log(`voss is in every object`);
};

Array.prototype.theil = function () {
  console.log("thiel is in every object");
};

// heroPower.voss(); // SUCCESS: because i've added the voss prototype in Object and in js everything is object so it basically inherited the thing from his parent
// heroPower.theil(); // ERROR: Because i've added the prototype in array and not in Object becuase a parent cannot inherit from child

// myHeroes.theil();

// Inheritance

const user = {
  name: "peter theil",
  email: "peter@theil.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
  // this __proto__ property let's you inherit from other Objects
};

console.log(TASupport.isAvailable);

Teacher.__proto__ = user;
console.log(Teacher.email);

// Modern Syntax for Inheriting

Object.setPrototypeOf(TeachingSupport, Teacher);
// this basically means that teachinngSupport Object is inheriting from Teacher

console.log(TeachingSupport.makeVideo);

let anotherUsername = "russelbrunson               ";
console.log(anotherUsername.length);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is: ${this.trim().length} `);
};

anotherUsername.trueLength();

"          hhh        ".trueLength();
