import React from 'react';
import styles from './FilterTasks.module.scss'

const filterState = ['All', 'In progress', 'Done'];

export default function FilterTasks() {
  return (
    <div class={styles.container}>
      <select className={styles.filter}>{
        filterState.map((value, index) =>
          <option value={index} key={index}>{value}</option>
        )
      }</select>
    </div>
  )
}
