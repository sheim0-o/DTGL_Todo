import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../store/taskSlice';
import styles from './SortDropdown.module.scss';
import { TaskState } from '../../store';
import { Sort } from '../../types';

type SortDropdownProps = {};

export default function SortDropdown({}: SortDropdownProps) {
  const dispatch = useDispatch();
  const sortOption = useSelector((state: TaskState) => state.tasks.sortOption);

  const handleSortChange = (newSortOption: string) => {
    dispatch(setSort(newSortOption as Sort));
  };

  return (
    <div className={styles['sort-block']}>
      <span className={styles['sort-block__sort-hint']}>Сортировка</span>

      <select onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className={styles['sort-block__dropdown']}>
        <img className="img" src="./src/assets/down-arrow.svg" style={{ fill: 'white' }} />
        <option value="name">Наименование</option>
        <option value="status">Статус</option>
      </select>
    </div>
  );
}
