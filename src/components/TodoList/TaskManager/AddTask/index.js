import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { TODO_SCHEMA } from '../../../../utils/validationSchema';
import styles from './AddTask.module.scss';

const initialValues = {
  newTask: "",
}

export default function AddTask(props) {
  const onSubmit = (item, formikBab) => {
    props.setTasks((tasks) => ([
      ...tasks,
      {
        value: item.newTask,
        checked: false,
      },
    ]));
  formikBab.resetForm();
}

return (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={TODO_SCHEMA}>
    <Form className={styles.formContainer}>
      <label>
        <Field name="newTask" className={styles.inputTask} />
        <ErrorMessage name="newTask" component='div' className={styles.error} />
      </label>
      <button type="submit" className={styles.addBox} >
        <AddBoxIcon />
      </button>
    </Form>
  </Formik>
)
}
