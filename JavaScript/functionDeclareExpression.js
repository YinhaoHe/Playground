// Function Declaration
// 永远使用这个 因为用expression方式会导致在没有定义函数之前无法调用

function walk() {
  console.log("walk");
}

// Function Expression

let run = function () {
  console.log("run");
};

let run1 = function walker() {
  console.log("run");
};

let move = run;
run();
move();
