class Person {
  constructor() {
    this.name = "";
    this.age = 0;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  greet() {
    return `Hello, I am ${this.name}, ${this.age} years old.`;
  }
}

document
  .getElementById("person-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const person = new Person().setName(name).setAge(age);
    const greeting = person.greet();

    document.getElementById("output").textContent = greeting;
  });
