import classes from "./Details.module.css";
import { useParams } from "react-router";
import foodData from "../components/foodData";
import NewComment from "../components/NewComment";

const Details = () => {
  const params = useParams();
  const item = foodData.find((item) => item.id === params.itemId);
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.imgcontainer}>
          <img className={classes.img} src={item.img} alt="" />
        </div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>{item.title}</div>
          <div className={classes.descr}>
            {item.description}
            <NewComment />
            <NewComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
