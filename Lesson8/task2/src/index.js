import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/renderer.js';
import { getTasksList } from './list/tasksGateway.js';
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(tasksList => {
            renderTasks(tasksList);
        })
    initTodoListHandlers();
});

function onStorageChange(event) {
    if (event.key === 'tasksList') renderTasks();
};

window.addEventListener('storage', onStorageChange);

//1. Get data from server
//2. Save data to front-end storage