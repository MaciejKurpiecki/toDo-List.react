import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';

function TasksApp() {

  const {
    removeTask,
  } = useTasks();

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons />
        } />
    </Container>
  );
}

export default TasksApp;
