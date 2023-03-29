import { StyledButton, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, togglehideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (!tasks.length) {
        return null;
    }
    return (
        <ButtonsContainer>
            <StyledButton
                onClick={() => dispatch(togglehideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </StyledButton>
            <StyledButton
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </StyledButton>
        </ButtonsContainer>
    )
};
export default Buttons;