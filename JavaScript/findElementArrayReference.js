const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// Arrow function
const course = courses.find((course) => {
  return course.name === "a";
});

console.log(course);

const courseIndex = courses.findIndex((course) => {
  return course.name === "a";
});

console.log(courseIndex);
