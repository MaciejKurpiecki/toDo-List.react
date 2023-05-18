import { StyledList, StyledItem, StyledDoneButton, StyledRemoveButton, StyledTask } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from '../tasksSlice';
import { Link } from 'react-router-dom';

const Tasks = () => {

    const tasks = useSelector(selectTasks);
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