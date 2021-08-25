import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <form className={classes.formContainer}>
          <div className={classes.title}>Sign Up</div>
          <label htmlFor="username" />
          <input id="username" type="text" placeholder='Username'/>
          <label htmlFor="email" />
          <input id="email" type="email" placeholder='Email'/>
          <label htmlFor="password" />
          <input id="password" type="password" placeholder='Password'/>
          <div className={classes.bottomContainer}>
            <div className={classes.buttondiv}></div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;