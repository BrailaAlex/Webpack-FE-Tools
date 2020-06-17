import { renderTasks } from './renderer.js';
import { updateTask, getTasksList, getTaskById } from './tasksGateway.js'

function onToggleTask(event) {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');
    if (!isCheckbox) return;
    const taskId = event.target.dataset.id;
    getTaskById(taskId)
        .then(task => {
            console.log(task);
            const { id, finishDate, done } = task;
            task.done = event.target.checked;
            task[finishDate] = done ? new Date().toISOString() : null;
            updateTask(id, task)
                .then(() => {
                    renderTasks();
                });
        });
};

export { onToggleTask };

//1. Prepare Data
//2. Update data in db
//3. Read new data from server
//4. Save new data to front-end storage
//5. Update UI based on new data