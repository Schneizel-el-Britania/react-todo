import React from 'react';

import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

import styles from './TaskManager.module.scss';

export default function TaskManager() {
  return (
    <article className={styles.container}>
      <AddTask />
      <FilterTasks />
    </article>
  )
}
