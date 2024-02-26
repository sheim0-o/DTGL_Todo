import { useDispatch } from 'react-redux';
import { Task } from '../../types';
import { removeTask, toggleTask } from '../../store/taskSlice';
import styles from './TaskItem.module.scss';

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <li className={styles['task-item']}>
      <div className={styles['task-item__task']}>
        <div className={styles['task__checkbox']}>
          <input type="checkbox" id={'task-' + task.id} checked={task.completed} onChange={handleToggle} />
          <span className={styles['task__checkbox-mark']}>&#x2714;</span>
        </div>

        <label
          htmlFor={'task-' + task.id}
          className={`${styles['task__task-name']} ${task.completed ? styles['task__task-name_completed'] : ''}`}
        >
          {task.name}
        </label>
      </div>

      <button onClick={handleRemove} className={`${styles['task-item__btn']} button-with-img`}>
        <img className="img" src="./src/assets/delete.svg" style={{ fill: 'white' }} />
      </button>
    </li>
  );
}
