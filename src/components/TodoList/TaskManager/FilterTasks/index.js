import React from 'react';
import { FILTER_STATE } from '../../constants';
import styles from './FilterTasks.module.scss'

export default function FilterTasks(props) {
  const handleFilter = (event) => props.setFilter(event.target.value);
  return (
    <div className={styles.container}>
      <select className={styles.filter} onChange={handleFilter}>{
        FILTER_STATE.map((_, index) =>
          <option value={FILTER_STATE[index]} key={index}>{FILTER_STATE[index]}</option>
        )
      }</select>
    </div>
  )
}
