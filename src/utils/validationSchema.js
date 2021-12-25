import * as Yup from 'yup';

export const TODO_SCHEMA = Yup.object({
  addTask: Yup.string().matches(/^.{0,24}$/, 'Must be shorter').required(),
});