// cant use internal_p as a variable name here as its able to access the internal_p from internal js script & rewriting that if used

const external_p = document.createElement("p");
external_p.innerText = "external js ...";
document.getElementById("inline_internal_external").appendChild(external_p);
