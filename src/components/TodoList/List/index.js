import React from 'react';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './List.module.scss';
import { FILTER_ALL, FILTER_DONE, FILTER_IN_PROGRESS } from '../constants';

export default function List(props) {

  const deleteTask = (index) => props.setTasks((tasks) =>
    tasks.filter((_, thisIndex) => thisIndex !== index));

  const setChecked = (index) => props.setTasks((tasks) => {
    const newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks.splice(index, 1, {
      value: tasks[index].value,
      checked: !tasks[index].checked
    });
    return newTasks;
  });

  return (
    <ul className={styles.list}>
      {props.tasks.filter(({ checked }) =>
        (props.filter === FILTER_ALL) ||
        (props.filter === FILTER_DONE && checked) ||
        (props.filter === FILTER_IN_PROGRESS && !checked)
      ).map(({ value, checked }, index) =>
        <li key={index} className={checked ? styles.checked : null}>
          {value}
          <div>
            <button className={styles.checkBtn} onClick={() => setChecked(index)}>
              <CheckRoundedIcon />
            </button>
            <button className={styles.deleteBtn} onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </button>
          </div>
        </li>
      )}
    </ul>
  )
}
