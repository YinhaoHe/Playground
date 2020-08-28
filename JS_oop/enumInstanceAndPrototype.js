function Circle(radius) {
  // instance member
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function () {
  console.log("draw");
};

// Return instance memebers only
console.log(Object.keys(c1));

// Return all memebers including instance memeber and prototype members
for (let key in c1) console.log(key);
