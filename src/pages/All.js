import classes from "./All.module.css";
import AllCard from "../components/AllCard";
import foodData from "../components/foodData";

const All = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardsContainer}>
          {foodData.map((item, index) => {
            return (
              <AllCard
                key={index}
                title={item.title}
                link={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default All;
