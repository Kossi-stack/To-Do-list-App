/* eslint no-unused-vars: 0 no-undef: 0 */
import _ from 'lodash';
import './style.css';
import completeTask from './complete.js';

const todoList = [
  {
    description: 'Get ready by 7am to start Microverse',
    completed: false,
    index: 1,
  },
  {
    description: 'Go on break at 11am',
    completed: false,
    index: 2,
  },
  {
    description: 'Join Stanp up team at 4pm',
    completed: false,
    index: 3,
  },
];

const listContainer = document.getElementById('todo-lists');
const SetLocalStorage = (lists) => {
  localStorage.setItem('myTasks', JSON.stringify(lists));
};

const getTasksFromLocalStorage = () => JSON.parse(localStorage.getItem('myTasks'));
const showTasks = () => {
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const list = ` <li class="task" id="${tasks[i].index}" draggable="true">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label class="form-label">${tasks[i].description}</label>
    </div>
    <button class="ellipsis"><i class="fas fa-ellipsis-v fa-xs"></i></button>
    <button class="delete"><i class='fas fa-trash-alt'></i></button>
  </li>`;

    listContainer.innerHTML += list;
  }
  const box = document.querySelectorAll('.box');
  for (let j = 0; j < box.length; j += 1) {
    box[j].addEventListener('change', (event) => {
      completeTask(event.target, tasks[j]);
      SetLocalStorage(tasks);
    });
  }
};
const label = document.querySelectorAll('label');
label.forEach((item) => {
  item.addEventListener('dblclick', () => {
    item.setAttribute('contenteditable', 'true');
  });

  item.addEventListener('focus', () => {
    const last = item.parentElement.parentElement.lastElementChild;
    last.style.display = 'block';
    item.parentElement.parentElement.style.backgroundColor = '#dadadc';

    const ellipsis = item.parentElement.parentElement.lastElementChild.previousElementSibling;
    ellipsis.style.display = 'none';
  });

  item.addEventListener('blur', () => {
    const last = item.parentElement.parentElement.lastElementChild;
    last.style.display = 'none';
    item.parentElement.parentElement.style.backgroundColor = '#fff';
    const ellipsis = item.parentElement.parentElement.lastElementChild.previousElementSibling;
    ellipsis.style.display = 'block';
  });
});

window.onload = () => {
  const getTodo = getTasksFromLocalStorage();

  if (getTodo === null) {
    SetLocalStorage(todoList);
  }
  showTasks();
};
