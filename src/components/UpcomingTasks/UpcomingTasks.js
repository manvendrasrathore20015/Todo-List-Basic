import { useContext } from "react";
import checkIcon from "../../assets/checkIcon.png";
import taskIcon from "../../assets/taskIcon.png";
import { TaskContext } from "../TodoList/TodoList";
import "./UpcomingTasks.css";

const UpcomingTasks = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const clearSelectedTask = (task) => {
    dispatch({ type: "COMPLETE_TASK", payload: task })
  }

  return (
    <div className="upcoming-tasks-container">
      <div className="upcoming-tasks-header">
        <img id="task-icon" src={taskIcon} alt="Add Task" />
        <h2>Upcoming Tasks</h2>
      </div>

      <div className="tasks-list">
        {!tasks.length ? (
          <p className="helper-text">No Tasks Added.</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <div key={index} className="list-element">
                <img
                  id="complete-task-btn"
                  alt="Complete Task Icon"
                  src={checkIcon}
                  onClick={() => clearSelectedTask(task)}
                />
                <li>{task}</li>
              </div>
            ))}
          </ul >
        )}

        {tasks.length > 0 &&
          <p className="helper-text">Select the "Check mark" to finish the task.</p>}
      </div>
    </div>
  );
};

export default UpcomingTasks;
