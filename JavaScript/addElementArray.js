const numbers = [3, 4];

// Add to the End
numbers.push(5, 6);

// Add num to the Beginning
numbers.unshift(1, 2);

// Add num to the middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);
