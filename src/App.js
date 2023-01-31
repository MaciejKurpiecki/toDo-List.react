import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import { useState } from 'react';

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejsc na react", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id)
    );
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };
  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  };
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
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

export default App;
