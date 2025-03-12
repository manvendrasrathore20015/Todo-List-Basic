import { useState } from "react";
import taskIcon from "./../../assets/taskIcon.png";
import addIcon from "./../../assets/addIcon.png";
import clearTaskIcon from "./../../assets/clearTaskIcon.png";
import "./TaskManager.css";

const TaskManager = ({ addNewTask, clearAllTasks }) => {
  const [inputVal, setInputVal] = useState("");

  const addTask = () => {
    if (inputVal.length) {
      addNewTask(inputVal);
      setInputVal("");
    }
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
            value={inputVal}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            onChange={(e) => setInputVal(e.target.value)} />
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
};

export default TaskManager;
