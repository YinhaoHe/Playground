const person = {
  firstName: "Yinhao",
  lastName: "He",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    // defensive programming

    if (typeof value !== "string") {
      throw new Error("Value is not a string.");
    }

    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Please enter first name and last name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  console.log(e);
}

console.log(person.fullName);
