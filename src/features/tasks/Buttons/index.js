import { StyledButton, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    togglehideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    fetchExampleTasks,
    selectLoading
}
    from "../tasksSlice";

export const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
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

export const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <>

            {<> <StyledButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading ? true : false}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </StyledButton>
            </>}
        </>
    )
};