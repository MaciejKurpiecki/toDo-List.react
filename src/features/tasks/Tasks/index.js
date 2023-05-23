import { StyledList, StyledItem, StyledDoneButton, StyledRemoveButton, StyledTask } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from '../tasksSlice';
import { Link, useLocation } from 'react-router-dom';
import searchQueryParamName from '../searchQueryParamName';

const Tasks = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search).get(searchQueryParamName));

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <StyledDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </StyledDoneButton>
                    <StyledRemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </StyledRemoveButton>
                    <StyledTask
                        done={task.done}
                    >
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </StyledTask>
                </StyledItem>
            ))}
        </StyledList>
    );
}

export default Tasks;