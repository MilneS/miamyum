import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
