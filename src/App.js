import Form from './Form';
import Tasks from './Tasks';

const tasks = [
  { id: 1, content: "przejsc na react", done: false },
  { id: 2, content: "zjeść obiad", done: false },
];

const hideDoneTasks = true;

function App() {
  return (
    <main>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <form>
        <div className="form__container">
          <h2>Dodaj nowe zadanie</h2>
        </div>
        <Form />
        <div>
          <div className="form__container">
            <h2 className="form__header--tasksList">
              <span>Lista zadań</span>
              <span className="form__allTasksButtons">
              </span>
            </h2>
          </div>
          <div className="form__container form__container--list">
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;
