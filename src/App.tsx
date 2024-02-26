import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import SortDropdown from './components/Dropdown/SortDropdown';
import './App.scss';

export default function App() {
  return (
    <div className="container">
      <h1>Simple TODO</h1>
      <TaskForm />
      <div className="container__list-of-tasks">
        <h2>Список задач</h2>
        <div className="container__list-of-tasks-blocks">
          <TaskList />
          <div className="list-of-tasks__filters-block">
            <TaskFilter />
            <SortDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
