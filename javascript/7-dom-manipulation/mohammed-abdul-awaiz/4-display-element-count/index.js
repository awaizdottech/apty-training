const allElements = document.querySelectorAll("*");
const tagNames = new Set();

allElements.forEach((element) => {
  tagNames.add(element.tagName.toLowerCase());
});

const ul = document.createElement("ul");
document.querySelector("body").appendChild(ul);

const uniqueTags = Array.from(tagNames);
uniqueTags.forEach((tag) => {
  const number_of_x_tag = document.querySelectorAll(tag);
  const li = document.createElement("li");
  li.innerHTML = `number of ${tag}: ${number_of_x_tag.length}`;
  ul.appendChild(li);
});
