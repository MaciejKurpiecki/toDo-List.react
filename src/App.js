import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import TasksApp from "./features/tasks/TasksApp";
import TaskPage from "./features/tasks/Tasks/TaskPage.js" 
import Author from "./features/autor/Author";



export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/autor">
            Autor
          </Link>
        </li>
      </ul>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksApp />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);