import { StyledButton, ButtonsContainer} from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, setAllDone }) => {
    if (!tasks.length) {
        return null;
    }
    return (
        <ButtonsContainer>
            <StyledButton
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </StyledButton>
            <StyledButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButton>
        </ButtonsContainer>

    )
};
export default Buttons;