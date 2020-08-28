#### 4 Pillars in OOP

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

#### Object

用 factory 创建 obj 或者用 obj literal 创建 obj js 都会调用默认 Object() constructor 函数

用 constructor 创建 obj js 会调用对应的构造函数 创建 obj

每个 obj 都有一个 constructor property 例如 new String() new Number() new Boolean() 但是我们不用构造函数创建 通常直接使用 obj literal 例如 message = 'msg'

#### Add/remove properties 增加和删除一个 obj 中的属性

使用 dot notation 操作 或者使用 bracket notation 操作
circle.location = { x: 1 };
delete circle['location'];

#### Inheritance: Classical and Prototypical

传统的继承关系 但是 JS 中没有类的概念
Classical: Base/Super/Parent class 表示被继承的“类”； Derived/Sub/Child class 表示继承的“类” realtionship is "Is A" Child is A parent 表示子类继承父类

在 JS 中的继承概念通过 prototype 实现 所有都是 Obj
Prototypical: JS 中每一个 obj 都会 link 继承到一个 base obj 中 这个 obj 是所有人的父亲 也被称为 prototype 每当我们使用一个对象调用一个函数的时候，js 就会先在这个 obj 内部寻找是否有该函数可以使用 如果发现没有 就会找这个对象的 prototype 也就是他的父亲 obj 去找 如果父亲没有继续找父亲的父亲 一直到找到 base obj 而 base obj 则没有下一个父亲 obj

继承是多个 level 的 例如一个 circle obj 继承 circle base obj 然后 circle base obj 继承 root obj 同理一个 array obj 继承 array base 然后 array base 继承 root obj

#### Descriptor

```
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
```

#### Constructor 也有 prototype

构造函数在 js 中本身也是一个 obj 他也有自己对应的 prototype 和被构建的对象的 prototype 是同一个

#### Instance members and Prototype members

可以把常用的函数定义在 Obj 的 protoype member 中 可以节省很多内存空间 instance member 还可以调用 prototype member 反之亦然

**永远永远永远永远** 不要修改 built in 的 Object
**永远永远永远永远** 不要给 build in 的 obj 加任何 prototype method

当重新设置了一个 obj 的 prototype 时 一定不要忘记去重新设置这个对象的 constructor

#### Enum instance members and prototype members

Object.keys() 只能返回 instance member

for (let key in c1) console.log(key) 可以返回所有 members 包括 instance 和 prototype

#### Use Mixins to implement compositions
