import React, { useContext, useRef } from "react";
import taskIcon from "./../../assets/taskIcon.png";
import addIcon from "./../../assets/addIcon.png";
import clearTaskIcon from "./../../assets/clearTaskIcon.png";
import "./TaskManager.css";
import { TaskContext } from "../TodoList/TodoList";

const TaskManager = React.memo(() => {
  const inputRef = useRef("");
  const { tasks, dispatch } = useContext(TaskContext);

  const addTask = () => {
    const inputValue = inputRef.current.value;
    if (inputValue.length) {
      const index = tasks.indexOf(inputValue);
      if (index === -1) {
        dispatch({ type: "ADD_TASK", payload: inputValue })
      } else {
        alert("Task already created !!");
      }
      inputRef.current.value = "";
    }
  }

  const clearAllTasks = () => {
    if (tasks.length)
      dispatch({ type: "DELETE_ALL_TASK" })
    else
      alert("There are no tasks to clear!!");
  }

  return (
    <div className="task-manager-container">
      <div className="add-task-container">
        <header className="add-task-header">
          <img id="task-icon" src={taskIcon} alt="Add Task" />
          <h2>Add Task</h2>
        </header>
        <div className="add-task-section">
          <input
            id="add-task-input"
            placeholder="Enter task name"
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <img
            onClick={addTask}
            id="add-task-subicon"
            src={addIcon}
            alt="Add Task Icon"
          />
        </div>
      </div>

      <div className="clear-task-container">
        <header className="add-task-header">
          <img id="task-icon" src={clearTaskIcon} alt="Add Task" />
          <h2>Clear Tasks</h2>
        </header>
        <button id="clear-task-btn" onClick={clearAllTasks}>Clear all upcoming tasks</button>
      </div>
    </div>
  );
});

export default TaskManager;
