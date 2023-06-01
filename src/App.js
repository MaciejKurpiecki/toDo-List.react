import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksApp from "./features/tasks/TasksApp";
import TaskPage from "./features/tasks/Tasks/TaskPage.js"
import Author from "./features/author/Author";
import { StyledNavLink, StyledNav,StyledListItem } from "./styled";



export default () => (
  <HashRouter>
    <nav>
    <StyledNav>
      <ul>
        <StyledListItem>
          <StyledNavLink to="/zadania">
            Zadania
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/autor">
            O autorze
          </StyledNavLink>
        </StyledListItem>
      </ul>
      </StyledNav>
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