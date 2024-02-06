//script.js

//Array to store tasks
const tasks = [];

//Creates task objects
function Task(description, priority) {
    this.description = description;
    this.completed = false;
    this.priority = priority;
}

//Function to add new tasks
function addTask() {
    const description = document.getElementById('taskInput').value;
    const priority = document.getElementById('priority').value;

    if (description.trim() === '') {
        alert('Please enter a task description.');
        return;
    }

    const task = new Task(description, priority);
    tasks.push(task);

    displayTasks();

    document.getElementById('taskInput').value = '';
    document.getElementById('priority').value = 'low';
}

//Function to mark a task as complete or incomplete
function markAsComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to display tasks in the UI
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.description} (Priority: ${task.priority})`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => markAsComplete(index);

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        // Apply the 'completed' class directly to the text, not the whole li
        listItem.style.textDecoration = task.completed ? 'line-through' : 'none';

        taskList.appendChild(listItem);
    });
}

displayTasks();


//Function to delete a task 
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
