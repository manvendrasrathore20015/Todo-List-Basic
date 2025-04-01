import { createContext, useMemo, useReducer } from "react";
import TaskManager from "../TaskManager/TaskManager";
import UpcomingTasks from "../UpcomingTasks/UpcomingTasks";
import taskReducer from "../../utils/taskReducer";
import "./TodoList.css";

export const TaskContext = createContext(null);

const TodoList = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <div className="task-container">
            <TaskContext.Provider value={useMemo(() => ({ tasks, dispatch }), [tasks])}>
                <TaskManager />
                <UpcomingTasks />
            </TaskContext.Provider>
        </div>
    )
}

export default TodoList;
