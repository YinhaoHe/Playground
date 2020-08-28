// OOP
const circleBasic = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    // inside a Obj, function is called method
    console.log("draw");
  },
};

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circleFac = createCircle(1);
console.log(circleFac);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circleCons = new Circle(1);

// Functions are Objs
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = function () {
  console.log("draw");
}
`
);

const circle = new Circle1(1);
const circle1 = new Circle(2);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// Primitives are copy by their value
// number, String, Boolean, null 都是直接存储值 可以直接修改直接覆盖

// Objs are reference
// Obj Function Array 都是引用 变量存储的是地址 不是值

// Enumerating Properities
for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry);

if ("radius" in circle) console.log("yes");

// Clone an Obj

const cloneAnotherCircle = Object.assign(
  {
    color: "Yellow",
  },
  [circle, circle1]
);

const cloneCircle = { ...circle };
console.log(cloneAnotherCircle);
