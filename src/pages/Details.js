import classes from "./Details.module.css";

const Details = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.img}>img</div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>Title</div>
          <div className={classes.description}>description</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
