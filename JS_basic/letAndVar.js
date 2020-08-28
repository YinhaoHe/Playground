function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
  // 会报错 因为 let i仅仅在for loop中可用
}

function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
  // 不会报错 因为var i 在start() 函数中可用
}
