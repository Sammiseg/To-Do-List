// Get elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const todoList = document.getElementById('todo-list');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" />
    <span>${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(li);
  taskInput.value = '';
}

// Clear all tasks
function clearAll() {
  todoList.innerHTML = '';
}

// Handle list item actions
function handleListAction(e) {
  const target = e.target;
  const li = target.closest('li');

  if (target.type === 'checkbox') {
    li.classList.toggle('completed');
  } else if (target.classList.contains('delete-btn')) {
    li.remove();
  } else if (target.classList.contains('edit-btn')) {
    const span = li.querySelector('span');
    const editBtn = target;
    if (editBtn.textContent === 'Edit') {
      span.contentEditable = true;
      span.focus();
      editBtn.textContent = 'Save';
      editBtn.classList.remove('edit-btn');
      editBtn.classList.add('save-btn');
    } else {
      span.contentEditable = false;
      editBtn.textContent = 'Edit';
      editBtn.classList.remove('save-btn');
      editBtn.classList.add('edit-btn');
    }
  }
}

// Event listeners
addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearAll);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
todoList.addEventListener('click', handleListAction);
todoList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.tagName === 'SPAN') {
    e.preventDefault();
    const editBtn = e.target.closest('li').querySelector('.save-btn');
    if (editBtn) editBtn.click();
  }
});
