import classes from "./Login.module.css";


const Login = (props) => {
  
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <form className={classes.formContainer}>
          <div className={classes.title}>Login</div>
          <div className={classes.errMsg}>Incorrect email or password.</div>
          <label htmlFor="email" />
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password" />
          <input id="password" type="password" placeholder="Password" />
          <div className={classes.bottomContainer}>
            <div className={classes.createAccount}>or create an account.</div>
            <button className={classes.buttons}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
