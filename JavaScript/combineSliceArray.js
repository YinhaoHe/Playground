const first = [1, 2, 3];
const second = [4, 5, 6];

// 拼接数组
const combined = first.concat(second);
console.log(combined);

// Slice数组 index 2 到 4
const slice = combined.slice(2, 4);
console.log(slice);

// Slice 数组 从2 到最后
combined.slice(2);

// Slices 直接copy一个数组
combined.slice();

// 当slice 时 如果被slice的
// 是primitive value -> copy一个新的
// 是referenc type -> copy他的reference 任何修改都会同时影响原来的值 和 slice后的值
