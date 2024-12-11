function testForLoop(arr) {
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
  const endTime = performance.now();
  return endTime - startTime;
}

function testForOfLoop(arr) {
  const startTime = performance.now();
  for (const element of arr) {
  }
  const endTime = performance.now();
  return endTime - startTime;
}

function testForEach(arr) {
  const startTime = performance.now();
  arr.forEach((element) => {});
  const endTime = performance.now();
  return endTime - startTime;
}

function comparePerformance() {
  const arraySize = 1000000;
  const testArray = new Array(arraySize).fill(0);

  const forLoopTime = testForLoop(testArray);
  const forOfTime = testForOfLoop(testArray);
  const forEachTime = testForEach(testArray);

  document.getElementById(
    "forLoopResult"
  ).innerText = `for loop time: ${forLoopTime.toFixed(4)} ms`;
  document.getElementById(
    "forOfResult"
  ).innerText = `for...of loop time: ${forOfTime.toFixed(4)} ms`;
  document.getElementById(
    "forEachResult"
  ).innerText = `forEach loop time: ${forEachTime.toFixed(4)} ms`;

  let bestMethod = "for loop";
  if (forOfTime < forLoopTime && forOfTime < forEachTime) {
    bestMethod = "for...of loop";
  } else if (forEachTime < forLoopTime && forEachTime < forOfTime) {
    bestMethod = "forEach loop";
  }

  document.getElementById(
    "analysis"
  ).innerText = `based on performance, the best method for iteration in this case is: ${bestMethod}`;
}
