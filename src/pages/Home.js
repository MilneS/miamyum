import classes from "./Home.module.css";
import foodData from "../components/foodData";


const Home = () => {
  const pic= foodData[2].img
  return (
    <div className={classes.container}>
      <p className={classes.title}>
        Welcome to Miamyum's <br />
        photo gallery
      </p>
      <div className={classes.card}>
        <div className={classes.lastPost}>
          <img className={classes.picstyle} src={pic} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Home;
