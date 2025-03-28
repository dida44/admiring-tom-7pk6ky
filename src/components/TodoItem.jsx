const TodoItem = ({ task, toggleTaskCompletion }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
        </div>
    );
};

export default TodoItem;
