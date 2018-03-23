function createTodoItem(title) {

  const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

  const label = document.createElement('label');
    label.innerText = title;
    label.className= 'title';

  const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.placeholder = "Коментировать";
    editInput.className = 'textfield';



  const deleteButton = document.createElement('button');
    deleteButton.innerText = "Изменить";
    deleteButton.className = "edit";

  const editButton = document.createElement('button');
    editButton.innerText = "Удалить"
    editButton.className = "delete";

  const listItem = document.createElement('li');
    listItem.className = "todoItem";


/* Добавляем все елементы в <li> */

/*
<li class="todoItem">
  <input type="checkbox" class="checkbox">
    <label class="title">hi</label>
    <input type="text" class="textfield">
    <button class="delete">Удалить</button>
    <button>
    </button>
  </li>

  Пример вывода.HTML
*/
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    //  console.log(listItem);

    bindEvents(listItem);

    return listItem;
};
function bindEvents(todoItem) {
  const checkbox = todoItem.querySelector('.checkbox');
  const editButton = todoItem.querySelector('button.edit');
  const deleteButton = todoItem.querySelector('button.delete');

  checkbox.addEventListener('change', toggleTodoItem);
  deleteButton.addEventListener('click', deleteTodoItem);
  editButton.addEventListener('click', editTodoItem);

};

/*Ограничение отправки формы на сервер*/
function addTodoItem(event) {
  event.preventDefault();

  if ( addInput.value === '') return alert("Необходимо ввести название задачи");
/*Значение которое вводит пользователь*/
  const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';

};

function toggleTodoItem({target}) {
  console.log({target});
  console.log({target});
};

function editTodoItem() {
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');

};

function deleteTodoItem() {

};

const todoForm = document.getElementById('todo-form'); //Доступ к елементу form
const addInput = document.getElementById('add-input'); //Доступ к елементу input
const todoList = document.getElementById('todo-list'); //Доступ к елементу todo-list
const todoItems = document.querySelectorAll('todo-item'); //Доступ к елементу к самой задече


todoForm.addEventListener('submit', addTodoItem);
