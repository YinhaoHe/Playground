const numbers = [1, 2, -1, 3];

const allPositive = numbers.every((value) => {
  return value >= 0;
});

const atLeastOnePositive = numbers.some((value) => {
  return value >= 0;
});

console.log(allPositive, atLeastOnePositive);
