import { StyledButton, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    togglehideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    fetchExampleTasks
}
    from "../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            <> <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButton>
            </>
            {!areTasksEmpty && <>
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
            </>}
        </ButtonsContainer>
    )
};
export default Buttons;