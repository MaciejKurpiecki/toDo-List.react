import { StyledList, StyledItem, StyledDoneButton, StyledRemoveButton, StyledTask } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone } from '../tasksSlice';

const Tasks = ({ removeTask }) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <StyledDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </StyledDoneButton>
                    <StyledRemoveButton
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </StyledRemoveButton>
                    <StyledTask
                        done={task.done}
                    >
                        {task.content}
                    </StyledTask>
                </StyledItem>
            ))}
        </StyledList>
    );
}

export default Tasks;