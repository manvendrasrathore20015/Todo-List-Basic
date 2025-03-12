import { useState } from "react";
import TaskManager from "../TaskManager/TaskManager";
import UpcomingTasks from "../UpcomingTasks/UpcomingTasks";
import "./TodoList.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const addNewTask = (task) => {
        const index = tasks.indexOf(task);
        if (index === -1) {
            setTasks([...tasks, task]);
        } else {
            alert("Task already created !!");
        }
    };
    const clearAllTasks = () => {
        if (tasks.length)
            setTasks([]);
        else
            alert("There are no tasks to clear!!");
    }

    const clearSelectedTask = (task) => {
        const updatedTasks = tasks.filter((t) => t !== task);
        setTasks(updatedTasks);
    }

    return (
        <div className="task-container">
            <TaskManager addNewTask={(task) => addNewTask(task)} clearAllTasks={clearAllTasks} />
            <UpcomingTasks tasks={tasks} clearSelectedTask={clearSelectedTask} />
        </div>
    )
}

export default TodoList;
