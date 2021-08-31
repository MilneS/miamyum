import classes from "./Details.module.css";
import { useParams } from "react-router";
import foodData from "../components/foodData";
import Comment from "../components/Comment";
import { useState } from "react";

const Details = () => {
  const [showComments, setShowComments] = useState(false);
  const params = useParams();
  const item = foodData.find((item) => item.id === params.itemId);

  const commentsHandler = (e) => {
    e.preventDefault();
    setShowComments(!showComments);
  };
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.imgcontainer}>
          <img className={classes.img} src={item.img} alt="" />
        </div>
        <div className={classes.itemsContainer}>
          <div className={classes.title}>{item.title}</div>
          <div className={classes.descr}>
            <div>{item.description}</div>
            <div className={classes.commentsContainer}>
              <div className={classes.buttonsContainer}>
                <button
                  className={classes.commButton}
                  onClick={commentsHandler}
                >
                  {!showComments && "Show comments"} {showComments && "Hide"}
                </button>
                {showComments && (
                  <button className={classes.addButton}>Add</button>
                )}
              </div>
              {showComments && (
                <div>
                  <Comment />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
