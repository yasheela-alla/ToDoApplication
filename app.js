let todos = [];

function addTodo() {
    const input = document.getElementById('todo-input');
    if (input.value.trim() !== '') {
        todos.push(input.value.trim());
        input.value = '';
        renderTodos();
    }
}


function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;

        // Create a remove button for each todo
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.color = 'red';
        removeBtn.onclick = function () {
            removeTodo(index);
        }; // Attach click handler to remove todo
        listItem.appendChild(removeBtn);

        list.appendChild(listItem);
    });
}