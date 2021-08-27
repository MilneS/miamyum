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

  const sendData = async (enterredEmail, enterredPassword) => {
    const response = await fetch(process.env.REACT_APP_LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: enterredEmail,
        password: enterredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setIsLoading(false);
    if (response.ok) {
      setShowMessage(false);
      !!data.idToken && dispatch({ type: "login" });
      dispatch({ type: "close" });
      return data;
      // console.log(data);
    } else {
      setShowMessage(true);
      let errorMessage = "Authentication failed!";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      throw new Error(errorMessage);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    const enterredEmail = enterredData.email;
    const enterredPassword = enterredData.password;
    setIsLoading(true);
    sendData(enterredEmail, enterredPassword)
      .then((data) => {
        dispatch({type:"idToken", token:data.idToken});
      })
      .catch((err) => console.log(err.message));
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
        {!showMessage && (
          <div className={classes.cred}>
            Email: test@test.com <br /> Password: testest
          </div>
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
