const numbers = [2, 3, 1];
// 排序
numbers.sort();

// 反序
numbers.reverse();

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

console.log(
  courses.sort((a, b) => {
    // a < b return -1
    // a > b return 1
    // a === b return 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
);
