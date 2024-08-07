import "./App.css";

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import Login from "./components/pages/login";
import Second from "./components/pages/Second";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/second">Login</NavLink>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/second" component={Second} />
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
