import './style.css';

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={
                    `list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`
                }>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__doneButton">
                    {task.done ? "✔" : ""}
                </button>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__removeButton">
                    🗑
                </button>
                <span className={`list__task${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
            </li>
        ))}
    </ul>
);

export default Tasks;