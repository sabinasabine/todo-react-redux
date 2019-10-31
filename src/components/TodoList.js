import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ tasksList, delTask, completeTask }) => (
  <ul className="todoList">
    {tasksList.map(({ id, text, completed }) => (
      <TodoItem
        key={id}
        text={text}
        completed={completed}
        id={id}
        delTask={delTask}
        completeTask={completeTask}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
  delTask: PropTypes.func
};

TodoList.defaultProps = {
  tasksList: [],
  delTask: () => {}
};

export default TodoList;
