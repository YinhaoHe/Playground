const numbers = [1, -1, 2, 3];

// Chaining
const filtered = numbers
  .filter((number) => {
    return number >= 0;
  })
  .map((number) => ({
    value: number,
  }));

// const item = filtered.map((number) => {
//   return { value: number };
// });

// const item = filtered.map((number) => ({
//   value: number,
// }));

// const html = "<ul>" + item.join("") + "</ul>";
console.log(filtered);
