import { useState } from "react";

const TaskInput = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText(""); 
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter your task..."
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default TaskInput;
