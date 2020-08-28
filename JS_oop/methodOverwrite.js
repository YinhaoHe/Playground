function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Cricle() {}

extend(Circle, Shape);

// 当在一个child obj中要重写了父亲中的方法
Circle.prototype.duplicate = function () {
  // 重写方法后还需要调用原来父亲的方法怎么办？
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

const c = new Cricle(1);
