import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import All from "./pages/All";
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login/> */}
      <SignUp/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/all">
          <All />
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
