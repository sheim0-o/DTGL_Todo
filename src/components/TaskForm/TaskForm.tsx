import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/taskSlice';
import styles from './TaskForm.module.scss';
import { Task } from '../../types';

type TaskFormProps = {};

export default function TaskForm({}: TaskFormProps) {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskName.trim() == '') return;

    const newTask: Task = {
      id: Date.now(),
      name: taskName.trim(),
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskName('');
  };

  return (
    <form className={styles['task-form']} onSubmit={handleSubmit}>
      <span className={styles['task-form__span']}>Новая задача</span>
      <div className={styles['task-form__input-form']}>
        <input type="text" value={taskName} onChange={handleInputChange} className={styles['task-form__input']} />
        <button type="submit" className={`${styles['task-form__btn']} button-with-img`}>
          <img className="img" src="./src/assets/plus.svg" style={{ fill: 'white' }} />
          <span className="text">Добавить</span>
        </button>
      </div>
    </form>
  );
}
