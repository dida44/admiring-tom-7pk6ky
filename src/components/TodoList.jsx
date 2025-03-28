import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </div>
    );
};

export default TodoList;
