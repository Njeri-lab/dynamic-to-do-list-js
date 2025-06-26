document.addEventListener('DOMContentLoader', function() {
    const addButton = document.getElementById('add-task-btn');

    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');

    function addTask () {
        const taskText = taskInput.value.trim();
        if (taskText.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            removeBtn.onclick = function () {
                li.remove();
            }; 

            taskList.appendChild(removeBtn);
            taskList.appendChild("li");

            taskInput.value = "";
        } else {
            alert ("Please enter a task");
        }
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (){
        if (event.key === 'Enter') {
            addTask();
        }
    })
});

document.addEventListener('DOMContentLoaded', addTask);