import showTasks from './showTasks.js';
import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';
import setIndex from './index.js';

const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeCompletedTasks;