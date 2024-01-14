const User = {
  _email: "h@h.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this.email = value;
  },
};

const russel = Object.create(User);
console.log(russel.email);
