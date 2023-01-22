import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';

const tasks = [
  { id: 1, content: "przejsc na react", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <form>
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section title="Lista zadań" 
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      </form>
    </Container>
  );
}

export default App;
