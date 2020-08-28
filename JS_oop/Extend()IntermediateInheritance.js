// 需要找到一个方法不用每次都手写重制constructor
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Cricle(radius) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Cricle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Cricle(1);
