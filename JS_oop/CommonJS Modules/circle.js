// Implementation details
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// module.exports.Circle = Circle;

// 由于我们只有一个class要export
module.exports = Circle;
