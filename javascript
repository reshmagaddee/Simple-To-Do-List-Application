function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskInput.value}
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
}
