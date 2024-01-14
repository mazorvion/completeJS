const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Math.PI);
console.log(descriptor);

const mynewObject = {
  name: "harbour",
  price: "399",
  isAvailable: true,
  func: function () {
    "code dead";
  },
};

console.log(Object.getOwnPropertyDescriptor(mynewObject)); // undefined because it prints property descriptor
console.log(Object.getOwnPropertyDescriptor(mynewObject, "name"));

Object.defineProperty(mynewObject, "name", {
  writable: false,
  enumerable: false,
});

for (const [key, value] of Object.entries(mynewObject)) {
  if (typeof value !== "function") {
    console.log(key, value);
  }
}

// console.log(Object.getOwnPropertyDescriptor(mynewObject, "name"));

// console.log(mynewObject);
