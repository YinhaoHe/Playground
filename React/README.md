# React

- [React Angular](#react-angular)
- [Custom configs](#custom-configs)
- [React backend](#react-backend)
- [React related JS](#react-related-js)
  - [Binding this and arrow function](#binding-this-and-arrow-function)
  - [Array map Method](#array-map-method)
  - [Obj destructuring](#obj-destructuring)
  - [2 kinds of exports: Named Exports and Default Exports](#2-kinds-of-exports-named-exports-and-default-exports)
- [Specify children](#specify-children)
- [Bind event handles](#bind-event-handles)
- [Update State](#update-state)
- [Passing Event Arguments](#passing-event-arguments)
- [JSX return](#jsx-return)

---

## React Angular

The reason react is called react because it reacts to the state.

Angular is a framework. React is a library only used for view. Users can choose the routing or different framework to use for React.

[Back to top](#react)

---

## Custom configs

npm eject 会把所有 dependency 暴露出来 注意这个是 one way 的 一旦 eject 不能回来 DO NOT DO THIS

[Back to top](#react)

---

## React backend

C#/.NET
**Node.js Express**
Firebase 成型的后端服务 google 注册账号就能直接使用

[Back to top](#react)

---

## React related JS

Recap of some highly used JS in React

### Binding this and arrow function

```js
const person = {
  name: "Yinhao",
  walk() {
    console.log(this);
  },
};

// 用obj call method
person.walk();
// output 'walk'

// 用bind()来确保person obj里的this能找到对应的obj
const walk = person.walk.bind(person);
walk();
// output 'walk'
```

- 对于独立的函数调用 **用到 callback 函数 都要记住 always use arrow function!!!!!!!!**

```js
const person = {
  name: "Yinhao",
  setTimeout(() => {
      console.log("this", this);
  }, 1000);
};

person.talk()
```

[Back to top](#react)

---

### Array map Method

- template literal

- **back tick character**

- \${color}

```js
const colors = ["red", "green", "blue"];
const items = color.map((color) => {
  `<li>${color}</li>`;
});
```

[Back to top](#react)

---

### Obj destructuring

const { street, city, country } = address;
把 obj address 中的 street 取出来放进一个叫 street 的 const 里面
const { street: st } = address;
把 obj address 中的 street property 取出来放进一个叫 st 的 const 里面

[Back to top](#react)

---

### 2 kinds of exports: Named Exports and Default Exports

- Default -> import ... from '';
- Named -> import { ... } from '';

e.g. import React, { Component } from 'react';

[Back to top](#react)

---

## state

- The data that the Component needs to use
- It won't update itself - but there is a simpler way to update in React hooks

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>

      </div>
    );
  }

export default Counter;

```

[Back to top](#react)

---

## Rendering List Dynamically Conditionally

- To use **map** function, we need to give each element a unique key so React can quickly find which DOM needs to be changed and sync with the virtual DOM.

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

export default Counter;
```

- Use **curly braces "{}"**, and enter JS obj in it;

```jsx
return (
  <div>
    <ul>
      {this.state.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </div>
);
```

- conditional rendering
  - Use helper function
  - Use **"&&"** operator

```jsx
// Method 1
// Add a helper function

renderHelp() {
  if (this.state.tags.length === 0) {
    return <p>tags number is 0</p>
  }
  return ... //
}

render() {
    return (
      <div>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

// Method 2

render() {
    return (
      <div>
        <ul>
          {this.state.tags.length === 0 && "The tags number is 0"}
        </ul>
      </div>
    );
  }
```

[Back to top](#react)

---

## Specify children

如果同时在 return 里有不止一种 tag 需要返回 需要用到 react.Fragment 实现每一个 tag 都有一个父亲

```js
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}
```

[Back to top](#react)

---

## Bind event handles

两种方法 bind event handler 用来解决 this 无法找到 obj 的问题
Always 使用 arrow function

```js
constructor() {
  super();
  this.handleIncrement = this.handleIncrement.bind(this);
}
```

```js
handleIncrement = () => {
  console.log("Increment Clicked", this);
};
```

[Back to top](#react)

---

## Update State

- React 不能自动 update 的 change Angular 可以 因为 input 等等的变化都是 monkey patch 的 Angular 可以实时监测任何变化
- React 里面我们要使用 setState() 来修改 state 这个过程 react 会自动同步 DOM 和 virtual DOM 保持 view 的一致
- when `setState()` is called, then React will schedule a call to **`render()`** - this is an **asynchronous call**

```jsx
state = {
  count: 0,
};

handleIncrement = (product) => {
  console.log(product);
  this.setState({ count: this.state.value + 1 });
};

render() {
  return (
    ...
  );
}
```

[Back to top](#react)

---

## Passing Event Arguments

- 传入无参箭头函数实现

- In `render()` method, `onclick` should accept **method reference**
- **right way to do this: `onClick={() => { this.handleIncrement(product)}`**

```js
handleIncrement = (product) => {
  console.log(product);
  this.setState({ count: this.state.count + 1 });
};

<button
  onClick={() => {
    this.handleIncrement(product)
  }}
  className="btn btn-secondary btn-sm"
>
  Increment
</button>;
```

[Back to top](#react)

---

## JSX return

JSX 的 return 里应该只能 return 一个 element 如果想 return 两个以上 element 他们就要有一个 parent

```js
return (
  <React.Fragment>
    <p>Showing {movieCount} movies in the database</p>
    <table className="table">
      <thead>
        <tr>...</tr>
      </thead>
      <tbody>...</tbody>
    </table>
  </React.Fragment>
);
```

[Back to top](#react)

---

#
