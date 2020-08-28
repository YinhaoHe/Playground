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
