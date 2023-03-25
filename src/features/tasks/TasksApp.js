import { useSelector } from 'react-redux';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';
import { selectTasks } from './tasksSlice';


function TasksApp() {

  const { tasks } = useSelector(selectTasks);

  const {
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        } />
    </Container>
  );
}

export default TasksApp;
