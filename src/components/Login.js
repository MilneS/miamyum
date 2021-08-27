import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import { useState } from "react";

const Login = (props) => {
  const data = {
    email: "",
    password: "",
  };
  const [enterredData, setEnterredData] = useState(data);

  const enterredDataHandler = (e) => {
    e.preventDefault();
    setEnterredData({...enterredData, [e.target.id]: e.target.value})
  };
  const formHandler = (e) => {
    e.preventDefault();
  };
  // console.log(enterredData)

  const dispatch = useDispatch();
  const signupHandler = () => {
    dispatch({ type: "showSignup" });
  };

  return (
    <div className={classes.card}>
      <form onSubmit={formHandler} className={classes.formContainer}>
        <div className={classes.title}>Login</div>
        <div className={classes.errMsg}>Incorrect email or password.</div>
        <label htmlFor="email" />
        <input id="email" type="email" placeholder="Email" onChange={enterredDataHandler}/>
        <label htmlFor="password" />
        <input id="password" type="password" placeholder="Password" onChange={enterredDataHandler}/>
        <div className={classes.bottomContainer}>
          <div className={classes.createAccount} onClick={signupHandler}>
            or create an account.
          </div>
          <button type='submit' className={classes.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
