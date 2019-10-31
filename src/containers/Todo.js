import React from "react";
import { connect } from "react-redux";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

import {
  addTask,
  delTask,
  completeTask,
  changeFilter
} from "../actions/actionCreator";

class Todo extends React.Component {
  state = {
    taskText: ""
  };

  handleInputChange = e => {
    this.setState({
      taskText: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    const { taskText } = this.state;
    if (taskText.length > 3) {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);
      this.state({
        taskText: ""
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case "completed":
        return tasks.filter(task => task.completed);
      case "active":
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = tasks => tasks.filter(task => !task.completed).length;

  render() {
    const { taskText } = this.state;
    const { tasks, delTask, completeTask, filters, changeFilter } = this.props;
    const isTaskExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrap">
        <TodoInput
          onSubmit={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTaskExist && (
          <TodoList
            tasksList={filteredTasks}
            delTask={delTask}
            completeTask={completeTask}
          />
        )}
        {isTaskExist && (
          <Footer
            amount={taskCounter}
            changeFilter={changeFilter}
            activeFilter={filters}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks,
    filters: state.filters
  }),
  { addTask, delTask, completeTask, changeFilter }
)(Todo);
