const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Lade die gespeicherten Aufgaben aus dem Local Storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Rendere die gespeicherten Aufgaben
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Füge eine neue Aufgabe hinzu
function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
  }
}

renderTasks();
