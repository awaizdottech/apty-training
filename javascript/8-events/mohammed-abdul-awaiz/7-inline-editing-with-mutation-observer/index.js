const editableDiv = document.getElementById("editableDiv");
const editableContent = document.getElementById("editableContent");
let value = "click here to edit me";
let observer;

function makeEditable() {
  const textarea = document.createElement("textarea");

  textarea.value = value;

  textarea.id = "editableContent";

  editableDiv.innerHTML = "";
  editableDiv.appendChild(textarea);
  textarea.focus();

  textarea.addEventListener("blur", saveContent);
}

function saveContent() {
  const textarea = document.getElementById("editableContent");

  const newContent = textarea.value.trim();
  value = newContent;
  editableDiv.innerHTML = `
                <span id="editableContent">${newContent}</span>
                <span class="pencil-icon">✏️</span>
            `;
}

function observeMutations() {
  observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        const hasTextarea = document.getElementById("editableTextarea");
        if (!hasTextarea) {
          editableDiv.addEventListener("click", makeEditable);
        }
      }
    }
  });

  observer.observe(editableDiv, { childList: true, subtree: true });
}

editableDiv.addEventListener("click", makeEditable);

observeMutations();
