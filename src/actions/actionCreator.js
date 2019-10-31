import { ADD_TASK, DEL_TASK, COMPLETE_TASK, CHANGE_FILTER } from "./constants";

export const addTask = (id, text, completed) => ({
  type: ADD_TASK,
  id,
  text,
  completed
});

export const delTask = id => ({
  type: DEL_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
