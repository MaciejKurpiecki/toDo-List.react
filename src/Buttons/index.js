import './style.css';

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks }) => {
    if (!tasks.length) {
        return null;
    }
    return (
        <div className="allTasksButtons">
            <button
                onClick={toggleHideDoneTasks}
                className="button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>

    )
};
export default Buttons;