import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { TODO_SCHEMA } from '../../../../utils/validationSchema';
import styles from './AddTask.module.scss';

const initialValues = {
  addTask: "",
}

export default function AddTask() {

  const onSubmit = (values, formikBab) => {
    console.log('values:', values);
    formikBab.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={TODO_SCHEMA}>
      <Form className={styles.formContainer}>
        <label>
          <Field name="addTask" className={styles.inputTask} />
          <ErrorMessage name="addTask" component='div' className={styles.error} />
        </label>
        <button type="submit" className={styles.addBox} >
          <AddBoxIcon />
        </button>
      </Form>
    </Formik>
  )
}
