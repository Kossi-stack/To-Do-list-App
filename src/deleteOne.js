import showTasks from './showTasks.js';
import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';
import setIndex from './index.js';

const deleteTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default deleteTodo;