"use strict";

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();

// Method call
c.draw();
// output Circle obj

const draw = c.draw;

// Function call
draw();
// output undefined

// ES6 中js是默认在strict mode下运行的
class Circle {
  draw() {
    console.log(this);
  }
}
