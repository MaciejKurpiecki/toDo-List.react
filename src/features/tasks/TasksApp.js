import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Container from '../../common/Container';
import Search from './Search';

function TasksApp() {

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section title="Wyszukiwarka"
        body={<Search />} />
      <Section
        title="Lista zadań"
        body={<Tasks />}
        extraHeaderContent={<Buttons />} />
    </Container>
  );
}

export default TasksApp;
