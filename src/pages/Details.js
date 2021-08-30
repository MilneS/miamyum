import classes from "./Details.module.css";
import { useParams } from "react-router";

const Details = () => {
  const params=useParams();
  console.log(params.itemId)
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.img}>
          {/* img */}
        </div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>
            {/* title */}
          </div>
          <div className={classes.descr}>
            {/* descr */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
