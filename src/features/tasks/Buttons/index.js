import { StyledButton, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { togglehideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone } from "../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    if (!areTasksEmpty) {
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
                disabled={isEveryTaskDone}
            >
                Ukończ wszystkie
            </StyledButton>
        </ButtonsContainer>
    )
};
export default Buttons;