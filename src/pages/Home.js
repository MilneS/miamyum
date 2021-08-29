import classes from "./Home.module.css";


const Home = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>
        Welcome to Miamyum's <br />
        photo gallery
      </p>
      <div className={classes.card}>
        <div className={classes.lastPost}>
        </div>
      </div>
    </div>
  );
};

export default Home;
