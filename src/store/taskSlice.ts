import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, Filter, Sort } from '../types';

interface TaskState {
  tasks: Task[];
  filter: Filter;
  sortOption: Sort;
}

const initialState: TaskState = {
  tasks: [],
  filter: Filter.All,
  sortOption: Sort.Name,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },

    setSort: (state, action: PayloadAction<Sort>) => {
      state.sortOption = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, setFilter, setSort } = taskSlice.actions;
export default taskSlice.reducer;
