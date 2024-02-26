import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/taskSlice';
import styles from './TaskFilter.module.scss';
import { TaskState } from '../../store';
import { Filter } from '../../types';

type TaskFilterProps = {};

export default function TaskFilter({}: TaskFilterProps) {
  const dispatch = useDispatch();
  const filter = useSelector((state: TaskState) => state.tasks.filter);

  const handleFilterChange = (newFilter: Filter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className={styles['filter-block']}>
      <span className={styles['filter-block__status-hint']}>Статус</span>

      <div className={styles['filter-block__status']}>
        <input
          type="radio"
          id="all"
          name="status"
          value={Filter.Completed}
          onChange={() => handleFilterChange(Filter.All)}
          checked={filter === Filter.All}
        />
        <label htmlFor="all">Все</label>
      </div>
      <div className={styles['filter-block__status']}>
        <input
          type="radio"
          id="active"
          name="status"
          value={Filter.Completed}
          onChange={() => handleFilterChange(Filter.Active)}
          checked={filter === Filter.Active}
        />
        <label htmlFor="active">Активные</label>
      </div>
      <div className={styles['filter-block__status']}>
        <input
          type="radio"
          id="completed"
          name="status"
          value={Filter.Completed}
          onChange={() => handleFilterChange(Filter.Completed)}
          checked={filter === Filter.Completed}
        />
        <label htmlFor="completed">Завершенные</label>
      </div>
    </div>
  );
}
