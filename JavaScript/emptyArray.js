// Method 1
// 如果有别的reference到原来的array array不会被真正的清除
let numbers = [1, 2, 3, 4];
numbers = [];

// Method 2 BEST
numbers.length = 0;

// Method 3
numbers.splice(0, numbers.length);

// Method 4
while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);
