import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import TasksApp from "./features/tasks/TasksApp";

export default () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <TasksApp />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);