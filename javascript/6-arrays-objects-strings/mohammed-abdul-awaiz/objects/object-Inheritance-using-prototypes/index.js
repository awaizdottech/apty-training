function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, ${this.name}!`;
};

function Employee(name, job) {
  Person.call(this, name);
  this.job = job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  return `Hello, ${this.name} the ${this.job}!`;
};

function displayResult() {
  const person = new Person("John");
  const employee = new Employee("John", "Developer");

  document.getElementById(
    "result"
  ).innerHTML = `<strong>Person greet:</strong> ${person.greet()}<br>
<strong>Employee greet:</strong> ${employee.greet()}<br>`;
}
