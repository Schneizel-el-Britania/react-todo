import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import styles from './AddTask.module.scss';

export default function AddTask() {
  return (
    <form className={styles.formContainer}>
      <input type="text" className={styles.inputTask}/>
      <AddBoxIcon className={styles.addBox}/>
    </form>
  )
}
