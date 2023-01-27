import './style.css';

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (!tasks.length) {
        return null;
    }
    return (
        <div className="allTasksButtons">
            <button className="button">
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