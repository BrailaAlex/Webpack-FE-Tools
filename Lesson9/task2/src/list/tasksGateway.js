const baseUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/tasks';

const mapTasks = (tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id }));

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => mapTasks(tasks));

export const getTaskById = (taskId) => fetch(`${baseUrl}/${taskId}`)
  .then((response) => response.json());

export const creatTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updateTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updateTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
