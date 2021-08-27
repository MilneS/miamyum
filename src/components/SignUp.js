import classes from "./SignUp.module.css";
import { useState } from "react";

const SignUp = (props) => {
  const data = {
    username: "",
    email: "",
    password: "",
  };
  const [enterredData, setEnterredData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const enterredDataHandler = (e) => {
    e.preventDefault();
    setEnterredData({ ...enterredData, [e.target.id]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();

    const enterredUsername = enterredData.username;
    const enterredEmail = enterredData.email;
    const enterredPassword = enterredData.password;

    setIsLoading(true);
    fetch(process.env.REACT_APP_SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        username: enterredUsername,
        email: enterredEmail,
        password: enterredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        //
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          alert(errorMessage);
        });
      }
    });
  };
  return (
    <div className={classes.card}>
      <form onSubmit={formHandler} className={classes.formContainer}>
        <div className={classes.title}>Sign Up</div>
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
