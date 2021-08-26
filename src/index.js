import _ from 'lodash';
import './style.css';

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


const showTasks = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    const task = todoList[i];
    const list = ` <li class="task" id="${task.index}">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label contenteditable="true">${task.description}</label>
    </div>
    <button type="submit"><i class="fas fa-ellipsis-v fa-xs"></i></button>
  </li>`;

    listContainer.innerHTML += list;
  }
};

window.onload = showTasks;