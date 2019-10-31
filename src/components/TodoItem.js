import React from "react";
import PropTypes from "prop-types";

const completedStyle = {
  fontStyle: "italic",
  color: "#cdcdcd",
  textDecoration: "line-through"
};

const TodoItem = ({ text, completed, delTask, id, completeTask }) => (
  <li className="todo-item">
    <div className="text">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => completeTask(id)}
      />
      <span
        style={completed ? completedStyle : null}
        className={completed ? "completed text" : "text"}
      >
        {text}
      </span>
    </div>
    <button onClick={() => delTask(id)}>X</button>
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  delTask: PropTypes.func,
  id: PropTypes.number
};

TodoItem.defaultProps = {
  text: "",
  completed: false,
  delTask: () => {},
  id: 0
};

export default TodoItem;
