import { useState, useEffect, useMemo } from "react";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.isCompleted;
    if (filter === "Completed") return task.isCompleted;
  });

  const remainingcount = tasks.filter((task) => !task.isCompleted).length;

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <div>
        {remainingcount} task{remainingcount !== 1 ? "s" : ""} left
      </div>
    </div>
  );
};

export default App;
