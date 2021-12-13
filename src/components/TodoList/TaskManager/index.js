import React from 'react';

import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

export default function TaskManager() {
  return (
    <article>
      <AddTask />
      <FilterTasks />
    </article>
  )
}
