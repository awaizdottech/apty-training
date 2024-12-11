function getCompletedTasks(tasks) {
  if (!Array.isArray(tasks)) {
    return { error: "Input must be an array of objects." };
  }

  const completedTaskNames = tasks
    .filter((task) => task.completed === true)
    .map((task) => task.task);

  return { completedTaskNames };
}

function displayCompletedTasks() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const tasks = JSON.parse(inputArray);

    if (
      !Array.isArray(tasks) ||
      !tasks.every(
        (task) =>
          typeof task.task === "string" && typeof task.completed === "boolean"
      )
    ) {
      throw new Error(
        "input must be an array of objects with 'task' (string) and 'completed' (boolean) properties."
      );
    }

    const { completedTaskNames, error } = getCompletedTasks(tasks);

    if (error) {
      throw new Error(error);
    }

    document.getElementById(
      "output"
    ).innerText = `Completed Tasks: ${JSON.stringify(completedTaskNames)}`;
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error.message}`;
  }
}
