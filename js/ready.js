const main = (document => {
  function createTodoItem(title) {

    const checkbox = document.createElement('input');//создаем елемент
      checkbox.type = 'checkbox';// добавляем атрибут
      checkbox.className = 'checkbox';//добавляем класс

    const label = document.createElement('label');
      label.innerText = title;
      label.className= 'title';

    const editInput = document.createElement('input');
      editInput.type = 'text';
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
    /* создаем константы , доступ к соседним елементам*/
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

  /*добавляем свойства елемента*/
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
      /* получаем значение из поля ввода*/

  };

  /*parentNode -- доступ к родительскому елементу*/
  /*
  listItem.classList.toggle('completed'); --
  Добавляем.удаляем класс

  */
  function toggleTodoItem({target}) {
    /*parentNode -- доступ к родительскому елементу*/

    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
  };

  function editTodoItem () {

    /*Создаем константы , доступ к элементам*/

    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');
  /*проверяем на наличие класса*/
    if(isEditing) {
      /*добавляем текст из поля редактирования*/
      title.innerText = editInput.value;
      this.innerText = 'Изменить';

    } else {
      //сохраняем текст как новое значение задачи
      editInput.value = title.innerText;
      this.innerText = 'Сохранить';
    }

    listItem.classList.toggle('editing');//добавляем класс


  };

  function deleteTodoItem() {
  //удаляем задачу

    const listItem = this.parentNode;
    todoList.removeChild(listItem);

  };
  function load() {
    const data = JSON.parse(localStorage.getItem('todos'));
    return data;
  }

  function save(data) {
    const string  = JSON.stringify(data);
    localStorage.setItem('todos', string);
  }


  const todoForm = document.getElementById('todo-form'); //Доступ к елементу form
  const addInput = document.getElementById('add-input'); //Доступ к елементу input
  const todoList = document.getElementById('todo-list'); //Доступ к елементу todo-list
  const todoItems = document.querySelectorAll('todo-item'); //Доступ к елементу к самой задече

  function main() {

    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));

  }



  todoForm.addEventListener('submit', addTodoItem);
  return main;
})(document);
main();
