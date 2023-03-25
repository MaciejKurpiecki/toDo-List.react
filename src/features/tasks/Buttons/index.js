import { StyledButton, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDoneTasks } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (!tasks.length) {
        return null;
    }
    return (
        <ButtonsContainer>
            <StyledButton
                onClick={() => dispatch(toggleHideDoneTasks())}
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