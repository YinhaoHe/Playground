const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this["radius"] = radius;
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);
console.log(Object.getOwnPropertyNames(c));
console.log(Object.getOwnPropertySymbols(c)[0]);
