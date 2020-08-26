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
