import './style.css';

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className = {
                    `list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`
            }>
                <button className="list__doneButton">
            {task.done ? "✔" : ""}
            </button> 
            <button className="list__removeButton">
            🗑
            </button>          
            <span className= {`list__task${task.done ? " list__item--done" : ""}`}>
            {task.content}
            </span>
            </li>
        ))}
    </ul>
);

export default Tasks;