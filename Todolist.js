// create a to do list app capable of storing your to do in local storage add an option to create delete and access all the toddlers try to make ui as good as possible
const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FFFFD1', '#D4F8E8', '#B5EAD7', '#C7CEEA', '#FFFAE3'];
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

let currentFolder = 'work';

const taskFolders = {
    work: [],
    personal: [],
    shopping: []
};
function addTask() {
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    taskFolders[currentFolder].push(taskText);

    renderTasks();
    input.value = '';
}
function renderTasks() {
    todoList.innerHTML = '';

    taskFolders[currentFolder].forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">X</button>
    `;
        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskFolders[currentFolder].splice(index, 1);
            renderTasks();
        });
        todoList.appendChild(li);
    });
}
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', () => {
        currentFolder = folder.getAttribute('data-folder');
        renderTasks();
    });
});
function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText === '') {
        alert('Please enter a note.');
        return;
    }

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    // Assign a random color from the array to each new note
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    noteDiv.style.backgroundColor = randomColor;

    noteDiv.textContent = noteText;
    noteList.appendChild(noteDiv);
    noteInput.value = '';
}
// Event listener for Add button
addButton.addEventListener('click', addTask);
addNoteButton.addEventListener('click', addNote);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter')  addTask();
    
});