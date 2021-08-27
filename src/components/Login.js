import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = (props) => {
  const dispatch = useDispatch();
  const data = {
    email: "",
    password: "",
  };
  const [enterredData, setEnterredData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const enterredDataHandler = (e) => {
    e.preventDefault();
    setEnterredData({ ...enterredData, [e.target.id]: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    const enterredEmail = enterredData.email;
    const enterredPassword = enterredData.password;

    setIsLoading(true);
    fetch(process.env.REACT_APP_LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: enterredEmail,
        password: enterredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        dispatch({ type: "login" });
        dispatch({type: 'close'})
        setShowMessage(false);
      } else {
        return res.json().then((data) => {
          setShowMessage(true);
        });
      }
    });
  };
  const signupHandler = () => {
    dispatch({ type: "showSignup" });
  };

  return (
    <div className={classes.card}>
      <form onSubmit={formHandler} className={classes.formContainer}>
        <div className={classes.title}>Login</div>
        {showMessage && (
          <div className={classes.errMsg}>Incorrect email or password.</div>
        )}
        <label htmlFor="email" />
        <input
          id="email"
          type="email"
          placeholder="Email"
          onChange={enterredDataHandler}
        />
        <label htmlFor="password" />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={enterredDataHandler}
        />
        <div className={classes.bottomContainer}>
          <div className={classes.createAccount} onClick={signupHandler}>
            or create an account.
          </div>
          {!isLoading && (
            <button type="submit" className={classes.buttons}>
              Login
            </button>
          )}
          {isLoading && <p>Loading...</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
