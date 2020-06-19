import renderTasks from './renderer';
import { getTasksList, deleteTask } from './tasksGateway';

export default function onDeleteTask() {
  const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;

  const nearestInputId = event.target.parentNode.firstElementChild.dataset.id;
  deleteTask(nearestInputId)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
}
