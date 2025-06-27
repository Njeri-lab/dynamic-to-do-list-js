document.addEventListener('DOMContentLoader', function() {

    let tasks = []; //creates an empty array to hold the list of tasks in JS memory, which can later be saved to or loaded from Local storage

    function loadTasks () {
        const storedTasks = localStorage.getItem('tasks'); 
        //loacalstorage - built-in browser object that lets you store data that persists even aer the page is refreshed
        //getitem('tasks') - retrieves data that was previously saved in tasks --- (tasks is the key)
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); 

            tasks.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }
    function addTask () {
            const taskText = taskInput.value.trim();
            if (taskText.trim() !== "") {
                tasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                const li = document.createElement("li");
                li.textContent = taskText;

                const removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("remove-btn");

                removeBtn.onclick = function () {
                    li.remove();
                }; 

                li.appendChild(removeBtn);
                taskList.appendChild("li");

                taskInput.value = "";
            } else {
                alert ("Please enter a task");
            }
        }

    const addButton = document.getElementById('add-task-btn');

    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');

    

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event){
        if (event.key === 'Enter') {
            addTask();
        }
    })
});

document.addEventListener('DOMContentLoaded', addTask);