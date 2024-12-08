function parseJSON(jsonString) {
  try {
    if (typeof jsonString !== "string" || jsonString.trim() === "") {
      throw new Error("Input must be a non-empty string.");
    }

    const parsed = JSON.parse(jsonString);
    return {
      success: true,
      data: parsed,
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        success: false,
        message:
          "Syntax Error: Invalid JSON format. Ensure keys and strings are enclosed in double quotes.",
      };
    }
    return {
      success: false,
      message:
        error.message || "An unexpected error occurred while parsing JSON.",
    };
  }
}

const testCases = [
  '{"key": "value"}',
  '{key: "value"}',
  "",
  123,
  '{"key": value}',
];

testCases.forEach((test) => {
  const result = parseJSON(test);
  if (result.success) {
    document.getElementById("result").innerHTML =
      ("Parsed JSON: ", result.data);
  } else {
    document.getElementById("result").innerHTML = ("Error: ", result.message);
  }
});
