import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import All from "./pages/All";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const showLogin = useSelector((state) => state.showLoginComp);
  const showSignup = useSelector((state) => state.showSignupComp);

  return (
    <div className="App">
      <Navbar />
      {showLogin && <Login />}
      {showSignup && <SignUp />}
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
