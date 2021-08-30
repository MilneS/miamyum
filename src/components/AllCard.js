import classes from "./AllCard.module.css";

const AllCard = (props) => {
  const link=props.link;


  return (
    <div className={classes.container} >
      <div className={classes.card}>
        <img className={classes.allimg} src={link} alt="" />
          <div className={classes.after} />
      </div>
    </div>
  );
};

export default AllCard;
