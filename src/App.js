import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import All from "./pages/All";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { HashRouter,Route, Switch, Redirect } from "react-router-dom";
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
    <HashRouter basename='/'>
    <div className="App">
      <Navbar />
      <div id="cont" ref={ref}>
        {showLogin && <Login />}
        {showSignup && <SignUp />}
      </div>
      <Switch>
        <Route path="/miamyum" exact>
          <Home />
        </Route>
        <Route path="/miamyum/all">
          {loggedin && <All />}
          {!loggedin && <Redirect to="/"/>}
        </Route>
        <Route path="/miamyum/details/:itemId">
          {loggedin && <Details />}
          {!loggedin && <Redirect to="/" />}
        </Route>
        <Route path="*">
        <Redirect to="/miamyum"/>
        </Route>
      </Switch>
    </div>
    </HashRouter>
  );
}
export default App;
