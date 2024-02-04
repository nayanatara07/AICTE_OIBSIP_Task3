document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("new-task-input");
    const newTaskSubmit = document.getElementById("new-task-submit");
    const taskList = document.getElementById("tasks");
  
    newTaskSubmit.addEventListener("click", function (event) {
      event.preventDefault();
      const taskText = newTaskInput.value.trim();
      if (taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.innerHTML = `
          <div class="content">
            <input type="text" class="text" value="${taskText}" readonly />
          </div>
          <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        `;
        taskList.appendChild(taskDiv);
        newTaskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete")) {
        const taskDiv = e.target.closest(".task");
        if (taskDiv) {
          taskList.removeChild(taskDiv);
        }
      } else if (e.target.classList.contains("edit")) {
        const textInput = e.target.closest(".task").querySelector("input.text");
        textInput.readOnly = !textInput.readOnly;
        if (!textInput.readOnly) {
          textInput.focus();
        }
      }
    });
  });
  