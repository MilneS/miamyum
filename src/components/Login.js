import classes from "./Login.module.css";
import {useDispatch } from "react-redux";


const Login = (props) => {
  const dispatch=useDispatch()
const signupHandler=()=>{
  dispatch({type:'showSignup'})
}
  
  return (
      <div className={classes.card}>
        <form className={classes.formContainer}>
          <div className={classes.title}>Login</div>
          <div className={classes.errMsg}>Incorrect email or password.</div>
          <label htmlFor="email" />
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password" />
          <input id="password" type="password" placeholder="Password" />
          <div className={classes.bottomContainer}>
            <div className={classes.createAccount} onClick={signupHandler}>or create an account.</div>
            <button className={classes.buttons}>Login</button>
          </div>
        </form>
      </div>
  );
};

export default Login;
