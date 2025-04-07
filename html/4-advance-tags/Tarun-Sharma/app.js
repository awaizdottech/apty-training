const template = document.getElementsByTagName("template");
const shadow = document.getElementById("shadow-dom").attachShadow({ mode: "open" });

shadow.appendChild(template[0].content)

//took help of my teammate & google to write this piece of code
