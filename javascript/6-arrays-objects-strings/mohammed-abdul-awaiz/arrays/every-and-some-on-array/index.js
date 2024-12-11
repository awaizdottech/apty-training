function checkStudentScores(students) {
  if (!Array.isArray(students)) {
    return { error: "Input must be an array of student objects." };
  }

  const allPassed = students.every((student) => student.score > 35);
  const someFailed = students.some((student) => student.score <= 35);

  if (allPassed) {
    return {
      message: "All Students Passed",
      sortedStudents: students.sort((a, b) => b.score - a.score),
    };
  } else if (someFailed) {
    return {
      message: "Some Students Failed",
      sortedStudents: students.sort((a, b) => b.score - a.score),
    };
  }

  return { error: "unexpected condition." };
}

function displayStudentScores() {
  const inputArray = document.getElementById("inputArray").value;

  try {
    const students = JSON.parse(inputArray);

    if (
      !Array.isArray(students) ||
      !students.every(
        (student) =>
          typeof student.name === "string" && typeof student.score === "number"
      )
    ) {
      throw new Error(
        "input must be an array of objects with 'name' (string) and 'score' (number) properties."
      );
    }

    const { message, sortedStudents, error } = checkStudentScores(students);

    if (error) {
      throw new Error(error);
    }

    document.getElementById("output").innerHTML = `
                    <p>${message}</p>
                    <p>sorted scores: ${JSON.stringify(sortedStudents)}</p>
                `;
  } catch (error) {
    document.getElementById("output").innerText = `error: ${error.message}`;
  }
}
