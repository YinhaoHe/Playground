## JS Basics

* [Build Objs](#build-objs)
* [Hoisting](#hoisting)
* [Call back function](#call-back-function)
* [Template literal](#template-literal)
* [Reduce()](#reduce)
* [Spread operator](#spread-operator)
* [Rest operator](#rest-operator)
* [Function default parameter](#function-default-parameter)
* [Getter and Setter](#getter-and-setter)
* [Local and Global Scope](#local-and-global-scope)
* [let and var](#let-and-var)
*  [This](#This)

### Build Objs:

Constructor:

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
```

Factory:

```js
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
```

 [Back to top](#JS-Basics)

### Hoisting:

JS enginee will automatically move all declaration to the top of the file.

 [Back to top](#JS-Basics)

### Call back function:

(() => {}) 如果只是一行 code 可以写成(a => b)

 [Back to top](#JS-Basics)

### Template literal:

`${name}` 用于模版化输入输出 动态定义变量名

 [Back to top](#JS-Basics)

### Reduce():

reduce((a, b) => a + b) 用于表示将一个数组里的数字全部加起来，a 代表总数，b 代表当前没被加起来的数字

 [Back to top](#JS-Basics)

### Spread operator:

...name 用来 copy name

 [Back to top](#JS-Basics)

### Rest operator:

function sum(...args) {} 用于可变参数的函数定义 ...args 可以读入 rest 的所有参数，但只能是 function 中的最后一个参数 function sum(a, ...args, b) 就是错的

 [Back to top](#JS-Basics)

### Function default parameter:

可以在函数内用 || 实现 例如 rate = rate || 3.5
也可以直接在函数中传入 function sum(rate = 3.5)
default parameter 应该是最后一个参数 或者该参数后面的参数全都有默认数值 不然程序会给出 NaN 结果

 [Back to top](#JS-Basics)

### Getter and Setter:

在一个 obj 内部定义一个 method 前面加上 get 关键字 就变成了一个 getter 外部访问这个函数时候不需要加括号 e.g. person.fullname not person.fullname()

 [Back to top](#JS-Basics)

### Local and Global Scope:

一个 codeBlock 中的变量只能被自己访问，尽量少的用全局变量

 [Back to top](#JS-Basics)

### let and var:

一定要使用 let
let, const -> block-scoped
vat -> function-scoped

var 定义的全局变量 会被加到 window object 里面去 有可能会被第三方 lib 中重复名字的变量覆盖 造成错误
同理 定义函数 也尽可能的不要将函数加到 window obj 中去 会造成不必要的麻烦 一定要使用 module 的概念去定义

 [Back to top](#JS-Basics)

### this:

method -> obj 如果是 obj 中的 method 中的 this 那么 this 代表了这个 obj 本身
function -> gloabal (window, global) 如果这个函数不是 obj 中的方法 而是一个函数 那么 this 代表全局变量 window obj 本身

当使用 new 时 js 会自动生成一个空 obj 然后将 this 指向 生成的 obj

call back function 只是一个普通函数 call back 中直接用 this 会指向 global

Always use arrow function: 可以帮我们解决修改 this 值时遇到的麻烦

 [Back to top](#JS-Basics)