import React from 'react';
import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

import styles from './TaskManager.module.scss';

export default function TaskManager(props) {
  return (
    <article className={styles.container}>
      <AddTask setTasks={props.setTasks} />
      <FilterTasks setFilter={props.setFilter} />
    </article>
  )
}
