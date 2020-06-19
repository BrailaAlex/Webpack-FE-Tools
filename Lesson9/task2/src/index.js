import initTodoListHandlers from './list/todoList';
import renderTasks from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      renderTasks(tasksList);
    });
  initTodoListHandlers();
});

function onStorageChange(event) {
  if (event.key === 'tasksList') renderTasks();
}

window.addEventListener('storage', onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
