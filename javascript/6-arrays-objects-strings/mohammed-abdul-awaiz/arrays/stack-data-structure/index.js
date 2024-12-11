class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty.";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  top() {
    if (this.isEmpty()) {
      return "stack is empty.";
    }
    return this.stack[this.stack.length - 1];
  }
}

function initializeStack() {
  const inputArray = document.getElementById("inputArray").value;
  console.log(Boolean(inputArray.trim()));

  if (!inputArray.trim())
    return (document.getElementById("output").innerHTML =
      "please enter an array of numbers");

  let elements;
  try {
    elements = JSON.parse(inputArray);
  } catch (error) {
    return (document.getElementById("output").innerHTML =
      "please enter valid nested array");
  }
  const stack = new Stack();

  elements.forEach((element) => stack.push(element));

  const results = [];
  results.push(`initial stack: ${JSON.stringify(stack.stack)}`);
  results.push(`top element: ${stack.top()}`);
  results.push(`popped slement: ${stack.pop()}`);
  results.push(`stack after pop: ${JSON.stringify(stack.stack)}`);
  results.push(`is stack empty? ${stack.isEmpty()}`);

  document.getElementById("output").innerHTML = results.join("<br>");
}
