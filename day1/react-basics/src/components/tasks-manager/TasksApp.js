import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TasksApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn react basics', completed: true },
    { id: 2, text: 'Learn react state', completed: false },
    { id: 3, text: 'Learn react routing', completed: false },
    { id: 4, text: 'Learn react props', completed: true },
  ]);

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((t) => t.id !== id);
    // set the state
    setTasks(remainingTasks); // this triggers the rerender of the component
  };

  const tasksJsx = tasks.map((t) => (
    <TaskItem key={t.id} task={t} deleteTask={deleteTask} />
  ));

  return (
    <>
      <h3>Task Manager App</h3>
      <hr />

      <p className='lead'>Here are your tasks:</p>
      <div className='list-group'>{tasksJsx}</div>
    </>
  );
};

export default TasksApp;
