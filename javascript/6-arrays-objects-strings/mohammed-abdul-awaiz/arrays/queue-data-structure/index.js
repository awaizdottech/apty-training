class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.unshift(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty.";
    }
    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  next() {
    if (this.isEmpty()) {
      return "queue is empty.";
    }
    return this.queue[this.queue.length - 1];
  }
}

function initializeQueue() {
  const inputArray = document.getElementById("inputArray").value;
  if (!inputArray.trim())
    return (document.getElementById("output").innerHTML =
      "please enter a list of numbers");

  let elements;
  try {
    elements = JSON.parse(inputArray);
  } catch (error) {
    return (document.getElementById("output").innerHTML =
      "please enter valid nested array");
  }
  const queue = new Queue();

  elements.forEach((element) => queue.enqueue(element));

  const results = [];
  results.push(`initial queue: ${JSON.stringify(queue.queue)}`);
  results.push(`dequeued element: ${queue.dequeue()}`);
  results.push(`queue after dequeue: ${JSON.stringify(queue.queue)}`);
  results.push(`next element: ${queue.next()}`);
  results.push(`is queue empty? ${queue.isEmpty()}`);

  document.getElementById("output").innerHTML = results.join("<br>");
}
