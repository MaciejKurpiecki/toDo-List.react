import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksApp from "./features/tasks/TasksApp";
import TaskPage from "./features/tasks/Tasks/TaskPage.js"
import Author from "./features/autor/Author";
import { StyledNavLink } from "./styled";



export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">
            Autor
          </StyledNavLink>
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