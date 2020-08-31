class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {}

  // Static Method
  // availibe on the class itself
  // Often utility function that are not specific to an Obj
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(1);
// 错的 这个obj不能直接访问circle.parse();
const newC = Circle.parse('{ "radius": 1 }');
console.log(newC);

class Math2 {
  static abs(value) {}
}

Math2.abs();
