const input = document.getElementById("todoInput");
const form = document.getElementById("todoForm");
const list = document.getElementById("todoList");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    
    const delBtn = document.createElement("button");
    delBtn.type="button";
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    
    li.append(span, delBtn);
    list.appendChild(li);
    
    input.value = "";
    input.focus();
});

list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li) {
        return;
    }
    else if (event.target.classList.contains("delete-btn")) {
        li.remove();
    }
    else if (event.target.tagName === "SPAN") {
        li.classList.toggle("completed");
    }
});