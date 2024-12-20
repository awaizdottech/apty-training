document.getElementById("level1").addEventListener(
  "click",
  () => {
    alert("level 1 - capture phase");
    console.log("level 1 - capture phase");
  },
  true // using capture phase
);

document.getElementById("level2").addEventListener(
  "click",
  () => {
    alert("level 2 - bubble phase");
    console.log("level 2 - bubble phase");
  },
  false // using bubble phase (default)
);

document.getElementById("level3").addEventListener(
  "click",
  () => {
    alert("level 3 - target phase");
    console.log("level 3 - target phase");
  },
  false // using bubble phase (default)
);
