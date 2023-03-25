import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Container from '../../common/Container';
import { useState } from 'react';
import { useTasks } from '../../useTasks';

function TasksApp() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const {
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks();

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

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
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            setAllDone={setAllDone}
            toggleHideDoneTasks={toggleHideDoneTasks}
          />
        } />
    </Container>
  );
}

export default TasksApp;
