// This is obj not variable
let person = {
  name: "Charles",
  age: 24,
};
// 访问
// Dot notation
person.name = "Yinhao";
// Bracket notation
let selection = "name";
person[selection] = "Yinhao";

let selectedColors = ["red", "green"];
selectedColors[2] = 666;

console.log(selectedColors.length);

// 算术符号
let x = 10;
let y = 3;

let z = x ** y; // x 的 y次幂

// 比较符号
// Strict Equality
x === 1;
// Lose Equality
x == 1;
"1" == 1;
// 不等于
x !== 1;

let points = 90;
let type = points > 100 ? "gold" : "sliver";

// Falsy
// underfined, null, 0, false, '', NaN
// Anything that is not Falsy -> Truthy

// Bitwise OR
1 | 2; // equal 3
// Bitwise AND
1 & 2; // euqal 4

// for in loop 遍历obj中的properties
for (let key in person) {
  console.log(key, person[key]);
}

// for of loop 遍历数组
const colors = ["red", "yellow", "blue"];
for (let color of colors) {
  console.log(color);
}
