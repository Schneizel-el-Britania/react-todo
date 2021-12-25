import React, { useState } from 'react';
import TaskManager from './TaskManager';
import List from './List';

import styles from './TodoList.module.scss'

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Todo List</h2>
      <TaskManager setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </section>
  )
}
