function main() {
    const template = document.querySelector("template");
    const new_div_temp = document.createElement("div");
    const shadow = document.getElementById("shadow").attachShadow({ mode: "open" })

    const headers = ['h1', 'h2', 'h3', 'h4', 'h5'];

    headers.reverse().forEach((element, index) => {
        const new_h = document.createElement(element); 

        let letter = "Hello".slice(0, index + 1);
        new_h.innerHTML = letter;  

        new_div_temp.appendChild(new_h)
    });

    template.content.appendChild(new_div_temp);
    shadow.appendChild(template.content);
}

window.onload = () => { main() }