import React, { useState } from 'react';
import TaskManager from './TaskManager';
import List from './List';
import styles from './TodoList.module.scss';
import { FILTER_ALL } from './constants';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(FILTER_ALL);

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Todo List</h2>
      <TaskManager setTasks={setTasks} setFilter={setFilter} />
      <List tasks={tasks} setTasks={setTasks} filter={filter} />
    </section>
  )
}
