const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9, 0);

now.setFullYear(2017);

let d1 = now.toDateString();
console.log(d1);

let d2 = now.toTimeString();
console.log(d2);

// 通常用ISO版本
let d3 = now.toISOString();
console.log(d3);
