import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import All from "./pages/All";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

function App() {
  const showLogin = useSelector((state) => state.showLoginComp);
  const showSignup = useSelector((state) => state.showSignupComp);
  const loggedin = useSelector((state) => state.loggedin);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showLogin && !ref.current.contains(e.target)) {
        dispatch({ type: "close" });
      }
      if (showSignup && !ref.current.contains(e.target)) {
        dispatch({ type: "close" });
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showLogin, showSignup, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div id="cont" ref={ref}>
        {showLogin && <Login />}
        {showSignup && <SignUp />}
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/all">
          {loggedin && <All />}
          {!loggedin && <Redirect to="/" />}
        </Route>
        <Route path="/details">
          {loggedin && <Details />}
          {!loggedin && <Redirect to="/" />}
        </Route>
        <Route path="*">
        <Redirect to="/"/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
