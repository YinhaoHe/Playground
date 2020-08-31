// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Systactic sugar

class Circle {
  constructor(radius) {
    // 在constructor里面定义的函数会在obj里面
    this.radius = radius;
    this.move = function () {};
  }
  // 所有class里定义的函数都会在这个obj的prototype里面
  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);
console.log(typeof Circle);
