import classes from "./Details.module.css";

const Details = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.img}>img</div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>Title title title</div>
          <div className={classes.descr}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
