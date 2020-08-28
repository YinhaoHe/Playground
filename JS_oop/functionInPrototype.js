function Circle(radius) {
  // Instance member
  this.radius = radius;
  this.draw = function () {
    console.log;
  };
  this.move = function () {
    this.draw();
    console.log("move");
  };
}

// draw 可以用在很多不同的obj中 所以为了节约空间 我们要把draw method定义在Circle 的prototype里面

function Circle(radius) {
  this.radius = radius;
}

// prototype member
Circle.prototype.draw = function () {
  this.move();
  console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};
