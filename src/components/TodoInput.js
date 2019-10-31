import React from "react";
import PropTypes from "prop-types";

import "./style/Input.css";

const TodoInput = ({ value, onChange, onSubmit }) => (
  <div className="input-wrap">
    <form onSubmit={onSubmit}>
      <input
        className="todo-input"
        placeholder="Add new task"
        onChange={onChange}
        value={value}
      />
      <button>Add</button>
    </form>
  </div>
);

TodoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onSubmit: PropTypes.func
};

export default TodoInput;
