import React from 'react';
import TaskManager from './TaskManager';

import styles from './TodoList.module.scss'

export default function TodoList() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Todo List</h2>
      <TaskManager />
    </section>
  )
}
