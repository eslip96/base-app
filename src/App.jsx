import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <div>Advance-Nav</div>

      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
