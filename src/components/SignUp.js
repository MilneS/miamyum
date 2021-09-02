import classes from "./SignUp.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = {
    username: "",
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

  const sendData = async (
    enterredUsername,
    enterredEmail,
    enterredPassword
  ) => {
    const response = await fetch(process.env.REACT_APP_SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        displayName: enterredUsername,
        email: enterredEmail,
        password: enterredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setIsLoading(false);
    if (response.ok) {
      dispatch({ type: "getUserId", localId: data.localId });
      localStorage.setItem("userName", data.displayName);
      !!data.idToken && dispatch({ type: "login" });
      dispatch({ type: "close" });
      return data;
    } else {
      setShowMessage(true);
      let errorMessage = "Authentication failed!";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
      }
      throw new Error(errorMessage);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const enterredUsername = enterredData.username;
    const enterredEmail = enterredData.email;
    const enterredPassword = enterredData.password;
    setIsLoading(true);

    sendData(enterredUsername, enterredEmail, enterredPassword)
      .then((data) => {
        dispatch({ type: "idToken", token: data.idToken });
        localStorage.setItem("token", data.idToken);
        history.replace("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={classes.card}>
      <form onSubmit={formHandler} className={classes.formContainer}>
        <div className={classes.title}>Sign Up</div>
        {showMessage && (
          <div className={classes.errMsg}>Use a valid email, or login.</div>
        )}
        <label htmlFor="username" />
        <input
          id="username"
          type="text"
          placeholder="Username"
          onChange={enterredDataHandler}
        />
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
          <div className={classes.buttondiv}></div>
          {!isLoading && <button className={classes.buttons}>Sign Up</button>}
          {isLoading && <p>Loading...</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
