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

// Cricle.prototype = Object.create(Object.prototype);
Cricle.prototype = Object.create(Shape.prototype);
// 当重新设置了一个obj的prototype时 一定不要忘记去重新设置这个对象的constructor
Cricle.prototype.constructor = Circle;

Cricle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Cricle(1);
