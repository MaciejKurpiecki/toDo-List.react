import { StyledList, StyledItem, StyledDoneButton, StyledRemoveButton, StyledTask } from './styled';
import { useSelector } from 'react-redux';
import { selectTasks } from '../tasksSlice';

const Tasks = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <StyledDoneButton
                        onClick={() => toggleTaskDone(task.id)}
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