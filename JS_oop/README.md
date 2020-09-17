## ES6 OOP

* [4 Pillars in OOP](#4-pillars-in-oop)
* [Object](#object)
* [Add remove properties 增加和删除一个 obj 中的属性](#add-remove-properties-增加和删除一个 obj 中的属性)
* [Inheritance: Classical and Prototypical](#inheritance-classical-and-prototypical)
* [Descriptor](#descriptor)
* [Constructor 也有 prototype](#constructor-也有-prototype)
* [Instance members and Prototype members](#instance-members-and-prototype-members)
* [Enum instance members and prototype members](#enum-instance-members-and-prototype-members)
* [Use Mixins to implement compositions](#use-mixins-to-implement-compositions)
* [ES6 class syntax sugar](#ES6-class-syntax-sugar)
+ [class hoisting](#class-hoisting)
* [Static methods](#static-methods)
* [private members in ES6](#private-members-in-es6)
* [ES6 getter setter](#es6-getter-setter)
* [ES6 extend](#es6-extend)
* [ES6 method overwrite](#es6-method-overwrite)
* [CommonJS Modules **Used in Node.js**](#commonjs-modules-used-in-node.js)
* [ES6 Modules](#es6-modules)
* [Babel](#babel)
* [real world work flow](#real-world-work-flow)

### 4 Pillars in OOP

Encapsulation: group related variables, functions that opreate on them into objects. 把所有相关的变量和函数封装在一个对象中
优点: reduce complexity + increase reusability

Abstraction: hide methods and properities;
make interface simplier;
Help us reduce the impact of change
优点: reduce complexity + isolate impact of change

Inheritance: eliminate redundant code
优点: Eliminate redundant code

Polymorphism: many forms, 同一个函数 在不同的 obj 中有不同的 function
优点: Refactor ugly switch/case statement

[Back to top](#es6-OOP)

### Object

用 factory 创建 obj 或者用 obj literal 创建 obj js 都会调用默认 Object() constructor 函数

用 constructor 创建 obj js 会调用对应的构造函数 创建 obj

每个 obj 都有一个 constructor property 例如 new String() new Number() new Boolean() 但是我们不用构造函数创建 通常直接使用 obj literal 例如 message = 'msg'

[Back to top](#es6-OOP)

### Add remove properties 增加和删除一个 obj 中的属性

使用 dot notation 操作 或者使用 bracket notation 操作
circle.location = { x: 1 };
delete circle['location'];

[Back to top](#es6-OOP)

### Inheritance: Classical and Prototypical

传统的继承关系 但是 JS 中没有类的概念
Classical: Base/Super/Parent class 表示被继承的“类”； Derived/Sub/Child class 表示继承的“类” realtionship is "Is A" Child is A parent 表示子类继承父类

在 JS 中的继承概念通过 prototype 实现 所有都是 Obj
Prototypical: JS 中每一个 obj 都会 link 继承到一个 base obj 中 这个 obj 是所有人的父亲 也被称为 prototype 每当我们使用一个对象调用一个函数的时候，js 就会先在这个 obj 内部寻找是否有该函数可以使用 如果发现没有 就会找这个对象的 prototype 也就是他的父亲 obj 去找 如果父亲没有继续找父亲的父亲 一直到找到 base obj 而 base obj 则没有下一个父亲 obj

继承是多个 level 的 例如一个 circle obj 继承 circle base obj 然后 circle base obj 继承 root obj 同理一个 array obj 继承 array base 然后 array base 继承 root obj

[Back to top](#es6-OOP)

### Descriptor

```js
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
```

[Back to top](#es6-OOP)

### Constructor 也有 prototype

构造函数在 js 中本身也是一个 obj 他也有自己对应的 prototype 和被构建的对象的 prototype 是同一个

[Back to top](#es6-OOP)

### Instance members and Prototype members

可以把常用的函数定义在 Obj 的 protoype member 中 可以节省很多内存空间 instance member 还可以调用 prototype member 反之亦然

**永远永远永远永远** 不要修改 built in 的 Object
**永远永远永远永远** 不要给 build in 的 obj 加任何 prototype method

当重新设置了一个 obj 的 prototype 时 一定不要忘记去重新设置这个对象的 constructor

[Back to top](#es6-OOP)

### Enum instance members and prototype members

Object.keys() 只能返回 instance member

for (let key in c1) console.log(key) 可以返回所有 members 包括 instance 和 prototype

[Back to top](#es6-OOP)

### Use Mixins to implement compositions

Object.assign() 使用这个 method 去把一个 obj 中的 method 和 properties 到另外一个 obj

```js
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

function Person() {}
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
```

[Back to top](#es6-OOP)

### ES6 class syntax sugar

```js
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
```

在 constructor 里面定义的函数会在 obj 里面
所有 class 里定义的函数都会在这个 obj 的 prototype 里面

[Back to top](#es6-OOP)

### class hoisting

ES6 中的 class 不能被 hoisting 所以调用一个“类” 一定要在类的声明之后

[Back to top](#es6-OOP)

### Static methods

Static Method
availibe on the class itself
Often utility function that are not specific to an Obj

E.G.

```js
const newC = Circle.parse('{ "radius": 1 }');
Math.abs();
```

[Back to top](#es6-OOP)

### private members in ES6

- use Symbol()
  无法直接访问 obj 里的 property

```js
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
```

- use WeakMap()

```js
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
  }
}
```

[Back to top](#es6-OOP)

### ES6 getter setter

```js
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius");
    _radius.set(this, value);
  }
}
```

[Back to top](#es6-OOP)

### ES6 extend

当孩子类 继承了 父亲类时 如果想在孩子类中定义构造函数 就要用到 super 去先调用父亲类的构造函数 才可以定义孩子类的构造函数 不然会报错 例子如下
Circle 类 继承了 Shape 类 当要在 Circle 中定义构造函数时 务必要使用 super 先调用父亲的构造函数

```js
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}
```

[Back to top](#es6-OOP)

### ES6 method overwrite

- 直接在孩子类 derived class 中重写对应函数即可
- 如果想使用父亲类中的函数 那么就要用 super.move() 使用 super 关键字点对应函数即可访问当前 obj 的 prototype 中的对应函数

[Back to top](#es6-OOP)

### CommonJS Modules **Used in Node.js**

- module.exports.Circle = Circle;
- const Circle = require("./circle");

[Back to top](#es6-OOP)

### ES6 Modules

- export class Circle {}
- import { Circle } from "./circle.js";

[Back to top](#es6-OOP)

### Babel

Babel 是用来把 ES6 code 翻译成 ES5 等等 兼容各个浏览器 并且去掉所有的空格等等不必要的东西 并且实现文件的压缩 的一个工具

- babel-cli 是 commend line interface
- babel-core 是 core babel 的具体操作逻辑
- babel-preset 是用来让 babel 认识 ES6 里面的新的 feature 这个 preset 包含了 ES6 之后的所有 new features

[Back to top](#es6-OOP)

### real world work flow

- Webpack
  - webpack-cli init script: "webpack -w" any change 自动 bundle
    用来打包文件

[Back to top](#es6-OOP)
