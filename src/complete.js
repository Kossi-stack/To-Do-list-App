const completeTask = (event, task) => {
  if (event.target.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

export default completeTask;