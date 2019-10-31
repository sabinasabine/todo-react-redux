import { ADD_TASK, DEL_TASK, COMPLETE_TASK } from "../actions/constants";

const todosData = [
  {
    id: 1,
    text: "Take out the trash",
    completed: true
  },
  {
    id: 2,
    text: "Grocery shopping",
    completed: false
  },
  {
    id: 3,
    text: "Clean gecko tank",
    completed: false
  },
  {
    id: 4,
    text: "Mow lawn",
    completed: true
  },
  {
    id: 5,
    text: "Catch up on Arrested Development",
    completed: false
  }
];

const tasks = (state = todosData, { id, text, completed, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          completed
        }
      ];
    case DEL_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
