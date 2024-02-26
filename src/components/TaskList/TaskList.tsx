import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.scss';
import { TaskState } from '../../store';
import { Filter, Task } from '../../types';

type TaskListProps = {};

export default function TaskList({}: TaskListProps) {
  const { tasks, filter, sortOption } = useSelector((state: TaskState) => state.tasks);

  // get and set to list filter
  let filteredTasks: Task[] = tasks;

  switch (filter) {
    case Filter.Active:
      filteredTasks = tasks.filter((task: Task) => !task.completed);
      break;
    case Filter.Completed:
      filteredTasks = tasks.filter((task: Task) => task.completed);
      break;
  }

  // get and set to list sort
  const sortedTasks = [...filteredTasks];

  if (sortOption === 'name') {
    sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedTasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  }

  return (
    <ul className={styles['task-list']}>
      {sortedTasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
