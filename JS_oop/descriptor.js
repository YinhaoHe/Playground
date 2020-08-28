let person = { name: "Yinhao" };
let objBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
