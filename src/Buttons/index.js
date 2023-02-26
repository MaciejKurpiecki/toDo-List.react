import { StyledButtons, StyledAllTasksButtons } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => {
    if (!tasks.length) {
        return null;
    }
    return (
        <StyledAllTasksButtons>
            <StyledButtons
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </StyledButtons>
            <StyledButtons
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButtons>
        </StyledAllTasksButtons>

    )
};
export default Buttons;