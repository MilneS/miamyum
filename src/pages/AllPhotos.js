import classes from "./AllPhotos.module.css";
import AllCard from "../components/AllCard";
import foodData from "../utilities/foodData";
import { Link } from "react-router-dom";

const All = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardsContainer}>
          {foodData.map((item, index) => {
            return (
              <Link to={`/photogallery/details/${item.id}`} key={index}>
              <AllCard
                link={item.img}
                item={item}
              /></Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default All;
